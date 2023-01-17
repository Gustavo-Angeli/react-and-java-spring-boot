var sports = ["skate", "bodybuilding", "e-sports"];
sports.push("surf");
// for (let i = 0; i < sports.length; i++) {
//   if (sports[i] == "bodybuilding") {
//     console.log(sports[i] + " <<<My favorite");
//   } else {
//     console.log(sports[i]);
//   }
// }
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var sport = sports_1[_i];
    if (sport == "bodybuilding") {
        console.log(sport + " <-- My favorite!");
    }
    else {
        console.log(sport);
    }
}
