//andi + budi = 49
// rasi0 andi dan budi= 0.4 = 4 / 10 = 4 : 10 = 2 : 5 
//rasio andi = 2, rasio budi = 5
// total rasio = 2 + 5 = 7
// andi = total umur * (rasio andi / total rasio)
// budi = total umur * (rasio budi / total rasio)

var totalAge = 49, rasioAndi = 2, rasioBudi = 5, rasioTotal = 7

// umur andi dan budi saat ini
var andi = totalAge * (rasioAndi / rasioTotal) 
var budi = totalAge * (rasioBudi / rasioTotal) 
console.log(`umur Andi saat ini ${andi}`)
console.log(`umur Budi saat ini ${budi}`)

// umur andi dan budi 2 tahun berikutnya
andi += 2
budi += 2
console.log(`umur Andi dua tahun berikutnya ${andi}`)
console.log(`umur Budi dua tahun berikutnya ${budi}`)
