$(document).ready(function(){
   
   
   $("#btnBoletines").click(function(event) {
        event.preventDefault(); 
         
          $("iframe").remove();
          $("#ContenedorInformacion").html("<iframe src='Pages/pruebasBoletines/index2.html' scrolling='no'></iframe>");
           
    });
  
    $("#btnPlayas").click(function(event) {
        event.preventDefault(); 
         
          $("iframe").remove();
          
           
    });

});