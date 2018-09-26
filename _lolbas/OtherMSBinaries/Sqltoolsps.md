---
name: SQLToolsPS.exe
description: Tool included with Microsoft SQL that loads SQL Server cmdlts. A replacement for sqlps.exe.
functions:
  execute:
    - description: Run PowerShell scripts and commands.
      code: SQLToolsPS.exe -noprofile -command Start-Process calc.exe
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Execute PowerShell command.
resources:
    - resource: https://twitter.com/pabraeken/status/993298228840992768
fullpath:
    - path: C:\Program files (x86)\Microsoft SQL Server\130\Tools\Binn\sqlps.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
