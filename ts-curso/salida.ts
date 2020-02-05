console.log('Hello world');

//variable staticas
var myString:string = "Hello World";
myString = 22+"";

var myNumber:number = 22;

document.write(myNumber.toString()+"<p>");


//array
var stringArray: any = ["","",""];//cualquier tipo de elementos enel array
stringArray = [true,"a",234,[0,1,2],{}];
document.write(stringArray+"<p>");


//tuplas
var strNumTuple: [string,number];
strNumTuple = ["oe ",123];
document.write( typeof(strNumTuple) +"<p>");

//void, undefined, null
let myVoid: void = undefined;
let myNull: null = null;
let myUndefined: undefined = undefined;

document.write( typeof(myVoid) +"<p>");



//funciones
function getSum(num1: number, num2:number):number{
    return num1+num2
}


let mySum = function(num1:number | string,num2:number | string):number{
    if(typeof(num1) == 'string'){
        num1 = parseInt(num1);
    }
    if(typeof(num2) == 'string'){
        num2 = parseInt(num2);
    }
    return num1 + num2;
}


//segundo parametro opcional al final dle nombre de la variable poner un "?"
function getName(firstName: string, lastName?:string):string{
    return firstName + lastName;
}


//funcion que no retorna nada
function myVoidFunction():void{
    return;
}



//interfaces
interface ITodo{title: string; text: string;};
function showTodo(todo: ITodo){
    console.log(`${todo.title} - ${todo}`);
}
let myTodo:ITodo  = {title: 'eat dinner',text:'lorem'};
showTodo(myTodo);




//clases
class User {
    public name: string;
    public email: string;
    protected age: number;
    constructor(name,email,age){
        this.name = name;
        this.email = email;
        this.age = age;
    }
    register(){
        console.log(`${this.name} is registrered`);
    }
    showMeAge(){
        return this.AgeInYears();
    }
    private AgeInYears(){
        return this.age + ' years';
    }

    payInvoice(){
        console.log(`${this.name} paid the invoice already`);
    }
}

var usuario = new User('john','asf@dddd.hhh',18);

console.log(usuario.register());
console.log(usuario.showMeAge());
document.write( usuario.name +"<p>");


//clases con herencia
class Members extends User{
    id: number;
    constructor(id,name,email,age){
        super(name,email,age);
    }

    payInvoice(){
        super.payInvoice();
    }

}

var miembro = new Members(123,'gordon','gordon@tu.culo',16);
miembro.payInvoice();