import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { Badge } from "@/components/ui/badge";
import { addCountUsed } from "@/lib/data";

const TextToPDF = () => {
    const textPDF = useSelector((state: RootState) => state.slice.textPDF);
    const [isDownload,setIsDownload]=useState(false);
    useEffect(() => {
        if(textPDF.length>0){
              // Buat instance jsPDF
    const doc = new jsPDF();

    // Teks yang ingin ditambahkan ke PDF
    const text = textPDF;
    // Tambahkan teks ke dokumen PDF (x=10, y=10 adalah posisi awal teks)
    const marginLeft = 20; // Margin kiri
    const marginTop = 20; // Margin atas
    const maxWidth = 170; // Lebar maksimum teks (A4: 210mm - margin 20mm x 2)

    doc.text(
      text,
      marginLeft,
      marginTop,
      { maxWidth: maxWidth }
    );

    // Unduh file PDF
    doc.save("Surat Lamaran Kerja.pdf");

    setIsDownload(true);
    addCountUsed();
        }
    },[textPDF])

  return (
    <div>
      {isDownload&&(
        <Badge className="top-5 left-1/2 -translate-x-1/2 text-xl px-3 z-50 bg-green-400 fixed flex gap-3">PDF HAS BEEN DOWNLOAD <span className="text-sm -mt-3 cursor-pointer" onClick={()=>setIsDownload(false)}>X</span></Badge>
      )}
    </div>
  );
};

export default TextToPDF;
