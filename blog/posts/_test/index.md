---
title: Test
date: 2022-10-02
slug: test
tag:
 - test
blockComment: false
---

## Emphasis

### Bold

|Markdown |	HTML |	Rendered Output |
|:--|:--|:--|
|`md^%I just love **bold text**.` | `html^%I just love <strong>bold text</strong>.` | I just love **bold** text.|
|`md^%I just love __bold text__.` | `html^%I just love <strong>bold text</strong>.` | I just love __bold__ text.|
|`md^%Love**is**bold` |`html^%Love<strong>is</strong>bold` | Love**is**bold|

### Italic

|Markdown |	HTML |	Rendered Output |
|:--|:--|:--|
|`md^%Italicized text is the *cat's meow*.` | `html^%Italicized text is the <em>cat's meow</em>.` | Italicized text is the *cat’s meow*.|
|`md^%Italicized text is the _cat's meow_.` | `html^%Italicized text is the <em>cat's meow</em>.` | Italicized text is the _cat’s meow_.|
|`md^%A*cat*meow` | `html^%A<em>cat</em>meow` | A*cat*meow|

Aliqua consequat `asd`labore voluptate ad.

## Blockquotes

```markdown
> In deserunt cillum nostrud culpa culpa fugiat et non.  
> Ea labore ut nisi non ad nostrud ut nisi irure dolor dolor duis ullamco.  
> Excepteur tempor deserunt qui aliquip ullamco qui incididunt sint pariatur laborum do Lorem.
```

> In deserunt cillum nostrud culpa culpa fugiat et non.  
> Ea labore ut nisi non ad nostrud ut nisi irure dolor dolor duis ullamco.  
> Excepteur tempor deserunt qui aliquip ullamco qui incididunt sint pariatur laborum do Lorem.

```md
> **note**
> Bonk
```

> **note**  
> Bonk

## Codeblock

~~~markdown
```js
console.log('banana');
```
~~~

Codeblock with title:

~~~markdown:title=markdown.md
```js:title=app.js
console.log('title');
```
~~~

Codeblock with highlight:

~~~markdown
```javascript{1,6-8}
import * as React form 'react';

function App() {
  return (
    <div className="App">
      <p>
        Edit `src/App.js` and save to reload.
      </p>
    </div>
  );
}
export default App;
```
~~~

```javascript {diff, numberLines, 1-3}
import React form 'react';

function App() {
  return (
    <div className="App">
      <p>
-        Edit `src/App.js` and save to reload.
+        Edit `src/index.tsx` and save to reload.
      </p>
    </div>
  );
}
export default App;
```

```javascript {numberLines}
import React form 'react';

function App() {
  return (
    <div className="App">
      <p>
        Edit `src/App.js` and save to reload.
        Edit `src/index.tsx` and save to reload.
      </p>
    </div>
  );
}
export default App;
```

`js^%Code.to.highlight("inline")`

`Banana`

## Image

```markdown
![sourcecodepro](sourcecodepro.png)
```

![sourcecodepro](sourcecodepro.png)

![test](https://velog.velcdn.com/images/bepyan/post/5c38729e-f30e-406f-92e6-de16918f87c0/image.gif)
