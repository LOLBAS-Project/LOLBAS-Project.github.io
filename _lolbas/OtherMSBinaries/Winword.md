---
name: winword.exe
description: Document editor included with Microsoft Office.
functions:
  execute:
    - description: Launch DLL payload.
      code: winword.exe /l dllfile.dll
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Execute a locally stored DLL using winword.exe.
resources:
    - resource: https://twitter.com/vysecurity/status/884755482707210241
    - resource: https://twitter.com/Hexacorn/status/885258886428725250
fullpath:
    - path: c:\Program Files (x86)\Microsoft Office\root\Office16\WINWORD.EXE
detection:
  - IOC: 
acknowledgement:
  - Person: Vincent Yiu (cmd)
    Handle: '@@vysecurity'
  - Person: Adam (Internals)
    Handle: '@Hexacorn'
---
