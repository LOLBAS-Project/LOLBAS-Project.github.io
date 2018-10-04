---
name: Zipfldr.dll
description: Compressed Folder library
functions:
  execute:
    - description: Launch an executable payload by calling RouteTheCall.
      code: rundll32.exe zipfldr.dll,RouteTheCall calc.exe
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Launch an executable.
    - description: Launch an executable payload by calling RouteTheCall (obfuscated).
      code: rundll32.exe zipfldr.dll,RouteTheCall file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Launch an executable.
resources:
    - resource: https://twitter.com/moriarty_meng/status/977848311603380224
    - resource: https://twitter.com/bohops/status/997896811904929792
    - resource: https://windows10dll.nirsoft.net/zipfldr_dll.html
fullpath:
    - path: c:\windows\system32\zipfldr.dll
    - path: c:\windows\syswow64\zipfldr.dll
detection:
  - IOC: 
acknowledgement:
  - Person: Moriarty (Execution)
    Handle: '@moriarty_meng'
  - Person: r0lan (Obfuscation)
    Handle: '@r0lan'
---
