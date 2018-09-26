---
name: Odbcconf.exe
description: Used in Windows for managing ODBC connections
functions:
  execute:
    - description: Load DLL specified in target .RSP file. See the Playloads folder for an example .RSP file.
      code: odbcconf -f file.rsp
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute dll file using technique that can evade defensive counter measures
resources:
    - resource: https://gist.github.com/NickTyrer/6ef02ce3fd623483137b45f65017352b
    - resource: https://github.com/woanware/application-restriction-bypasses
fullpath:
    - path: C:\Windows\System32\odbcconf.exe
    - path: C:\Windows\SysWOW64\odbcconf.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
