// app/api/generate-pdf/route.ts
import { NextResponse } from "next/server";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable, { Styles } from "jspdf-autotable";
import { staticClusters, staticImages } from "@/lib/mockdata";
import { mockResultsData } from "./mockData";

const roomColor: Partial<Styles> = {
  fillColor: [0, 0, 0],
  textColor: [255, 255, 255],
};

const participantColorEven: Partial<Styles> = {
  fillColor: [163, 230, 53],
  textColor: [0, 0, 0],
};

const participantColorOdd: Partial<Styles> = {
  fillColor: [251, 191, 36],
  textColor: [0, 0, 0],
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

    // TODO: fetch data from the API
    // const externalApiUrl = "https://jsonplaceholder.typicode.com/posts";
    // const response = await axios.get(externalApiUrl);
    // const data = response.data;
    const { roomResults, participants } = mockResultsData;

    // initialize jsPDF
    const doc = new jsPDF();
    // const pageWidth = doc.internal.pageSize.getWidth();

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
      body: roomResults.unlocked_images.map((image) => [
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
      body: roomResults.unlocked_filters.map((filter) => [filter]),
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
          score.score.toString() || "undefined",
        ]),
        headStyles: roomColor,
      });
    }

    // New page for each participant
    for (let i = 0; i < participants.length; i++) {
      const readableParticipantNumber = i + 1;

      doc.addPage();
      autoTable(doc, {
        startY: 12,
        head: [
          [
            `Participant: ${participants[i].nickname ?? readableParticipantNumber} - Unlocked images`,
            "Name",
            "Author",
          ],
        ],
        body: participants[i].unlocked_images.map((image) => [
          image,
          staticImages.find((img) => img.id === image)?.title || "Unknown",
          staticImages.find((img) => img.id === image)?.author || "Unknown",
        ]),
        headStyles: i % 2 == 0 ? participantColorEven : participantColorOdd,
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      lastY = (doc as any).lastAutoTable.finalY + 4;
      autoTable(doc, {
        startY: lastY,
        head: [
          [
            `Participant: ${participants[i].nickname ?? readableParticipantNumber} - Unlocked Filters`,
          ],
        ],
        body: participants[i].unlocked_filters.map((filter) => [filter]),
        headStyles: i % 2 == 0 ? participantColorEven : participantColorOdd,
      });

      for (let j = 0; j < participants[i].sessions.length; j++) {
        doc.addPage();
        const readableSessionNumber = j + 1;
        autoTable(doc, {
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
            cluster.score.toString(),
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
              "Image ID",
              "Fragment ID",
              "Liked",
            ],
          ],
          body: participants[i].sessions[j].interactions.map((interaction) => [
            interaction.cluster_id,
            interaction.image_id,
            interaction.fragment_id,
            interaction.liked.toString(),
          ]),
          headStyles: i % 2 == 0 ? participantColorEven : participantColorOdd,
        });

        doc.addPage();
        autoTable(doc, {
          startY: 12,
          head: [
            [
              `${participants[i].nickname ?? readableParticipantNumber} - Session ${readableSessionNumber} - Selfie`,
            ],
          ],
          body: [[`Selfie by ${participants[i].nickname}`]],
          headStyles: i % 2 == 0 ? participantColorEven : participantColorOdd,
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lastY = (doc as any).lastAutoTable.finalY + 10;
        const selfieUrl = `${process.env.NEXT_PUBLIC_API_URL}/api/room/selfie/${participants[i].sessions[j].selfie_id}`;
        const response = await fetch(selfieUrl);
        const blob = await response.blob();
        const base64DataUrl = `data:image/jpeg;base64,${await blobToBase64(blob)}`;
        const pageWidth = doc.internal.pageSize.getWidth();
        const imageWidth = 90;
        const xOffset = (pageWidth - imageWidth) / 2;
        doc.addImage(base64DataUrl, "JPEG", xOffset, lastY, imageWidth, 160);
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
