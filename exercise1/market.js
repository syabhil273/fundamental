/////////////////
// Market v.1.1
////////////////

/*
    1. Stock untuk setiap produk
    2. Ketika user akan input qty melebihi stock ini yang akan disimpan sebagai qty
    3. Saat menampilkan informasi total yang harus dibayar, kita akan meminta user untuk input sejumlah uang
        3.1 Jika uang yang di input kurang dari seharusnya : transaksi dibatalkan, uang yang anda masukkan kurang ...
        3.2 Jika uang yang di input sama jumlahnya dengan yang seharusnya : terimaksih
        3.3 Jika uang yang di input melebihi dari jumlah yang seharusnya : terimaksih , uang kembali untuk anda ...

 */

// tentukan harga untuk setiap buah
var priceApple = 10000
var priceGrape = 15000
var priceOrange = 20000

// stock
var stockApple = 5
var stockGrape = 7
var stockOrange = 8

// meminta user input qty untuk setiap buahnya
var qtyApple = parseInt(prompt('Masukan jumlah qty Apel'))
// jika qty apel yang diminta melebihi stock apel yang ada
if (qtyApple > stockApple){
    //menampilkan informasi bahwa qty melebihi stock
    alert(`permintaan qty lebih dari stock, qty akan terisi sesuai jumlah stock yaitu : ${stockApple}`)
    // menyimpan stock apel sebagai qty yang dipesan
    qtyApple = stockApple

}

var qtyGrape = parseInt(prompt(`MAsukan jumlah Anggur`))
// jika qty anggur yang diminta melebihi stock apel yang ada
if (qtyGrape > stockGrape){
    //menampilkan informasi bahwa qty melebihi stock
    alert(`permintaan qty lebih dari stock, qty akan terisi sesuai jumlah stock yaitu : ${stockGrape}`)
    // menyimpan stock anggur sebagai qty yang dipesan
    qtyGrape = stockGrape

}

var qtyOrange = parseInt(prompt('Masukan jumlah qty Jeruk'))
// jika qty jeruk yang diminta melebihi stock jeruk yang ada
if (qtyOrange > stockOrange){
    //menampilkan informasi bahwa qty melebihi stock
    alert(`permintaan qty lebih dari stock, qty akan terisi sesuai jumlah stock yaitu : ${stockOrange}`)
    // menyimpan stock jeruk sebagai qty yang dipesan
    qtyOrange = stockOrange

}

// hitung harga total masing-masing buah
var totalApple = qtyApple * priceApple
var totalGrape = qtyGrape * priceGrape
var totalOrange = qtyOrange * priceOrange

// total keseluruhan
var finalPrice = totalApple + totalGrape + totalOrange

// memunculkan informasi meggunakan alert
var money = parseInt(
    prompt(`
        Detail Belanja
    
        Apel : ${qtyApple} * ${priceApple} = ${totalApple}
        Anggur : ${qtyGrape} * ${priceGrape} = ${totalGrape}
        Jeruk : ${qtyOrange} * ${priceOrange} = ${totalOrange}

        Total : ${finalPrice}
    `)
)

var margin = Math.abs(money - finalPrice)

if(finalPrice > money) {
    alert(`transaksi dibatalkan, uang yang anda masukan kurang ${margin}`);

}else if (money > finalPrice){
    alert(`Terimakasih, uang kembali untuk anda ${margin}`);

} else {
    alert(`Terimakasih`);

}
    