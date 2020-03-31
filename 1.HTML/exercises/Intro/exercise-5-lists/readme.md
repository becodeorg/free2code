# Exercise 5 - Lists

Open the index.html file and compare the html code to the output of the document. 
Identify the 3 different types of lists: ordered, unordered and definition lists. Make sure to check the documentation of these html tags!
In the `<body>` element, add one list of each type with your own content underneath the example lists.

## Starting content

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Exercise 5 - Lists</title>
  </head>

  <body>
    <h1>Top 5 things to see in Bangkok</h1>
    <ol>
      <li>Royal palace</li>
      <li>Wat Pho</li>
      <li>Floating market</li>
      <li>Baiyoke Sky Hotel</li>
      <li>Chatuchak market</li>
    </ol>

    <h1>unordered list</h1>

    <ul>
      <li>This</li>
      <li>is</li>
      <li>a</li>
      <li>list</li>
      <li>that</li>
      <li>is</li>
      <li>not</li>
      <li>ordered</li>
    </ul>

    <h1>Definition list</h1>
    <dl>
      <dt>Water</dt>
      <dd>is wet</dd>
      <dt>Sand</dt>
      <dd>It's coarse and rough and irritating and it gets everywhere</dd>
      <dt>The sky</dt>
      <dd>Is blue</dd>
    </dl>

    <h1>Nested lists</h1>
    <ul>
      <li>
        Rock
        <ul>
          <li>grunge</li>
          <li>protopunk</li>
          <li>mathcore</li>
        </ul>
      </li>
      <li>
        EDM
        <ul>
          <li>fidget house</li>
          <li>moombahcore</li>
        </ul>
      </li>
    </ul>

    <ul>
      <li>
        level1
        <ul>
          <li>
            level2
            <ul>
              <li>
                level3
                <ul>
                  <li>level4</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </body>
</html>

``` 


## Finished content

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Exercise 5 - Lists</title>
  </head>

  <body>
    <h1>Top 5 things to see in Bangkok</h1>
    <ol>
      <li>Royal palace</li>
      <li>Wat Pho</li>
      <li>Floating market</li>
      <li>Baiyoke Sky Hotel</li>
      <li>Chatuchak market</li>
    </ol>

    <h1>unordered list</h1>

    <ul>
      <li>This</li>
      <li>is</li>
      <li>a</li>
      <li>list</li>
      <li>that</li>
      <li>is</li>
      <li>not</li>
      <li>ordered</li>
    </ul>

    <h1>Definiton list</h1>
    <dl>
      <dt>Water</dt>
      <dd>is wet</dd>
      <dt>Sand</dt>
      <dd>It's coarse and rough and irritating and it gets everywhere</dd>
      <dt>The sky</dt>
      <dd>Is blue</dd>
    </dl>

    <h1>Nested lists</h1>
    <ul>
      <li>
        Rock
        <ul>
          <li>grunge</li>
          <li>protopunk</li>
          <li>mathcore</li>
        </ul>
      </li>
      <li>
        EDM
        <ul>
          <li>fidget house</li>
          <li>moombahcore</li>
        </ul>
      </li>
    </ul>

    <ul>
      <li>
        level1
        <ul>
          <li>
            level2
            <ul>
              <li>
                level3
                <ul>
                  <li>level4</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    
    <!-- answer is here -->
    <h2>Top 5 things to see or do in Brussels</h2>
    <ol>
      <li>Atomium</li>
      <li>Manneken Pis</li>
      <li>Grand Market</li>
      <li>Go to a rave party</li>
      <li>Eat a waffle</li>
    </ol>
    
    <h2>Ingredients for pancakes</h2>
    <ul>
      <li>Milk</li>
      <li>Flour</li>
      <li>yeast</li>
      <li>Butter</li>
      <li>An egg</li>
    </ul>
    
    <h2>Company staff</h2>
    
    <dl>
      <dt>CEO</dt>
      <dd>Karen Boers</dd>
      <dt>Trainers</dt>
      <dd><ul>
        <li>Nick Banken</li>
        <li>Sicco Smit</li>
        <li>Emily Marghella</li>
        </ul>
      </dd>
    </dl>
    
  </body>
</html>
``` 
