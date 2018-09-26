---
name: Dfsvc.exe
description: ClickOnce engine in Windows used by .NET
functions:
  awl bypass:
    - description: Missing example
      code: Missing Example
      mitreid: T1127
      mitrelink: https://attack.mitre.org/wiki/Technique/T1127
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Use binary to bypass Application whitelisting
resources:
    - resource: https://github.com/api0cradle/ShmooCon-2015/blob/master/ShmooCon-2015-Simple-WLEvasion.pdf
fullpath:
    - path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\Dfsvc.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\Dfsvc.exe
    - path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\Dfsvc.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Dfsvc.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
