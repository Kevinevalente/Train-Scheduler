 var config = {
        apiKey: "AIzaSyAAUKZo69Oni3SZ2IHdM4d0D2Z5OkUfIMM",
        authDomain: "train-scheduler-609dd.firebaseapp.com",
        databaseURL: "https://train-scheduler-609dd.firebaseio.com",
        projectId: "train-scheduler-609dd",
        storageBucket: "train-scheduler-609dd.appspot.com",
        messagingSenderId: "445767248728"
    };
    firebase.initializeApp(config);	

    var database = firebase.database();

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

	// function timeCalc(argument) {

	//     var tFrequency =

	        // var firstTime = 

	        // var minutesTilTrain = 

	        // First Time (pushed back 1 year to make sure it comes before current time)

	        // var firstTimeConverted = moment(firstTime, "hh:mm").subtract(1, "years");
	        // console.log(firstTimeConverted);

	        //Set Current time
	        // var currentTime = moment();
	        // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"))







       

		database.ref().on("child_added", function(snapshot) {
        }, function(errorObject) {
      });


	    $("#addChar").on("click", function(e) {
	        e.preventDefault();

	        var nameHolder = $("#name-input").val();
	        var destinationHolder = $("#destination-input").val();
	        var firstHolder = $("#first-input").val();
	        var frequencyHolder = $("#frequency-input").val();


	        database.ref().push({
	            name: nameHolder,
	            destination: destinationHolder,
	            first: firstHolder,
	            frequency: frequencyHolder
	        });

	    });
