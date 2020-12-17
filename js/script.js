var points = new Array(100);
for (var i = 0; i < 100; i++) {
    points[i] = i + 1;
}

for (var i = 0; i < points.length; i++) {
    console.log(points[i]);
    if (points[i] % 3 == 0 )  {
      console.log('Fizz')
    } else if (points[i] % 5 == 0) {
      console.log('Buzz')
    } else ((points[i] % 3 == 0) && (points[i] % 5 == 0)) {
      console.log('BuzzFizz')
    }
}

// for (var i = 0; i < points.length; i++) {
// if (points[i] % 3 == 0 )  {
//   console.log('Fizz')
// } else if (points[i] % 5 == 0) {
//   console.log('Buzz')
// } else (points[i] % 3 == 0  &&  points[i] % 5 == 0) {
//   console.log('BuzzFizz')
// } }
