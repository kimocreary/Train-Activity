console.log("javascript loaded")
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBYlxzSLFfawVm5fQz9VCEZbgXt8rRbhEY",
    authDomain: "train-activity-e0e3c.firebaseapp.com",
    databaseURL: "https://train-activity-e0e3c.firebaseio.com",
    storageBucket: "train-activity-e0e3c.appspot.com",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var trainData = firebase.database()
// var connectionsRef = trainData.ref("/connections");
// trainData.ref().push(trainData);

trainData.ref().on("child_added", function (childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());
    var trainsName = childSnapshot.val().name;
    var trainsDestination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().time;
    var trainFrequency = childSnapshot.val().frequency;
    console.log("trainsName");
    console.log("trainsDestination");
    console.log("firstTrainTime");
    console.log("trainFrequency");

    var firstTrainTimePretty = moment.unix(firstTrainTime).format("HH.mm")
    var trainFrequency = moment.unix(trainFrequency).format("mm")
    var nextArrival = moment(firstTrainTime, "HH:mm").add("mm");
    var minutesAway = moment().diff(moment(nextArrival, "X"), "minutes");
    console.log(minutesAway);




    // Loop through the for loop 
    // Add to the html table
}) 
$("#trainsName").append(trainsName);
$("#trainsDestination").append(trainsDestination);
$("#firstTrainTime").append(firstTrainTime);
$("#nextArrival").append(nextArrival);
$("#minutesAway").append(minutesAway);

$("#submitbutton").on("click", function(event) {
    event.preventDefault() 
    console.log("submit button clicked")
    var trainsName = $("#trainsName").val().trim()
    var trainsDestination = $("#trainsDestination").val().trim()
    var firstTrainTime = $("#firstTrainTime").val().trim()
    var trainFrequency = $("#trainFrequency").val().trim()
    trainData.ref().push({
        trainsName: trainsName,
        trainsDestination: trainsDestination,
        trainFrequency: trainFrequency,
        firstTrainTime: firstTrainTime
    })
    console.log("traindetailsadded",{
        trainsName: trainsName, 
        trainsDestination: trainsDestination,
        trainFrequency: trainFrequency,
        firstTrainTime: firstTrainTime

        
    })

    
    
})