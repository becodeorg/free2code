# Exercise: Class selector

**Instructions**

Add the necessary classes in the html below. Then style each of the brand names in the html so that they look as close as possible as their brand logo.
Note that you can also add more HTML tags if you want to (especially for FedEx, you will need to!). In such case, use `<span>` tags, they are useful to color a part of a text

Here is the result you should try to reach (or as close as possible).

![](./resources/toyota.png)

![](./resources/fedex.png)

![](./resources/facebook.png)

**Content in the editor**

```html
<body>
<h2>Brands</h2>
<ol>  
<li><span class="toyota">Toyota</span></li>
<li><span>Toyota</span></li>
<li>FedEx Express</li>
</ol>
</body>
```

**Solution (html)**

```html
<body>
<h2>Brands</h2>
<ol>  
<li><span class="toyota">Toyota</span></li>
<li><span class="facebook">Toyota</span></li>
<li><span class="fedex"><span class="fed">Fed</span><span class="ex">Ex</span> <span class="express">Express</span></span></li>
</ol>
</body>
```

# Exercise: Pseudo-class selector

**Instructions**

Add the necessary style so that when the mouse hover on the word below, it changes color. 

- by default: text is yellow 

- when hovering on it: text is red (state: `:hover`)

- when clicking on it: text is blue (state: `:active`)

- after clicking on it: text is green (state: `:visited`)

Here is an illustration of the result to achieve:

![](./resources/hover-animated.gif)

**Starting content in the editor**

```html
<h2>Links States</h2>
<p><a href="#">Link</a></p>
```

# More exercises

See [Exercise 3](./exercise-3) and [Exercise 4](./exercise-4)
