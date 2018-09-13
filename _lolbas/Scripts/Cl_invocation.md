---
name: cl_invocation.ps1
description: 
functions:
  execute:
    - description: Import the PowerShell Diagnostic CL_Invocation script and call SyncInvoke to launch an executable.
      code: . C:\\Windows\\diagnostics\\system\\AERO\\CL_Invocation.ps1   \nSyncInvoke <executable> [args]
resources: 
    - resource: https://bohops.com/2018/01/07/executing-commands-and-bypassing-applocker-with-powershell-diagnostic-scripts/
    - resource: https://twitter.com/bohops/status/948548812561436672
    - resource: https://twitter.com/pabraeken/status/995107879345704961
fullpath: 
    - path: C:\Windows\diagnostics\system\AERO\CL_Invocation.ps1
    - path: C:\Windows\diagnostics\system\Audio\CL_Invocation.ps1
    - path: C:\Windows\diagnostics\system\WindowsUpdate\CL_Invocation.ps1
notes: Thanks to Jimmy - @bohops (Execute), Pierre-Alexandre Braeken - @pabraeken (Audio + WindowsUpdate Paths)
---