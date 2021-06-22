// XYZ = W

var x = 4, y = 3, z = 2

// var firststep = (x + y * z) / (x * y)
// var w = Math.pow(firststep, z)

var w = Math.pow((x + y * z) / (x * y), z)

console.log(w)