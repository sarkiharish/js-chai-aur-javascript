//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let interValId;
const startChangingColor = (color) => {
    
    function changeColor() {
        document.body.style.backgroundColor = randomColor()
    }

  if(!interValId) {
    interValId = setInterval(changeColor, 1000)
  }
}
const stopChangingColor = () => {
    clearInterval(interValId)
    interValId = null
}



document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)

