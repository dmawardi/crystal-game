// Wait till HTML document to load prior to executing
$(document).ready(function () {
    // Declare variables
    var targetCounter = 200;
    var currentCounter = 0;
    var wins = 0;
    var loss = 0;
    var imageAddArray = ['assets/images/emerald_noBG.PNG', 'assets/images/miridium_noBG.PNG',
        'assets/images/ruby_noBG.PNG', 'assets/images/sapphire_noBG.PNG', 'assets/images/topaz_noBG.PNG'];

    var winsText = $('#winsText');
    var lossText = $('#lossText');
    var targetText = $('#targetText');
    var currentText = $('#currentText');
    var startBtn = $('#start-btn');
    var messageText = $('#messageText');
    var lastIncrement = $('#lastIncrement');

    var gemBar = $('.gemBar');

    //  Function List

    function startNewMatch() {
        // Randomize target counter
        targetCounter = Math.floor(Math.random() * 150) + 40;

        // Reset counter
        currentCounter = 0;



        // Display to user
        currentText.text(currentCounter);
        targetText.text(targetCounter);
        lastIncrement.text('');

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

            // Add class for event handler
            gemSocket.addClass('gem-image');
            // Add Bootstrap Class
            gemSocket.addClass('img-thumbnail');

            // Get random value for gem
            gemValue = Math.floor(Math.random() * 30)+1;

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

    // Event handler for start button to begin game
    startBtn.on('click', function() {
        messageText.text('Game has begun!');
        startNewMatch();
        

    });

    // Event handler for clicked gem images
    $('body').on('click', '.gem-image', function () {
        messageText.text('Select next gem to barter');

        // Get data-gemValue and add to counter
        var increaseValue = $(this).attr('data-gemValue')

        currentCounter = parseInt(currentCounter) + parseInt(increaseValue);

        console.log('currentCounter:' + currentCounter);
        console.log('increased by: ' + increaseValue);
        console.log('target counter: '+ targetCounter);


        currentText.text(currentCounter);
        lastIncrement.text('(+'+increaseValue+')');

        // Check if current counter is over or below
        if (parseInt(currentCounter) > parseInt(targetCounter)) {
            // Increment losses
            loss++;
            messageText.text('You lost!');


            lossText.text(loss);

            // Reset Game
            startNewMatch();

        }
        // If the counter meets the target
        else if (currentCounter === targetCounter) {
            // Increment wins
            wins++;
            messageText.text('You win!');

            winsText.text(wins);

            // Reset Game
            startNewMatch();

        }


    });


















})