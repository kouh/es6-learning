
var arr = [1,2,3];
console.log(arr.map(v => v * 2));
console.log(arr.map((v,i) => v + i));

arr.forEach(v => {
  console.log(v);
});

var dog = {
  msg: "bow!",
  hello() {
    setInterval(() => {
      console.log(this.msg);
    }, 1000);
  }
};

dog.hello();
