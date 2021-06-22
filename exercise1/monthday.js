// monthdays

// 485 hari : 1 tahun, 4 bulan, 8 minngu, 5 hari
// 485 hari
var days = parseInt(prompt("masukan jumlah hari"))
// 485 /360 = 1 tahun (360 hari) sisa 125 hari
var years = Math.floor(days / 360)
var daysLeft = days % 360

// 125 /30 = 4 bulan (120 hari) sisa 5 hari
var months = Math.floor(daysLeft / 30)
daysLeft = daysLeft % 30

// 5 / 7 =0 minggu ( 0 hari) sisa 5 hari 
var weeks = Math.floor(daysLeft / 7)
daysLeft = daysLeft % 7

console.log(`${days} hari : ${years} tahun, ${months} bulan, ${weeks} minggu, ${daysLeft} hari`)














// 485 hari : 1 tahun, 4 bulan, 8 minngu, 5

// jumlah hari dibagi 360 untuk mendapatkan tahun, sisanya masuk ke perhitungan selanjutnya