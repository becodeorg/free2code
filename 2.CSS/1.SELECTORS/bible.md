# You personal selectors bible: (wip)

Welcome to the most important part of css, the selectors.

A CSS selector is the part of a CSS rule set that actually selects the content you want to style. Let’s look at all the different kinds of selectors available, with a brief description of each.

## Important to know:

Do not be afraid, the list looks long, but you don't have to know them from heart right away.

The more you practice, the better you remember.

## Useage of this bible:

Take a fast read and use it later to find the way you want to select your HTML elements.

#### Universal Selector - (*)

The *universal selector* works like a wild card character, selecting all elements on a page. Every HTML page is built on content placed within HTML tags. Each set of tags represents an element on the page. Look at the following CSS example, which uses the universal selector:

```css
* {
   color: green;
   font-size: 20px;
   line-height: 25px;
}
```

#### Element Type Selector

Also referred to simply as a “type selector,” this selector must match one or more HTML elements of the same name. Thus, a selector of nav would match all HTML `nav`elements, and a selector of `<ul>`would match all HTML unordered lists, or `<ul>` elements.

The following example uses an element type selector to match all `<ul>` elements:

```css
ul {
   list-style: none;
   border: solid 1px #ccc;
}
```

#### ID selector

An ID selector is declared using a hash, or pound symbol (`#`) preceding a string of characters. The string of characters is defined by the developer. This selector matches any HTML element that has an ID attribute with the same value as that of the selector, but minus the hash symbol.

```css
#container {
   width: 960px;
   margin: 0 auto;
}
```

An ID element on a web page should be unique. That is, there should only be a single element on any given page with an ID of `container`. This makes the ID selector quite inflexible, because the styles used in the ID selector rule set can be used only once per page.

#### Class Selector

The class selector is the most useful of all CSS selectors. It’s declared with a dot preceding a string of one or more characters. Just as is the case with an ID selector, this string of characters is defined by the developer. The class selector also matches all elements on the page that have their class attribute set to the same value as the class, minus the dot.

```css
.box {
   padding: 20px;
   margin: 10px;
   width: 240px;
}
```

#### Descendant Combinator

The descendant selector or, more accurately, the descendant combinator lets you combine two or more selectors so you can be more specific in your selection method. For example:

```css
#container .box {
    float: left;
    padding-bottom: 15px;
 }
```

This declaration block will apply to all elements that have a class of box that are inside an element with an ID of `container`. It’s worth noting that the `.box` element doesn’t have to be an immediate child: there could be another element wrapping `.box`, and the styles would still apply.

Look at the following HTML:

```html
<div id="container">
  <div class="box">This will effect me!</div>

  <div class="box-2">Not me!</div>
</div>

<div class="box">Not me!</div>
```

#### Child Combinator

A selector that uses the `child`combinator is similar to a selector that uses a descendant combinator, except it only targets immediate `child` elements:

```css
#container > .box {
   float: left;
   padding-bottom: 15px;
}
```

In this example, the selector will match all elements that have a class of `box` and that are immediate children of the `#container`element. That means, unlike the descendant combinator, there can’t be another element wrapping `.box`—it has to be a direct child element.

```html
<div id="container">
  <div class="box">Affects me!</div>
    <div>
        <div class="box">Not me because I'm in a new div!</div>
    </div>
</div>
```

#### General Sibling Combinator

A selector that uses a general sibling combinator matches elements based on sibling relationships. That is to say, the selected elements are beside each other in the HTML.

```css
h2 ~ p {
   margin-bottom: 20px;
}
```

Let’s apply the CSS from above to the following HTML:

```html
<h2>Title</h2>
<p>Affects me!</p>
<p>Affects me!</p>
<p>Affects me!</p>
<div class="box">
  <p>But not me!</p>
</div>
```
