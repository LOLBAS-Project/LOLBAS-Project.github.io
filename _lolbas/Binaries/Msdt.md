---
name: Msdt.exe
description: Microsoft diagnostics tool
functions:
  execute:
    - description: Executes the Microsoft Diagnostics Tool and executes the malicious .MSI referenced in the PCW8E57.xml file.
      code: msdt.exe -path C:\WINDOWS\diagnostics\index\PCWDiagnostic.xml -af C:\PCW8E57.xml /skip TRUE
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute code
  awl bypass:
    - description: Executes the Microsoft Diagnostics Tool and executes the malicious .MSI referenced in the PCW8E57.xml file.
      code: msdt.exe -path C:\WINDOWS\diagnostics\index\PCWDiagnostic.xml -af C:\PCW8E57.xml /skip TRUE
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute code bypass Application whitelisting
resources:
    - resource: https://web.archive.org/web/20160322142537/https://cybersyndicates.com/2015/10/a-no-bull-guide-to-malicious-windows-trouble-shooting-packs-and-application-whitelist-bypass/
    - resource: https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/
    - resource: https://twitter.com/harr0ey/status/991338229952598016
fullpath:
    - path: C:\Windows\System32\Msdt.exe
    - path: C:\Windows\SysWOW64\Msdt.exe
detection:
  - IOC: 
acknowledgement:
  - Person: 
    Handle: ''
---
