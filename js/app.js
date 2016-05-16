$(document).ready(function() {
		$('.add').click(function() {
    	var toAdd = $("input[name=item]").val();
        $('ul').prepend("<li><div class='listeditem'> <i class='fa fa-square-o'  aria-hidden='true'> </i> " + toAdd + " <img class='delete' alt='cancel.svg.png' src='images/close-icon.png'> </div></li>");
        $('img.delete').click(function() {
        	$(this).parent().remove();
        });
        $('.listeditem').click(function() {
        	if ($(this).children('i').hasClass('fa-square-o')) {
        		$(this).children('i').removeClass("fa-square-o").addClass("fa-check-square-o")
        		$(this).addClass("checked")
        	}
        	else {
        		$(this).children('i').removeClass("fa-check-square-o").addClass("fa-square-o")
        		$(this).removeClass("checked")
        	};
        });
	});
		 $('.fa-arrow-down').click(function() {
    		var toAdd = $("input[name=item]").val();
    		$('.common').append("<p><span>" + toAdd + "</span><img class='Cadd' src='images/add.svg.png' alt='add'><img class='cancel' src='images/cancel.svg.png' alt='cancel.svg.png'></p>");
    		$('img.Cadd').click(function(){
        var commonItem = $(this).parent().children("span").text();
            $('ul').prepend("<li><div class='listeditem'> <i class='fa fa-square-o'  aria-hidden='true'> </i> " + commonItem + " <img class='delete' alt='cancel.svg.png' src='images/close-icon.png'> </div></li>");
            $('img.delete').click(function() {
            $(this).parent().remove();
        });
        $('.listeditem').click(function() {
            if ($(this).children('i').hasClass('fa-square-o')) {
                $(this).children('i').removeClass("fa-square-o").addClass("fa-check-square-o")
                $(this).addClass("checked")
            }
            else {
                $(this).children('i').removeClass("fa-check-square-o").addClass("fa-square-o")
                $(this).removeClass("checked")
            };
        });

   		
    		$('img.cancel').click(function() {
    			$(this).parent().remove();
    		});
    	});
        });
    $('img.cancel').click(function() {
    			$(this).parent().remove();
    		});

    $('img.Cadd').click(function(){
        var commonItem = $(this).parent().children("span").text();
            $('ul').prepend("<li><div class='listeditem'> <i class='fa fa-square-o'  aria-hidden='true'> </i> " + commonItem + " <img class='delete' alt='cancel.svg.png' src='images/close-icon.png'> </div></li>");
            $('img.delete').click(function() {
            $(this).parent().remove();
        });
        $('.listeditem').click(function() {
            if ($(this).children('i').hasClass('fa-square-o')) {
                $(this).children('i').removeClass("fa-square-o").addClass("fa-check-square-o")
                $(this).addClass("checked")
            }
            else {
                $(this).children('i').removeClass("fa-check-square-o").addClass("fa-square-o")
                $(this).removeClass("checked")
            };
        });

    })
	
	// $('.cancel').click(function() {
	// 	$('#item').hide()
	// });




});

$(function(){
  var groceryList = [
    { value: 'Bananas'},
    { value: 'Apples'},
    { value: 'Eggs'},
    { value: 'Coffee'},
    { value: 'Ketchup'},
    { value: 'Butter'},
    { value: 'Water'},
    { value: 'Lemons'},
    { value: 'Peanuts'},
    { value: 'Cereal'},
    { value: 'Shampoo'},
    { value: 'Toothpaste'},
    { value: 'Paper Towels'},
    { value: 'Toilet Paper'},
    { value: 'Potatoe Chips'},
    { value: 'Bread'}
  ];
  
  // setup autocomplete function pulling from currencies[] array
  $('#item').autocomplete({
    lookup: groceryList,
    onSelect: function (suggestion) {
      var thehtml = '<strong>Item:</strong> ' + suggestion.value;
      $('#outputcontent').html(thehtml);
      $('input#autocomplete').focus();
    }
  });
  

});

