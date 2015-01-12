$(document).ready(function() {


// *****************************************************************************
// Select's
// *****************************************************************************

  $("#select2").select2();
  $("#select1").select2({
    placeholder: "Выпадающий список",
    minimumResultsForSearch: -1
  });


  $(".input-text-disable").prop("readonly", true);

// *****************************************************************************
// Owl Carousel
// *****************************************************************************

  $("#owl-demo").owlCarousel({

    navigation : true, // Show next and prev buttons
    navigationText: [
     "<i class='icon-left'></i>",
     "<i class='icon-right'></i>"
      ],
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true

    // "singleItem:true" is a shortcut for:
    // items : 1, 
    // itemsDesktop : false,
    // itemsDesktopSmall : false,
    // itemsTablet: false,
    // itemsMobile : false
 
  });


// *****************************************************************************
// Correct/Wrong Input's
// *****************************************************************************

  $("input.input-text").on("change", function(){
    if ($(this).val() === "wrong") {
      $(this)
        .addClass("input-text-wrong")
        .closest(".icon")
        .addClass("icon-wrong");
    } else if ($(this).val() === "correct") {
      $(this)
        .addClass("input-text-correct")
        .closest(".icon")
        .addClass("icon-correct");
    } else {
      $(this)
        .removeClass("input-text-wrong input-text-correct")
        .closest(".icon")
        .removeClass("icon-correct icon-wrong")
    };
  });


// *****************************************************************************
// Radio
// *****************************************************************************

  $(".radio").on("change", function(){
    $(".radio:enabled").next().text("Активно");
    $(this).next().text("Отмечено");
  });


// *****************************************************************************
// Checkbox
// *****************************************************************************

  $(".checkbox").on("change", function(){
    if($(this).prop("checked")){
      $(this).next().text("Отмечено");
    } else {
      $(this).next().text("Активно");
    }
  });


  $(".switch").on("change", function(){
    if($(this).prop("checked")){
      $(this).next().text("Включено");
    } else {
      $(this).next().text("Выключено");
    }
  });


  $(".popup-1").on("click", function(){
    $(this).next().toggleClass("hidden");
  });


// *****************************************************************************
// Range Slider
// *****************************************************************************

  $('.rangeslider').noUiSlider({
    start: [ 1200, 9500 ],
    step: 1,
    connect: true,
    range: {
      'min': 0,
      'max': 15000
    },
    format: wNumb({
      decimals: 0,
      postfix: 'Р'
    })
  });

  $(".rangeslider").Link('lower').to('-inline-<div class="rangeslider-tooltip"></div>', function(value) {
    $(this).html('<span>' + value + '</span>');
  });

  $(".rangeslider").Link('upper').to('-inline-<div class="rangeslider-tooltip"></div>', function(value) {
    $(this).html('<span>' + value + '</span>');
  });

  $('.rangeslider-percent').noUiSlider({
    start: 40,
    connect: 'lower',
    step: 1,
    behaviour: "fixed",
    range: {
      'min': 0,
      'max': 100
    }
  });


// *****************************************************************************
// Menu
// *****************************************************************************

  $('.menu-item').on('click', function(e){
    e.preventDefault();
    $(this).closest('li').children('.submenu').slideToggle();
  });

});