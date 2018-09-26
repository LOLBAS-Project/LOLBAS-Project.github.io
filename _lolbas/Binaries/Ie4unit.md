---
name: Ie4unit.exe
description: 
functions:
  execute:
    - description: Executes commands from a specially prepared ie4uinit.inf file.
      code: ie4unit.exe -BaseSettings
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Get code execution by copy files to another location
resources:
    - resource: https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/
fullpath:
    - path: c:\windows\system32\ie4unit.exe
    - path: c:\windows\sysWOW64\ie4unit.exe
    - path: c:\windows\system32\ieuinit.inf
    - path: c:\windows\sysWOW64\ieuinit.inf
detection:
  - IOC: ie4unit.exe loading a inf file from outside %windir%
acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
---
