---
name: Msconfig.exe
description: MSConfig is a troubleshooting tool which is used to temporarily disable or re-enable software, device drivers or Windows services that run during startup process to help the user determine the cause of a problem with Windows
functions:
  execute:
    - description: Executes command embeded in crafted c:\windows\system32\mscfgtlc.xml.
      code: Msconfig.exe -5
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: Administrator
      usecase: Code execution using Msconfig.exe
resources:
    - resource: https://twitter.com/pabraeken/status/991314564896690177
fullpath:
    - path: C:\Windows\System32\msconfig.exe
detection:
  - IOC: mscfgtlc.xml changes in system32 folder
  - IOC: msconfig.exe executing
acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
