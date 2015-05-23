class Dog{
  constructor(name){
    this.name = name;
  }

  bark(){
    console.log(`My name is ${this.name} `); 
  }
}

var dog = new Dog('wan');

dog.bark();
