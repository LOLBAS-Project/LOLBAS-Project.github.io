---
name: CL_Mutexverifiers.ps1
description: 
functions:
  execute:
    - description: Import the PowerShell Diagnostic CL_Mutexverifiers script and call runAfterCancelProcess to launch an executable.
      code: . C:\\Windows\\diagnostics\\system\\AERO\\CL_Mutexverifiers.ps1   \nrunAfterCancelProcess calc.ps1
      mitreid: T1216
      mitrelink: https://attack.mitre.org/wiki/Technique/T1216
      operatingsystem: Windows 10
      privileges: User
      usecase: Proxy execution
resources:
    - resource: https://twitter.com/pabraeken/status/995111125447577600
fullpath:
    - path: C:\Windows\diagnostics\system\WindowsUpdate\CL_Mutexverifiers.ps1
    - path: C:\Windows\diagnostics\system\Audio\CL_Mutexverifiers.ps1
    - path: C:\Windows\diagnostics\system\WindowsUpdate\CL_Mutexverifiers.ps1
detection:
  - IOC: 
acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
