---
name: msdeploy.exe
description: 
functions:
  execute:
    - description: Launch calc.bat via msdeploy.exe.
      code: msdeploy.exe -verb:sync -source:RunCommand -dest:runCommand="c:\temp\calc.bat"
resources: 
    - resource: https://twitter.com/pabraeken/status/995837734379032576
fullpath: 
    - path: C:\Program Files (x86)\IIS\Microsoft Web Deploy V3\msdeploy.exe
notes: Thanks to Pierre-Alexandre Braeken - @pabraeken
---