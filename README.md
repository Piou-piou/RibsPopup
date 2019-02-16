# RibsPopup
![Dependencies](https://img.shields.io/david/Ribs-organization/ribs-popup.svg)
![Dev dependencies](https://img.shields.io/david/dev/Ribs-organization/ribs-popup.svg)
![Peer dependencies](https://img.shields.io/david/peer/Ribs-organization/ribs-popup.svg)
![npm](https://img.shields.io/npm/v/ribs-popup.svg)
![Licence](https://img.shields.io/github/license/Ribs-organization/ribs-popup.svg)


RibsPopup is a package to display popup box with ajax or inline content


## How install it ?

```
npm install ribs-popup
```

## How use it ?

### import css
You have just to add followings lines to you head in html
```HTML
<link rel="stylesheet" src="node_modules/ribs-popup/dist/css/style.min.css" />
```

### import js
At the end of your body, you have just to add followings lines in html
```HTML
<link rel="stylesheet" src="node_modules/ribs-popup/dist/js/ribs-popup.js" />
```

### open a popup
```HTML
<a href="#" data-ribspopup data-popup="popup-test">Supprimer ce compte</a>
```

To open a popup, you just have to put in the html element you want those attributes : 
- data-ribspopup : that will be trigger by the js to add event on click (required)
- data-popup : the div you want to open in the popup (required)
- data-ajax : recieve the url to open in ajax (will put content in #set-content of the popup)

### the popup div
```
<div class="popup" id="popup-test">
			<div class="content">
				<div id="set-content">
					<h2>Are you sure you want to delete this item ?</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad commodi corporis cupiditate explicabo<br/></p>
					<p class="warning">You can go back if you delete !</p>
				</div>
				
				<div class="link">
					<a class="cancel" data-close>Cancel</a>
					<a href="#" class="validate"  data-validate>Validate</a>
				</div>
				<div class="clear"></div>
			</div>
		</div>
```

You just have to put the code below in your HTML. YOu have some elements that are required :
- data-close : the element that will be used to close the popup
- data-validate : to validate a link. To send to a url add data-href="you-url" or data-form"form-id" to submit it
- #set-content div that will be triggered when you load ajax content. It will be put in it.
