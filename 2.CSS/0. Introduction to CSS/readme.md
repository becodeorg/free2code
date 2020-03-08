# How to make your webpages look good, using CSS

In the previous lessons you have been focusing on writing content using HTML, because... That's what HTML is for! HTML was created to describe the content of a web page, like:

```html
<h1>This is a heading</h1>

<p>This is a paragraph.</p>
```

 Now, you probably noticed that what you did was accessible, but not really... visually appealing. At least not as much as many pages that you see when you surf on the internet.  That's because on top of their HTML, these pages are using another language, called CSS, which job is to make the html look visually better.

In other words, CSS allows us to turn this:

![](./without-css.png)

Into that:

![](/Users/aplennevaux/GITHUB/becode-projects/free2code/2.CSS/0. Introduction to CSS/with-css.png)

## CSS stands for Cascading Style Sheet

CSS is the acronym for: *Cascading Style Sheets*. CSS is an extension to basic HTML that allows you to style your web pages.

Say you want the paragraph above to be written in the colour red instead of black. Here is a way to do it using css:

```html
<p style="color:red">This is a paragraph.</p>
```

As you see, the css instructs the browser to use the color red to render the `p`tag.  Easy, isn't it ?
And you can combine several properties. For example, let's make it red and bold:

```html
<p style="color:red;font-weight:bold">This is a paragraph.</p>
```

Easy again! As you can see, you can add up properties using a semicolon (the character `;`) to separate them so the browser does not get confused.

## The CSS Syntax

Look at this schematic, which sums all how to write CSS in a way that the browser understands it.

![](/Users/aplennevaux/GITHUB/becode-projects/free2code/2.CSS/0. Introduction to CSS/selector.gif)

As you can see, there are fancy words here. Don't panick, there won't be much more :-)

"**selector**" indicates which element(s) of your HTML file should receive the instructions. It points to the HTML element you want to style.

The **declaration** block contains one or more declarations separated by semicolons.

Each declaration includes a CSS **property name** and a **value**, separated by a colon (`:`).

A CSS declaration always ends with a semicolon (`;`), and declaration blocks are surrounded by curly braces. Example:

```css
p {
  color: red;
  text-align: center;
}
```

## Where to put your CSS ?

In the above examples, the CSS is written *into* the HTML code as part of an attribute called `style`. That way of adding css is called **inline CSS**. It works and can be handy sometimes, but it's really not recommended as you would quickly get a file with a lot of html and css mixed together, which makes changing the page really tedious. There are 2 other, better, ways.

### 1. The <style> tag

The second, better way to add CSS onto an HTML page is to use an html tag: `<style>`and add your css into it. The above example would then be rewritten like this.

```html
<style>
p {
   font-family: Verdana, Arial, Helvetica, sans-serif;
   font-weight: bold;
   color: #FF0000;
}
</style>
```

Note that, in that case, the CSS instructions have to be above the relevant HTML code, as the browser needs to know how to style the html before it reads the html.

```html
<style>
p {
 font-family: Verdana, Arial, Helvetica, sans-serif;
 font-weight: bold;
 color: #FF0000;
}
</style>
<p>This is a really cool paragraph!</p>
```

There are many, many CSS properties. You don't have to study them or know them by heart. Usually, we tend to use often the same ones so through practice we remember them. And when we don't, we look at the documentation!

### 2. A Seperate file, ending with .css

In the above example we **embed the css code** directly into the page itself. This is fine for smaller projects or in situations where the styles you’re defining will only be used in a single page. But most websites have many pages;  it would be a hassle to have to copy and paste your CSS code into each page.

Besides the fact that you will be cluttering up your pages with the same CSS code, you also find yourself having to edit each of these pages if you want to make a style change. 

Fortunately, you can define/create your CSS styles in a separate file and then link it to the HTML page you want to apply the code to, using the `<link>` tag, which you need to put in the `<head>`tag.

```html
<link href="myFirstStyleSheet.css" rel="stylesheet"  type="text/css">
```

## Working with colours

Colours are a big part of how things look. And we, humans, love colour ! 

There are many millions of colours available in Nature.... Which was quite a challenge to transfer in the digital world of computers.  First, there were only a few colours available, using predefined colour names (like "red", "blue", "beige", "chocolate")... 

### Named colours

A set of standard color names have been defined, letting you use these keywords instead of numeric representations of colors if you choose to do so and there's a keyword representing the exact color you want to use. Color keywords include the standard primary and secondary colors (such as `red`, `blue`, or `orange`), shades of gray (from `black` to `white`, including colors like `darkgray` and `lightgrey`), and a variety of other blended colors including `lightseagreen`, `cornflowerblue`, and `rebeccapurple`.

It's nice to know they exist, but you will feel fastly limited by having only 140 colours.. So let's rather move on to the next way to express colour values...

### The RGB system

Quickly computers became more powerful and able to manipulate millions of different colors, using a mix of the fundamental 3 colours of the screen: Red, Green and Blue, which is known as the "RGB system". 

```css
p{
color: rgb(255, 0, 0);
}
```

This says "I want the maximum of Red (maximum is 255), no green (0), and no blue... Leading to a full bright red color.

This is exactly the same as 

```css
p{
color: red;
}
```

So if, for example, you really want that specific shade of blue that describes the Scottish sky in Spring, then you need to find its correct translation in the RGB system.

```css
p{
color: rgb(0, 182, 255);
}
```

#### Transparency !

You can also use a fourth value, to set the "alpha", which means "transparency" (or "opacity" if you prefer). Its value goes from 0 (totally transparent, the tag would be invisible) to 1 (fully opaque). 

So let's say you want an orange square with 60% transparency, you would do this:

```css
div {
  width: 100px;
  height: 100px;
  background-color: rgb(255, 221, 0,0.6);
}
```

### The Hexadecimal system

For your information, there is yet another way to express the colour values, using the Hexadecimal system. In that system, `red` for example is expressed as `#FF0000`  , `black`is `#000000`and white : `#FFFFFF`.

Hexadecimal system functions from values going from 0 to 9 and continues to A up to F for a total of 16 values. By using 6 Hexadecimal values, you are able to express 256 millions of colours.

The first 2 digits describe the value of Red, the next 2 the values of Green, and the last two the values of Blue.

Just know that it exists and that you will be able to use it if you want. We will not really dig into that in this training.

### Playing with borders

By default, without styling, each tag is rendered as a rectangle which background and borders are transparent. It does not have to stay that way!

Check this out:

```css
p{
    border-top:1px solid red;
    border-right: 1px solid black;
    border-bottom: 2px dotted green;
    border-left: 2px dashed green;
    padding:10px;
    background-color: yellow;
}
```

That sure won't look exactly pretty, but that's not the concern yet.

As you can see, you can specify each border of the rectangle using 3 parameters: the **thickness** of the line (here, in pixels), the line **type** (`solid`,  `dashed`, `dotted`), and its **colour**.



### Comments in CSS

Comments are used to explain the code, and may help when you edit the source code at a later date.  Comments are **ignored by browsers**.

A CSS comment starts with `/*` and ends with `*/`:

```css
/* This is a single-line comment */
p {
  color: red;
}
```

You can add comments wherever you want in the code:



```css
p {
  color: red;  /* Set text color to red */
}
```

Comments can also span multiple lines:

```css
/* This is
a multi-line
comment */

p {
  color: red;
}
```



# Conclusion: let's practice!

All right you that was a lot already. Let's do some exercises! 
