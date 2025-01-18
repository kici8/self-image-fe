// app/api/generate-pdf/route.ts
import { NextResponse } from "next/server";
import jsPDF from "jspdf";
import "jspdf-autotable";
import autoTable from "jspdf-autotable";
import axios from "axios";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
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

    const externalApiUrl = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(externalApiUrl);
    const data = response.data;

    // initialize jsPDF
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();

    doc.setFontSize(18);
    doc.text(
      `Stanza ${room_code} - ${new Date().toLocaleString()}`,
      pageWidth / 2,
      20,
      { align: "center" },
    );

    // layout of the table
    const tableColumnHeaders = ["ID", "Titolo", "Contenuto"];
    const tableRows = data.map((item: Post) => [
      item.id,
      item.title,
      item.body,
    ]);

    autoTable(doc, {
      head: [tableColumnHeaders],
      body: tableRows,
      startY: 30,
      margin: { top: 10, left: 10, right: 10 },
      theme: "grid",
      styles: { fontSize: 10 },
      headStyles: { fillColor: [22, 160, 133] },
      bodyStyles: { cellPadding: 2 },
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
