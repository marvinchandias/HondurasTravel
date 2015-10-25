$(document).ready(function(){
   
   
     //Primer Barra 
     $('.Home').click(function(event){
      	  alert('Home');	
          event.preventDefault();
          //Borra el inframe actual
          $("iframe").remove();
          //Contenido sobre el home  o el inicio de la pagina  quitar el comentario y cambiar a la direcion donde esta la pagina a cargar
          $("#ContenedorInformacion").html("<iframe src='Pages/home.html' scrolling='no'></iframe>");

    });
   $("#btnCrearCuenta").click(function(event) {
   	     alert("Crear Cuenta");
        event.preventDefault(); 
          //Borra el iframe actual 
          $("iframe").remove();
          //Coloca el nuevo contenido a la pagina sobre los boletines 
          //$("#ContenedorInformacion").html("<iframe src='' scrolling='no'></iframe>");
           
    });
    $("#btnlenguaje").click(function(event) {
   	     alert("lenguaje");
        event.preventDefault(); 
          //Borra el iframe actual 
          $("iframe").remove();
          //Coloca el nuevo contenido a la pagina sobre los boletines 
          //$("#ContenedorInformacion").html("<iframe src='' scrolling='no'></iframe>");
           
    });

     $("#btnBuscar").click(function(event) {
   	     alert("Buscar");
        event.preventDefault(); 
          //Borra el iframe actual 
          $("iframe").remove();
          //Coloca el nuevo contenido a la pagina sobre los boletines 
          //$("#ContenedorInformacion").html("<iframe src='' scrolling='no'></iframe>");
           
    });



   //Segunda Barra 
   $("#btnBoletines").click(function(event) {
        event.preventDefault(); 
          //Borra el iframe actual 
          $("iframe").remove();
          //Coloca el nuevo contenido a la pagina sobre los boletines 
          $("#ContenedorInformacion").html("<iframe src='Pages/pruebasBoletines/index2.html' scrolling='no'></iframe>");
           
    });
  
     //Destinos 
    $("#btnPlayas").click(function(event) {
        event.preventDefault(); 
          //Borra el inframe actual 
          $("iframe").remove();
          //Contenido sobre el home  o el inicio de la pagina  quitar el comentario y cambiar a la direcion donde esta la pagina a cargar
          //$("#ContenedorInformacion").html("<iframe src='DirecionDepagina' scrolling='no'></iframe>");
           
    });

  $("#btnCiudades").click(function(event) {
        event.preventDefault(); 
          //Borra el inframe actual 
          $("iframe").remove();
          //Contenido sobre el home  o el inicio de la pagina  quitar el comentario y cambiar a la direcion donde esta la pagina a cargar
          //$("#ContenedorInformacion").html("<iframe src='DirecionDepagina' scrolling='no'></iframe>");
           
    });

  $("#btnDestinosnaturales").click(function(event) {
        event.preventDefault(); 
          //Borra el inframe actual 
          $("iframe").remove();
          //Contenido sobre el home  o el inicio de la pagina  quitar el comentario y cambiar a la direcion donde esta la pagina a cargar
          //$("#ContenedorInformacion").html("<iframe src='DirecionDepagina' scrolling='no'></iframe>");
           
    });

 //Hoteles por estrellas
   $("#btnEstrella1").click(function(event) {
        event.preventDefault(); 
          //Borra el inframe actual 
          $("iframe").remove();
          //Contenido sobre el home  o el inicio de la pagina  quitar el comentario y cambiar a la direcion donde esta la pagina a cargar
          //$("#ContenedorInformacion").html("<iframe src='DirecionDepagina' scrolling='no'></iframe>");
           
    });
   
  
    $("#btnEstrella2").click(function(event) {
        event.preventDefault(); 
          //Borra el inframe actual 
          $("iframe").remove();
          //Contenido sobre el home  o el inicio de la pagina  quitar el comentario y cambiar a la direcion donde esta la pagina a cargar
          //$("#ContenedorInformacion").html("<iframe src='DirecionDepagina' scrolling='no'></iframe>");
           
    });

    $("#btnEstrella3").click(function(event) {
        event.preventDefault(); 
          //Borra el inframe actual 
          $("iframe").remove();
          //Contenido sobre el home  o el inicio de la pagina  quitar el comentario y cambiar a la direcion donde esta la pagina a cargar
          //$("#ContenedorInformacion").html("<iframe src='DirecionDepagina' scrolling='no'></iframe>");
           
    });
  

});