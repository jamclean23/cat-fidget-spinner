//Javascript

//Modules
const ImageMover = (function imageMover () {
    const images = [
        './images/cat1.jpeg',
        './images/cat2.jpeg',
        './images/cat3.jpeg',
        './images/cat4.jpeg',
        './images/cat5.jpeg'
    ];

    function generateImages () {
        const container = document.querySelector('.container');
        for (let i = 1; i < images.length + 1; i++) {
            const newImageFrame = document.createElement('div');
            newImageFrame.classList.add('imageFrame');
            newImageFrame.classList.add('position' + i);
            const image = document.createElement('img');
            image.src = images[i - 1];
            newImageFrame.appendChild(image);
            container.appendChild(newImageFrame);
        }
    }

function moveImages (direction) {
    console.clear();
    console.log(direction);
    imageFrames = document.querySelectorAll('.imageFrame');
    imageFrames.forEach((imageFrame) => {
        imageFrame.classList.remove('under');
        let newPosition = "";
        let currentPosition = imageFrame.classList[1];

        if (direction === "right") {
            newPosition = (+currentPosition.substr(8, 1) + 1);
        } else if (direction === "left") {
            newPosition = (+currentPosition.substr(8, 1) - 1);
        }
        if (newPosition > 5) {
            newPosition = 1;
            imageFrame.classList.add('under');
        } else if (newPosition < 1) {
            newPosition = 5;
            imageFrame.classList.add('under');
        }

        const newClass = currentPosition.substr(0, 8) + newPosition;

        imageFrame.classList.remove(currentPosition);
        imageFrame.classList.add(newClass);
        console.log(imageFrame.classList);
    });
}

    return {
        generateImages,
        moveImages
    }
})();

//Event listeners
const leftButton = document.querySelector('button.left');
leftButton.addEventListener('click', () => {
    ImageMover.moveImages("left");
});

const rightButton = document.querySelector('button.right');
rightButton.addEventListener('click', () => {
    ImageMover.moveImages("right");
});

//Initialize
ImageMover.generateImages();
setInterval(ImageMover.moveImages, 5000, "right");