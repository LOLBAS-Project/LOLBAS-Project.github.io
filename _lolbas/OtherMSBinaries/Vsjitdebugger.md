---
name: vsjitdebugger.exe
description: Just-In-Time (JIT) debugger included with Visual Studio
functions:
  execute:
    - description: Executes calc.exe as a subprocess of Vsjitdebugger.exe.
      code: Vsjitdebugger.exe calc.exe
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Execution of local PE file as a subprocess of Vsjitdebugger.exe.
resources:
    - resource: https://twitter.com/pabraeken/status/990758590020452353
fullpath:
    - path: c:\windows\system32\vsjitdebugger.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
