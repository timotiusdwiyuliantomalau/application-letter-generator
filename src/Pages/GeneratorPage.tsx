import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTextPDF } from "../../slice/appSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";
import FormGenerator from "@/Fragments/FormGenerator";
import { RootState } from "store";
import formattedDate from "@/lib/date";
import TextToPDF from "@/Fragments/TextToPDF";
import { File } from "lucide-react";

export default function Home() {
  const dispatch = useDispatch();
  let formValue = useSelector((state: RootState) => state.slice.formValue);
  useEffect(() => {
    formValue = JSON.stringify(formValue).substring(
      1,
      JSON.stringify(formValue).length - 1
    );
    if (Object.keys(formValue).length > 0) {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({
        model: "gemini-2.0-flash-exp",
      });
      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };
      async function run() {
        const chatSession = model.startChat({
          generationConfig,
          history: [],
        });
        const result = await chatSession.sendMessage(
          `Tanpa kalimat pengantar dan tanpa penjelasan mengenai strukturnya, coba buat surat lamaran kerja yang profesional ,sesuai standart perusahaan dengan text align rata kiri dan struktur seperti ini 1. Header (Informasi Kontak Pelamar)
Nama lengkap
Alamat rumah
Nomor telepon
Alamat email
2. Tanggal
Tanggal pengiriman surat (biasanya diletakkan di sebelah kanan atas).
3. Informasi Tujuan Surat
Nama penerima surat (jika diketahui, misalnya "Yth. HRD [Nama Perusahaan]" atau "Yth. Kepala Bagian Rekrutmen").
Nama perusahaan.
Alamat perusahaan.
4. Salam Pembuka
Contoh: "Dengan hormat,".
5. Paragraf Pembuka
Menyebutkan tujuan mengirimkan surat (melamar posisi tertentu).
Menyebutkan sumber informasi lowongan kerja (jika relevan).
Menyampaikan apresiasi terhadap perusahaan.
6. Paragraf Isi
Pengalaman dan keterampilan: Jelaskan pengalaman kerja atau kemampuan yang relevan dengan posisi yang dilamar.
Pencapaian dan keahlian spesifik: Soroti pencapaian penting atau keahlian yang bisa memberi nilai tambah.
Kesesuaian dengan perusahaan: Jelaskan alasan melamar dan bagaimana Anda dapat berkontribusi.
7. Paragraf Penutup
Mengungkapkan keinginan untuk wawancara atau diskusi lebih lanjut.
Memberikan informasi kontak dan kesediaan untuk dihubungi.
Mengucapkan terima kasih.
8. Penutup
Contoh: "Hormat saya,".
Nama lengkap pelamar.
.Berikut identitas saya untuk melemar pekerjaan : ${formValue}, tanggal:${formattedDate}, sebutkan reputasi perusahaan yang baik`
        );
        console.log(result.response.text());
        dispatch(setTextPDF(result.response.text()));
      }
      run();
    }
  }, [formValue]);

  return (
    <div className="flex flex-col items-center justify-center bg-slate-100 pt-5 pb-12 gap-3">
      <div className="absolute -top-12">
      </div>
      <p className="font-caveat font-bold text-2xl z-30 flex gap-3 items-center">Fill Up Form <File className="w-5"></File></p>
      <FormGenerator></FormGenerator>
      <TextToPDF></TextToPDF>
    </div>
  );
}
