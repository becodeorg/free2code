# Position properties

### Set up

Copy the following code in your editor:

```html
<html>
<head>
    <meta charset="utf-8" />
    <style>
   /* Put your styling here */
   body{
      height:3600px;
      padding:0;
      margin:0;
      font-family:sans-serif;
        }
   .parent{
      width:400px;
      height:400px;
      background-color:#eeee;
      border: 4px solid grey;
      margin:auto;
      margin-top:200px;
        }
    .tl,.tr,.bl,.br{
      font-size:10px;
      line-height:150px;
      text-align:center;
      width:150px;
      height:150px;
      background-color: #f26d7d;
        }        

    </style>
</head>
<body>
<!-- put your content here -->
<div class="parent">
   <div class="tl">top left</div>
   <div class="tr">top right</div>
   <div class="bl">bottom left</div>
   <div class="br">bottom right</div>
</div>
</body>
</html>
```

Now re-create this styling as good as possible:

*Don't forget to use display! (Sometimes even on parents...)*

![squares.png](C:\Users\shoks\Documents\prison_project\free2code\2.CSS\3.POSITIONING\2.position\resources\images\squares.png)
