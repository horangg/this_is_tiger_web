var change = document.getElementsByClassName("selet");

    change.addEventListener('mouseover', function () {
      selet.src = "./vector2.png"
      console.log('mouse is come')
    });
    change1.addEventListener('mouseout', function () {
      selet.src = ""
      console.log('mouse is leave')
    });