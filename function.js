let birthTime = new Date(2001,10,07,12,51);
function p(params) {
    let now = new Date();
    let seconds = (now.getTime() - birthTime.getTime()) / 1000;
    document.getElementById('birth-time').innerText =
      '生まれてから' + seconds + '秒経過。';
  }
setInterval(p,90);

/*練習問題
function menseki(r){
  let menseki = r*r*3.14
  return menseki;
}
 document.write('<p>半径5cmの円の面積は' + menseki(5) + 'です</p>');
*/

/*別の解法
function areaOfCircle(r) {
  return r * r * 3.14;
}
*/