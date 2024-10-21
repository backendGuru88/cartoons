let theTexts = [
    "Tom and Jerry", "Gwen Family", "Zootopia"
]
const headText = document.querySelector('.headT');
let index = 0
setInterval(() => {
    index++
    if(index == theTexts.length){
        index = 0
    }
    headText.textContent =theTexts[index]
}, 1000);