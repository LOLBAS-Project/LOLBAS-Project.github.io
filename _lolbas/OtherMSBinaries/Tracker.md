---
name: Tracker.exe
description: Tool included with Microsoft .Net Framework.
functions:
  execute:
    - description: Use tracker.exe to proxy execution of an arbitrary DLL into another process. Since tracker.exe is also signed it can be used to bypass application whitelisting solutions.
      code: Tracker.exe /d .\calc.dll /c C:\Windows\write.exe
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Injection of locally stored DLL file into target process.
  awl bypass:
    - description: Use tracker.exe to proxy execution of an arbitrary DLL into another process. Since tracker.exe is also signed it can be used to bypass application whitelisting solutions.
      code: Tracker.exe /d .\calc.dll /c C:\Windows\write.exe
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Injection of locally stored DLL file into target process.
resources:
    - resource: https://twitter.com/subTee/status/793151392185589760
    - resource: https://attack.mitre.org/wiki/Execution
fullpath:
    - path: 
detection:
  - IOC: 
acknowledgement:
---
