
const slider_image= document.getElementById("slider-image");
const imagesUrl = ["slideshowDummy.jpg","fur.jpeg","fur2.jpg","fur3.jpg","fur4.jpg"];
var i =0;

function prev() {
    if(i<=0) i=imagesUrl.length;
    i--;
    return setImg();
}

function next(){
    if(i>= imagesUrl.length -1) i=-1;
    i++;
    return setImg();
}

function setImg(){
    return slider_image.setAttribute("src","images/" + imagesUrl[i]);
}