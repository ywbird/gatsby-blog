---
title: I WANNA MAKER toggle 구현하기
date: 2022-03-19
slug: iwm-toggle
tag:
  - I_Wanna_Maker
description: I WANNA MAKER에서 toggle 기능을 만들어 봅시다.
---

## 들어가면서...

자! 새로운 시리즈 입니다. [I WANNA BE THE GUY](https://iwbtg.kayin.moe/index.html), [I Wanna Be The Boshy](https://namu.wiki/w/I%20Wanna%20Be%20The%20Boshy)등의 게임 맵을 직접 디자인 할 수 있는 게임 입니다.

인지도가 그렇게 높지는 않지만 레벨이 16만 개 정도이고 하는 사람은 많지 않지만 썩은물이 넘쳐나는 게임입니다.

스팀에서 무료로 배포하고 있습니다.

링크: <https://store.steampowered.com/app/1114940/>

![](https://cdn.akamai.steamstatic.com/steam/apps/1114940/ss_06cb37111347d86d9a3b04e20c373eaa2249d6a6.600x338.jpg?t=1644805039)
![](https://cdn.akamai.steamstatic.com/steam/apps/1114940/ss_1994e2b8938e00a0128aa69aa4bafce5ffdf9c70.600x338.jpg?t=1644805039)

<!-- ![](https://cdn.akamai.steamstatic.com/steam/apps/1114940/ss_549394f1634b17948319948e9c4708b39323879b.600x338.jpg?t=1644805039)
![](https://cdn.akamai.steamstatic.com/steam/apps/1114940/ss_105d2fe02257693033b9cdc22564d632cc6e1970.600x338.jpg?t=1644805039)
![](https://cdn.akamai.steamstatic.com/steam/apps/1114940/ss_cbc534b6a2bb762ddf0ff9f8cd0f20a271704733.600x338.jpg?t=1644805039)
![](https://cdn.akamai.steamstatic.com/steam/apps/1114940/ss_8f26482b4788f95a1433b075522ac5f0aab5ea64.600x338.jpg?t=1644805039)
![](https://cdn.akamai.steamstatic.com/steam/apps/1114940/ss_5ac6d54d7f5681c2ed1dcec460f4f56743a2e3e0.600x338.jpg?t=1644805039)
![](https://cdn.akamai.steamstatic.com/steam/apps/1114940/ss_b4e9960f17f3b02622b7f78bf3921efbde46c90c.600x338.jpg?t=1644805039)
![](https://cdn.akamai.steamstatic.com/steam/apps/1114940/ss_6b3cc028402027c2afb6740ded79731f7ab27978.600x338.jpg?t=1644805039) -->

![](https://cdn.akamai.steamstatic.com/steam/apps/1114940/ss_9744a85967b80ca90cb0420806a6642c0e834aad.600x338.jpg?t=1644805039)

`이미지 출처 I WANNA MAKER 스팀 페이지`

## toggle 이란?

toggle(토글)이란 두 값이 있을 때 스위치를 한번 누르면 한 값이 되고, 다시 한번 누르면 다른 값으로 변하는 것이다.
대표적으로 checkbox이다. 아래처럼 말이다.

<input type="checkbox" />

## 만들기

`I WANNA MAKER 에디터에 관한 기초적인 지식은 알고있어야 한다.` (추후에 포스팅 예정)<br><br>

### 1. 오브젝트 트리거 설치하기

트리거를 오브젝트 트리거를 아래와 같이 설치한다. 따로 이벤트를 넣을 필요는 없다. 첫번째 트리거 넘버를 **`A`**, 두번째 트리거 넘버를 **`B`**, 새번째 트리거 넘버를 **`C`** 라고 하자.

![](https://user-images.githubusercontent.com/83404333/159150018-c31983f5-198d-4794-b53a-6cd09f38d03c.png)

### 2. 회로 블럭 설치하기.

아무 블럭(떨어지거나 상호작용이 가능한 블럭은 별로 추천하지 않는다.)을 설치한다.

![](https://user-images.githubusercontent.com/83404333/159150540-e7f69f2d-5963-4b1f-9efe-4a8d5ec8e296.png)

### 3. 이벤트 넣기

[2.](#2-회로-블럭-설치하기)에서 설치한 블럭에 이벤트를 넣는다.

1. 무엇을 하면 toggle이 작동될지
2. 아까 정한 **`C`**
3. 아까 정한 **`B`**
4. 아까 정한 **`A`**
5. 상태 **`1`** 때 무엇을 할지 (trigger 추천)
6. 상태 **`2`** 때 무엇을 할지 (trigger 추천)

![](https://user-images.githubusercontent.com/83404333/159150769-cf9b5694-c522-4f26-8c48-65e9f01ca188.png)
![](https://user-images.githubusercontent.com/83404333/159150268-c5768d86-bce9-41fe-a598-11d1a8313a1f.png)

**`ㄱ`** 의 경로와 **`ㄴ`** 의 경로를 다음과 같이 수정한다.

![](https://user-images.githubusercontent.com/83404333/159150699-b69f08b8-b71e-40c5-bfa3-570860ab9687.png)

## 사용

![toggle](https://user-images.githubusercontent.com/83404333/159151019-05b1940d-de8b-4787-81ab-0e12b61894ff.gif)

> 블럭 이벤트는 다음과 같습니다. ![](https://user-images.githubusercontent.com/83404333/159151047-43269e2a-34a1-4e30-9b17-100595c4de62.png)

## 마무리

이상으로 **{{ title }}** 포스팅을 마치겠습니다.

자신만의 toggle 방법이 있다면 댓글에 남겨주세요!
