TweenLite.set("#petals", {perspective: 600})
const petalsNumber = 50;
const petals = document.getElementById("petals");
const randomInRange = (min , max) => min+ Math.random() * (max - min);
const animation = (element) => {
    TweenMax.to (element, randomInRange (6, 15),{
        y:window.innerHeight + 100 ,
        ease: Linear.easeNone,
        repeat: -1 , 
        delay: -15,
    });
    TweenMax.to (element, randomInRange (4, 8), {
        x: '+=100',
        rotationZ: randomInRange (0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
    });
    TweenMax.to(element, randomInRange(2, 8), {
        rotationX: randomInRange(0, 360),
        rotationY: randomInRange(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
    });
};
for (let i = 0; i < petalsNumber; i++) {
    const petalElement = document.createElement('div');
    TweenLite.set( petalElement, {
        attr: {class: 'petal'},
        x: randomInRange (0 , window.innerWidth),
        y: randomInRange(-200, -150),
        z: randomInRange(-200, 200)
    });
    petals.appendChild(petalElement);
    animation(petalElement);
}
const typed = new Typed('#text', {
    strings: ['Дорогая мама! Ты-самое дорогое, что есть в моей жизни, и я очень благодарна за твою любовь, за то что ты всегда была рядом со мной, желаю тебе самого хорошего <3 -Твоя Дочька Амира'],
    startDelay : 3000,
    typeSpeed: 50,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: () => {
        const author = document.getElementById("author");
        author.style.opacity = 1;
    }
});
