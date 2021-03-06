//recognise which box is clicked and put image on it.
let player;
let ai;
let tile;
let iconId;
let gameOver;
let result;
let message;
let playerMoves = [];
let aiMoves = [];

// winning possibilities
const winningMoves = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9]
];

//resets the game;
const gameReset = function() {
  playerMoves = [];
  aiMoves = [];
  $('.tile').empty();
  $('.reset').hide();
    $('#choose').html('Choose your icon');
    $('#choose2').html("Opponent's icon ");
  $('#choose').appendTo('.buttons');
  $('#choose2').appendTo('.buttons');
  $('#arrow').show(500);
  $('body').removeClass();
  $('body').addsClass('default-cursor');
}


//do if statement if content of playermoves/ai moves are in winning condition

const playerWin = function() {
  //TODO: edit draw condition to simplify it
  for (let i = 0; i < winningMoves.length; i++) {
    const winCombo = winningMoves[i];
    if (playerMoves.includes(winCombo[0]) &&
      playerMoves.includes(winCombo[1]) &&
      playerMoves.includes(winCombo[2])) {
      message = alert(`Congratulations! ${player} win!`);
      $('.tic-tac-toe').hide();
      $('.reset').show(1000);

    } else if (aiMoves.includes(winCombo[0]) &&
      aiMoves.includes(winCombo[1]) &&
      aiMoves.includes(winCombo[2])) {
      message = alert(`Congratulations! ${ai} win!`);
      $('.tic-tac-toe').hide();
      $('.reset').show(1000);

    } else if (playerMoves.length + aiMoves.length === 9) {
      message = alert(`it's a draw!`);
      $('.tic-tac-toe').hide();

      $('.reset').show(1000);
      break;
    }
  }
  return message;
}

//adds image of chosen icon to buttons and moves the buttons to the middle

//TODO refactor code to make it DRYer
const updateIcon = function() {
  if ($('#choose img').length === 0) {
    $('#choose').html('You:            ');
    $('#choose').append(`<img src ="images/${player}.png">`);
    $('#choose2').html('Opponent:          ');
    $('#choose2').append(`<img src ="images/${ai}.png">`);

  } else {
    $('#choose img:last-child').remove();
    $('#choose2 img:last-child').remove();
    $('#choose').append(`<img src ="images/${player}.png">`);
    $('#choose2').append(`<img src ="images/${ai}.png">`);

  }
}

//player1 will always make the first move
//checks if playermoves is less than ai moves.
// pushes the tile number to player/ai array depending on who'sturn it is
const imageOnTile = function() {
  if (playerMoves.length <= aiMoves.length) {
    playerMoves.push(tile); //player's turn

    if ($(this).has('img').length === 0) {
      iconId = event.target.id;
      $(`#${iconId}`).append(`<img src ="images/${player}.png">`)
      $('body').addClass('opponent');
    } else {
      return;
    }
  } else {
    aiMoves.push(tile); // ai's turn
    if ($(this).has('img').length === 0) {
      iconId = event.target.id;
      $(`#${iconId}`).append(`<img src ="images/${ai}.png">`)
      $('body').removeClass('opponent');
    } else {
      return;
    }
  }
}

$(document).ready(function() {
  $.backstretch('images/beeach.jpg');

  //default hide icons
  $('.icon').hide();
  $('.icons').hide();
  $('.tic-tac-toe').hide();
  $('.reset').hide();

  //put image inside squares when square is clicked.
  //once you click something tile is pushed and alternates turns
  //checks if anyone has won.
  $('.tile').on('click', function(event) {
    tile = 1 + $(this).index();
    imageOnTile();
    playerWin();

  })

  //TODO: refactor below code to make it DRYer
  //when you click a specific icon

  $('.circle').on('click', function() {
    player = 'circle';
    $('.icon').hide(1000);
    $('.yellow').hide(1000);
    $('.tic-tac-toe').show(1000);
    $('#choose').appendTo('.middle');
    $('#choose2').appendTo('.middle');
    $('#arrow').hide();
    $('body').removeClass("opponent");
    $('body').addClass('circ');
    ai = "cross"
    updateIcon();
  })

  $('.cross').on('click', function() {
    player = 'cross';
    $('.icon').hide(1000);
    $('.yellow').hide(1000);
    $('.tic-tac-toe').show(1000);
    $('#choose').appendTo('.middle');
    $('#choose2').appendTo('.middle');
    $('#arrow').hide();
    $('body').removeClass("opponent");
    $('body').addClass('x');
    ai = "circle"
    updateIcon();
  })

  $('.apple').on('click', function() {
    player = 'apple';
    $('.icon').hide(1000);
    $('.yellow').hide(1000);
    $('.tic-tac-toe').show(1000);
    $('#choose').appendTo('.middle');
    $('#choose2').appendTo('.middle');
    $('#arrow').hide();
    $('body').removeClass("opponent");
    $('body').addClass('app');
    ai = "window"
    updateIcon();
  })

  $('.windows').on('click', function() {
    player = 'window';
    $('.icon').hide(1000);
    $('.yellow').hide(1000);
    $('.tic-tac-toe').show(1000);
    $('#choose').appendTo('.middle');
    $('#choose2').appendTo('.middle');
    $('#arrow').hide();
    $('body').removeClass("opponent");
    $('body').addClass('window');
    ai = "apple"
    updateIcon();

  })

  $('.knight').on('click', function() {
    player = 'knight';
    $('.icon').hide(1000);
    $('.yellow').hide(1000);
    $('.tic-tac-toe').show(1000);
    $('#choose').appendTo('.middle');
    $('#choose2').appendTo('.middle');
    $('#arrow').hide();
    $('body').removeClass("opponent");
    $('body').addClass('horse');
    ai = "rook"
    updateIcon();
  })

  $('.rook').on('click', function() {
    player = 'rook';
    $('.icon').hide(1000);
    $('.yellow').hide(1000);
    $('.tic-tac-toe').show(1000);
    $('#choose').appendTo('.middle');
    $('#choose2').appendTo('.middle');
    $('#arrow').hide();
    $('body').removeClass("opponent");
    $('body').addClass('piece');
    ai = "knight"
    updateIcon();
  })

  //click buttons and icons appear with slightly transparent background
  $('#choose').on('click', function() {
    $('.icons').addClass('yellow').slideToggle(1000);
    $('.icon').slideToggle(1000);

  })
  //TODO: refactor to make it DRYer
  //when you click the theme buttons
  $('.theme1').on('click', function(e) {
    e.preventDefault();
    $.backstretch('images/nice.jpg');
  })
  $('.theme2').on('click', function(e) {
    e.preventDefault();
    $.backstretch('images/bridge.jpg');
  })
  $('.theme3').on('click', function(e) {
    e.preventDefault();
    $.backstretch('images/beeach.jpg');
  })

  //reset button
  $('.reset').on('click', function() {
    gameReset();
  })


})
