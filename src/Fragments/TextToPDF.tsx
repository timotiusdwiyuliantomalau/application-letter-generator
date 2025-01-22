import { useEffect } from "react";
import { jsPDF } from "jspdf";
import { useSelector } from "react-redux";
import { RootState } from "store";

const TextToPDF = () => {
    const textPDF = useSelector((state: RootState) => state.slice.textPDF);
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
    doc.save("CoverLetter.pdf");
        }
    },[textPDF])

  return (
    <div>
    </div>
  );
};

export default TextToPDF;
