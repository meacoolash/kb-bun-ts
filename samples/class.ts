interface PersonInterface { 
    name: string;
    greet(): void;
}

class Person implements PersonInterface {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  
    greet(): void {
      console.log(`Hello, my name is ${this.name}!`);
    }
  }

class Employee extends Person {
    position: string;
    constructor(name, position) {
      super(name); // Calls the Person constructor to initialize the name property.
      this.position = position;
    }
  
    greet() {
      super.greet(); // Calls the greet method from Person.
      setTimeout(() => {
          console.log(`I work as a ${this.position}.`);
      }, 500);
    }
  }
  
  const employee = new Employee('Bob', 'Developer');
  employee.greet();
  // Output:
  // Hello, my name is Bob!
  // I work as a Developer.