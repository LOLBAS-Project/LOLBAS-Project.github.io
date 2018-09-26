---
name: Cscript.exe
description: Binary used to execute scripts in Windows
functions:
  ads:
    - description: Use cscript.exe to exectute a Visual Basic script stored in an Alternate Data Stream (ADS).
      code: cscript c:\ads\file.txt:script.vbs
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Can be used to evade defensive countermeasures or to hide as a persistence mechanism
resources:
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
    - resource: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
fullpath:
    - path: C:\Windows\System32\cscript.exe
    - path: C:\Windows\SysWOW64\cscript.exe
detection:
  - IOC: Cscript.exe executing files from alternate data streams
acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
