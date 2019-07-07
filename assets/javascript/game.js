// Wait till HTML document to load prior to executing
$(document).ready(function () {
    // Declare variables
    var targetCounter = 0;
    var currentCounter = -1;
    var wins = 0;
    var loss = 0;


    var gemBar = $('.gemBar');
    console.log(gemBar);


    // Generate Gems and socket into the inventory with values

    for (var i = 0; i < 5; i++) {
        // Declar Variables
        var gemSocket = $('<img>');


        console.log('gemsocket:' + gemSocket);
        console.log('index:' + i);

        // Add class for event handler
        gemSocket.addClass('gem-image');
        // Add Bootstrap Class
        gemSocket.addClass('img-thumbnail');

        gemSocket.attr('data-gemValue', i);
        gemSocket.attr('height', '200px');
        gemSocket.attr('width', '200px');


        console.log(gemSocket.attr('data-gemValue'));

        gemBar.append(gemSocket);
    }

    $('.gem-image').on('click', function () {
        // Get data-gemValue and add to counter
        var increaseValue = $(this).attr('data-gemValue')

        currentCounter = currentCounter + increaseValue;

        console.log('currentCounter:'+currentCounter);
        console.log('increased by: '+increaseValue);

        // Check if current counter is over or below
        if (currentCounter > targetCounter) {
            console.log('Overshot! You lose!');
            loss++;
        }
        // If the counter meets the target
        else if (currentCounter === targetCounter) {
            console.log('You win!');
            win++;
        }


    });


















})