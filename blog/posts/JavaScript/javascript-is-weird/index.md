---
title: 특수기호만으로 JavaScript 코드 짜기
slug: js-weird
date: 2022-07-23
tag:
 - JavaScript
description: 자바스크립트를 이상한 방법으로 만들어보자.
blockComment: false
---

## 출처

> 이 글은 해외 유튜버 [Low Level Javascript](https://www.youtube.com/c/LowLevelJavaScript)의 영상을 가져다 번역해 쓴 글임을 알려드립니다.
> <https://youtu.be/sRWE5tnaxlI>  
> 또한 NomadCoder님의 타입스크립트 영상을 참고했습니다. [링크](https://youtu.be/8YIwaO6Cojw)

## 서론

일단 들어가기에 앞서 사람들이 자바스크립트가 이상하다고 말하는 이유는 정말 많다.  
그중 가장 대표적인 이유는 `Type Coercion`이라는 기능 때문인데, 이는 JavaScript가 서로 다른 타입끼리도 더하려고 하는 기능이다. 원래 프로그래밍 언어는 타입이 다르면 **에러**가 나야 하는데, 이걸 계산하려고 하는 바람에 오히려 이상해진다.

예를 들자면 

```js
> 1 + true
< 2
```

**`true`** 를 숫자로 계산하려 `1`로 만들어 버립니다.

```js
> ('b' + 'a' + + 'a' + 'a').toLowerCase()
< 'banana'
```

`+'a'`를 숫자로 바꿔 더할 수 없으므로 `NaN`으로 바뀌는데, 이게 또 문자열이 되서 `"nan"`가 됩니다.

```js
> 2 + '2' + 2
< '222'
> 2 + '2' - 2
< 20
```

마지막에 `+2`냐 `-2`냐에 따라서 문자열과 정수가 되는 마☆법
  
아무튼 이렇게 에러마저 문자열로 취급되는등...

## 개념

기본적으로 자바스크립트에서 다른 타입을 더하면 어떻게 되는지 알아봅시다.

문자열에 숫자를 더하면 문자열이 됩니다.

```js
String + Number = String
> 'a' + 0
< 'a0'
```

불타입에 숫자를 더하면 숫자가 됩니다.
`true`면 1, `false`면 0이 됩니다.

```js
Boolean + Number = Number
> true + 0
< 1
```

이걸 이용해 다음과 같은 식을 계산해 봅시다.

```js
> +[]
< 0
```

`[]`은 `boolean`타입으로 `false`입니다. 근데 앞에 아무것도 없이 `+`를 했으므로 0이 됩니다.

## 구현

이제 본격적으로 시작해보죠.

`({[/>+!-=\]})` 만을 위해 코딩을 하기 위해 모든 글자를 `({[/>+!-=\]})`만 이용해 표현해 봅시다.

먼저 `index.js`를 만듭니다

> ❗ `.ts`확장자를 사용하면 안 됩니다. 이건 `.js`의 이상한 점을 사용했기 때문에 TS를 사용하면 에러가 납니다.

### 숫자 정의하기

먼저 0을 정의합니다.

```js:title=index.js
const zero = '+[]';
```

`![]`가 `false`가 되므로 `!![]`는 `true`가 됩니다.
앞에서 본 것처럼 앞에 `+`를 붙이면 숫자로 만들 수가 있습니다.


```js:title=index.js
const one = '+!![]';
```

물론 이렇게 계속 반복하면 모든 숫자를 만들 수 있겠지만 개발자는 반복을 싫어하므로 함수를 만듭시다. 그리고 `n`이 0이 되면 아무것도 없어지므로 `n`이 0일때를 따로 추가해 줍시다.

```js:title=index.js
const number = (n) => {
  if (n === 0) return zero; //n이 0일때
  return Array.from({ length: n }, () => one).join(' + ');
};
```

>```js
> number(7)
> '+!![] + +!![] + +!![] + +!![] + +!![] + +!![] + +!![]'
>```
>이런식으로 표현식이 나옵니다.


### 문자열 정의하기

먼저 문자열은 JavaScript에 있는 기본 기능으로 `fromCharCode()` 이라는 함수로 Ascii 값을 변환 시킬 수 있습니다.
이외에도 각종 방법을 쓰기위해 우리는 

```
fromChadetSingcsup[space][backslash]
```

라는 기본적인 글자들을 구현해야 합니다.

먼저 글자들을 저장하기 위해 `map`이라는 Object를 만듭시다.

```js:title=index.js
const map = {};
```

#### a 구현

`NaN`이라는 것은 숫자가 아닌것을 숫자로 만드려 할때 나옵니다.
`+{}`을 이용해 `NaN`을 얻어내고 `+[]`을 이용해 문자열로 만들 수 있습니다.

여기서 `NaN`에서 2번째, index 1 의 a를 얻어낼 수 있습니다.
여기서 직접적 숫자를 쓸 수 없으므로 앞에 만들어두었던 `number()`함수를 사용합시다.

```js:title=index.js
// +{}+[] = 'NaN'
map.a = `(+{} +[])[${number(1)}]`
```

#### b,o,e,c,t,[space] 구현하기

`{}`를 `+{}`를 붙여 문자열로 만들면 `[object Object]`라는 값이 나옵니다. 여기서 `b`,`o`,`e`,`c`,`t`,`[space]`를 얻을 수 있습니다.

```js:title=index.js
// {}+[] = '[object Object]'
map.b = `({}+[])[${number(2)}]`;
map.o = `({}+[])[${number(1)}]`;
map.e = `({}+[])[${number(4)}]`;
map.c = `({}+[])[${number(5)}]`;
map.t = `({}+[])[${number(6)}]`;
map[' '] = `({}+[])[${number(7)}]`; // [space]를 map. 뒤에 쓸 수 없으므로 key값을 이용해 값을 정한다.
```

#### f,s,r,u 구현하기

`![]+[]`는 `'false'`이고 `!![]+[]`는 `'true'`입니다. 여기서 `f`,`s`,`r`,`u`를 얻을 수 있습니다.

```js:title=index.js
map.f = `(![]+[])[${number(0)}]`;
map.s = `(![]+[])[${number(3)}]`;
map.r = `(!![]+[])[${number(1)}]`;
map.u = `(!![]+[])[${number(2)}]`;
```

#### i,n 구현하기

원래 수학에서는 안되지만 JavaScript에서는 되는 계산이 있습니다.  
바로 **`0`** 으로 나누는것 입니다.
JavaScript에서는 0이 아닌수를 0으로 나누면 `Infinity` 즉 무한을 얻습니다.
1의 값을 가지고있는 `+!![]`을 0의 값을 가지고 있는`+[]`으로 나누면 `Infinity`가 나옵니다.
동일한 방법으로 문자열 `'Infinity'`로 만들면 `i`,`n`을 얻을 수 있습니다.

```js:title=index.js
map.i = `((+!![]/+[])+[])[${number(3)}]`;
map.n = `((+!![]/+[])+[])[${number(1)}]`;
```

#### S,g,p 구현하기

> 😵여기서부터 조금 어지러워집니다.

먼저 여태 구현한 글자들을 불러올때 하나하나 불러오겠습니다. 그런데 `map.a`, `map.b` 이런것을 반복하는것은 반복 작업입니다. 그러므로 함수를 만들겠습니다.

```js:title=index.js
const fromString = s => {
  return s.split('').map(x => map[x]).join('+') // 문자열을 받아 각각의 문자를 `map`에서 찾아 조합합니다.
}
```

JavaScript에서는 모든게 Object 입니다. 단지 `console.log()`할때 다르게 나오는 것일 뿐 모든 자료에 `.` 을 붙이고 하위 함수나 변수를 불러올 수 있습니다.
그러므로 String에서도 기본적 String 함수인 `constructor`를 불러올 수 있습니다. 여태 구현한 문자열을 살펴보면 `constructor`를 쓸 수 있습니다.

```js
`([]+[])[${fromString('constructor')}]`
```

를 실행시키면 다음과 같은 결과가 나옵니다

```js:title=result
'([]+[])[({}+[])[+!![] + +!![] + +!![] + +!![] + +!![]]+({}+[])[+!![]]+((+!![]/+[])+[])[+!![]]+(![]+[])[+!![] + +!![] + +!![]]+({}+[])[+!![] + +!![] + +!![] + +!![] + +!![] + +!![]]+(!![]+[])[+!![]]+(!![]+[])[+!![] + +!![]]+({}+[])[+!![] + +!![] + +!![] + +!![] + +!![]]+({}+[])[+!![] + +!![] + +!![] + +!![] + +!![] + +!![]]+({}+[])[+!![]]+(!![]+[])[+!![]]]'
```

앞뒤 `'`를 없에고 실행해보면 다음처럼 나옵니다.

```
ƒ String() { [native code] }
```

이걸 `+[]`를 더해 문자열로 만들면 `'ƒ String() { [native code] }'`이 나옵니다.

여기서 `S`,`g`를 구현할 수 있습니다.

```js:title=index.js
map.S = `([]+([]+[])[${fromString('constructor')}])[${number(9)}]`;
map.g = `([]+([]+[])[${fromString('constructor')}])[${number(14)}]`;
```

같은 방법으로 Regex(정규 표현식)의 constructor를 불러오면 `ƒ RegExp() { [native code] }`가 나오고 `+[]`를 더해 문자열로 만들면 `'ƒ RegExp() { [native code] }'`가 나와 `p`를 구현할 수 있습니다.

```js:title=index.js
map.p = `([]+(/-/)[${fromString('constructor')}])[${number(14)}]`;
```

#### '\\' 구현하기

`\`는 특수문자이기 때문에 `\\`로 써야 하고 일반 문자열 속에 넣으려면 다시 두 배가 되므로
정규 표현식을 사용해서 `/\\\\/`로 정하고 `+[]`를 붙여 문자열로 만들어주면 `\`를 구현할 수 있다.

```js:title=index.js
map['\\'] = `(/\\\\/+[])[${number(1)}]`;
```

#### d,h,m 구현하기

여태 얻은 문자들로 `toString()`이라는 함수를 부를 수 있는데, `toString()`에는 10진수, 12진수, 16진수 등 진수를 바꿔 인코딩 할 수 있습니다. 즉, 숫자를 글자로 바꿀 수 있습니다. 예를 들어 `13`을 `14`진수로 인코스 하면 `d`가 나옵니다. 이런 식으로 `d`,`h`,`m` 을 구현할 수 있습니다. 

```js:title=index.js
map.d = `(${number(13)})[${fromString('toString')}](${number(14)})`;
map.h = `(${number(17)})[${fromString('toString')}](${number(18)})`;
map.m = `(${number(22)})[${fromString('toString')}](${number(23)})`;
```

#### C 구현하기

> 이건 꽤 어려운 개념이라 저자도 조금 햇갈립니다.

먼저 JavaScript는 함수도 오브젝트이기 때문에 함수에서 `constructor`를 불러올 수 있습니다. 거기서 `escape`라는 함수를 또 불러올 수 있는데, 그 함수에 `\`를 넣어주면 `"% 5C"`라는 문자열이 나옵니다(`\`의 아스키 값으로 보입니다.) 여기서 index 2의 `C`를 구현할 수 있습니다

```js:title=index.js
map.C = `(()=>{})[${fromString('constructor')}](${fromString(
  'return escape'
)})()(${map['\\']})[${number(2)}]`;
```

#### `fromString()` 함수 발전시키기

만약 들어온 글자가 `map`에 없다면 글자의 Ascii코드를 얻고 문자열 `constructor`에서 `fromCharCode`라는 함수를 불러와 Ascii코드를 넣고 알맞은 글자를 얻을 수 있습니다.

```js:title=index.js
const fromString = (s) => {
  return s
    .split('')
    .map((x) => {
      if (!(x in map)) {
        const charCode = x.charCodeAt(0);
        return `([]+[])[${fromString('constructor')}][${fromString(
          'fromCharCode'
        )}](${number(charCode)})`;
      }
      return map[x];
    })
    .join('+');
};
```
(새로 만드는 함수가 아니라 기존 함수를 변경합니다.)

### 컴파일러 만들기

이제 여태 만든 변환기(?)를 실제로 작동하도록 만듭시다.

```js:title=index.js
const compile = (code) => {
  return `(()=>{})[${fromString('constructor')}](${fromString(code)})()`;
};
```

함수 `constructor`를 불러온 후 인자로 받은 `code`를 특수문자로 변환, 즉각 실행시킵니다.

## 궁극의 코드

```js:title=index.js
const zero = '+[]';
const one = '+!![]';

const number = (n) => {
  if (n === 0) return zero;
  return Array.from({ length: n }, () => one).join(' + ');
};

const map = {};

const fromString = (s) => {
  return s
    .split('')
    .map((x) => {
      if (!(x in map)) {
        const charCode = x.charCodeAt(0);
        return `([]+[])[${fromString('constructor')}][${fromString(
          'fromCharCode'
        )}](${number(charCode)})`;
      }
      return map[x];
    })
    .join('+');
};

map.a = `(+{}+[])[${number(1)}]`;
map.b = `({}+[])[${number(2)}]`;
map.o = `({}+[])[${number(1)}]`;
map.e = `({}+[])[${number(4)}]`;
map.c = `({}+[])[${number(5)}]`;
map.t = `({}+[])[${number(6)}]`;
map[' '] = `({}+[])[${number(7)}]`;
map.f = `(![]+[])[${number(0)}]`;
map.s = `(![]+[])[${number(3)}]`;
map.r = `(!![]+[])[${number(1)}]`;
map.u = `(!![]+[])[${number(2)}]`;
map.i = `((+!![]/+[])+[])[${number(3)}]`;
map.n = `((+!![]/+[])+[])[${number(1)}]`;
map.S = `([]+([]+[])[${fromString('constructor')}])[${number(9)}]`;
map.g = `([]+([]+[])[${fromString('constructor')}])[${number(14)}]`;
map.p = `([]+(/-/)[${fromString('constructor')}])[${number(14)}]`;
map['\\'] = `(/\\\\/+[])[${number(1)}]`;
map.d = `(${number(13)})[${fromString('toString')}](${number(14)})`;
map.h = `(${number(17)})[${fromString('toString')}](${number(18)})`;
map.m = `(${number(22)})[${fromString('toString')}](${number(23)})`;
map.C = `(()=>{})[${fromString('constructor')}](${fromString(
  'return escape'
)})()(${map['\\']})[${number(2)}]`;

const compile = (code) => {
  return `(()=>{})[${fromString('constructor')}](${fromString(code)})()`;
};
```

이제 다음과 같이 `compile`함수에 코드를 인자로 넣으면 특수문자 코드를 반환합니다.

```js
console.log(compile('console.log("Hello, World!");'));
```

터미널에 다음과 같이 넣으면 파일로 만들어 집니다.

```powershell
$ node index.js > helloworld.js
```

<script src="https://gist.github.com/ywbird/82c9bc6662d55487a7e77ee34c045e2e.js"></script>

그대로 브라우저 console 에 실행시켜보면..

> Hello, World!

# 외전

외전으로 compiler로 compiler를 컴파일해봅시다.

<script src="https://gist.github.com/ywbird/4e4f4a1d5724060f82e543c95bae6e7d.js"></script>

실행하면...

> Recursive!!

# 마무리

긴글 읽어주셔서 감사합니다!!
이상으로 **{{ title }}** 포스팅을 마치겠습니다.