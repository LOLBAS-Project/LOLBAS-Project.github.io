---
name: Wab.exe
description: Windows address book manager
functions:
  execute:
    - description: Change HKLM\Software\Microsoft\WAB\DLLPath and execute DLL of choice
      code: wab.exe
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: Administrator
      usecase: Execute dll file. Bypass defensive counter measures
resources:
    - resource: https://twitter.com/Hexacorn/status/991447379864932352
    - resource: http://www.hexacorn.com/blog/2018/05/01/wab-exe-as-a-lolbin/
fullpath:
    - path: C:\Program Files\Windows Mail\wab.exe
    - path: C:\Program Files (x86)\Windows Mail\wab.exe
detection:
  - IOC: WAB.exe should normally never be used
acknowledgement:
  - Person: Adam
    Handle: '@Hexacorn'
---
