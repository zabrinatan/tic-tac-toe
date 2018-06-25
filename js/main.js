//recognise which box is clicked and put image on it.
let player;
let ai;

if (player === 'circle') {
  ai = 'cross'
}
$(document).ready(function() {
      //put image inside squares when square is clicked.

      $('.one').on('click', function() {
          if ($('.one img').length === 0) {
        $('.one').append(`<img src ="images/${player}.png">`)
      } else {
        return;
      }
    })

      $('.two').on('click', function() {
          if ($('.two img').length === 0) {
        $('.two').append(`<img src ="images/${player}.png">`)
      }else {
        return;
      }
    })

      $('.three').on('click', function() {
          if ($('.three img').length === 0) {
        $('.three').append(`<img src ="images/${player}.png">`)
      } else {
        return;
      }
    })
      $('.four').on('click', function() {
          if ($('.four img').length === 0) {
        $('.four').append(`<img src ="images/${player}.png">`)
      } else {
        return;
      }
    })
      $('.five').on('click', function() {
        if ($('.five img').length === 0) {
        $('.five').append(`<img src ="images/${player}.png">`)
      } else {
        return;
      }
    })
      $('.six').on('click', function() {
        if ($('.six img').length === 0) {
        $('.six').append(`<img src ="images/${player}.png">`)
      } else {
        return;
      }
    })
      $('.seven').on('click', function() {
        if ($('.seven img').length === 0) {
        $('.seven').append(`<img src ="images/${player}.png">`)
      }else {
        return;
      }
    })
      $('.eight').on('click', function() {
        if ($('.eight img').length === 0) {
        $('.eight').append(`<img src ="images/${player}.png">`)
      } else {
        return;
      }
    })
      $('.nine').on('click', function() {
        if ($('.nine img').length === 0) {
        $('.nine').append(`<img src ="images/${player}.png">`)
      }else {
       return;
    }
  })


              //change icon images

              $('.circle').on('click', function() {
                $('body').removeClass();
                $('body').addClass('circ');
                player = 'circle';
                ai = 'cross';
              })

              $('.cross').on('click', function() {
                $('body').removeClass();
                $('body').addClass('x');
                player = 'cross';
                ai = 'circle';
              })

              $('.apple').on('click', function() {
                $('body').removeClass();
                $('body').addClass('app');
                player = 'apple';
                ai = 'window';
              })

              $('.windows').on('click', function() {
                $('body').removeClass();
                $('body').addClass('window');
                player = 'window';
                ai = 'apple';
              })

              $('.knight').on('click', function() {
                $('body').removeClass();
                $('body').addClass('horse');
                player = 'knight';
                ai = "rook";
              })

              $('.rook').on('click', function() {
                $('body').removeClass();
                $('body').addClass('piece');
                player = 'rook';
                ai = "knight";
              })




            })
