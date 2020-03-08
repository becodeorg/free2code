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

Now, in the above examples, the CSS is written *into* the HTML code as part of an attribute called `style`. That way of adding css is called **inline CSS**. It works and can be handy sometimes, but it's really not recommended as you would quickly get a file with a lot of html and css mixed together, which makes changing the page really tedious. There are 2 other, better, ways.

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

### Working with colours

### Playing with borders
