var numberOfMoves = 0;
var gameHasEnded = false;

//source of shuffle cards: http://stackoverflow.com/questions/2450954/how-to-randomize-a-javascript-array

(function ($) {
  /*jshint strict: true */
  'use strict';
  $.fn.shuffle = function () {
    var currentIndex = this.length, temporaryValue, randomIndex;
    /*global jQuery, document*/
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this[currentIndex];
      this[currentIndex] = this[randomIndex];
      this[randomIndex] = temporaryValue;
    }
    this.each(function (index, element) { // We need the index
      $(element).parent().prepend(element);
    });
    return this;
  };
}(jQuery));
/*jshint strict: true */
function isAMatch(card1, card2) {
  'use strict';
  if (card1 === card2) {
    return true;
  }
  return false;
}
/*jshint strict: true */
function newGame() {
  'use strict';
  var card = $('.card').shuffle();
  card.removeClass('flipped');
  $('.card-front').removeClass('selected matched');
  gameHasEnded = false;
  numberOfMoves = 0;
}
newGame();

/*jshint strict: true */
function handleEndOfGame() {
  'use strict';
  if (!gameHasEnded) {
    // Show number of plays and time on modal
    $('#game-over').foundation('reveal', 'open');
    $('#game-over').foundation('reveal', 'close');
    $('#number-of-moves').text(numberOfMoves);
    numberOfMoves = 0;
    gameHasEnded = true;
  }
}

/*jshint strict: true */
function changeBackground() {
  'use strict';
  $('#dark-background').on('click', function () {
    $('body').css('background', 'url(\'../images/patterns/denim.png\')');
  });
  $('#light-background').on('click', function () {
    $('body').css('background', 'url(\'../images/patterns/debut-light.png\')');
  });
}
changeBackground();
/*jshint strict: true */
function showName() {
  'use strict';
  $('#display-name-on').on('click', function () {
    $('.character-info').removeClass('hidden');
  });
  $('#display-name-off').on('click', function () {
    $('.character-info').addClass('hidden');
  });
}
showName();

function spoilerFree() {
  'use strict';
  $('#spoilers-on').on('click', function () {
    $('.dead').removeClass('hidden');
  });
  $('#spoilers-off').on('click', function () {
    $('.dead').addClass('hidden');
  });
}
spoilerFree();

function slideNavigation() {
  'use strict';
  if ($('.nav-wrapper').hasClass('nav-expanded')) {
    $('#nav').removeClass('nav-expanded');
    return false;
  }
  $('#nav').on('click', function () {
    $('.nav-wrapper').addClass('nav-expanded');
  });
}
$('#menu-button').on('click', slideNavigation);
$('#reset').on('click', newGame);

$(document).ready(function () {
  'use strict';
  newGame();
  $('.card').on('click', function () {
    $(this).addClass('flipped');

    //if 2 are selected on first click, this is a new matching attempt so hide selected cards
    if ($('.selected').length === 2) {
      $(this).removeClass('selected');
    }

    // if card isn't 'matched', add class 'selected'
    if (!$(this).find('.card-front').hasClass('matched')) {
      $(this).find('.card-front').addClass('selected');
    }

    //if there are now 2 cards selected, check to see if they match
    if ($('.selected').length === 2) {
      numberOfMoves++;
      var card1 = $('.selected:eq(0)').attr('class');
      var card2 = $('.selected:eq(1)').attr('class');

      if (isAMatch(card1, card2)) {
        $('.selected').addClass('matched').removeClass('selected');
      }
      if ($('.selected').length === 3){
        $('.selected').removeClass('selected');
      } else {
        setTimeout(function () {
          // Flip the 2 cards back over
          $('.selected').parent().removeClass('flipped');
          $('.selected').removeClass('selected');
        }, 750);
      }
    }

    if ($('.matched').length === $('.card').length) {
      handleEndOfGame();
    }
  });
});