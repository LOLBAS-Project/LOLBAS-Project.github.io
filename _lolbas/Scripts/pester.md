---
name: Pester.bat
description: Used as part of the Powershell pester
functions:
  execute:
    - description: Execute code using Pester. The third parameter can be anything. The fourth is the payload. Example here executes notepad
      code: Pester.bat [/help|?|-?|/?] "$null; notepad"
      mitreid: T1216
      mitrelink: https://attack.mitre.org/wiki/Technique/T1216
      operatingsystem: Windows 10
      privileges: User
      usecase: Proxy execution
resources:
    - resource: https://twitter.com/Oddvarmoe/status/993383596244258816
fullpath:
    - path: c:\Program Files\WindowsPowerShell\Modules\Pester\3.4.0\bin\Pester.bat
    - path: c:\Program Files\WindowsPowerShell\Modules\Pester\*\bin\Pester.bat
detection:
  - IOC: 
acknowledgement:
  - Person: Emin Atac
    Handle: '@p0w3rsh3ll'
---
