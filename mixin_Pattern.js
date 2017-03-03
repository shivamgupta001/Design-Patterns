// -----MIXIN PATTERN----//

//Mixins are classes which provide the functionality to be inherited by a subclass

//Car
var Car = function( settings ){
	this.model = settings.model;
	this.color = settings.color;
};

//Mixin
var Mixin = function(){};
Mixin.prototype = {
	driveForward : function(){
		console.log('drive Forward');
	},
	driveBackward : function(){
		console.log('drive Backward');
	}
};

//Augment existing 'class' with a method from another
function augment( receivingClass , givingClass ){
	//only provide certain methods
	if(arguments[2]){
		for(var i=2; i< arguments.length ; i++){
			console.log(arguments[i]);
			receivingClass.prototype[arguments[i]] = givingClass.prototype[arguments[i]];
		}
	}// provide all methods
	else{
		for(var methodName in givingClass.prototype){
			
			if(!receivingClass.prototype[methodName]){
				receivingClass.prototype[methodName] = givingClass.prototype[methodName];
			}
		}
	}
}

augment( Car , Mixin , 'driveForward' , 'driveBackward');

var vehicle = new Car({model : 'Ford Escort',color: 'blue'});

vehicle.driveForward();
vehicle.driveBackward();

/*Note- The mixed in class prototype members are mirrored on receiving class prototype,
		instances of the receiving class do not pass instanceOf for the mixin class.
		JS does not support multiple inheritance.*/