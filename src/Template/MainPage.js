export const MainPage = {
	"title": "Restaurant",
	"navBarItems":
	[
		{
			"name": "Home",
			"link": "home"
		},
		{
			"name": "Menu",
			"link": "menu"
		},
		{
			"name": "Locations",
			"link": ""
		},
		{
			"name": "About Us",
			"link": "aboutus"
		},
		{
			"name": "Contact",
			"link": ""
		},
		{
			"name": "Order Online",
			"link": ""
		}
	],
	"kabobItems":
	[
		{
			"name": "Login",
			"link": ""
		},
		{
			"name": "Settings",
			"link": ""
		},
		{
			"name": "Cart",
			"link": ""
		}
	],
	"cardItems": 
	[
		{
			"title": "Breakfast",
			"caption": "Breakfast",
			"image": "bacon.png",
			"buttonText": "Breakfast Menu",
			"Description": "To start your day right",
			"cardOptions": {
				"background": "light",
				"body": "false",
				"border": "dark",
				"textColor": "dark",
				"imgVariantPos": null,
				"className": ''
			}
		},
		{
			"title": "Lunch",
			"caption": "Lunch",
			"image": "club_sandwich.png",
			"buttonText": "Lunch Menu",
			"Description": "To continue your day well",
			"cardOptions": {
				"background": "light",
				"body": "false",
				"border": "dark",
				"textColor": "dark",
				"imgVariantPos": null,
				"className": ''
			}
		},
		{
			"title": "Dinner",
			"caption": "Dinner",
			"image": "steak.png",
			"buttonText": "Dinner Menu",
			"Description": "To end your day strong",
			"cardOptions": {
				"background": "light",
				"body": "false",
				"border": "dark",
				"textColor": "dark",
				"imgVariantPos": null,
				"className": ''
			}
		}
	],
	"carouselItems": 
	[
		{
			"title": "Breakfast",
			"altText": "Breakfast",
			"image": require("../Images/bacon.png"),
			"description": "To start your day right",
			"interval": null,
			"classNameItem": 'container-fluid',
			"classNameCaption": ''
		},
		{
			"title": "Lunch",
			"altText": "Lunch",
			"image": require("../Images/club_sandwich.png"),
			"description": "To continue your day well",
			"interval": null,
			"classNameItem": 'container-fluid',
			"classNameCaption": ''
		},
		{
			"title": "Dinner",
			"altText": "Dinner",
			"image": require("../Images/steak.png"),
			"description": "To end your day strong",
			"interval": null,
			"classNameItem": 'container-fluid',
			"classNameCaption": ''
		}
	],
	"carouselOptions": {
		"showControls": true,
		"showIndicators": true,
		"defaultInterval": 5000,
		"fade": false,
		"keyboard": true,
		"nextLabel": "Next",
		"pause": 'hover',
		"prevLabel": "Previous",
		"slide": true,
		"touch": true,
		"wrap": true,
		"className": ''
	}
}