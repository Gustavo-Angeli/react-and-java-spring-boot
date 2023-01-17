let sports: string[] = ["skate", "bodybuilding", "e-sports"];

sports.push("surf");

// for (let i = 0; i < sports.length; i++) {
//   if (sports[i] == "bodybuilding") {
//     console.log(sports[i] + " <<<My favorite");
//   } else {
//     console.log(sports[i]);
//   }
// }

for (let sport of sports) {
  if (sport == "bodybuilding") {
    console.log(sport + " <-- My favorite!");
  } else {
    console.log(sport);
  }
}
