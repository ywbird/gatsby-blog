---
title: 개발 폰트에 관한 고찰
date: 2022-06-12
slug: dev-font
tag:
  - Design
  - Font
description: 제가 여태 써본 개발 폰트에 관한 고찰.
blockComment: false
---

## 들어가면서

저는 디자인에 관심이 많았고 요즈음은 자주 만들지는 않지만 리소스팩도 만들었고 꿈도 웹 디자이너로 선택하게 되었습니다.
개발할 때 쓰는 폰트로 자주 바꾸는 편이고 관심도 많습니다. 여태 써온 폰트들도 10가지가 넘습니다.
이번 포스트에 그 폰트들에 관한 고찰을 해보려 합니다.

> 무료 폰트만 다룰 것입니다. 폰트에까지 돈을 쓰고 싶지는 않기 때문!

폰트 마다의 개성이 있고 개인 취향이 있기 때문에 장단점은 얘기하지 않겠습니다.

이후 포스트에서도 한 폰트를 파고드는 등 폰트에 관한 포스트도 많이 만들 것입니다.

## 🅰 개발 폰트란? - 다른 폰트와의 차이점

말 그대로 개발할 때 쓰는 폰트입니다.

### 고정폭 - Monospace

고정폭 폰트인 `Monospace` 타입의 폰트로서 읽기 편하게 폰트마다 폭이 다른 가변폭 폰트와 달리 모든 글자의 폭이 동일합니다.

![가변고정폭](https://user-images.githubusercontent.com/83404333/173232538-74a550e6-440c-4b3c-b69d-1c249838ff79.PNG)

### 구분 - Legible

비슷하게 표현되는 `I(대문자 i)`, `l(소문자 L)`, `|(앤터 위에 쉬프트 누르고 치면 나오는거)`등 여려가지를 구분하기 쉽게 해줍니다.

> (이 블로그에는 영어 폰트가 개발 폰트로 적용되어 있기에 구별 가능합니다.)

![variant](https://user-images.githubusercontent.com/83404333/173233649-6cee9f68-db1d-4d62-9845-54931c58b321.png)

### 합자 - Ligature

ligature은 `<--` 같은 문자들이 자동으로 이어져 화살표가 되는 것 같은 기능을 말합니다.

![ligature](https://user-images.githubusercontent.com/83404333/173234438-12d78617-e08b-4b99-ad51-7271179f578a.png)

물론 이미지 외에도 **==** 를 이어주기도 하고 **<=** 를 **≤** 로 바꿔주기도 합니다.

## 🗯 내가 그동안 사용한 폰트들

- [Consolas](#Consolas)
- [JetBrains Mono](#JetBrains-Mono)
- [Fira Code](#Fira-Code)
- [D2Coding](#D2Coding)
- [NeoDunggeunmo Code](#NeoDunggeunmo-Code)
- [Dina](#Dina)
- [Inconsolata](#Inconsolata)
- [Hack](#Hack)
- [Roboto Mono](#Roboto-Mono)
- [Source Code Pro](#Source-Code-Pro)
- [Comic Mono](#Comic-Mono)

### Consolas

**consolas**는 윈도우에 기본으로 설치되어 있는 폰트입니다.  
그리고 개발 폰트적 측면에서도 꽤나 좋은 폰트죠.

![consolas](https://user-images.githubusercontent.com/83404333/188304644-980276a9-7436-481f-ab38-b7c3f94d9eba.png)

물론 기본 설치 폰트기 때문에 [ligature](#합자-ligature)는 지원하지 않습니다.  
특별한 꾸밈이 없기에 뭔가 더 매력적인 느낌입니다.

윈도우즈에 기본 설치되어 있기 때문에 따로 다운로드 링크는 없습니다.

이유는 알 수 없지만 뭘 쓰던지 다시 Consolas로 돌아오는 매력이 있습니다.  

### JetBrains Mono

<https://www.jetbrains.com/lp/mono/>

**JetBrains Mono**는 제가 처음으로 써본 개발 폰트입니다. VSCode를 몰랐을 때 **PyCharm**을 사용했을 때 **PyCharm**의 기본 폰트인 **JetBrains Mono**를 알게 되었습니다.  
이 폰트 또한 필자가 높게 평가하는 폰트 중 하나입니다.

![JetBrains Mono](https://user-images.githubusercontent.com/83404333/188304646-5031479b-7bd8-4a65-a2f4-c8118d2941ab.png)

**IntelliJ IDEA**, **PyCharm**, **Kotlin**등을 개발한 **JetBrains**에서 개발한 폰트입니다.  
정말 많은 [ligature](#합자-ligature)를 지원합니다.

세로로 높아지는 느낌이 강합니다.

깔끔함을 좋아하는 필자에게는 정말 좋은 폰트입니다.

### Fira Code

<https://github.com/tonsky/FiraCode>

정말 많은 사람들이 쓰는 폰트입니다.  
읽을 사람에게 특화되어 대문자 사이에 들어간 `:` 위치를 높이는 등 가독성 끝판왕 폰트입니다.

![Fira Code](https://user-images.githubusercontent.com/83404333/188304648-73845bf3-5a8c-4a1c-9a2c-4396219f2c2a.png)

물론 좋은 폰트지만 필자에게는 그다지 끌리는 폰트는 아니었습니다.  
하지만 [ligature](#합자-ligature)떄문에 익숙해 지려고 가끔 써보고 있습니다.  
  
특이 사항으로는 `r`이 많이 꺾여 있습니다.

[JetBrains Mono](#jetbrains-mono) 같이 많은 [ligature](#합자-ligature)를 지원합니다.

### Iosevka

<https://typeof.net/Iosevka/>

정말 특이한 폰트입니다. 새로로 긴 폰트 중 정말 마음에 드는 폰트입니다.  

![Iosevka](https://user-images.githubusercontent.com/83404333/188304649-9f3c92ee-a3e4-4267-b397-46ff6814a532.png)

사용할떄 눈이 편해지는 느낌이랄까? 읽기 어렵다고 하는 사람들도 있지만 필자에게는 마음이 편해지는 폰트였습니다.

공식 사이트에서 커스터마이징을 할 수 있어서 자신만의 폰트를 만들 수 있다는 특이한 점이 있습니다.
> 단지 커스터마이징 하려면 터미널에서 직접 빌드 해야합니다.

### D2Coding

<https://github.com/naver/d2codingfont>

네이버에서 개발한 폰트입니다. 한국 회사가 만들었기 때문에 한글도 지원한다는 것이 큰 특징입니다. ligature 버전이 따로 있습니다.

![D2Coding](https://user-images.githubusercontent.com/83404333/188304650-faf85005-6289-4b1b-8d84-2f7983ab5fea.png)

나눔 고딕을 기반으로 한 개발 폰트로, 큰 특징은 없지만 그래도 consolas처럼 매력이 있습니다.

### NeoDunggeunmo Code

<https://neodgm.dalgona.dev/neodgm_code.html>

**NeoDunggeunmo Code**는 **Neo둥근모**를 개발 폰트로 만든 것입니다.
한국 개발자 [Dalgona](https://github.com/Dalgona)님이 만들어서 한글을 지원합니다.

![NeoDunggeunmo Code](https://user-images.githubusercontent.com/83404333/188304652-82971812-3613-43e2-a68e-45fa730408fa.png)

물론 [ligature](#합자-ligature)도 지원 합니다. 거의 유일한 배포된 비트맵 폰트로, 각진 글자들이 매력적입니다.

### Dina

<https://www.dcmembers.com/jibsen/download/61/>

이 폰트 또한 앞서 소개한 폰트 같은 비트맵 폰트입니다.  
그러나 폰트 크기가 너무 작고 비트맵 형식으로 된 폰트이기 때문에 VSCode에서 쓸 수 없어 Notepad++같은 서브 에디터에서만 썼던 기억이 있네요.

![dina](https://user-images.githubusercontent.com/83404333/173237045-b2da1173-7b6b-422a-85ce-f4d6dda7d477.png)

### Inconsolata

<https://levien.com/type/myfonts/inconsolata.html>
<https://fonts.google.com/specimen/Inconsolata>

**Inconsolata**는 뭔가 가녀린? 부드러운듯한 느낌을 줍니다.
`t`나 `y`등의 밑 꼬리 부분이 휘어져 있는 게 특징입니다.
`v`, `w`의 대각선 부분도 미세하게 휘어져 있습니다.

이미지에서는 `Inconsolata`에서 부족한 부분을 보완한 버전인 `Inconsolata-g`를 이용했습니다.

![inconsolata-g](https://user-images.githubusercontent.com/83404333/188304653-0d919185-5983-41ee-ab26-f6f159315643.png)

사용할때 이것또한 눈이 편해지는 느낌 입니다.

### Hack

<https://sourcefoundry.org/hack/>

딱히 설명할 필요도 없는 폰트입니다.  
[ligature](#합자-ligature)를 지원하지 않아도 쓸 이유가 충분이 될 정도로 깔끔합니다.  
깔끔함 그것 하나로 필자의 마음을 사로잡았습니다.

![Hack](https://user-images.githubusercontent.com/83404333/188304655-0ea9c1d0-e408-4e0d-9c83-6d8293418565.png)

### Roboto Mono

<https://fonts.google.com/specimen/Roboto+Mono>

**Rotobo Mono**는 구글에서 개발한 폰트입니다. 필자가 써본 결과 읽기는 편하지만 코드를 작성할 때 그다지 편하지는 않았습니다. 사이트나 이미지에서 읽어야 할 때 쓰기 좋은 폰트입니다.

![Roboto Mono](https://user-images.githubusercontent.com/83404333/188304639-2363af6d-f22f-465d-a553-e3d2e0d16145.png)

### Source Code Pro

<https://fonts.google.com/specimen/Source+Code+Pro>
<https://adobe-fonts.github.io/source-code-pro/>

`Source Code Pro`는 어도비에서 만든 개발 폰트입니다. 딱히 큰 특징은 없지만 깔끔합니다.

![source code pro](https://user-images.githubusercontent.com/83404333/188304642-cf0dfb11-19bd-40a2-a972-0428635455e7.png)


### Comic Mono

<https://dtinth.github.io/comic-mono-font/>

**Comic Mono**는 세계 최고의 폰트인 **Comic Sans**를 개발 폰트로 만든 것입니다.
사실 이 폰트는 공식적 개발 폰트라고 보기는 어렵고 장난으로 만든 폰트입니다.

> 만약 진짜로 **Comic Sans**로 만든 폰트를 사용하고 싶다면 일본인 폰트 디자이너인 Toshi Omagari의 유료 폰트인 **Comic Code**를 사용하세요.

![Comic Mono](https://user-images.githubusercontent.com/83404333/188304641-9ead0912-6e49-4061-8f67-2172ba3bf7e3.png)

## 마무리

이상으로 **{{ title }}** 포스팅을 마치겠습니다.

> 이번 포스트는 필자의 개인적인 의견을 담고있습니디.