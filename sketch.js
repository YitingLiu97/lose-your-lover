//get mouseposition, display different colors of the red squares
//click to change the background color 

function showCoords(event) {
    var cX = event.clientX;
    var cY = event.clientY;
    document.getElementById("demo").style.backgroundColor = 'green';
    document.getElementById("demo2").style.backgroundColor = 'purple';

  }

  function randomColor(){
   
      var randColorValue ='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
      var randColorValue2 ='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
      document.getElementById("demo").style.backgroundColor=randColorValue;
      document.getElementById("demo2").style.backgroundColor=randColorValue2;

      // var a = ;
      // var b = 0;
      // var c = 30;
      // document.getElementById("demo").style.backgroundColor="rgb(" + a + "," + b + "," + c + ")";

  }