---
name: Wscript.exe
description: Used by Windows to execute scripts
functions:
  ads:
    - description: Execute script stored in an alternate data stream
      code: wscript c:\ads\file.txt:script.vbs
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute hidden code to evade defensive counter measures
resources:
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
fullpath:
    - path: C:\Windows\System32\wscript.exe
    - path: C:\Windows\SysWOW64\wscript.exe
detection:
  - IOC: Wscript.exe executing code from alternate data streams
acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
