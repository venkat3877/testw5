let star = "";
function pattern(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= 8; j++) {
      star = star + "*";
    }
    star = star + "\n";
  }
}
pattern(7);
console.log(star);
