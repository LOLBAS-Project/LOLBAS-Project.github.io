---
name: bash.exe
description: Part of the Windows subsystem for Linux. Must be enabled for binary to be present.
functions:
  execute:
    - description: Execute calc.exe
      code: bash.exe -c calc.exe
resources: 
    - resource: 
fullpath: 
    - path: c:\windows\system32\bash.exe
    - path: c:\windows\sysWOW64\bash.exe
notes: Thanks to Matt Graeber - @mattifestation, Moriarty - @Moriarty2016
---