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



document.addEventListener("scroll", function(){
    let topOfPage = $(window).scrollTop();
    let skills = $(".skillIcon").offset().top;
    let distanceToSkills = (skills - topOfPage);
    let profilePic = $('.profilePic').offset().top;
    let distanceToProfile = (profilePic - topOfPage);
    let project = $('.project').offset().top;
    let distanceToProject = (project - topOfPage);
    console.log(distanceToProfile);

    if(distanceToSkills < 500){
    $(".skillIcon").addClass("active");
    } else {
        $(".skillIcon").removeClass("active");
    };
    if(distanceToProfile < 500){
        $(".profilePic").addClass("active");
    } else {
        $(".profilePic").removeClass("active");
    };
    if(distanceToProject < 500){
        $(".project").addClass("active");
    } else {
        $(".project").removeClass("active");
    }
});







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

canvas.width = window.innerWidth -32;
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
let mouseIsUp;
let mouseIsDown = false;
canvas.addEventListener('mousedown', function(){
    mouseIsDown = true;
})
addEventListener("mouseup", function(){
    mouseIsDown = false;
})


canvas.addEventListener("mousemove", function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;

});

// resizing our canvas on a screen change
addEventListener("resize", function(){
    canvas.width = innerWidth -32;
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
const gravity = 0.5;
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
        if( this.y - this.radius <= 0){
            this.velocity.y = -this.velocity.y;
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
        if(getDistance(mouse.x, mouse.y, this.x , this.y) - this.radius * 4 < 0 && mouseIsDown === true){
            this.velocity.y -= 2;
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