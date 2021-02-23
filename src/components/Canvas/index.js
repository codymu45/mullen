import React, { useEffect, useRef } from 'react';
import { BsChevronDoubleDown } from 'react-icons/bs';
import './style.css';
import { Link } from 'react-scroll';



const Canvas = () => {

  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const c = canvas.getContext('2d');

    var mouse = {
      x: undefined,
      y: undefined
    }

    var maxRadius = 40;

    var colorArray = [
      '#033f63',
      '#28666e',
      '#7c9885',
      '#b5b682',
      '#fedc97'
    ];

    window.addEventListener('mousemove', 
      function(event) {
      mouse.x = event.x;
      mouse.y = event.y;
      })

    window.addEventListener('resize', function() {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      init();
    })

    function Circle(x, y, velx, vely, radius) {
      this.x = x;
      this.y = y;
      this.velx = velx;
      this.vely = vely;
      this.radius = radius;
      this.minRadius = radius;
      this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

      this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
      }
      this.update = function() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.velx = -this.velx;
        }
  
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0){
          this.vely = -this.vely;
        }
  
        this.x += this.velx;
        this.y += this.vely;

        // On mouse hover functionality

        if (mouse.x - this.x < 70 && mouse.x - this.x > -70
          && mouse.y - this.y < 70 && mouse.y - this.y > -70) {
          if (this.radius < maxRadius) {
            this.radius += 1
          }
        } else if (this.radius > this.minRadius) {
          this.radius -= 1;
        }

        this.draw();
      }
    }



    var circleArray = [];
    // var circle = new Circle(200, 200, 3, 3, 30);
    
    function init() {
      // Creating 1000 randomized circles
      
      circleArray = [];
      for ( var i = 0; i < 1000; i++){
        var radius = Math.random() * 5 + 1;
        var x = Math.random() * (canvas.width - radius * 2) + radius;
        var y = Math.random() * (canvas.height - radius * 2) + radius;
        var velx = (Math.random() - 0.5) * 1.2;
        var vely = (Math.random() - 0.5) * 1.2; 

      circleArray.push(new Circle(x, y, velx, vely, radius));
      }
    }


    function animate(){
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);

      for (var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
      }
    }

    init();
    animate();


  }, [])

  return (
    <div id='canvasContainer'>
      <div id='topPage'></div>
        <div className='backgroundCanvas'>
          <canvas ref={canvasRef}/>
        </div>
        <div className='headText'>
          <h1>Cody Mullen</h1>
          <h2>Full Stack Web Developer</h2>
          <button className='seeWork' type='button'>
            <Link className='downArrowToAbout' to='aboutContainer' smooth={true} duration={1000}>
              <span><BsChevronDoubleDown className='downArrow'/></span>
            </Link>
          </button>
        </div>

    </div>
  )
}

export default Canvas
