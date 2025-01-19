// app/api/generate-pdf/route.ts
import { NextResponse } from "next/server";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";
import { staticClusters, staticImages } from "@/lib/mockdata";

type Cluster = {
  cluster_id: string;
  score: number;
};

type Session = {
  session_id: string;
  unlocked_images: string[];
  unlocked_filters: string[];
  scores: Cluster[];
};

type RoomResults = {
  sessions: Session[];
};

type Interaction = {
  cluster_id: string;
  image_id: string;
  fragment_id: string;
  liked: boolean;
};

type Participant = {
  nickname: string;
  sessions: {
    session_id: string;
    interactions: Interaction[];
    clusters: Cluster[];
    unlocked_images: string[];
    unlocked_filters: string[];
    selfie_id: string;
  }[];
};

type Result = {
  roomResults: RoomResults;
  participants: Participant[];
};

const mockResultsData: Result = {
  roomResults: {
    sessions: [
      {
        session_id: "session1",
        unlocked_images: ["d.1", "d.4", "d.5", "f.3", "f.4", "f.5"],
        unlocked_filters: ["filter1", "filter2"],
        scores: [
          { cluster_id: "A", score: 0.1 },
          { cluster_id: "B", score: 0.3 },
          { cluster_id: "C", score: 0.4 },
          { cluster_id: "D", score: 0.2 },
          { cluster_id: "E", score: 0.1 },
          { cluster_id: "F", score: 0.0 },
        ],
      },
      {
        session_id: "session2",
        unlocked_images: ["a.4", "a.4", "c.5", "e.3", "f.4", "f.5"],
        unlocked_filters: ["filter3"],
        scores: [
          { cluster_id: "A", score: 0.1 },
          { cluster_id: "B", score: 0.3 },
          { cluster_id: "C", score: 0.4 },
          { cluster_id: "D", score: 0.2 },
          { cluster_id: "E", score: 0.1 },
          { cluster_id: "F", score: 0.0 },
        ],
      },
    ],
  },
  participants: [
    {
      nickname: "Participant1",
      sessions: [
        {
          session_id: "session1",
          interactions: [
            {
              cluster_id: "A",
              image_id: "a.1",
              fragment_id: "a.1.1",
              liked: true,
            },
            {
              cluster_id: "B",
              image_id: "b.2",
              fragment_id: "b.2.1",
              liked: false,
            },
            {
              cluster_id: "C",
              image_id: "c.3",
              fragment_id: "c.3.1",
              liked: true,
            },
            {
              cluster_id: "D",
              image_id: "d.4",
              fragment_id: "d.4.1",
              liked: false,
            },
            {
              cluster_id: "E",
              image_id: "e.5",
              fragment_id: "e.5.1",
              liked: true,
            },
            {
              cluster_id: "F",
              image_id: "f.6",
              fragment_id: "f.6.1",
              liked: false,
            },
          ],
          clusters: [
            { cluster_id: "A", score: 0.1 },
            { cluster_id: "B", score: 0.5 },
            { cluster_id: "C", score: 0.1 },
            { cluster_id: "D", score: 0.2 },
            { cluster_id: "E", score: 0.1 },
            { cluster_id: "F", score: 0.0 },
          ],
          unlocked_images: ["d.2", "f.4"],
          unlocked_filters: ["filter1"],
          selfie_id: "1c9e536b-0876-463b-b70d-fefd55271a17",
        },
        {
          session_id: "session1",
          interactions: [
            {
              cluster_id: "A",
              image_id: "a.1",
              fragment_id: "a.1.1",
              liked: true,
            },
            {
              cluster_id: "B",
              image_id: "b.2",
              fragment_id: "b.2.1",
              liked: false,
            },
            {
              cluster_id: "C",
              image_id: "c.3",
              fragment_id: "c.3.1",
              liked: true,
            },
            {
              cluster_id: "D",
              image_id: "d.4",
              fragment_id: "d.4.1",
              liked: false,
            },
            {
              cluster_id: "E",
              image_id: "e.5",
              fragment_id: "e.5.1",
              liked: true,
            },
            {
              cluster_id: "F",
              image_id: "f.6",
              fragment_id: "f.6.1",
              liked: false,
            },
          ],
          clusters: [
            { cluster_id: "A", score: 0.1 },
            { cluster_id: "B", score: 0.5 },
            { cluster_id: "C", score: 0.1 },
            { cluster_id: "D", score: 0.2 },
            { cluster_id: "E", score: 0.1 },
            { cluster_id: "F", score: 0.0 },
          ],
          unlocked_images: ["c.5", ".a.4"],
          unlocked_filters: ["filter1"],
          selfie_id: "1c9e536b-0876-463b-b70d-fefd55271a17",
        },
      ],
    },
    {
      nickname: "Participant2",
      sessions: [
        {
          session_id: "session1",
          interactions: [
            {
              cluster_id: "A",
              image_id: "a.1",
              fragment_id: "a.1.1",
              liked: true,
            },
            {
              cluster_id: "B",
              image_id: "b.2",
              fragment_id: "b.2.1",
              liked: false,
            },
            {
              cluster_id: "C",
              image_id: "c.3",
              fragment_id: "c.3.1",
              liked: true,
            },
            {
              cluster_id: "D",
              image_id: "d.4",
              fragment_id: "d.4.1",
              liked: false,
            },
            {
              cluster_id: "E",
              image_id: "e.5",
              fragment_id: "e.5.1",
              liked: true,
            },
            {
              cluster_id: "F",
              image_id: "f.6",
              fragment_id: "f.6.1",
              liked: false,
            },
          ],
          clusters: [
            { cluster_id: "A", score: 0.1 },
            { cluster_id: "B", score: 0.5 },
            { cluster_id: "C", score: 0.1 },
            { cluster_id: "D", score: 0.2 },
            { cluster_id: "E", score: 0.1 },
            { cluster_id: "F", score: 0.0 },
          ],
          unlocked_images: ["e.2", "f.1"],
          unlocked_filters: ["filter1"],
          selfie_id: "1c9e536b-0876-463b-b70d-fefd55271a17",
        },
        {
          session_id: "session1",
          interactions: [
            {
              cluster_id: "A",
              image_id: "a.1",
              fragment_id: "a.1.1",
              liked: true,
            },
            {
              cluster_id: "B",
              image_id: "b.2",
              fragment_id: "b.2.1",
              liked: false,
            },
            {
              cluster_id: "C",
              image_id: "c.3",
              fragment_id: "c.3.1",
              liked: true,
            },
            {
              cluster_id: "D",
              image_id: "d.4",
              fragment_id: "d.4.1",
              liked: false,
            },
            {
              cluster_id: "E",
              image_id: "e.5",
              fragment_id: "e.5.1",
              liked: true,
            },
            {
              cluster_id: "F",
              image_id: "f.6",
              fragment_id: "f.6.1",
              liked: false,
            },
          ],
          clusters: [
            { cluster_id: "A", score: 0.1 },
            { cluster_id: "B", score: 0.5 },
            { cluster_id: "C", score: 0.1 },
            { cluster_id: "D", score: 0.2 },
            { cluster_id: "E", score: 0.1 },
            { cluster_id: "F", score: 0.0 },
          ],
          unlocked_images: ["b.2", "b.5"],
          unlocked_filters: ["filter1"],
          selfie_id: "1c9e536b-0876-463b-b70d-fefd55271a17",
        },
      ],
    },
  ],
};

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
    });

    roomResults.sessions.forEach((session, index) => {
      const readableSessionNumber = index + 1;
      // const footerText = `Risultati sessione ${readableSessionNumber}`;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let lastY = (doc as any).lastAutoTable.finalY + 20;
      autoTable(doc, {
        startY: lastY,
        head: [
          [`Room Session ${readableSessionNumber} Cluster`, "Name", "Score"],
        ],
        body: session.scores.map((score) => [
          score.cluster_id || "undefined",
          staticClusters.find((cluster) => cluster.id === score.cluster_id)
            ?.name || "Unknown",
          score.score.toString() || "undefined",
        ]),
        // foot: [[footerText]],
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      lastY = (doc as any).lastAutoTable.finalY + 4;
      autoTable(doc, {
        startY: lastY,
        head: [
          [
            `Room Session ${readableSessionNumber} Unlocked Images`,
            "Name",
            "Author",
          ],
        ],
        body: session.unlocked_images.map((image) => [
          image,
          staticImages.find((img) => img.id === image)?.title || "Unknown",
          staticImages.find((img) => img.id === image)?.author || "Unknown",
        ]),
        // foot: [[footerText]],
      });

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      lastY = (doc as any).lastAutoTable.finalY + 4;
      autoTable(doc, {
        startY: lastY,
        head: [[`Room Session ${readableSessionNumber} Unlocked Filters`]],
        body: session.unlocked_filters.map((filter) => [filter]),
        // foot: [[footerText]],
      });
    });

    // New page for each participant
    participants.forEach((participant, index) => {
      const readableParticipantNumber = index + 1;

      doc.addPage();
      autoTable(doc, {
        startY: 12,
        head: [["Participant", "Nickname"]],
        body: [[readableParticipantNumber, participant.nickname]],
      });

      participant.sessions.forEach(async (session, sIndex) => {
        doc.addPage();
        const readableSessionNumber = sIndex + 1;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let lastY = (doc as any).lastAutoTable.finalY + 20;
        autoTable(doc, {
          startY: lastY,
          head: [
            [
              `${participant.nickname ?? readableParticipantNumber} - Session ${readableSessionNumber} - Cluster`,
              "Name",
              "Score",
            ],
          ],
          body: session.clusters.map((cluster) => [
            cluster.cluster_id,
            staticClusters.find(
              (staticCluster) => staticCluster.id === cluster.cluster_id,
            )?.name || "Unknown",
            cluster.score.toString(),
          ]),
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lastY = (doc as any).lastAutoTable.finalY + 4;
        autoTable(doc, {
          startY: lastY,
          head: [
            [
              `${participant.nickname ?? readableParticipantNumber} - Session ${readableSessionNumber} - Unlocked images`,
              "Name",
              "Author",
            ],
          ],
          body: session.unlocked_images.map((image) => [
            image,
            staticImages.find((img) => img.id === image)?.title || "Unknown",
            staticImages.find((img) => img.id === image)?.author || "Unknown",
          ]),
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lastY = (doc as any).lastAutoTable.finalY + 4;
        autoTable(doc, {
          startY: lastY,
          head: [
            [
              `${participant.nickname ?? readableParticipantNumber} - Session ${readableSessionNumber} - Unlocked Filters`,
            ],
          ],
          body: session.unlocked_filters.map((filter) => [filter]),
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lastY = (doc as any).lastAutoTable.finalY + 4;
        autoTable(doc, {
          startY: lastY,
          head: [
            [
              `${participant.nickname ?? readableParticipantNumber} - Session ${readableSessionNumber} - Action`,
              "Image ID",
              "Fragment ID",
              "Liked",
            ],
          ],
          body: session.interactions.map((interaction) => [
            interaction.cluster_id,
            interaction.image_id,
            interaction.fragment_id,
            interaction.liked.toString(),
          ]),
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        lastY = (doc as any).lastAutoTable.finalY + 10;
        // TODO: add selfie image to the PDF
      });
    });

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
