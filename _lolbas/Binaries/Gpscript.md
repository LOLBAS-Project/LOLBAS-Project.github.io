---
name: Gpscript.exe
description: Used by group policy to process scripts
functions:
  execute:
    - description: Executes logon scripts configured in Group Policy.
      code: Gpscript /logon
      mitreid: T1216
      mitrelink: https://attack.mitre.org/wiki/Technique/T1216
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: Administrator
      usecase: Add local group policy logon script to execute file and hide from defensive counter measures
    - description: Executes startup scripts configured in Group Policy
      code: Gpscript /startup
      mitreid: T1216
      mitrelink: https://attack.mitre.org/wiki/Technique/T1216
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: Administrator
      usecase: Add local group policy logon script to execute file and hide from defensive counter measures
resources:
    - resource: https://oddvar.moe/2018/04/27/gpscript-exe-another-lolbin-to-the-list/
fullpath:
    - path: C:\Windows\System32\gpscript.exe
    - path: C:\Windows\SysWOW64\gpscript.exe
detection:
  - IOC: Scripts added in local group policy
  - IOC: Execution of Gpscript.exe after logon
acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
