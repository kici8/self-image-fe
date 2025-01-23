// app/api/generate-pdf/route.ts
import { exportRoomResults } from "@/lib/api";
import { staticClusters, staticImages } from "@/lib/staticData";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable, { Styles } from "jspdf-autotable";
import { NextResponse } from "next/server";

const roomColor: Partial<Styles> = {
  fillColor: [0, 0, 0],
  textColor: [255, 255, 255],
};

const participantColorEven: Partial<Styles> = {
  fillColor: [40, 48, 135],
  textColor: [255, 255, 255],
};

const participantColorOdd: Partial<Styles> = {
  fillColor: [89, 111, 251],
  textColor: [255, 255, 255],
};

async function blobToBase64(blob: Blob): Promise<string> {
  const arrayBuffer = await blob.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  return buffer.toString("base64");
}

export async function GET(req: Request) {
  try {
    // Get room code from query string
    const { searchParams } = new URL(req.url);
    const room_code = searchParams.get("room_code");

    if (!room_code) {
      return NextResponse.json(
        { error: "Codice stanza mancante" },
        { status: 400 },
      );
    }

    const fetchedRoomResults = await exportRoomResults({ room_code });

    if (fetchedRoomResults.status !== "success") {
      return NextResponse.json(
        { error: "Errore durante il recupero dei risultati" },
        { status: 500 },
      );
    }

    console.log("fetchedRoomResults", fetchedRoomResults.data.participants[0]);
    const { roomResults, participants } = fetchedRoomResults.data;

    // initialize jsPDF
    const doc = new jsPDF();

    autoTable(doc, {
      startY: 12,
      head: [["Room", "Number of Participants", "Date"]],
      body: [[room_code, participants.length, new Date().toLocaleString()]],
      headStyles: roomColor,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lastY = (doc as any).lastAutoTable.finalY + 4;

    autoTable(doc, {
      startY: lastY,
      head: [[`Room Unlocked Images`, "Name", "Author"]],
      body: (roomResults.unlocked_images ?? []).map((image) => [
        image,
        staticImages.find((img) => img.id === image)?.title || "Unknown",
        staticImages.find((img) => img.id === image)?.author || "Unknown",
      ]),
      headStyles: roomColor,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lastY = (doc as any).lastAutoTable.finalY + 4;
    autoTable(doc, {
      startY: lastY,
      head: [[`Room Unlocked Filters`]],
      body: (roomResults.unlocked_filters ?? []).map((filter) => [filter]),
      headStyles: roomColor,
    });

    for (let i = 0; i < roomResults.sessions.length; i++) {
      const readableSessionNumber = i + 1;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      lastY = (doc as any).lastAutoTable.finalY + 4;
      autoTable(doc, {
        startY: lastY,
        head: [
          [`Room Session ${readableSessionNumber} Cluster`, "Name", "Score"],
        ],
        body: roomResults.sessions[i].scores.map((score) => [
          score.cluster_id || "undefined",
          staticClusters.find((cluster) => cluster.id === score.cluster_id)
            ?.name || "Unknown",
          (Math.round(score.score * 100) / 100).toString() || "undefined",
        ]),
        headStyles: roomColor,
      });
    }

    // New page for each participant
    for (let i = 0; i < participants.length; i++) {
      const readableParticipantNumber = i + 1;
      doc.addPage();

      // autoTable(doc, {
      //   startY: 12,
      //   head: [
      //     [
      //       `Participant: ${participants[i].nickname ?? readableParticipantNumber} - Unlocked images`,
      //       "Name",
      //       "Author",
      //     ],
      //   ],
      //   body: (participants[i].unlocked_images ?? []).map((image) => [
      //     image,
      //     staticImages.find((img) => img.id === image)?.title || "Unknown",
      //     staticImages.find((img) => img.id === image)?.author || "Unknown",
      //   ]),
      //   headStyles: i % 2 == 0 ? participantColorEven : participantColorOdd,
      // });

      // TODO: why no unlocked_filters?
      // lastY = (doc as any).lastAutoTable.finalY + 4;
      // autoTable(doc, {
      //   startY: lastY,
      //   head: [
      //     [
      //       `Participant: ${participants[i].nickname ?? readableParticipantNumber} - Unlocked Filters`,
      //     ],
      //   ],
      //   body: (participants[i].unlocked_filters ?? []).map((filter) => [
      //     filter,
      //   ]),
      //   headStyles: i % 2 == 0 ? participantColorEven : participantColorOdd,
      // });

      for (let j = 0; j < participants[i].sessions.length; j++) {
        // TODO: add back lastY if unlocked_images and unlocked_filters are added back
        // lastY = (doc as any).lastAutoTable.finalY + 4;
        const readableSessionNumber = j + 1;
        autoTable(doc, {
          // startY: lastY,
          startY: 12,
          head: [
            [
              `${participants[i].nickname ?? readableParticipantNumber} - Session ${readableSessionNumber} - Cluster`,
              "Name",
              "Score",
            ],
          ],
          body: participants[i].sessions[j].clusters.map((cluster) => [
            cluster.cluster_id,
            staticClusters.find(
              (staticCluster) => staticCluster.id === cluster.cluster_id,
            )?.name || "Unknown",
            (Math.round(cluster.score * 100) / 100).toString(),
          ]),
          headStyles: i % 2 == 0 ? participantColorEven : participantColorOdd,
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lastY = (doc as any).lastAutoTable.finalY + 4;

        autoTable(doc, {
          startY: lastY,
          head: [
            [
              `${participants[i].nickname ?? readableParticipantNumber} - Session ${readableSessionNumber} - Action`,
              "Author",
              "Cluster",
              "Fragment",
              "Liked",
            ],
          ],
          body: participants[i].sessions[j].interactions.map((interaction) => {
            const image = staticImages.find(
              (sImage) => sImage.id == interaction.image_id,
            );
            return [
              image?.title || "No title",
              image?.author || "No author",
              interaction.cluster_id,
              interaction.fragment_id,
              interaction.liked.toString(),
            ];
          }),
          headStyles: i % 2 == 0 ? participantColorEven : participantColorOdd,
          didParseCell: (data) => {
            if (data.column.dataKey === 4 && data.cell.raw === "true") {
              data.cell.styles.fontStyle = "bold";
            }
          },
        });

        // SELFIE
        // TODO: maybe this need to be optimized without await inside the loop
        // the possible solution is to use Promise.all to fetch all the selfies
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lastY = (doc as any).lastAutoTable.finalY + 4;
        const selfieUrl = participants[i].sessions[j].selfie_id
          ? `${process.env.NEXT_PUBLIC_API_URL}/api/room/selfie/${participants[i].sessions[j].selfie_id}`
          : undefined;
        if (selfieUrl) {
          const response = await fetch(selfieUrl);
          const blob = await response.blob();
          const base64DataUrl = `data:image/jpeg;base64,${await blobToBase64(blob)}`;
          const imgHeight = 72;
          const imgWidth = imgHeight * 0.5625;

          autoTable(doc, {
            pageBreak: "avoid",
            rowPageBreak: "avoid",
            startY: lastY,
            head: [
              [
                `${participants[i].nickname ?? readableParticipantNumber} - Session ${readableSessionNumber} - Selfie`,
              ],
            ],
            body: [[""]],
            headStyles: i % 2 == 0 ? participantColorEven : participantColorOdd,
            didParseCell: (data) => {
              if (
                data.section === "body" &&
                data.row.index === 0 &&
                data.column.index === 0
              ) {
                data.cell.styles.minCellHeight = imgHeight + 8;
              }
            },
            didDrawCell: (data) => {
              if (data.section === "body" && data.column.index === 0) {
                const xOffset = data.cell.x + (data.cell.width - imgWidth) / 2;
                const yOffset =
                  data.cell.y + (data.cell.height - imgHeight) / 2;
                doc.addImage(
                  base64DataUrl,
                  "JPEG",
                  xOffset,
                  yOffset,
                  imgWidth,
                  imgHeight,
                );
              }
            },
          });
        } else {
          autoTable(doc, {
            startY: lastY,
            head: [
              [
                `${participants[i].nickname ?? readableParticipantNumber} - Session ${readableSessionNumber} - Selfie`,
              ],
            ],
            body: [["No selfie"]],
            headStyles: i % 2 == 0 ? participantColorEven : participantColorOdd,
          });
        }
      }
    }

    // generate the PDF
    const pdfBlob = doc.output("blob");
    const buffer = Buffer.from(await pdfBlob.arrayBuffer());

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="report.pdf"',
      },
    });
  } catch (error) {
    console.error("Errore durante la generazione del PDF:", error);
    return NextResponse.json(
      { error: "Errore durante la generazione del PDF" },
      { status: 500 },
    );
  }
}
