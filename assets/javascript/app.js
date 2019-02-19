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

function rotate(velocity, angle){
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - 
            velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) +
            velocity.y * Math.cos(angle)
    };
    return rotatedVelocities;
};


function collision(ball, otherBall){
    const xVelocityDiff = ball.velocity.x - otherBall.velocity.x;
    const yVelocityDiff = ball.velocity.y - otherBall.velocity.y;

    const xDist = otherBall.x - ball.x;
    const yDist = otherBall.y - ball.y;

    // Preventing any overlap between balls
    if(xVelocityDiff * xDist + yVelocityDiff * yDist >= 0){

        // Getting an angle between the two colliding balls
        const angle = Math.atan2(otherBall.y - ball.y, otherBall.x - ball.x);

        // Storing mass for easier access
        const m1 = ball.mass;
        const m2 = otherBall.mass;

        // Velocity before equation
        const u1 = rotate(ball.velocity, angle)
        const u2 = rotate(otherBall.velocity, angle)
        //  Velocity after collision
        const v1 = {x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y};
        const v2 = {x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y};
        // Final velocity after rotating axis back to  original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);
        // Swapping ball velocities for a bounce effect
        ball.velocity.x = vFinal1.x * 0.9;
        ball.velocity.y = vFinal1.y * 0.9;

        otherBall.velocity.x = vFinal2.x * 0.9;
        otherBall.velocity.y = vFinal2.y * 0.9;
    }
}

const gravity = 0.5;
// Creating our ball object to put on the canvas 
function Ball(x, y, dx, dy,  radius){
    // passing our values to the object
    this.x = x;
    this.y = y;
    this.velocity = {
        x: dx,
        y: dy,
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
            if (getDistance(this.x, this.y, ballArray[i].x , ballArray[i].y) - this.radius * 2 < 0) {
                console.log("Ball has collided.")
                collision( this, ballArray[i]);
            }
        }

        if (this.x - this.radius <= 0 || this.x + this.radius + this.velocity.x >= canvas.width) {
            this.velocity.x = -this.velocity.x;
        }

        // This is applying the affect of gravity to our object when it collides with the bottom edge
        if (this.y - this.radius <= 0 || this.y + this.radius + this.velocity.y >= canvas.height){
            // applying friction
            this.velocity.y = -this.velocity.y * 1;
        } else {
            this.velocity.y += gravity;
        }
        
    
        //  Adding reaction to the mouse 
        if (getDistance(mouse.x, mouse.y, this.x , this.y) - this.radius * 2 < 0 ){
            this.radians += 0.05;

            this.opacity += 0.06;
        } else if ( this.opacity > 0) {
            this.opacity -= 0.02;

            this.opacity = Math.max(0, this.opacity);
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
        let radius = 50;
        let x = randomInteger(radius, canvas.width - radius);
        let y = randomInteger(radius, canvas.height- radius);
        let dx = randomInteger(0, 0);
        let dy = randomInteger(0, 0);
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