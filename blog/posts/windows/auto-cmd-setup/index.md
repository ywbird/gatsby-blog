---
title: Cmd 자동 실행 파일 설정하기
date: 2022-02-17
slug: cmd-startup
tag:
  - Windows
  - Cmd
description: Cmd가 시작할때 자동으로 실행될 명령어를 설정해 봅시다.
---

> ❗**Cmd 자동 실행 파일 만들기** 글을 모두 진행헀다고 가정한 후 진행하는 포스트입니다.
> 🎈글 링크: [**Cmd 자동 실행 파일 만들기**](/windows/cmd-auto-start/)

## 미리보기

![Prompt](https://user-images.githubusercontent.com/83404333/154473768-047280f7-7384-44aa-8755-d3ead4fe1f09.png)

위와같이 프롬프트를 바꿀수도,

```batch
> clear
```

위와같은 명령어를 쳐서 터미널을 청소할 수도,

```batch
> ghdir
```

위같은 명령어를 쳐서 깃허브 폴더로 들어갈 수도 있습니다.

이렇게 사용할 수 있는 명령어들은 [`Cmd` 카테고리](/categories/Cmd)에 차차 올라갈 예정입니다.  
앞서 몇 개만 맛보기로 보여드리자면 [PROMT](#prompt)와 [DOSKEY](#doskey) 가 있습니다.

## PROMPT

Cmd 기본 명령어로 `PROMPT`명령어가 있다.  
`PROMPT` 명령어는 아래 사진처럼 명령 프롬프트의 모양(?)을 바꿀 수 있다.

![Prompt](https://user-images.githubusercontent.com/83404333/154473768-047280f7-7384-44aa-8755-d3ead4fe1f09.png)

### 옵션

```batch
> PROMPT /?
```

를 치면 옵션이 나오는데 표로 써보면

| 코드 | 값                                     |  코드  | 값          |
| :--: | :------------------------------------- | :----: | :---------- | ------------- |
|  $A  | `&` 기호                               |   $L   | `<` 기호    |
|  $B  | `                                      | ` 기호 | $N          | 현재 드라이브 |
|  $C  | `(` 기호                               |   $P   | 현재 위치   |
|  $D  | 날짜                                   |   $Q   | `=` 기호    |
|  $E  | `escape` 코드                          |   $S   | ` `(공백)   |
|  $F  | `)` 기호                               |   $T   | 현재 시간   |
|  $G  | `>` 기호                               |   $V   | 윈도우 버전 |
|  $H  | `backspace` 코드<br>(한글자를 지운다.) |  $\_   | 다음줄      |
|  $$  | `$` 기호                               |

`$E`는 ANSI escape code (code 27)[^1] 이라고 한다.

> 솔직히 어디 쓰는지 모르겠다. 자료를 뒤져봤지만 앞에서 설명한 데로 나올 뿐...<br>[마이크로소프트 공식 문서](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/prompt#remarks)<br>[위키 피디아 - ANSI 이스케이프 코드](https://ko.wikipedia.org/wiki/ANSI_%EC%9D%B4%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%94%84_%EC%BD%94%EB%93%9C)

### 사용

```batch
PROMPT [텍스트]
```

`[텍스트]`에 [옵션](#옵션)을 잘 넣어주면 [사진](#prompt)과 같이 사용할 수 있다.

예를 몇개 들자면

```batch
> PROMPT -$G$S
```

라고 쓰면 `$G`는 `>`, `$S`는 ` `(공백)이므로 아래처럼 된다.

```
-> [명령어]
```

위에 [사진](#미리보기)에 나온 것처럼 하기 위해서는 다음과 같은 코드가 필요하다.

```batch
PROMPT [$P]$S$C$T$F$S$C$N$F$_~$$$S
```

## DOSKEY

`DOSKEY`는 간단히 얘기하자면 단축어다.  
간단한 예를 들면

```batch
> DOSKEY banana=dir
> banana

      hello.txt
      banana.txt
<DIR> test

(원래는 출력이 조금 더 복잡하지만 다 쓰기 귀찮으니 이렇게만 쓴다;;)
```

위처럼 `DOSKEY [이름]=[명령어]`를 쓰면 `[이름]`에 `[명령어]`가 할당된다.

```batch
> DOSKEY banana=dir $1
```

위와 같이 쓰면 명령어로 `banana 고구마`를 쳤을 경우 `$1`위치에 `고구마`가 들어가게 된다.  
그렇게 되면 `dir 고구마`를 실행하게 되는 셈이다.

그 외에도 많은 옵션이 있지만 바이트 같은 어려운 개념이 들어있어 이번 포스트에서는 건너 뛰겠다.[^2]
[^2]: 사실 글쓴이도 이해하지 못했다...

> ❤ 대신 세세하게 설명돼어있는 블로그글 링크를 걸어두겠다.
> 🎈 링크: [**코드 클립핑 - DOSKEY 명령어 사용법**](http://www.dreamy.pe.kr/zbxe/CodeClip/157420)

## 마무리

이상으로 **{{ title }}** 포스팅을 마치겠습니다.
