---
name: Shell32.dll
description: Windows Shell Common Dll
functions:
  execute:
    - description: Launch a DLL payload by calling the Control_RunDLL function.
      code: rundll32.exe shell32.dll,Control_RunDLL payload.dll
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Load a DLL payload.
    - description: Launch an executable by calling the ShellExec_RunDLL function.
      code: rundll32.exe shell32.dll,ShellExec_RunDLL beacon.exe
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: 
      privileges: User
      usecase: Run an executable payload.
    - description: Launch command line by calling the ShellExec_RunDLL function.
      code: rundll32 SHELL32.DLL,ShellExec_RunDLL "cmd.exe" "/c echo hi"
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: 
      privileges: User
      usecase: Run an executable payload.
resources:
    - resource: https://twitter.com/Hexacorn/status/885258886428725250
    - resource: https://twitter.com/pabraeken/status/991768766898941953
    - resource: https://twitter.com/mattifestation/status/776574940128485376
    - resource: https://twitter.com/KyleHanslovan/status/905189665120149506
    - resource: https://windows10dll.nirsoft.net/shell32_dll.html
fullpath:
    - path: c:\windows\system32\shell32.dll
    - path: c:\windows\syswow64\shell32.dll
detection:
  - IOC: 
acknowledgement:
  - Person: Adam (Control_RunDLL)
    Handle: '@hexacorn'
  - Person: Pierre-Alexandre Braeken (ShellExec_RunDLL)
    Handle: '@pabraeken'
  - Person: Matt Graeber (ShellExec_RunDLL)
    Handle: '@mattifestation'
  - Person: Kyle Hanslovan (ShellExec_RunDLL)
    Handle: '@KyleHanslovan'
---
