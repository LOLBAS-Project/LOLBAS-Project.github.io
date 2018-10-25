---
name: rcsi.exe
description: Non-Interactive command line inerface included with Visual Studio.
functions:
  execute:
    - description: Use embedded C# within the csx script to execute the code.
      code: rcsi.exe bypass.csx
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Local execution of arbitrary C# code stored in local CSX file.
  awl bypass:
    - description: Use embedded C# within the csx script to execute the code.
      code: rcsi.exe bypass.csx
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Local execution of arbitrary C# code stored in local CSX file.
resources:
    - resource: https://enigma0x3.net/2016/11/21/bypassing-application-whitelisting-by-using-rcsi-exe/
fullpath:
    - path: 
detection:
  - IOC: 
acknowledgement:
  - Person: Matt Nelson
    Handle: '@enigma0x3'
---
