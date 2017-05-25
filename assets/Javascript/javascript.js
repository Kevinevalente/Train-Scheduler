	
	//Pseudo Code for making train scheduler

	//create input form with Train name, destination, First time, Frequency X
	//create Table displaying Train name, Destination, Frequency, next arrival, min away X
	//create function that uses first train time and frequency to determine next arrival and minutes away
		//Use Modulo
	//

	//use firebase to store form data into table


	function createTableEntry(name, destination, time, frequency) {
		  		
		  		var row = $("<tr>");
		  		var nameCol = $("<td>");
		  		var destinationCol = $("<td>");
		  		var frequencyCol = $("<td>");
		  		var nextCol = $("<td>");
		  		var minAwayCol = $("<td>");
		  		
		  		nameCol.text(name);
		  		destinationCol.text(destination);
		  		frequencyCol.text(frequency);
		  		nextCol.text(next);
		  		minAwayCol.text(min);

		  		row.append(nameCol);
		  		row.append(destinationCol);
		  		row.append(frequencyCol);
		  		row.append(nextCol);
		  		row.append(minAwayCol);
		  
		  		$("#main-table").append(row);
		  	};

		  	 	function timeCalc(argument) {

		  	 	var tFrequency = 

		  	 	// var firstTime = 

		  	 	// var minutesTilTrain = 

	 // First Time (pushed back 1 year to make sure it comes before current time)
    			
    			// var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
    			// console.log(firstTimeConverted);

    //Set Current time
			    // var currentTime = moment();
			    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"))







		  


		  	 database.ref().on("child_added", function(snapshot) {
			      
			      name = snapshot.val().name;
			      destination = snapshot.val().destination;
			      first = snapshot.val().first;
			      frequency = snapshot.val().frequency;
			      JSON.stringify(start);
			      
			      createTableEntry(name,destination,first,frequency);
			    }, function(errorObject) {
			      console.log("The read failed: " + errorObject.code);
			    });


		  	$("#addChar").on("click", function(e) {
			    e.preventDefault();

			});


		  			$("#addChar").on("click", function(e) {
			    e.preventDefault();

			    var nameHolder = $("#name-input").val().trim();
			    var destinationHolder = $("#destition-input").val().trim();
			    var firstHolder = $("#first-input").val().trim();
			    var frequencyHolder = $("#frequency-input").val().trim();

			    
			    database.ref().push({
			        name: nameHolder,
			        destination: destinationHolder,
			        first: firstHolder,
			        frequency: frequencyHolder
			      });
			    
			});

		 


		  		