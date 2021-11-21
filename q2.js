let star = "";
function pattern(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      star = star + "*";
    }
    star = star + "\n";
  }
}
pattern(5);
console.log(star);
