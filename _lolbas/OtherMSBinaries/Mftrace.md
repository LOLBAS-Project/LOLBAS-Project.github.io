---
name: Mftrace.exe
description: Trace log generation tool for Media Foundation Tools.
functions:
  execute:
    - description: Launch cmd.exe as a subprocess of Mftrace.exe.
      code: Mftrace.exe cmd.exe
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Local execution of cmd.exe as a subprocess of Mftrace.exe.
    - description: Launch cmd.exe as a subprocess of Mftrace.exe.
      code: Mftrace.exe powershell.exe
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Local execution of powershell.exe as a subprocess of Mftrace.exe.
resources:
    - resource: https://twitter.com/0rbz_/status/988911181422186496
fullpath:
    - path: C:\Program Files (x86)\Windows Kits\10\bin\10.0.16299.0\x86
    - path: C:\Program Files (x86)\Windows Kits\10\bin\10.0.16299.0\x64
    - path: C:\Program Files (x86)\Windows Kits\10\bin\x86
    - path: C:\Program Files (x86)\Windows Kits\10\bin\x64
detection:
  - IOC: 
acknowledgement:
  - Person: fabrizio
    Handle: '@0rbz_'
---
