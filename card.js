let imageArr = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg', 'img9.jpg', 'img10.jpg'];
const newCardBtn = document.getElementById("newCardBtn");
const image = document.getElementById("image");

newCardBtn.addEventListener('click', () => {
  if (imageArr.length != 0) {
    newCardBtn.disabled = true;
    let ranIndex = Math.floor(Math.random() * imageArr.length);
    let ranImg = imageArr[ranIndex];
    imageArr = imageArr.filter(item => item != ranImg);
    
    image.style.animation = 'none';
    image.offsetHeight;
    image.style.animation = 'spin 1500ms linear';
    
    setTimeout(() => {
      image.src = ranImg;
      
      newCardBtn.disabled = false;
    }, 1300);
  } else {
      image.src = 'endingImg.jpg';
    }
});