---
name: mavinject.exe
description: Used by App-v in Windows
functions:
  execute:
    - description: Inject evil.dll into a process with PID 3110.
      code: MavInject.exe 3110 /INJECTRUNNING c:\folder\evil.dll
  ads:
    - description: Inject file.dll stored as an Alternate Data Stream (ADS) into a process with PID 4172.
      code: Mavinject.exe 4172 /INJECTRUNNING "c:\ads\file.txt:file.dll"
resources: 
    - resource: https://twitter.com/gN3mes1s/status/941315826107510784
    - resource: https://twitter.com/Hexcorn/status/776122138063409152
    - resource: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
fullpath: 
    - path: c:\windows\system32\mavinject.exe
    - path: c:\windows\sysWOW64\mavinject.exe
notes: Thanks to Giuseppe N3mes1s - @gN3mes1s, Adam - @hexacorn, Oddvar Moe - @oddvarmoe
---