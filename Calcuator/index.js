function append(v){

 
   var pre=document.getElementById("display").value;
   if(pre!="Invalid"&&pre!="Infinity"&&pre!="undefined"){
      pre=pre+v;
      document.getElementById("display").value=pre;
   }
   else{
      document.getElementById("display").value=v;
   }
   
}
function calculate(){
   try {
      document.getElementById("display").value= eval(document.getElementById("display").value);
      
   } catch (error) {
      document.getElementById("display").value="Invalid";
   }
  
}
function clr(){
   document.getElementById("display").value="";
}