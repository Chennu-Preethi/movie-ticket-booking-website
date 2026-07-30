function onLoaderFunc() {
    $(".seatStructure *").prop("disabled", true);
    $(".displayerBoxes *").prop("disabled", true);
}
function takeData() {
    if (($("#Username").val().length == 0) || ($("#Numseats").val().length == 0)) {
        alert("Please Enter your Name and Number of Seats");
    }
    else {
        $(".inputForm *").prop("disabled", true);
        $(".seatStructure *").prop("disabled", false);
        document.getElementById("notification").innerHTML = "Please Select your Seats NOW!";
    }
}

function updateTextArea() {

    if ($("input:checked").length == ($("#Numseats").val())) {
        $(".seatStructure *").prop("disabled", true);

        var allNameVals = [];
        var allNumberVals = [];
        var allSeatsVals = [];

        //Storing in Array
        allNameVals.push($("#Username").val());
        allNumberVals.push($("#Numseats").val());
        $('#seatsBlock :checked').each(function () {
            allSeatsVals.push($(this).val());
        });

        //Displaying
        $('#nameDisplay').val(allNameVals);
        $('#NumberDisplay').val(allNumberVals);
        $('#seatsDisplay').val(allSeatsVals);
    }
    else {
        alert("Please select " + ($("#Numseats").val()) + " seats")
    }
}


$(":checkbox").click(function () {
    if ($("input:checked").length == ($("#Numseats").val())) {
        $(":checkbox").prop('disabled', true);
        $(':checked').prop('disabled', false);
    }
    else {
        $(":checkbox").prop('disabled', false);
    }
});

function updateTextArea() {
    // Assuming you have logic here to update the displays
    var name = document.getElementById("Username").value;
    var numSeats = document.getElementById("Numseats").value;
    var selectedSeats = [];

    // Get selected seats
    var seatCheckboxes = document.querySelectorAll('.seats:checked');
    seatCheckboxes.forEach(function (seat) {
        selectedSeats.push(seat.value);
    });

    // Update the display areas
    document.getElementById("nameDisplay").value = name;
    document.getElementById("NumberDisplay").value = numSeats;
    document.getElementById("seatsDisplay").value = selectedSeats.join(", ");

    // Show the Proceed to Payment button
    document.getElementById("proceedButton").style.display = "block";
}

function proceedToPayment() {
    // Redirect to the payment page
    window.location.href = 'payment.html'; // Replace with your actual payment page URL
}