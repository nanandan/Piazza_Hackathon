
	var listOfContacts = [
		{
			
	
		},	
	];
	
	$(document).ready(function(){
	
		var contactTemplate = _.template($("#contact-template").html());
		var resultingHtml = contactTemplate({contacts : listOfContacts});
		
		$(".contacts-list").html(resultingHtml);
		
		$(".pagination").customPaginate({
		
			itemsToPaginate : ".contact",
			itemsPerPage : 3
			
		});		

	});
