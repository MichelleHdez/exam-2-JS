function randomImage(){
    options=["PNDJ9795.JPG", "PYBO5119.JPG", "TLNH1432.JPG", "UEPC5878.JPG", "USIS4689.JPG", "GXNE5838.JPG"]
    randomImg= "images/" + options[Math.floor(Math.random() * options.length)];
    img=document.querySelector("#header_img")
    img.setAttribute("src", randomImg)
    img.setAttribute("alt","")    
}

function setImages(){
    options=["PNDJ9795.JPG", "PYBO5119.JPG", "TLNH1432.JPG", "UEPC5878.JPG", "USIS4689.JPG", "GXNE5838.JPG"]
    currentImages=document.querySelectorAll(".flex img")
    for (var i=0; i < currentImages.length; i++){
        console.log("Image " + i)
        randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
        currentImages[i].src=randomImg
        currentImages[i].setAttribute("tabindex","0")
    }
}