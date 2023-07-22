document.addEventListener('DOMContentLoaded', function() {
  var buttonOpen = document.querySelectorAll('.button-open');
  var buttonClose = document.querySelectorAll('.button-close');
  var box = document.querySelectorAll('.box');

  for (var i = 0; i < buttonOpen.length; i++) {
    buttonOpen[i].style.display = 'none';
    buttonOpen[i].addEventListener('click', function() {
      showBox();
      hideButtonOpen();
    });
  }

  for (var j = 0; j < buttonClose.length; j++) {
    buttonClose[j].addEventListener('click', function() {
      hideBox();
      if (this.classList.contains('button-close')) {
        showButtonOpen();
      }
    });
  }

  function showBox() {
    for (var k = 0; k < box.length; k++) {
      box[k].style.display = 'block';
    }
  }

  function hideBox() {
    for (var l = 0; l < box.length; l++) {
      box[l].style.display = 'none';
    }
  }

  function showButtonOpen() {
    for (var m = 0; m < buttonOpen.length; m++) {
      buttonOpen[m].style.display = 'inline-block';
    }
  }

  function hideButtonOpen() {
    for (var n = 0; n < buttonOpen.length; n++) {
      buttonOpen[n].style.display = 'none';
    }
  }
});
