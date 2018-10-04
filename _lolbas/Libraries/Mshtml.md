---
name: Mshtml.dll
description: Microsoft HTML Viewer
functions:
  execute:
    - description: Invoke an HTML Application via mshta.exe (Note - Pops a security warning and a print dialogue box).
      code: rundll32.exe Mshtml.dll,PrintHTML "C:\temp\calc.hta"
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Launch an HTA application.
resources:
    - resource: https://twitter.com/pabraeken/status/998567549670477824
    - resource: https://windows10dll.nirsoft.net/mshtml_dll.html
fullpath:
    - path: c:\windows\system32\mshtml.dll
    - path: c:\windows\syswow64\mshtml.dll
detection:
  - IOC: 
acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
