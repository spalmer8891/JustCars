$(document).ready(function() {
  
	//alert("OK Everthing is good!!!");
	//$('#main').load("view/home.html", {}, );
	//$('#main').load('http://www.google.com');

	/**$("#main").load("view/home.html",{valor1:'primer valor', valor2:'segundo valor'}, function(response, status, xhr) {
		if (status == "error") {
	    	var msg = "Error!, algo ha sucedido: ";
	    	$("#main").html(msg + xhr.status + " " + xhr.statusText);
		}
	});**/

	/**
	 * Function to charge the home page.
	 * 
	 * date: 12/03/2019
	 * author: Diego
	 */
	$.ajax({  
        url: 'view/home.html',  
        success: function(data) {  
            $('#main').html(data);  
        }  
	});

	/**
	 * Function to charge the home page.
	 * 
	 * date: 12/03/2019
	 * author: Diego
	 */
	$('#home').click(function(){
		$.ajax({  
			url: 'view/home.html',  
			success: function(data) {  
				$('#main').html(data);  
			}  
		}); 
	});

	/**
	 * Function to charge the cellPhones page.
	 * 
	 * date: 12/03/2019
	 * author: Diego
	 */
	$('#cellPhones').click(function(){
		$.ajax({  
			url: 'view/cellphones.html',  
			success: function(data) {  
				$('#main').html(data);  
			}  
		}); 
	});

	/**
	 * Function to charge the about us page.
	 * 
	 * date: 12/03/2019
	 * author: Diego
	 */
	$('#about').click(function(){
		$.ajax({  
			url: 'view/about.html',  
			success: function(data) {  
				$('#main').html(data);  
			}  
		});
	});

	/**
	 * Function to charge the contact page.
	 * 
	 * date: 12/03/2019
	 * author: Diego
	 */
	$('#contact').click(function(){
		$.ajax({  
			url: 'view/contact.html',  
			success: function(data) {  
				$('#main').html(data);  
			}  
		});
	}); 

	


});