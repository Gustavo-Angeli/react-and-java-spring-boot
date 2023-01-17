let reviews: number[] = [5, 1, 3.4, 2.9, 4];
let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
  console.log(reviews[i]);
  total += reviews[i];
}

let average: number = total / reviews.length;

console.log("Review average " + average.toPrecision(2));
