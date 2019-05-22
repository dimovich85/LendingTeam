/*var obj;

obj = {
	name: 'Eldar',
	nick: 'Dissmay'
};

var obj2 = {
	obj1: obj,
	text: 'Something'
}

console.log( obj2.obj1.nick );*/

/*function ourFunction(){
	alert('Hello!');
}*/

/*ourFunction();*/

/*var someFunc = function(a){
	console.log(a);
	console.log( a * a);
}*/

/*someFunc(5);
someFunc(10);*/

/*var obj = {
	name: 'Dima',
	square: someFunc
}
var carArray = [1.8, 'rare', function(){console.log('Rare move')}];
carArray[2]();
var car = {
	engine: 1.8,
	privod: 'rare',
	rareMove: function(){
		console.log('I move to rare side!');
	}
}

car.rareMove();

obj.square(6);*/

/*function strLeng(str){
	if( str.length > 10 ){
		console.log('Слишком длинный текст!');
	} else if( str.length < 3){
		console.log('Слишком короткий текст!');
	} else {
		console.log('Норм!');
	}
}

strLeng('Привет!'); // Норм
strLeng('kfjshdfkjshdfjkhsdfsdj'); // Слишком длинный
strLeng('Yo'); // Слишком короткий*/

/*var boolean;

boolean = true; //да
boolean = false; //нет

if( boolean ){
	console.log('True!');
} else{
	console.log('False!');
}*/

var array = [10, 15, 25, 'Hello', 13.5]; // 5 < 5
var user = {
	nick: 'dimovich85',
	name: 'Dima',
	email: 'dimovich85@gmail.com'
}

for( var i = 0; i < array.length; i++){
	console.log( array[i] );
}

console.log( user.nick );
console.log( user['nick'] );