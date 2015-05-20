
var arr = [1,2,3];
document.write(arr.map(v => v * 2) + '<br>');
document.write(arr.map((v,i) => v + i) + '<br>');

arr.forEach(v => {
  document.write(v + '<br>');
});

var dog = {
  msg: "bow!",
  hello() {
    setInterval(() => {
      document.querySelector('body').innerHTML += this.msg + '<br>';
    }, 1000);
  }
};

dog.hello();
