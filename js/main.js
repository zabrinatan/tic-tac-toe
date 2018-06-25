//recognise which box is clicked and put image on it.
let player;
let ai;

if(player ==='circle') {
  ai ='cross'
}
$(document).ready(function(){
//put image inside squares when square is clicked.
  $('.one').on('click' , function() {
    $('.one').append(`<img src ="images/${player}.png">`)
  })


  $('.two').on('click' , function() {
    $('.two').append(`<img src ="images/${player}.png">`)
  })

  $('.three').on('click' , function() {
    $('.three').append(`<img src ="images/${player}.png">`)
  })
  $('.four').on('click' , function() {
    $('.four').append(`<img src ="images/${player}.png">`)
  })
  $('.five').on('click' , function() {
    $('.five').append(`<img src ="images/${player}.png">`)
  })
  $('.six').on('click' , function() {
    $('.six').append(`<img src ="images/${player}.png">`)
  })
  $('.seven').on('click' , function() {
    $('.seven').append(`<img src ="images/${player}.png">`)
  })
  $('.eight').on('click' , function() {
    $('.eight').append(`<img src ="images/${player}.png">`)
  })
  $('.nine').on('click' , function() {
    $('.nine').append(`<img src ="images/${player}.png">`)
  })

//make if statement to only allow 1 image in each div at one time.



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
