//----SUB-CLASSING//

var Person = function( firstName , lastName ){
	this.firstName = firstName;
	this.lastName = lastName;
	this.gender = 'male'
};
Person.prototype.alert = function(){

	console.log(this.firstname);
}

// a new instance of Person 
var Clark = new Person('Clark','Kent');

//Define a subclass constructor for 'superhero'
var SuperHero = function(firstName , lastName , powers){

	Person.call(this, firstName, lastName);

	this.powers = powers;
}

SuperHero.prototype = Object.create(Person.prototype); ///mirrors method
var superman = new SuperHero('Clark','Kent',['fight','heat-vision']); 