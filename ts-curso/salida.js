var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hello world');
//variable staticas
var myString = "Hello World";
myString = 22 + "";
var myNumber = 22;
document.write(myNumber.toString() + "<p>");
//array
var stringArray = ["", "", ""]; //cualquier tipo de elementos enel array
stringArray = [true, "a", 234, [0, 1, 2], {}];
document.write(stringArray + "<p>");
//tuplas
var strNumTuple;
strNumTuple = ["oe ", 123];
document.write(typeof (strNumTuple) + "<p>");
//void, undefined, null
var myVoid = undefined;
var myNull = null;
var myUndefined = undefined;
document.write(typeof (myVoid) + "<p>");
//funciones
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof (num1) == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
//segundo parametro opcional al final dle nombre de la variable poner un "?"
function getName(firstName, lastName) {
    return firstName + lastName;
}
//funcion que no retorna nada
function myVoidFunction() {
    return;
}
;
function showTodo(todo) {
    console.log(todo.title + " - " + todo);
}
var myTodo = { title: 'eat dinner', text: 'lorem' };
showTodo(myTodo);
//clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registrered");
    };
    User.prototype.showMeAge = function () {
        return this.AgeInYears();
    };
    User.prototype.AgeInYears = function () {
        return this.age + ' years';
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " paid the invoice already");
    };
    return User;
}());
var usuario = new User('john', 'asf@dddd.hhh', 18);
console.log(usuario.register());
console.log(usuario.showMeAge());
document.write(usuario.name + "<p>");
//clases con herencia
var Members = /** @class */ (function (_super) {
    __extends(Members, _super);
    function Members(id, name, email, age) {
        return _super.call(this, name, email, age) || this;
    }
    Members.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this);
    };
    return Members;
}(User));
var miembro = new Members(123, 'gordon', 'gordon@tu.culo', 16);
miembro.payInvoice();
