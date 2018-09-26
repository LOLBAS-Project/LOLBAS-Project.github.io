---
name: Dxcap.exe
description: DirectX diagnostics/debugger included with Visual Studio.
functions:
  execute:
    - description: Launch notepad as a subprocess of Dxcap.exe
      code: Dxcap.exe -c C:\Windows\System32\notepad.exe
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Local execution of a process as a subprocess of Dxcap.exe
resources:
    - resource: https://twitter.com/harr0ey/status/992008180904419328
fullpath:
    - path: C:\Windows\System32\dxcap.exe
    - path: C:\Windows\SysWOW64\dxcap.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Matt harr0ey
    Handle: '@harr0ey'
---
