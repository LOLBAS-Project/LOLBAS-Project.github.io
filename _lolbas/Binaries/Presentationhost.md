---
name: Presentationhost.exe
description: File is used for executing Browser applications
functions:
  execute:
    - description: Executes the target XAML Browser Application (XBAP) file
      code: Presentationhost.exe C:\temp\Evil.xbap
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute code within xbap files
resources:
    - resource: https://github.com/api0cradle/ShmooCon-2015/blob/master/ShmooCon-2015-Simple-WLEvasion.pdf
    - resource: https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/
fullpath:
    - path: C:\Windows\System32\Presentationhost.exe
    - path: C:\Windows\SysWOW64\Presentationhost.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
