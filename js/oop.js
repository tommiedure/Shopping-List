var shoppingList = {


		initialize : function () {
			$('button').click(shoppingList.addItemBtn);
			$(".clickAble").click(shoppingList.listEvent);
			$('.initialList ul').on('click','li a',shoppingList.rmvItem);
			$('.initialList ul').on('change','[type=checkbox]',shoppingList.finalAdd);
			$('.finalList ul').on('change','[type=checkbox]',shoppingList.initialAdd);
			$('.dropDown').click(shoppingList.hideList);

		},

		addItemBtn : function(){    //this adds item  to the initial list from the input
			alert("button clicked");
			var addObj = $(".inputField").val();
			$(".initialList ul").append('<li><input id rel="checked" type="checkbox" value=addObj />' + addObj + '<a class="clickAble item" id="del">Delete</a></li>');
					},



		listEvent : function(){		//this adds item  to the initial list from the listed suggestions
			var addObj = $(this).attr("value");
			$(".initialList ul").append('<li><input id rel="checked" type="checkbox" value=addObj />' + addObj + '<a class="clickAble item" id="del">Delete</a></li>');
								},

		rmvItem : function(){		//this deletes item  from the initial list 
	    		$(this).parent().hide('slow', function(){ $(this).remove(); });
	    						},

		finalAdd : function(){
					var toMove = $(this).parent();
	    				$('.finalList ul').append(toMove);
								},

		initialAdd  : function(){
					var toMove = $(this).parent();
					$('.initialList ul').append(toMove);
								},

		hideList : function() {
				$(".listItems li:not(:last)").fadeToggle('fast');
								}
};

$(document).ready(shoppingList.initialize);