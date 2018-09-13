---
name: winword.exe
description: 
functions:
  execute:
    - description:  Launch DLL payload.
      code: winword.exe /l dllfile.dll
resources: 
    - resource: https://twitter.com/vysecurity/status/884755482707210241
    - resource: https://twitter.com/Hexacorn/status/885258886428725250
fullpath: 
    - path: C:\Program Files (x86)\Microsoft Office\root\Office16\WINWORD.EXE
notes: Thanks to Vincent Yiu - @@vysecurity (Cmd), Adam - @Hexacorn (Internals)
---