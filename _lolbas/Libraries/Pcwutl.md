---
name: Pcwutl.dll
description: Microsoft HTML Viewer
functions:
  execute:
    - description: Launch executable by calling the LaunchApplication function.
      code: rundll32.exe pcwutl.dll,LaunchApplication calc.exe
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Launch an executable.
resources:
    - resource: https://twitter.com/harr0ey/status/989617817849876488
    - resource: https://windows10dll.nirsoft.net/pcwutl_dll.html
fullpath:
    - path: c:\windows\system32\pcwutl.dll
    - path: c:\windows\syswow64\pcwutl.dll
detection:
  - IOC: 
acknowledgement:
  - Person: Matt harr0ey
    Handle: '@harr0ey'
---
