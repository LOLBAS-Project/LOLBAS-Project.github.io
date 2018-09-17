---
name: cl_mutexverifiers.ps1
description: Windows PowerShell Troubleshooting Pack support script
functions:
  execute:
    - description:  Import the PowerShell Diagnostic CL_Mutexverifiers script and call runAfterCancelProcess to launch an executable.
      code: ". C:\\Windows\\diagnostics\\system\\AERO\\CL_Mutexverifiers.ps1   \nrunAfterCancelProcess calc.ps1"
resources: 
    - resource: https://twitter.com/pabraeken/status/995111125447577600
fullpath: 
    - path: C:\Windows\diagnostics\system\WindowsUpdate\CL_Mutexverifiers.ps1
    - path: C:\Windows\diagnostics\system\Audio\CL_Mutexverifiers.ps1
    - path: C:\Windows\diagnostics\system\WindowsUpdate\CL_Mutexverifiers.ps1
notes: Thanks to Pierre-Alexandre Braeken - @pabraeken (Audio + WindowsUpdate)
---
