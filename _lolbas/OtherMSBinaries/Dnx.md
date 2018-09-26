---
name: dnx.exe
description: .Net Execution environment file included with .Net.
functions:
  execute:
    - description: Execute C# code located in the consoleapp folder via 'Program.cs' and 'Project.json' (Note - Requires dependencies)
      code: dnx.exe consoleapp
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Local execution of C# project stored in consoleapp folder.
resources:
    - resource: https://enigma0x3.net/2016/11/17/bypassing-application-whitelisting-by-using-dnx-exe/
fullpath:
    - path: N/A
detection:
  - IOC: 
acknowledgement:
  - Person: Matt Nelson
    Handle: '@enigma0x3'
---
