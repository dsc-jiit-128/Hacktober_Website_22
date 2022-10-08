let flag = false;
function onClick(){
    // let navdiv = document.getElementById("navDiv");
    let menu = document.getElementById("navDiv");
    if(flag===false){
        menu.classList.add("active");
        flag=true;
    } else {
        menu.classList.remove("active");
        flag=false;
    }
    console.log("clicked");
}