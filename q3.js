let star = "";
function pattern(num) {
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
      star = star + " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
      if (i === 1 || i === num) {
        star = star + "*";
      } else {
        if (k === 0 || k === 2 * i - 2) {
          star = star + "*";
        } else {
          star = star + " ";
        }
      }
    }
    star = star + "\n";
  }
}
pattern(5);
console.log(star);
