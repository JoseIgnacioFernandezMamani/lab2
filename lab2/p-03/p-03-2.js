var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//implementa la interface AnmalInterface
//palabra clave `implements`
var Animal = /** @class */ (function () {
    // Constructor
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    // Método de la interfaz
    Animal.prototype.sound = function () {
        console.log("".concat(this.name, " makes a sound of animal for example miau"));
    };
    return Animal;
}());
// Clase derivada (herencia)
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    // Constructor
    function Dog(name, breed, age) {
        var _this = _super.call(this, name, age) || this;
        _this.breed = breed;
        return _this;
    }
    // Método adicional
    Dog.prototype.wagTail = function () {
        console.log("".concat(this.name, " wags its tail, it like."));
    };
    return Dog;
}(Animal));
//creando instancias de los objetos y llamando a sus metodos
var animal = new Animal('Animal', 32);
var dog = new Dog('Dog', 'Labrador', 5);
animal.sound();
dog.sound();
dog.wagTail();
