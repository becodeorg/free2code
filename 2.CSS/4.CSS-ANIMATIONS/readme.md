# CSS animation & Transitions

## Transitions

![coolbutton.gif](./resources/images/coolbutton.gif)

CSS transitions allows you to **change CSS property values smoothly**, over a given **duration**.
For example if you hover over a button, the color changes instantly without adding a transition property.
With the transition property and the correct values, we can get smooth transitions between widths, heights, colors, ...

### Syntax

To create a transition effect, you must specify two things:

- the CSS property you want to add an effect to (ex: `background-color`))
- the duration of the effect (ex: `3s`= 3 seconds)

**Note:** If the duration part is not specified, the transition will have no effect, because the default value is 0.

The following example shows a 100px * 100px red `<div>` element. The `<div>` element also has a transition effect for the width property, with a duration of 2 seconds:

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s;
}
```

The transition effect will start when the specified CSS property (width) changes value.

Now, let us specify a new value for the width property when a user mouses over the `<div>` element:

```css
div:hover {
  width: 300px;
}
```

When we hover over the div, it's width increases by 200px over a duration of 2 seconds.

### Transition timing

But the animation looks a bit flat, right? That's because in animation terms this animation is "linear", like a flat line. If we are honest with ourselves, we rather look at rounded lines/shapes rather than a boring flat line.

It also makes your animations more natural..

![Animation-Value-Graph.gif](./resources/images/Animation-Value-Graph.gif)

Here is an example of how we can add a transition timing to our transition:

```css
div{
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s; 
    transition-timing-function: ease-in-out;
    /*You can also just write transition: width 2s ease-in-out-*/
}
```

Feel free to experiment with other _easing functions_  (search for them in the Documentation - remember searching is part of the job of a professional developer! ;-) )

## Animations

An animation lets an element gradually change from one style to another.
You can change as many CSS properties you want, as many times you want.

To use CSS animations you must first specify some *keyframes* for the animation.
A keyframe holds what CSS properties the element will have at a given time.

### The @keyframes Rule

When you specify CSS styles inside the `@keyframes` rule, the animation will gradually change from the current style to the new style at certain times.

To get an animation to work, you must bind the animation to an element.

The following example binds the "example" animation to the `<div>` element. The animation will last for 4 seconds, and it will gradually change the background-color of the `<div>` element from "red" to "yellow":

```css
/* The animation code */
@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}

/* The element to apply the animation to */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```

**This would result something like this:**

![](./resources/images/animation-01.gif)

**Note:** The `animation-duration` property defines how long time an animation should take to complete. If the `animation-duration` property is not specified, no animation will occur, because the default value is `0s` (0 seconds).

In the example above we have specified when the style will change by using the keywords "`from`" and "`to`" (which represents 0% (start) and 100% (complete)).

It is also possible to use percent. By using percent, you can add as many style changes as you like.

The following example will change the background-color of the `<div>` element when the animation is 25% complete, 50% complete, and again when the animation is 100% complete:

```css
/* The animation code */
@keyframes example {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}

/* The element to apply the animation to */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
```

**Result:**  

![](./resources/images/animation-02.gif)

## Conclusion

Animations are pretty cool and fun, isn't it? I could tell you much more about transitions and animation, but that is not the point here! Let's dive into the documentation and get our hands dirty! Feel free to experiment and break things!

![blob.gif](./resources/images/blob.gif)
