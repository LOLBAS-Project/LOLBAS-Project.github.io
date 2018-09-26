---
name: CL_Invocation.ps1
description: Aero diagnostics script
functions:
  execute:
    - description: Import the PowerShell Diagnostic CL_Invocation script and call SyncInvoke to launch an executable.
      code: . C:\\Windows\\diagnostics\\system\\AERO\\CL_Invocation.ps1   \nSyncInvoke <executable> [args]
      mitreid: T1216
      mitrelink: https://attack.mitre.org/wiki/Technique/T1216
      operatingsystem: Windows 10
      privileges: User
      usecase: Proxy execution
resources:
    - resource: 
fullpath:
    - path: C:\Windows\diagnostics\system\AERO\CL_Invocation.ps1
    - path: C:\Windows\diagnostics\system\Audio\CL_Invocation.ps1
    - path: C:\Windows\diagnostics\system\WindowsUpdate\CL_Invocation.ps1
detection:
  - IOC: 
acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
