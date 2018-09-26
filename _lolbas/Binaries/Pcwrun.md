---
name: Pcwrun.exe
description: Program Compatibility Wizard
functions:
  execute:
    - description: Open the target .EXE file with the Program Compatibility Wizard.
      code: Pcwrun.exe c:\temp\beacon.exe
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Proxy execution of binary
resources:
    - resource: https://twitter.com/pabraeken/status/991335019833708544
fullpath:
    - path: C:\Windows\System32\pcwrun.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
