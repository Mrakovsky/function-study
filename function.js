let birthTime = new Date(2001,10,07,12,51);
function p(params) {
    let now = new Date();
    let seconds = (now.getTime() - birthTime.getTime()) / 1000;
    document.getElementById('birth-time').innerText =
      '生まれてから' + seconds + '秒経過。';
  }
setInterval(p,90);