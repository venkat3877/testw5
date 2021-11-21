let star = "";
function pattern(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = num; j > i; j--) {
      star = star + " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      star = star + "*";
    }
    star = star + "\n";
  }
  for (let i = 1; i <= num - 1; i++) {
    for (let j = 0; j < i; j++) {
      star = star + " ";
    }
    for (let k = (num - i) * 2 - 1; k > 0; k--) {
      star = star + "*";
    }
    star = star + "\n";
  }
}
pattern(5);
console.log(star);
