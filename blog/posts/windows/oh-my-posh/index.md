---
title: 파워쉘에 oh-my-posh 설정하기
date: 2022-03-05
slug: oh-my-posh
tag:
  - Windows
description: 파워쉘을 간지나게 만들어 봅시다.
---

## 미리보기

![PowerShell with oh-my-posh](https://user-images.githubusercontent.com/83404333/156686019-68c4d49f-1fe2-4d6c-aee9-e2c06058c7f4.png)

Oh-My-Posh 공식 위키:
<https://ohmyposh.dev/>

## PowerShell 7 설치

PowerShell 7이 설치되여있지 않다면 설치해 주세요.

> ```
> $ pwsh.exe
> ```
>
> 위 명령어를 cmd에 쳐봤을 때 오류가 뜬다면 설치되지 않은 것입니다.

설치 링크: [Installing PowerShell on Windows](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows?view=powershell-7.2#msi)

MSI 설치를 추천합니다.

![](https://user-images.githubusercontent.com/83404333/156689168-5fb25037-3d03-455c-bdba-88c23383eff6.png)
![](https://user-images.githubusercontent.com/83404333/156689172-26b72b38-bfb3-440c-b63a-8136f8c7c2e9.png)
![](https://user-images.githubusercontent.com/83404333/156689178-080baffd-6f72-4c9c-b3d0-63a07bde5c72.png)
![](https://user-images.githubusercontent.com/83404333/156689179-9e51ae51-3eb9-4afd-9bd9-c9a0b7c73c3b.png)

> -[x] Add 'Run with PowerShell 7' context menu for PowerShell files
> 체크하면 `.ps1`파일을 우클릭 했을때 PowerShell 7으로 열 수 있는 옵션이 추가됩니다.
> ![](https://user-images.githubusercontent.com/83404333/156690630-1e72be54-ff71-41d0-94b8-23aaf3ff57fe.png)

이제 cmd에서 아래 명령어를 쳤을 때 다음과 같이 나온다면 성공입니다.

![cmd](https://user-images.githubusercontent.com/83404333/156690251-e3b1d18d-61af-488d-91a2-453bd1f213e0.png)

또는 시작 메뉴에서 **pwsh**를 검색해서 아래와 같이 나오면 성공

![Start Menu](https://user-images.githubusercontent.com/83404333/156690399-649a9a78-48d5-4f73-aa6c-b487accce1e2.png)

## Nerd 폰트 설치

Nerd 폰트 사이트에 들어가 자신이 자주 쓰는 프로그래밍 폰트의 Nerd 폰트 버전을 받으면 됩니다.
<https://www.nerdfonts.com/font-downloads>

(저자는 현제 `JetBrainsMono Nerd Font`를 사용하고 있습니다.)

## Windows Terminal Preview 설치하기

Microsoft Store 에 들어가서 windows terminal preview 를 검색하고 다운받습니다.

![](https://user-images.githubusercontent.com/83404333/156710931-8106167a-f7be-400a-80c4-5a27ce2e2356.png)
![](https://user-images.githubusercontent.com/83404333/156711070-bb8c34a8-48f9-4bbf-a53f-0730ded8219e.png)

Microsoft Store 링크:
<https://www.microsoft.com/en-us/p/windows-terminal-preview/9n8g5rfz9xk3>

1. 설정을 누릅니다.![Windows Terminal Preview](https://user-images.githubusercontent.com/83404333/156713051-8083a973-14d3-4925-9ad7-20c27db1d9df.png)
2. 기본 시작 쉘을 PowerShell 7로 바꿔줍니다.![Settings](https://user-images.githubusercontent.com/83404333/156713210-8f483558-1a97-48e0-a958-27e77b969847.png)
3. 기본 프로필을 누르고 `Appearance`를 누릅니다.![Appearance](https://user-images.githubusercontent.com/83404333/156713528-32003831-a251-4d99-b3e5-f1af745e10b5.png)
4. 색 테마로 가장 무난한 `Campbell`을 선택합니다.(다른 테마를 다운받거나 불러올 수도 있습니다.)  
   폰트를 아까 다운받은 Nerd폰트로 바꿔줍니다.(만약 보이지 않는다면 `Show all fonts`에 체크한 후 찾습니다.)  
   마지막으로 `Save`를 눌러 저장한후 Windows Terminal Preview를 재시작 합니다.  
   ![Appearance](https://user-images.githubusercontent.com/83404333/156713657-c9b92cd5-29ab-448d-a7f1-f04f61779c69.png)

## Oh-My-Posh 설치

PowerShell 7을 실행한 후 다음 명령어롤 실행해 줍니다.

```powershell
Install-Module oh-my-posh -Scope CurrentUser
```

> :skull:만약 에러가 난다면 PowerShell 7을 관리자 권한으로 실행해 주세요.

### Posh-Git 설치

**Posh-Git**은 Oh-My-Posh를 사용할 때 깃이 사용된 폴더에 들어가면 현재 깃의 상태를 알려주는 모듈이다.

Posh-Git 깃헙 레포지토리:
<https://github.com/dahlbyk/posh-git>

다음 명령어로 설치할 수 있다.

```powershell
PowerShellGet\Install-Module posh-git -Scope CurrentUser -Force
```

![스크린샷](https://github.com/dahlbyk/posh-git/wiki/images/PromptDefaultLong.png)
`이미지 출처: Posh-Git 깃헙`

### Terminal-Icons 설치

**Terminal-Icons**은 PowerShell 용 아이콘 추가 모듈이다.

`dir`명령어 같은 명령어를 쓰면 아이콘이 추가적으로 생긴다.

Terminal-Icons 깃헙 레포지토리:
<https://github.com/devblackops/Terminal-Icons>

다음 명령어로 설치할 수 있다.

```powershell
Install-Module -Name Terminal-Icons -Repository PSGallery
```

![스크린샷](https://github.com/devblackops/Terminal-Icons/raw/main/media/screenshot.png)
`이미지 출처: Terminal-Icons 깃헙`

### PowerShell StartUp에 등록

PowerShell 7창에 다음과 같이 칩니다.

```powershell
code $profile
```

내용을 다음과 같이 추가합니다.

```powershell
Import-Module posh-git
Import-Module oh-my-posh
Import-Module -Name Terminal-Icons
Set-PoshPrompt -Theme bubblesline
```

여기서 `Set-PoshPrompt -Theme [테마]`로 테마를 고를 수 있는데 테마는 직접 만들 수도 있고 기본으로 있는 테마를 고를 수도 있습니다.

Oh-My-Posh 테마 목록
<https://ohmyposh.dev/docs/themes>

> ❓만약 자동 완성을 사용하고 싶다면 `$profile`에
>
> ```powershell
> Set-PSReadLineOption -PredictionSource History
> ```
>
> 를 추가하시면 됩니다.
