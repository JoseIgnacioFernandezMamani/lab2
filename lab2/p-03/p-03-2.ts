interface AnimalInterface {
    name: string;
    age: number; 
    sound(): void;
}

//implementa la interface AnmalInterface
//palabra clave `implements`
class Animal implements AnimalInterface {
    // Propiedades
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Método de la interfaz
    sound(): void {
        console.log(`${this.name} makes a sound of animal for example miau`);
    }
}

// Clase derivada (herencia)
class Dog extends Animal {
    breed: string;

    // Constructor
    constructor(name: string, breed: string, age: number) {
        super(name, age); // Llama al constructor de la clase base
        this.breed = breed;
    }

    // Método adicional
    wagTail(): void {
        console.log(`${this.name} wags its tail, it like.`);
    }   
}

//creando instancias de los objetos y llamando a sus metodos
let animal = new Animal('Animal',32);
let dog = new Dog('Dog', 'Labrador', 5);

animal.sound(); 
dog.sound();    
dog.wagTail();  
