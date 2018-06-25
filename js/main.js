//recognise which box is clicked and put image on it.
let player;
let ai;
let tile;
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


      //put image inside squares when square is clicked.

      $('.one').on('click', function() {
        if ($('.one img').length === 0) {
          $('.one').append(`<img src ="images/${player}.png">`)

        } else {
          return;
        }
        tile = 1; //assigning tilenumber to push to playermoves array
        playerMoves.push(tile);
      })

      $('.two').on('click', function() {
        if ($('.two img').length === 0) {
          $('.two').append(`<img src ="images/${player}.png">`)
        } else {
          return;
        }
        tile = 2;
        playerMoves.push(tile);
      })

      $('.three').on('click', function() {
        if ($('.three img').length === 0) {
          $('.three').append(`<img src ="images/${player}.png">`)
        } else {
          return;
        }
        tile = 3;
        playerMoves.push(tile);
      })
      $('.four').on('click', function() {
        if ($('.four img').length === 0) {
          $('.four').append(`<img src ="images/${player}.png">`)
        } else {
          return;
        }
        tile = 4;
        playerMoves.push(tile);
      })
      $('.five').on('click', function() {
        if ($('.five img').length === 0) {
          $('.five').append(`<img src ="images/${player}.png">`)
        } else {
          return;
        }
        tile = 5;
        playerMoves.push(tile);
      })
      $('.six').on('click', function() {
        if ($('.six img').length === 0) {
          $('.six').append(`<img src ="images/${player}.png">`)
        } else {
          return;
        }
        tile = 6;
        playerMoves.push(tile);
      })
      $('.seven').on('click', function() {
        if ($('.seven img').length === 0) {
          $('.seven').append(`<img src ="images/${player}.png">`)
        } else {
          return;
        }
        tile = 7;
        playerMoves.push(tile);
      })
      $('.eight').on('click', function() {
        if ($('.eight img').length === 0) {
          $('.eight').append(`<img src ="images/${player}.png">`)
        } else {
          return;
        }
        tile = 8;
        playerMoves.push(tile);
      })
      $('.nine').on('click', function() {
        if ($('.nine img').length === 0) {
          $('.nine').append(`<img src ="images/${player}.png">`)
        } else {
          return;
        }
        tile = 9;
        playerMoves.push(tile);
      })


      //change icon images

      $('.circle').on('click', function() {
        $('body').removeClass();
        $('body').addClass('circ');
        $('.icon').hide(1000);
        $('.yellow').hide(1000);
        $('.pink').hide(1000);
        $('#choose').appendTo('.middle');
        $('#choose2').appendTo('.middle');
        player = 'circle';
        ai = "cross";
        updateIcon();
      })

      $('.cross').on('click', function() {
        $('body').removeClass();
        $('body').addClass('x');
        $('.icon').hide(1000);
        $('.yellow').hide(1000);
        $('.pink').hide(1000);
        $('#choose').appendTo('.middle');
        $('#choose2').appendTo('.middle');
        player = 'cross';
        ai ="circle"
        updateIcon();

      })

      $('.apple').on('click', function() {
        $('body').removeClass();
        $('body').addClass('app');
        $('.icon').hide(1000);
        $('.yellow').hide(1000);
        $('.pink').hide(1000);
        $('#choose').appendTo('.middle');
        $('#choose2').appendTo('.middle');
        player = 'apple';
        ai = "window";
        updateIcon();
      })

      $('.windows').on('click', function() {
        $('body').removeClass();
        $('body').addClass('window');
        $('.icon').hide(1000);
        $('.yellow').hide(1000);
        $('.pink').hide(1000);
        $('#choose').appendTo('.middle');
        $('#choose2').appendTo('.middle');
        player = 'window';
        ai = "apple";
        updateIcon();
      })

      $('.knight').on('click', function() {
        $('body').removeClass();
        $('body').addClass('horse');
        $('.icon').hide(1000);
        $('.yellow').hide(1000);
        $('.pink').hide(1000);
        $('#choose').appendTo('.middle');
        $('#choose2').appendTo('.middle');
        player = 'knight';
        ai = "rook";
        updateIcon();
      })

      $('.rook').on('click', function() {
        $('body').removeClass();
        $('body').addClass('piece');
        $('.icon').hide(1000);
        $('.yellow').hide(1000);
        $('.pink').hide(1000);
        $('#choose').appendTo('.middle');
        $('#choose2').appendTo('.middle');
        player = 'rook';
        ai = "knight";
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

      // $('#choose2').on('click', function() {
      //   if ($('.icons').hasClass('yellow')) {
      //     $('.icons').removeClass('yellow')
      //   }
      //   $('.icons').addClass('pink').slideToggle(1000);
      //
      //   $('.icon').slideToggle(1000);
      // })
      //
    })

    //make alternate ai and player
    // if player choose X ai = O etc.
