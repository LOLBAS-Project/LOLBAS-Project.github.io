---
name: Ie4unit.exe
description: 
functions:
  execute:
    - description: Executes commands from a specially prepared ie4uinit.inf file.
      code: ie4unit.exe -BaseSettings
resources: 
    - resource: https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/
fullpath: 
    - path: c:\windows\system32\ie4unit.exe
    - path: c:\windows\sysWOW64\ie4unit.exe
    - path: c:\windows\system32\ieuinit.inf
    - path: c:\windows\sysWOW64\ieuinit.inf
notes: Thanks to Jimmy - @bohops

---