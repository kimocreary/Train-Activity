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
trainData.ref().on("child_added", function(childSnapshot, prevChildKey) {
    console.log(childSnapshot.val());
    // Loop through the for loop 
    // Add to the html table
    }) 
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
