var reviews = [5, 1, 3.4, 2.9, 4];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Review average " + average.toPrecision(2));
