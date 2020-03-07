# CSS introduction

In our previous journey, we have discovered the power of HTML.
But you might have noticed that there is no color at all, it just looks like a plain word document.

Well, that's where CSS comes in!

## What is CSS?

- **CSS** Stands for **C**ascading **S**tyle **S**heets
- CSS describes how HTML **Elements** are to be displayed on screen.
- It can control the layout of multiple pages at once.

In short, CSS is what makes our web pages look good and presentable.
It's a must-have skill for any web developer out there.


## Getting started

There are multiple  ways of implementing CSS in our web-pages.
Here is a small list of the methods we could use.

### 1. Inline CSS
Firstly we can include CSS directly in our HTML elements.
To accomplish this, we make use of the `style` attributes, now we provide properties to it.

```html
<h1 style="color: blue"> Hello world! </h1>
```

![](resources/images/output-inline-style.png)


We could add more properties inside of this method.
But we won't use this method since it can get pretty messy in our HTML file.

### 2. Internal CSS

Another way to include CSS is by using the `<style>` tag inside of our `head` section of our HTML page.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>CSS is awesome! - BeCode</title>

    <style>
        h1{
            color:blue;
        }
    </style>
</head>
```

We just found a solution to not mix our HTML with our CSS, but our styling is still inside of our HTML file.   
Maybe, there is a better way to include our CSS..? Well, yes there!


### 3. External CSS

This is the best way and the only way that we will use throughout the course. The first 2 methods are considered a no go, but they are still a must to know.
Like the name gives it away, we will have some **external** CSS file(s), which we will import inside the `<head>` of our HTML page.

```html
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>The best way! - BeCode</title>
        
        <link rel="stylesheet" type="text/css" href="resources/css/style.css">
    </head>
```

As you can see, we use a `<link>` tag this time to make a connection with our CSS file.
This link tag will need a few attributes to work, the `rel=" stylesheet"` specifies the relationship between the HTML and CSS file, the browser knows now that we are trying to link a Stylesheet (CSS file).
The `type=" text/CSS"` will tell the browser what kind of resource we are linking. It's not an obligation to use this, but we recommend using it to avoid any problems in the future.
Last but not least, the `href="resources/css/style.css"` is our path that the link will use to find the document.   
#### Here is an example of our folder structure:

![](resources/images/linking02.png)


Inside of our CSS file we have written the following:

```css
    h1{
        color:blue;
    }
```

This will give the same output as our result in example 1, the benefit of this is that our CSS is seperated from out HTML **and** we can import this CSS file in multiple pages at once!

## Congratulations,
 
You just discovered the magic of CSS. Now let's see how we can use this in the next section.