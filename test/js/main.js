$(document).ready(function(){



  /* p5 sketch constructor */
  var yoff = 0.0;
  var canvasWidth = $('.left-panel').width();
  var canvasHeight = $('#pool').height();

  console.log(canvasWidth, canvasHeight);

  var sketch = function(s){

    s.setup = function(){
      s.createCanvas(canvasWidth, canvasHeight);
      s.colorMode(s.HSB);
      s.rectMode(s.RADIUS);
    }


    s.draw = function(){
      s.background(100);
      s.noStroke();
      // fill wave with mediumaquamarine colour, using rgb, ready for alpha channel
      s.fill(206, 80, 100);

      s.beginShape();

      var xoff = 0;

      // Iterate over horizontal pixels
      for (var x = 0; x <= s.width + 10; x += 10) {

        var y = s.map(s.noise(xoff, yoff), 0, 1, s.height/2, s.height * 3 / 4);
        // var yIncrease = map(mouseY, 0,height, 0, 100);
        // y = y + yIncrease;

        // Set the vertex
        s.vertex(x, y);
        // stroke(255,255,0);
        // noFill();
        // rect(x,y,20,20);

        xoff += 0.05;
      }

      yoff += 0.01;
      s.vertex(s.width + 10, s.height);
      s.vertex(0, s.height);
      s.endShape(s.CLOSE);

    }
  }

  var pool = new p5(sketch, 'pool')

});
