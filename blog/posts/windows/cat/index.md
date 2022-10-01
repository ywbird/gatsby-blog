---
title: 리눅스 cat 명령어 구현하기
date: 2022-02-18
slug: cmd-cat
tag:
  - Windows
---

## 😻cat 명령어란?

`cat` 명령어는 linux에서 지원하는 명령어이며, 명령어의 인자로 파일의 이름을 받아서 출력하는 명령어 입니다.

```text:title=hello.txt
Hello, World!
```

```text:title=banana.txt
Banana is yam.
```

```
$ cat hello.txt banana.txt
Hello, World!
Banana is yam.
```

## 🙀type 명령어의 문제점

윈도우에는 기본적으로 `type`라는 명령어가 있습니다.
`type`는 `cat`과 비슷하지만 `cat`은 파일이 여러개라도 항상 파일의 내용만 출력하는 반면 `type`는 인자가 2개 이상이면 파일의 이름도 같이 출력돼서 문제가 있습니다.

```text:title=hello.txt
Hello, World!
```

```text:title=banana.txt
Banana is yam.
```

```
> type hello.txt banana.txt

hello.txt


Hello, World!

banana.txt


Banana is yam.

```

이렇게 출력하죠

## 👍해결법

먼저 `doskey`명령어를 이용해서 만들어보겠습니다.

`batch`언어만을 이용하려고 했지만 인자가 여러개가 되면 리스트 객체를 이용해야 하고 `C/C++`언어를 이용하기는 VS를 깔기 귀찮아서 `Python`으로 구현했습니다 ㅎㅎ

## 🔎코드

코드는 **너무** 짧아요 ㅎ

```python:title=cat.py
import sys
for i in sys.argv[1:]:
    print(open(i).read(),end="")

```

`sys`모듈로 인자를 받고 `for`문을 이용해서 출력하는 방식입니다.

## 🕶적용

일종의 명령어이기 때문에 `system32`에 위치시키겠습니다.

`%windir%\system32\`에 들어가 준 후 코드 파일(`cat.py`)를 이동 또는 복사합니다.

`init.cmd`에 다음 줄을 추가해 주세요.

> 🤿`init.cmd`쓰는법은 아래 링크에!
> 🎈[Cmd 자동실행 파일 만들기](/windows/cmd-start)

```batch:title=C:\init.cmd
doskey cat=%windir%\system32\cat.py $*
```

## 🎞마무리

이상으로 **{{ title }}** 포스팅을 마치겠습니다.
