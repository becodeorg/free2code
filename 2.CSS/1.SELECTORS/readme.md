# Selectors:

Welcome to the most important part of css, the selectors.

A CSS selector is the part of a CSS rule set that actually selects the content you want to style. 



For example I got this piece of HTML:

```html
<div class="becode">
    <p>I am on my way to become a web-developer!</p>
</div>
<div id="white-background">
</div>
```



If I want to have a blue background on the first div, I could do this in CSS:

```css
div{
    height:100px;
    width:100px;
    background-color:blue;
}
```

However, if you do this, you will notice that both div elements will have a blue background.


That's why there more selectors then just the div selector!
For example, we have written class 'becode', why not use it in our css file?

We can select class elements like this:

```css
.becode{
     height:100px;
     width:100px;
     background-color:blue;
}
```

Now only the background of our first div will be changed, just like we wanted!

Please take a brief look inside the documentation of our selectors. They are very important to know and use.
