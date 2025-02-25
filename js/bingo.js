function rand(max) {
  return Math.floor(Math.random() * max) + 1;
}

function roll() {
  let num = 80;
  let arr = [];

  while (arr.length < 20) {
    let random = rand(num);
    if (!arr.includes(random)) {
      arr.push(random);
    }
  }

  document.getElementById("bingo").innerHTML = "開獎號碼: " + "&nbsp;" + arr.slice(0, 19).sort(function(a, b){ return a - b; }) + "&emsp;" + '超級獎號:' + arr[19];
}
