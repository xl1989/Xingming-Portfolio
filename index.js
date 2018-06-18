var navBar=document.getElementById("navBar");
var aboutPixFlip=document.getElementById("aboutPixFlip");
var proOne_back=document.getElementById("proOne_back");
var proTow_back=document.getElementById("proTow_back");
var proThree_back=document.getElementById("proThree_back");
var cardFace=document.getElementById("cardFace");
var cardBack=document.getElementById("cardBack");

window.onscroll= function scrollAni(){
    if(document.body.scrollTop > 50){
    navBar.className="black";
        }else{
           navBar.className= ""; 
        }
    
     if(document.body.scrollTop>1650){
         cardFace.style.transform="rotateY(-180deg)";
         cardBack.style.transform="rotateY(0deg)";
     }else{
         
          cardFace.style.transform=null;
          cardBack.style.transform=null;
     }
   
     if(document.body.scrollTop > 380){   
        proOne_back.className="proBackRoll";
        proTow_back.className="proBackRoll";
        proThree_back.className="proBackRoll";
          }
        else{
        proOne_back.className="";
        proTow_back.className="";
        proThree_back.className="";
        }
}
 



