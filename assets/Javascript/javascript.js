
	 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDddAmd6_SWZAdlM2t7TvsEpzphisXzVm4",
    authDomain: "train-arrival.firebaseapp.com",
    databaseURL: "https://train-arrival.firebaseio.com",
    projectId: "train-arrival",
    storageBucket: "train-arrival.appspot.com",
    messagingSenderId: "116901450432"
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


	function createTableEntry(name, dest, freq, min) {

	    var row = $("<tr>");
	    var nameCol = $("<td>");
	    var destCol = $("<td>");
	    var freqCol = $("<td>");
	    var nextCol = $("<td>");
	    var minCol = $("<td>");
	    // var totalCol = $("<td>");

	    nameCol.text(name);
	    destCol.text(dest);
	    freqCol.text(freq);
	    // nextCol.text(next);
	    minCol.text(min);

	    row.append(nameCol);
	    row.append(destCol);
	    row.append(freqCol);
	    row.append(nextCol);
	    row.append(minCol);
	    // row.append(totalCol);

	    $("#main-table").append(row);
	};

	//Function to calculate Arrival time and Minutes Away

		var currentTime = moment().format("HHmm");
		var t = $("#time-input").val();
		var arrivalTime = (currentTime - t)%currentTime;
		var nextArrival = 0;
		var minLeft = 0;


	database.ref().on("child_added", function(snapshot) {

		name = snapshot.val().name;
		dest = snapshot.val().dest;
		freq = snapshot.val().freq;
		min = snapshot.val().min;
		JSON.stringify(min);

	createTableEntry(name, dest, freq, min);
});

	$("#addChar").on("click", function(e) {
		e.preventDefault();

		var nameHolder = $("#name-input").val().trim();
		var destHolder = $("#dest-input").val().trim();
		var freqHolder = $("#freq-input").val().trim();
		var timeHolder = $("#time-input").val().trim();

	database.ref().push({
		name: nameHolder,
		dest: destHolder,
		freq: freqHolder,
		time: timeHolder,
		});
	});