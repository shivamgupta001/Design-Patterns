(function(){
	
	var CarManager = {

		requestInfo: function(model ,id){
			return 'The information for'+ model + 'with ID' + id + 'is foobar';
		},
		buyVehicle: function(model , id){
			return 'You have successfuly purchased Item';
		},
		arrangeViewing : function(model , id){
			return 'You have successfully booked a viewing of '+model+'('+id+')';
		}
	};

	CarManger.execute = function(name){
		return CarManger[name] && CarManger[name].apply(CarManger , [].slice.call(arguments, 1));
	}

	CarManger.execute("buyVehicle","Ford Escort","453543");


})();