# Style this page

## Instructions

Style the HTML elements according to the following instructions. 
DO NOT ALTER THE EXISTING HTML TO DO THIS. WRITE ONLY CSS!

- Give the `<body>` element a background of `#bdc3c7`

- Make the `<h1>` element `#9b59b6`

- Make all `<h2>` elements orange

- Make all `<li>` elements blue (pick your own hexadecimal blue)

- Change the background on every paragraph to be yellow

- Make all inputs have a 3px red border

- Give everything with the class 'hello' a white background

- Give the element with id 'special' a 2px solid blue border(pick your own rgb blue)

- Make all the `<p>`'s that are nested inside of divs 25px font(font-size: 25px)

- Make only inputs with type 'text' have a gray background 

- Give both `<p>'s` inside the 3rd `<div>` a pink background

- Give the 2nd `<p>` inside the 3rd `<div>` a 5px white border

- Make the `<em>` in the 3rd `<div>` element white and 20px font(font-size:20px) 

- Make all "checked" checkboxes have a left margin of 50px(margin-left: 50px)

- Make the `<label>` elements all UPPERCASE without changing the HTML

- Make the first letter of the element with id 'special' green and 100px font size(font-size: 100)

- Make the `<h1>` element's color change to blue when hovered over 

- Make the `<a>` element's that have been visited gray 

## Content in the Editor

Paste this html in your editor:

```html
<html>
<head>
  <meta charset="UTF-8">
  <title>Selectors Exercise</title>
  <link rel="stylesheet" type="text/css" href="selectors.css">
</head>
<body>
  <h1>Selectors Exercise</h1>

<p>PARAGRAPH NOT INSIDE A DIV</p>

<div>
  <p class="hello">I am a paragraph with a class</p>
  <p id="special">I am a paragraph with an ID</p>

  <h2>I am an awesome h2</h2>


  <p>Roof party yr hella synth, Wes Anderson narwhal four dollar toast before they sold out retro lo-fi. Austin iPhone pop-up farm-to-table, PBR&B McSweeney's ennui messenger bag distillery before they sold out Portland wolf fanny pack YOLO. Locavore slow-carb trust fund farm-to-table. Pinterest gastropub lo-fi, McSweeney's trust fund VHS shabby chic ugh Austin twee. Messenger bag banjo lumbersexual, whatever 3 wolf moon normcore. Pug pack 3 wolf moon, typewriter organic chia mustache scenester seitan shabby chic Blue Bottle salvia ugh iPhone.Pack Williamsburg direct trade, cold-pressed disrupt flannel listicle health goth asymmetrical freegan mixtape street art pour-over whatever.</p>

</div>

<div>
  <h2>Things I need to do</h2>

  <ul>
    <li>Walk Dog <input type="checkbox" checked> </li>
    <li>Feed Dog <input type="checkbox" checked> </li>
    <li>Wash Dog <input type="checkbox"></li>
  </ul>
</div>

<div>
  <h2>I am another awesome h2</h2>

  <p>Cardigan Tumblr mlkshk, tilde 3 wolf moon Portland. Heirloom health goth taxidermy blog lo-fi selfies, post-ironic master cleanse fingerstache normcore. Kickstarter plaid twee, bespoke single-origin coffee sustainable lo-fi vinyl Pinterest pork belly <em>cronut skateboard</em> 3 wolf moon. Normcore single-origin coffee salvia, bespoke Austin swag Godard before they sold out kogi disrupt locavore. Shoreditch Vice, artisan American Apparel master cleanse yr salvia vegan. Bespoke letterpress heirloom kale chips deep v four loko. Lomo sustainable put a bird on it trust fund post-ironic</p>

  <p>I'm the second paragraph inside this div!</p>
</div>

<p>PARAGRAPH NOT INSIDE A DIV</p>


<div>
  <h2>A less awesome h2</h2>

  <p>Roof party yr hella synth, Wes Anderson narwhal four dollar toast before they sold out retro lo-fi. Austin iPhone pop-up farm-to-table, PBR&B McSweeney's ennui messenger bag distillery before they sold out Portland wolf pack YOLO. Locavore slow-carb trust fund farm-to-table. Pinterest gastropub lo-fi, McSweeney's trust fund VHS shabby chic ugh Austin twee. Messenger bag banjo lumbersexual, whatever 3 wolf moon normcore. Pug pack 3 wolf moon, typewriter organic chia mustache scenester seitan chic Blue Bottle salvia ugh iPhone. Pack Williamsburg direct trade, cold-pressed disrupt flannel listicle health goth asymmetrical freegan mixtape street art pour-over whatever</p>

  <p>One last paragraph here!</p>

  <a href="https://www.facebook.com">I am a link to facebook</a>
  <a href="https://www.facebook.com">I am another link to facebook</a>
  <br>

  <input type="text" name="name" /><label> Name</label><br/>
  <input type="password" name="password" /><label> Password</label><br/>

</div>

<p>PARAGRAPH NOT INSIDE A DIV</p>

</body>
</html>
```
