const formatDate = (date:any) => {
  const day = String(date.getDate()).padStart(2, '0'); // Tambahkan 0 jika < 10
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Bulan dimulai dari 0
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};

const today = new Date(); // Objek tanggal sekarang
export const dateNow= formatDate(today); 

// Ambil bagian-bagian tanggal
const day = today.getDate();
const monthIndex = today.getMonth(); // Bulan dalam bentuk indeks (0-11)
const year = today.getFullYear();

// Daftar nama bulan
const months = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

// Format tanggal
const formattedDate = `${day} ${months[monthIndex]} ${year}`;
export default formattedDate;