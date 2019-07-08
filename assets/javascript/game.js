// Wait till HTML document to load prior to executing
$(document).ready(function () {
    // Declare variables
    var targetCounter = 200;
    var currentCounter = 0;
    var wins = 0;
    var loss = 0;
    var imageAddArray = ['assets/images/emerald_noBG.PNG', 'assets/images/miridium_noBG.PNG',
        'assets/images/ruby_noBG.PNG', 'assets/images/sapphire_noBG.PNG', 'assets/images/topaz_noBG.PNG']
    var gemBackgroundColor = ['purple', 'blue', 'orange', 'brown', 'green']

    var winsText = $('#winsText');
    var lossText = $('#lossText');
    var targetText = $('#targetText');
    var currentText = $('#currentText');

    var gemBar = $('.gemBar');

    //  Function List

    function startNewMatch() {
        // Randomize target counter
        targetCounter = Math.floor(Math.random() * 150) + 1;

        // Reset counter
        currentCounter = 0;

        // Display to user
        currentText.text(currentCounter);
        targetText.text(targetCounter);

        // Add code to use randomize gems and images function
        resetAndRandomGems();

    }
    // Create function to randomize images

    // Generate Gems and socket into the inventory with values
    function resetAndRandomGems() {
        // Reset gems in bar
        gemBar.empty();

        // Generate 5 gems in place in gem bar
        for (var i = 0; i < 5; i++) {
            // Declare Variables
            var gemSocket = $('<img>');
            var gemValue = 0;


            console.log('gemsocket:' + gemSocket);
            console.log('index:' + i);

            // Add class for event handler
            gemSocket.addClass('gem-image');
            // Add Bootstrap Class
            gemSocket.addClass('img-thumbnail');

            // Get random value for gem
            gemValue = Math.floor(Math.random() * 50);

            // Apply attributes
            gemSocket.attr('data-gemValue', gemValue);
            gemSocket.attr('height', '100px');
            gemSocket.attr('width', '100px');
            gemSocket.attr('src', imageAddArray[i]);
            gemSocket.attr('style', 'background-color: #161515;');


            console.log(gemSocket.attr('data-gemValue'));

            // Append gemSocket to gemBar
            gemBar.append(gemSocket);
        }
    }

    // Start of Arguments and event handlers
    startNewMatch();


    $('.gem-image').on('click', function () {
        // Get data-gemValue and add to counter
        var increaseValue = $(this).attr('data-gemValue')

        currentCounter = parseInt(currentCounter) + parseInt(increaseValue);

        console.log('currentCounter:' + currentCounter);
        console.log('increased by: ' + increaseValue);

        
        currentText.text = currentCounter;

        // Check if current counter is over or below
        if (currentCounter > targetCounter) {
            // Increment losses
            loss++;
            console.log('Overshot! You lose! losses: ' + loss);

            lossText.text(loss);

            // Reset Game
            startNewMatch();

        }
        // If the counter meets the target
        else if (currentCounter === targetCounter) {
            // Increment wins
            win++;
            console.log('You win! wins: ' + wins);
            winsText.text(win);

            // Reset Game
            startNewMatch();

        }


    });


















})