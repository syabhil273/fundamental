// Odd Even

// 1. Meminta input angka user
var numberInp = parseInt(prompt("masukan angka"))
// 2. Mengevaluasi nilai tersebut apakah merupakan bilangan ganjil atau genap
var status

if(numberInp % 2 == 0){
    // jika numberInp menghasilkan nol setelah dimoduluskan 2
    status = "GENAP"

} else {
    // jika numberInp menghasilkan satu setalah di moduluskan dua
    status = "GANJIL"

}
   


// 3.Menampilkan informasi mengenai bilangan tersebut menggunakan alert dan console
var info = `Angka ${numberInp} tergolong bilangan ${status}`
alert(info)
console.log(info)