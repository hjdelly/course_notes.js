// Source page: http://www.dailysmarty.com/

// Console with Command Line API / Firebug- a wrapper that allows you to change an html page easier to use
$('.image-item')       // to select an item start with $ the parens and start a string-returns an array
$('.image-item').first // returns function-to grab first element use .first
$('.image-item').first()         // requires parens because it's a function
$('.image-item').first().hide()  // will remove the first element from the browser

// Compared with
//below-select the document-then use a function(getElementsByClassName-returns an array to return a class) then pass in a string
//now to perform the similar filter-you have to now use bracket syntax call the zeroith index
//now grab the style property-say style.display and set it to none

document.getElementsByClassName('post-item-wrapper')[0].style.display = 'none';

//better written steps here!
// grab the whole doc on the page
// then use the built in function ElementsByClassName ----> use for classes in js
// then wrap the name of the class in a string format 
// then use the bracket syntax to grab the zeroith index (first element)
// now to grab the style property to be able to modify the display style set it equal to 'none