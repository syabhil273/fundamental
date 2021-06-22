// theory 
// dua kendaraan yang akan bertemu, dapat hitung waktunya dengan menjumlahkan kecepatan dari kedua kendaraan 
// lalu kemudian cari tau dengan total kecepatan yang dimiliki, berpa waktu yang dibutuhkan untuk menempuh jaak tertentu

// 60 + 40 = 100 km/h
// dengan kecepatan 100 km/h. berapa waktu yang dibutuhkan untuk menempuh jarak 120km? 
// 120 / 100 = 1.2 jam
// 1.2 * 60 =72 menit : 60 menit + 12 menit
// 9.00 ==> 10.12 

// waktu bertemu (jam) : 9 + Math.floor (72 / 60) :10
// waktu bertemu (menit) : 0 + ( 72 % 60) : 12

// jarak
var distance = 120
// kecepatan A
var veloticyA = 60
// kecepatan B
var veloticyB = 40
// waktu mulai kendaraan berjalan 
var startTimeHour = 9
var startTimeMinute = 0

// total kecepatan
// 60 + 40 = 100 km/h
var totalVelocity = veloticyA + veloticyB
// waktu yang dibutuhkan untuk bertemu (jam)
// 120 / 100 = 1.2 jam
var needTimeHour = distance / totalVelocity
//  waktu yang dibutuhkan untuk bertemu (menit)
// 1.2 * 60 =72 menit : 60 menit + 12 menit
var needTimeMinute = needTimeHour * 60

// waktu bertemu (jam)
// waktu bertemu (jam) : 9 + Math.floor (72 / 60) :10
var needTimeHour = startTimeHour + Math.floor(needTimeMinute / 60)
// waktu bertemu (menit)
// waktu bertemu (menit) : 0 + ( 72 % 60) : 12
var needTimeMinute = startTimeMinute + (needTimeMinute % 60)

console.log (`akan bertemu pada pukul ${needTimeHour} : ${needTimeMinute}`) 