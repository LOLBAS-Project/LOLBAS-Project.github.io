---
name: Msdeploy.exe
description: Microsoft tool used to deploy Web Applications.
functions:
  execute:
    - description: Launch calc.bat via msdeploy.exe.
      code: msdeploy.exe -verb:sync -source:RunCommand -dest:runCommand="c:\temp\calc.bat"
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Local execution of batch file using msdeploy.exe.
resources:
    - resource: https://twitter.com/pabraeken/status/995837734379032576
fullpath:
    - path: C:\Program Files (x86)\IIS\Microsoft Web Deploy V3\msdeploy.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
