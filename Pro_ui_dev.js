 var navBar=document.getElementById("navBar");
var desTitle1 =document.getElementById("desTitle1");
var desTitle2 =document.getElementById("desTitle2");
window.onscroll= function scrollAni(){
    if(document.body.scrollTop > 50){
    navBar.className="black";
        }else{
           navBar.className= ""; 
        }
    
    if(document.body.scrollTop > 100){
    desTitle1.className +=" titleAni";
        }else{
           desTitle1.className -=" titleAni"; 
        }
    
    if(document.body.scrollTop > 400){
    desTitle2.className +=" titleAni";
        }else{
           desTitle2.className -=" titleAni"; 
        }
}