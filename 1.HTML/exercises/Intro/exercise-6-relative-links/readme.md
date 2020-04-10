# Exercise 6  - Relative links

The true goal of the web was to have a big network of files connected to each other by hyperlinks, that's why we use the HyperText Markup Language (html).
We can achieve this by using the `<a>` tag, or anchor tag, to link to a different file. 

For the `<a>` tag to know where to link to, we will have to provide it with some extra information. We do this by using the 'href' attribute. An attribute is always added in the opening tag of an element.

To link to a different page on your webdomain, you use relative links. In that case the href attribute holds the path to the document you're linking to.

For example:

`<a href="./pages/pagename.html">Link to a page</a>`

The above html element will link to the html document in the pages folder named pagename.html. Between the opening and closing tag you can provide the text for the hyperlink.

In the index.html file, add a relative link to the about page in the pages directory, aswell a target, so when we click the link it opens a new tab.
