      //Loader //
var load=document.querySelector(".preload");
    window.addEventListener("load",function(){
        load.style.display="none";
})
     //Togelling open//

    function openn(){
        document.getElementById("menu").style.width="300px";
        document.querySelector(".main").style.visibility="hidden";
        document.querySelector(".nav_items").style.visibility="hidden";
       
   
    }
    //togelling close//
    function closee(){
        document.getElementById("menu").style.width="0px";
        document.querySelector(".main").style.visibility="visible";
        document.querySelector(".nav_items").style.visibility="visible";

       }