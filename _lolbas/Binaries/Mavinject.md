---
name: Mavinject.exe
description: Used by App-v in Windows
functions:
  execute:
    - description: Inject evil.dll into a process with PID 3110.
      code: MavInject.exe 3110 /INJECTRUNNING c:\folder\evil.dll
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Inject dll file into running process
  ads:
    - description: Inject file.dll stored as an Alternate Data Stream (ADS) into a process with PID 4172
      code: Mavinject.exe 4172 /INJECTRUNNING "c:\ads\file.txt:file.dll"
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Inject dll file into running process
resources:
    - resource: https://twitter.com/gN3mes1s/status/941315826107510784
    - resource: https://twitter.com/Hexcorn/status/776122138063409152
    - resource: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
fullpath:
    - path: C:\Windows\System32\mavinject.exe
    - path: C:\Windows\SysWOW64\mavinject.exe
detection:
  - IOC: mavinject.exe should not run unless APP-v is in use on the workstation
acknowledgement:
  - Person: Giuseppe N3mes1s
    Handle: '@gN3mes1s'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
