$(document).ready(function(){
    
    
    //menu responsive
    $("#showMenu").click(function(){
		$("#MovilMenu").slideDown(700).addClass("Menu");
	});
     $("#CloseMenu").click(function(){
		$("#MovilMenu").slideUp(700).removeClass("Menu");
	});
    $("#CloseHombre").click(function(){
		$("#MovilMenu").slideUp(700).removeClass("Menu");
	});
    $("#CloseMujer").click(function(){
		$("#MovilMenu").slideUp(700).removeClass("Menu");
	});
    $("#CloseBoy").click(function(){
		$("#MovilMenu").slideUp(700).removeClass("Menu");
	});

    
    
    
    
  $('.bxslider').bxSlider();
    
    
     /*activar scroll para menu efecto*/
      $(window).scroll(function() {
    
    if ($(this).scrollTop() > 110) { 
              $(".menu").attr("id","menu");
	        } else {   	         
    $(".menu").removeAttr("id","menu");
	        }
   });
    
    /*Ajax efecto*/
    
    $("#iniciar").click(function(){
    
    var datos = "";
	$.ajax({
		async:true,
		type:"POST",
		dataType:"html",
		contentType:"application/x-www-form-urlencoded",
		url:"http://162.243.104.98/ajax.php",
		data:datos,
		beforeSend:enviando,
		success:recibirDatos,
		timeout:2000,
		error:errorEnvio
	});

function enviando(){
//	$("#comprobar").text("Cargando Informacion....");
    console.log('Cargando.....');
}
function recibirDatos(datos){
	console.log(datos);
      $(".borrar").attr("id","borrar");
    $(".agregar").attr("id","agregar");
    $("#agregar").html(datos);
}
function errorEnvio(datos){
	console.log("La Fuerza no esta Contigo");
    ("#agregar").text("La Fuerza no esta Contigo");
}
        
        
        
    });
    
    /*acordion filtro*/
    
    
     $("#activar").click(function(){ 
    $("#activar").addClass("aco-color");
         $("#activar2").removeClass("aco-color");
            $("#activar3").removeClass("aco-color");
     $(".contenedor-check").slideDown(500).attr("id","contenedor-check");  
      $(".contenedor-check2").slideUp(500).removeAttr("id","contenedor-check");
           $(".contenedor-check3").slideUp(500).removeAttr("id","contenedor-check");
     });
    
    $("#activar2").click(function(){ 
         $("#activar2").addClass("aco-color");
         $("#activar").removeClass("aco-color");
            $("#activar3").removeClass("aco-color");
      $(".contenedor-check2").slideDown(500).attr("id","contenedor-check");
          $(".contenedor-check").slideUp(500).removeAttr("id","contenedor-check");
          $(".contenedor-check3").slideUp(500).removeAttr("id","contenedor-check");
        
     });
    
      $("#activar3").click(function(){ 
           $("#activar3").addClass("aco-color");
            $("#activar2").removeClass("aco-color");
            $("#activar1").removeClass("aco-color");
      $(".contenedor-check3").slideDown(500).attr("id","contenedor-check");
          $(".contenedor-check2").slideUp(500).removeAttr("id","contenedor-check");  
            $(".contenedor-check").slideUp(500).removeAttr("id","contenedor-check");
     });
    
    
    /*lista de productos*/
     var products = [
	{ title: 'Botín', price: 800.44, category: 'Botines', image: 'http://placehold.it/225x225', brand: 'nike' },
	{ title: 'Ojotas', price: 300.99, category: 'Ojotas', image: 'http://placehold.it/225x225', brand: 'adidas' },
	{ title: 'Zapatillas', price: 1120.00, category: 'Calzado', image: 'http://placehold.it/225x225', brand: 'puma' },
	{ title: 'Short', price: 320.44, category: 'Vestimenta', image: 'http://placehold.it/225x225', brand: 'nike' },
	{ title: 'Pantalón', price: 360.44, category: 'Natación', image: 'http://placehold.it/225x225', brand: 'nike' }	
];
        var lista = "";
            var inpar = ""
            for (var i = 0; i < products.length; i++) {
          console.log("Tipo: " + products[i].title + ", Precio: " + products[i].price + ", Categoria: " + products[i].category + ", Foto: " + products[i].image + ", Marca: " + products[i].brand);

        if (i%2==0) {
            inpar = "oferta";
        } else {
          inpar = "";
        } 

               lista=lista+
                    ' <div class="colum colum-3 colum-tablet-movil">' +
                    '<div class="productos">' +
                    '<div class="img-productos imagen">' +
                    '<img class="img" src="'+ products[i].image +'" alt="">' +
                    '</div>' +
                    '<div class="texto-media">' +

                    ' <p class="'+ inpar +' off"></p>' +
                    ' <p class="big">' + products[i].title + '</p>' +
                    '<p class="verde">$ ' + products[i].price + ' <span class="'+ products[i].brand + '"></span></p>' +
                    ' <p class="category">'+ products[i].category + '</p>' +
                 '</div>' +
                   
                   '</div>' +
                    '</div>';
      
       
    };  
    document.getElementById("row").innerHTML = lista;
    
    /*mouse over fotos productos*/
   
//    $(".productos").mouseover(function(){
//          $(".verde", this).attr("id","verde");
//            $(".big", this).attr("id","big");
//      
//        
//    });
        $(".productos").mouseover(function(){
       $(".big",this).attr("id","big");
          $(".verde",this).attr("id","verde");
       
    });

    
      $(".productos").mouseout(function(){
        
          $(".big",this).removeAttr("id","big");
          $(".verde",this).removeAttr("id","verde");
    });
    
    
});   