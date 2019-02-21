$("#navHome").click(function() {
    $('html,body').animate({
        scrollTop: $("#home").offset().top},
        'slow');
});
$("#navAboutMe").click(function() {
    $('html,body').animate({
        scrollTop: $("#aboutMe").offset().top},
        'slow');
});
$("#navPortfolio").click(function() {
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top},
        'slow');
});
$("#navContact").click(function() {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top},
        'slow');
});

// const canvas = document.querySelector('canvas')
// const c = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// rectangle
// c.fillStyle = 'rgba(255, 0, 0, 0.5)'
// c.fillRect(100,100, 100,100);
// lines
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 200);
// c.strokeStyle = "#fa34a3";
// c.stroke();


// // circle
// c.beginPath();
// c.arc( 300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = "gray";
// c.stroke();

// for (let i =0 ; i < 3; i++){
//     let x = Math.random() * window.innerWidth;
//     let y = Math.random() * window.innerHeight;
//     c.beginPath();
//     c.arc( x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = "gray";
//     c.stroke();
// }

// let xNum = Math.random() * innerWidth;
// let yNum = Math.random() * innerHeight;
// let dx = (Math.random() - 0.5) * 8;
// let dy = 4;
// let radius = 30;

// function Circle(x, y, dx, dy, radius) {
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.radius = radius;

//     this.draw = function(){
//         c.beginPath();
//         c.arc( this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         c.strokeStyle = "gray";
//         c.stroke();
//     }

//     // Bouncing our circles off the walls
//     this.update = function(){
//         if ( this.x + this.radius > innerWidth || this.x - this.radius < 0){
//             this.dx = -this.dx;
//         }
//         if ( this.y + this.radius > innerHeight || this.y - this.radius < 0){
//             this.dy = -this.dy;
//         }
//         this.x += this.dx; 
//         this.y += this.dy;
        
//         this.draw();
//     }
// }
// let circle = new Circle(200, 200, 3,3,30);

// let circleArray = [];

// for (let i = 0; i < 10; i++){
//     let radius = 30;
//     let xNum = Math.random() * (innerWidth - radius * 2) + radius;
//     let yNum = Math.random() * (innerHeight- radius * 2) + radius;
//     let dx = (Math.random() - 0.5) * 5;
//     let dy = (Math.random() - 0.5) * 5;

//     circleArray.push(new Circle(xNum, yNum, dx, dy, radius));
// }





// // creating particles
// function particle(x, y, radius, color){
//     this.x= x;
//     this.y = y;
//     this.radius = radius;
//     this.color = color;
//     this.radians = Math.random() * Math.PI * 2;
//     this.velocity =  0.1;
//     this.distanceFromCenter =  randomInteger(50, 120);
                               

//     this.update = () => {
//         const lastPoint = {x: this.x, y: this.y};
//         // this moves our points over time
//         this.radians += this.velocity;

//         // Drag effect
//         this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
//         this.lastMouse.y += (mouse.y )
//         // creating circular motion
//         this.x = x + Math.cos(this.radians) * 50;
//         this.y = y + Math.sin(this.radians) * 50;
//         this.draw(lastPoint);
//     };

//     this.draw = lastPoint => {
//         c.beginPath();
//         c.strokeStyle = this.color;
//         c.lineWidth = this.radius;
//         c.moveTo(lastPoint.x, lastPoint.y);
//         c.lineTo(this.x, this.y);
//         c.stroke();
//         c.closePath();
//         // c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         // c.fillStyle = this.color;
//         // c.fill();
//         // c.closePath();
//     }
// }

// let particles;
// function initilize() {
//     particles = [];

//     for (let i = 0; i < 50; i ++){
//         const radius = ( Math.random() * 2) +1;
//         particles.push( new particle(canvas.width/ 2, canvas.height / 2 , 5 ,'blue'));
//     }
//     console.log(particles);
// }


// function animate() {
//     requestAnimationFrame(animate);
//     // Clears the page before it draws new objects
//     // c.clearRect( 0, 0, innerWidth, innerHeight);
    
// // Creating an after image effect
//     c.fillStyle = 'rgba(255, 255, 255, 0.5)';
//     c.fillRect(0 , 0, canvas.width, )

//     particles.forEach(particle => {
//         particle.update();
//     })
//     for (let i =0; i < circleArray.length; i ++){
//         circleArray[i].update();
//     }

// }

// animate();



const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2,
};

const colors = [
    '#216869',
    '#49A078',
    '#9CC5A1',
    '#1F2421',
     '#DCE1DE'
];

let mouseIsDown = false;
canvas.addEventListener('mousedown', function(e){
    mouseIsDown = true;
    let mx = mouse.x;
    let my = mouse.y;
    for (let i = 0 ; i < ballArray.length; i++){}
    if (getDistance(mouse.x, mouse.y, this.x , this.y) - this.radius * 2 < 0 ){

    }

})

addEventListener("mousemove", function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    console.log(mouse.y)
});

// resizing our canvas on a screen change
addEventListener("resize", function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})

// takes an array of colors and returns a random color
function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)]
};

// Utility function that creates a random integer
function randomInteger (min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// Pythagorean theory applied to calculate distance between objects
function getDistance(x1, y1, x2, y2){
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    // a^2 + b^2 = c^2
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
 
}
  
//Gets distance between two balls surfaces
  function surfaceDistance(ball1, ball2) {  
    var center_dist = getDistance(ball1.x, ball1.y, ball2.x, ball2.y);
    return center_dist - (ball1.radius + ball2.radius);
  }
// Rotates our circles to be on the same x-axis
function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}



function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x * .8;
        particle.velocity.y = vFinal1.y * .8;

        otherParticle.velocity.x = vFinal2.x * .8;
        otherParticle.velocity.y = vFinal2.y * .8;
    }
}
const gravity = 0.1;
// Creating our ball object to put on the canvas 
function Ball(x, y, dx, dy, radius){
    // passing our values to the object
    this.x = x;
    this.y = y;
    this.velocity = {
        x: dx,
        y: dy
    };
    this.radius = radius;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.mass = 1;
    this.opacity = 0.2;

    this.update = ballArray => {
        this.draw();

        for ( let i = 0; i < ballArray.length; i++){
            // never comparing a ball to itself
            if(this === ballArray[i]) continue;

            let sd = surfaceDistance(this, ballArray[i]);
            let cd = getDistance(this.x, this.y, ballArray[i].x , ballArray[i].y)

            if (sd < 0 ) { 
                //get depth of overlap for x & y (based on ratio of sd/cd to x & y depth/diff),
                var x_diff = this.x - ballArray[i].x;  // x difference between balls
                var y_diff = this.y - ballArray[i].y;  // y difference between balls
                var x_depth = x_diff * sd / cd;  // x depth of overlap
                var y_depth = y_diff * sd / cd;  // y depth of overlap
                //and move balls x & y values back by half of shared depth each (altering velocities)
                this.x -= x_depth * 0.5;
                this.y -= y_depth * 0.5;
                ballArray[i].x += x_depth * 0.5;
                ballArray[i].y += y_depth * 0.5;
            };
            if ( cd - (this.radius + ballArray[i].radius) < 0) {
               
                resolveCollision( this, ballArray[i]);
            }
        }
        // Keeping the ball inside the left wall 
        if (this.x - this.radius <= 0 ) {
            this.velocity.x = -this.velocity.x;
            this.x = 0 + this.radius;
        }
        // Keeping the ball inside the right wall
        if (this.x + this.radius + this.velocity.x >= canvas.width){
            this.velocity.x = -this.velocity.x;
            this.x = canvas.width - this.radius;
        }

        // This is applying the affect of gravity to our object when it collides with the bottom edge
        if (this.y + this.radius + this.velocity.y >= canvas.height){
            // keeping our balls above the bottom line
            this.y = canvas.height - this.radius;
            // applying friction 
            this.velocity.y = -this.velocity.y * .8;
        }
         else {
            
            this.velocity.y += gravity;
        }
        
    
        //  Adding reaction to the mouse 
        if (getDistance(mouse.x, mouse.y, this.x , this.y) - this.radius * 4 < 0 ){
            this.opacity = Math.max(.2, this.opacity)
            this.opacity += 0.06;
        } else if ( this.opacity > 0) {
            this.opacity -= 0.07;

            this.opacity = Math.max(.2, this.opacity);
        }

        this.x += this.velocity.x; 
        this.y += this.velocity.y;
        
        
    };

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.save();
        c.globalAlpha = this.opacity;
        c.fillStyle = this.color;
        c.fill();
        c.restore();
        c.stroke();
        c.closePath();

    }
};

let ballArray;
let ball;
function init() {
    ballArray = [];
    for (let i = 0; i < 20; i++){
        let radius = randomInteger (50, 50);
        let x = randomInteger(radius, canvas.width - radius);
        let y = randomInteger(radius, canvas.height- radius);
        let dx = randomInteger(-1, 1);
        let dy = randomInteger(-1, 1);
        if ( i !== 0){
            for ( let j = 0 ; j < ballArray.length; j++){
                if (getDistance(x, y, ballArray[j].x , ballArray[j].y) - radius * 2 < 0) {
                   
                    x = randomInteger(radius, canvas.width - radius);
                    y = randomInteger(radius, canvas.height- radius);
                    
                    j = -1;
                }

            }
        }
        ballArray.push(new Ball(x, y, dx, dy, radius))
    }
};
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, canvas.width, canvas.height);
    
    ballArray.forEach( ball => {
        ball.update(ballArray);
    })
    // detecting collision
 
}

init();
animate();