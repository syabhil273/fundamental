//cube root

// menerima input dari user berupa angka
// "2"
var input = prompt("silahkan masukan angka berapapun:")
// mengubah tipe data stirng menjadi integer
// "2" ==>2
input = parseInt(input)
// input dari user dipangkat 2 hasilnya diinput ke variable result
var result = Math.pow(input, 2)
// tampilkan hasil pemangkatan menggunakan alert
alert("kudrat dari" + input + "=" + result)