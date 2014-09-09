$(document).ready(function()
{ 

	//for buttons

	$('button').click(function(){
		/*$('.inputField')*/
		alert("button clicked");
		var addObj = $(".inputField").val();
		/*alert(addObj);*/


		$(".initialList ul").append('<li><input id rel="checked" type="checkbox" value=addObj />' + addObj+ '<a class="clickAble item" id="del">Delete</a></li>');
	});


//add to the charted list here

	$(".clickAble").click(function(){
				//when a list item is clicked it should add the item  to your cart
		
		var addObj = $(this).attr("value");
		$(".initialList ul").append('<li>' + '<input id rel="checked" type="checkbox" value=addObj />' + addObj+ '<a class="clickAble item" id="del">Delete</a>'+'</li>');
	});

	

	//ob delete click it should delete an item

	$('.initialList ul').on('click','li a',function()
	    {
	    	

	    		$(this).parent().hide('slow', function(){ $(this).remove(); });

	    });

	
	$('.initialList ul').on('change','[type=checkbox]',function()
	    {
	    	
	    	var toMove = $(this).parent();

	    	$('.finalList ul').append(toMove);

	        });

	$('.finalList ul').on('change','[type=checkbox]',function()
	    {
	    	
	    	var toMove = $(this).parent();

	    	$('.initialList ul').append(toMove);
	        
	        });

		// to hide list items on click

		$('.dropDown').click(function() {
			
			$(".listItems li:not(:last)").fadeToggle('fast');

		});


});