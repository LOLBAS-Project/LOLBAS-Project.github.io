---
name: Msbuild.exe
description: Used to compile and execute code
functions:
  execute:
    - description: Build and execute a C# project stored in the target csproj file.
      code: msbuild.exe project.csproj
      mitreid: T1127
      mitrelink: https://attack.mitre.org/wiki/Technique/T1127
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Compile and run code
  awl bypass:
    - description: Build and execute a C# project stored in the target XML file.
      code: msbuild.exe pshell.xml
      mitreid: T1127
      mitrelink: https://attack.mitre.org/wiki/Technique/T1127
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Compile and run code
resources:
    - resource: https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1127/T1127.md
    - resource: https://github.com/Cn33liz/MSBuildShell
    - resource: https://pentestlab.blog/2017/05/29/applocker-bypass-msbuild/
    - resource: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
fullpath:
    - path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\Msbuild.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\Msbuild.exe
    - path: C:\Windows\Microsoft.NET\Framework\v3.5\Msbuild.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v3.5\Msbuild.exe
    - path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\Msbuild.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Msbuild.exe
detection:
  - IOC: Msbuild.exe should not normally be executed on workstations
acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: Cn33liz
    Handle: '@Cneelis'
---
