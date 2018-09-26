---
name: csi.exe
description: Command line interface included with Visual Studio.
functions:
  execute:
    - description: Use csi.exe to run unsigned C# code.
      code: csi.exe file
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Local execution of unsigned C# code.
resources:
    - resource: https://twitter.com/subTee/status/781208810723549188
    - resource: https://enigma0x3.net/2016/11/17/bypassing-application-whitelisting-by-using-dnx-exe/
fullpath:
    - path: c:\Program Files (x86)\Microsoft Visual Studio\2017\Community\MSBuild\15.0\Bin\Roslyn\csi.exe
    - path: c:\Program Files (x86)\Microsoft Web Tools\Packages\Microsoft.Net.Compilers.X.Y.Z\tools\csi.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
