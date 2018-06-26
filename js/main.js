//recognise which box is clicked and put image on it.
let player;
let ai;
let tile;
let iconId;
let message;
const icons = "circ x app window horse piece";
const playerMoves = [];
const aiMoves = [];
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

//do if statement if content of playermoves/ai moves are in winning condition

const playerWin = function () {
  for (let i = 0 ; i<winningMoves.length ; i++){
      const winCombo = winningMoves[i];
      if (playerMoves.includes( winCombo[0] ) &&
          playerMoves.includes( winCombo[1]) &&
          playerMoves.includes( winCombo[2]) ) {
        message = alert(`Congratulations! ${player} win!`);
        return message;
      } else if (aiMoves.includes(winCombo[0]) &&
                 aiMoves.includes( winCombo[1]) &&
                 aiMoves.includes( winCombo[2]) ) {
        message = alert(`Congratulations! ${ai} win!`);
        return message;
      } else if (playerMoves.length === 4 && aiMoves.length ===4  ) {
        message = alert(`it's a draw!`)
        return message;
      }
  }

}
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

$(document).ready(function() {
  //default hide icons
  $('.icon').hide();
  $('.icons').hide();
  $('.tic-tac-toe').hide();

  //put image inside squares when square is clicked.
  //once you click something tile is pushed and alternates turns
  $('.tile').on('click', function() {
    tile = 1 + $(this).index();
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
    playerWin();
  })
  //change icon images in drop down menu

  $('.circle').on('click', function() {
    player = 'circle';
    $('.icon').hide(1000);
    $('.yellow').hide(1000);
    $('.pink').hide(1000);
    $('.tic-tac-toe').show(1000);
    $('#choose').appendTo('.middle');
    $('#choose2').appendTo('.middle');
    $('#arrow').remove();
    $('body').removeClass("opponent");
    $('body').addClass('circ');
    ai = "cross"
    updateIcon();
  })

  $('.cross').on('click', function() {
    player = 'cross';
    $('.icon').hide(1000);
    $('.yellow').hide(1000);
    $('.pink').hide(1000);
    $('.tic-tac-toe').show(1000);
    $('#choose').appendTo('.middle');
    $('#choose2').appendTo('.middle');
    $('#arrow').remove();
    $('body').removeClass("opponent");
    $('body').addClass('x');
    ai = "circle"
    updateIcon();
  })

  $('.apple').on('click', function() {
    player = 'apple';
    $('.icon').hide(1000);
    $('.yellow').hide(1000);
    $('.pink').hide(1000);
    $('.tic-tac-toe').show(1000);
    $('#choose').appendTo('.middle');
    $('#choose2').appendTo('.middle');
    $('#arrow').remove();
    $('body').removeClass("opponent");
    $('body').addClass('app');
    ai = "window"
    updateIcon();
  })

  $('.windows').on('click', function() {
    player = 'window';
    $('.icon').hide(1000);
    $('.yellow').hide(1000);
    $('.pink').hide(1000);
    $('.tic-tac-toe').show(1000);
    $('#choose').appendTo('.middle');
    $('#choose2').appendTo('.middle');
    $('#arrow').remove();
    $('body').removeClass("opponent");
    $('body').addClass('window');
    ai = "apple"
    updateIcon();

  })

  $('.knight').on('click', function() {
    player = 'knight';
    $('.icon').hide(1000);
    $('.yellow').hide(1000);
    $('.pink').hide(1000);
    $('.tic-tac-toe').show(1000);
    $('#choose').appendTo('.middle');
    $('#choose2').appendTo('.middle');
    $('#arrow').remove();
    $('body').removeClass("opponent");
    $('body').addClass('horse');
    ai = "rook"
    updateIcon();
  })

  $('.rook').on('click', function() {
    player = 'rook';
    $('.icon').hide(1000);
    $('.yellow').hide(1000);
    $('.pink').hide(1000);
    $('.tic-tac-toe').show(1000);
    $('#choose').appendTo('.middle');
    $('#choose2').appendTo('.middle');
    $('#arrow').remove();
    $('body').removeClass("opponent");
    $('body').addClass('piece');
    ai = "knight"
    updateIcon();
  })

  //click buttons and icons appear with slightly transparent background

  $('#choose').on('click', function() {
    if ($('.icons').hasClass('pink')) {
      $('.icons').removeClass('pink')
    }
    $('.icons').addClass('yellow').slideToggle(1000);
    $('.icon').slideToggle(1000);

  })

})
