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



// const canvas = document.querySelector('canvas')
// const c = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let mouse = {
//     x: innerWidth / 2,
//     y: innerHeight / 2,
// };

// let colors = [
//     '#216869',
//     '#49A078',
//     '#9CC5A1',
//     '#1F2421',
//      '#DCE1DE'
// ];

// const gravity = 1;

// addEventListener("mousemove", function(event){
//     mouse.x = event.clientX;
//     mouse.y = event.clientY;
// });
// // resizing our canvas on a screen change
// // addEventListener("resize", function(){
// //     canvas.width = innerWidth;
// //     canvas.height = innerHeight;
// //     init();
// // })

// // takes an array of colors and returns a random color
// function randomColor(colors) {
//     return colors[Math.floor(Math.random() * colors.length)]
// };

// // Utility function that creates a random integer
// function randomInteger (min, max){
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };

// // Pythagorean theory applied to calculate distance between objects
// function getDistance(x1, y1, x2, y2){
//     let xDistance = x2 - x1;
//     let yDistance = y2 - y1;
//     // a^2 + b^2 = c^2
//     return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
 
// }

// // Creating our ball object to put on the canvas **Uppercase your object
// function Particle(x, y, dy, radius, color){
//     // passing our values to the object
//     this.x = x;
//     this.y = y;
//     this.dy = dy;
//     this.radius = radius;
//     this.color = color;

//     this.update = particles => {
//         // for loop
//         // if ( this === particles[i] continue){
//             // if (distance( this.x, this.y, particles[i].x, particles[i].y))}
    
//         if (this.y + this.radius > canvas.height){
//             this.dy = -this.dy * 0.8;
//         } else { 
//             this.dy += gravity;
//             console.log(this.dy);
//         }
//         this.y += this.dy; 
//         this.draw();
//     };

//     this.draw = () => {
//         c.beginPath();
//         c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
//         c.fillStyle = this.color;
//         c.fill();
//         c.closePath();

//     }
// };
// let particle;

// function init() {
//     particle = new Particle(canvas.width / 2, canvas.height / 2, 2, 30, 'red');
// // for ()
//     if (i !==0){
//         for( let j =0; j < particles.length; j++){
//         if(distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0 ){
//             x = Math.random() * innerWidth;
//             j = -1;
//         }};
//     }
// }
// function animate() {
//     requestAnimationFrame(animate);
//     c.clearRect(0,0, canvas.width, canvas.height);
//     particle.update();
//     // detecting collision
//     if (getDistance(circle1.x, circle1.y, circle2.x, circle2.x) < circle1.radius + circle2.radius){
//       circle1.color = 'red';
//     } else { 
//         circle1.color = 'black';
//     }
//     particle.update(particles);
// }
// init();
// animate();