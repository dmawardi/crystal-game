// Wait till HTML document to load prior to executing
$(document).ready(function () {
    // Declare variables
    var targetCounter = 200;
    var currentCounter = 0;
    var wins = 0;
    var loss = 0;
    var imageAddArray = ['assets/images/emerald_noBG.PNG', 'assets/images/miridium_noBG.PNG',
        'assets/images/ruby_noBG.PNG', 'assets/images/sapphire_noBG.PNG', 'assets/images/topaz_noBG.PNG'
    ];

    // Connect newly declared variables to html IDs/Classes
    var winsText = $('#winsText');
    var lossText = $('#lossText');
    var targetText = $('#targetText');
    var currentText = $('#currentText');
    var startBtn = $('#start-btn');
    var messageText = $('#messageText');
    var lastIncrement = $('#lastIncrement');

    var gemBar = $('.gemBar');


    //  Function List
// Function to begin a new match
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
    // Function to shuffle array of images
    function shuffle(array) {
        var currentIndex = array.length;
        var temporaryValue;
        var randomIndex;

        // While the index is above 0
        while (currentIndex !== 0) {

            // Uses Math.Random to generate random number between 0 and current index: randomIndex
            randomIndex = Math.floor(Math.random() * currentIndex);

            // Decrease index/counter
            currentIndex -= 1

            // Swap value from current index of loop with one at random index
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    // Generate Gems and socket into the inventory with values
    function resetAndRandomGems() {
        // Reset gems in bar
        gemBar.empty();

        // Generate 5 gems in place in gem bar
        for (var i = 0; i < 5; i++) {
            // Declare Variables
            var gemSocket = $('<img>');
            var gemValue = 0;

            // Shuffles image array for randomization
            shuffle(imageAddArray);

            // Add class for event handler
            gemSocket.addClass('gem-image');
            // Add Bootstrap Class
            gemSocket.addClass('img-thumbnail');

            // Get random value for gem
            gemValue = Math.floor(Math.random() * 30) + 1;

            // Apply attributes
            gemSocket.attr('data-gemValue', gemValue);
            gemSocket.attr('height', '100px');
            gemSocket.attr('width', '100px');
            gemSocket.attr('style', 'background-color: #161515;');

            // Obtain random image from image array
            gemSocket.attr('src', imageAddArray[i]);

            // Append gemSocket to gemBar
            gemBar.append(gemSocket);
        }
    }

    // Start of Arguments and event handlers

    // Event handler for start button to begin game
    startBtn.on('click', function () {
        messageText.text('Game has begun!');
        startNewMatch();


    });


    // Event handler for clicked gem images
    $('body').on('click', '.gem-image', function () {
        messageText.text('Select next gem to barter');

        // Get data-gemValue and add to counter
        var increaseValue = $(this).attr('data-gemValue')

        // Calculate new counter value
        currentCounter = parseInt(currentCounter) + parseInt(increaseValue);

        // Display to the user the counter and last increase
        currentText.text(currentCounter);
        lastIncrement.text('(+' + increaseValue + ')');

        // Check if current counter is over or below
        if (parseInt(currentCounter) > parseInt(targetCounter)) {
            // Increment losses
            loss++;

            // Display to user total losses and lose message
            messageText.text('You lost!');
            lossText.text(loss);

            // Reset Game
            startNewMatch();

        }
        // If the counter meets the target
        else if (currentCounter === targetCounter) {
            // Increment wins
            wins++;

            // Display to the user total wins and win message
            messageText.text('You win!');
            winsText.text(wins);

            // Reset Game
            startNewMatch();

        }


    });

    // Hover effects for gems
    $('.gemBar').on('mouseover', '.gem-image', function () {
            $(this).css('background-color', 'green');
        }

    )

    $('.gemBar').on('mouseleave', '.gem-image', function () {
            $(this).css('background-color', '#161515');
        }

    )
})