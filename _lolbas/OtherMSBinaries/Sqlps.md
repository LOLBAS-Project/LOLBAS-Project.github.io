---
name: Sqlps.exe
description: Tool included with Microsoft SQL Server that loads SQL Server cmdlets.
functions:
  execute:
    - description: Drop into a SQL Server PowerShell console without Module and ScriptBlock Logging.
      code: Sqlps.exe -noprofile
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Execute PowerShell commands without ScriptBlock logging.
resources:
    - resource: https://twitter.com/bryon_/status/975835709587075072
fullpath:
    - path: C:\Program files (x86\Microsoft SQL Server\100\Tools\Binn\sqlps.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Bryon
    Handle: '@bryon_'
---
