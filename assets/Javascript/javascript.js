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

	var m = moment();
	console.log(m);








       

		database.ref().on("child_added", function(snapshot) {
        }, function(errorObject) {
      });


	    $("#addChar").on("click", function(e) {
	        e.preventDefault();

	        var nameHolder = $("#name-input").val();
	        var destinationHolder = $("#destination-input").val();
	        var firstHolder = $("#first-input").val();
	        var frequencyHolder = $("#frequency-input").val();

	         firebase.database().ref().on("value", function(snapshot){
			$("#name-input").html(snapshot.val().nameHolder);
			$("#destination-input").html(snapshot.val().destinationHolder);
			$("#first-input").html(snapshot.val().firstHolder);
			$("#frequency-input").html(snapshot.val().frequencyHolder);



	        database.ref().push({
	            name: nameHolder,
	            destination: destinationHolder,
	            first: firstHolder,
	            frequency: frequencyHolder
	        });

	        $('#theForm')[0].reset();

	       

		});


	 });