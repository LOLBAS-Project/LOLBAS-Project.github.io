---
name: Reg.exe
description: Used to manipulate the registry
functions:
  ads:
    - description: Export the target Registry key and save it to the specified .REG file within an Alternate data stream.
      code: reg export HKLM\SOFTWARE\Microsoft\Evilreg c:\ads\file.txt:evilreg.reg
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Hide/plant registry information in Alternate data stream for later use
resources:
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
fullpath:
    - path: C:\Windows\System32\reg.exe
    - path: C:\Windows\SysWOW64\reg.exe
detection:
  - IOC: reg.exe writing to an ADS
acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
