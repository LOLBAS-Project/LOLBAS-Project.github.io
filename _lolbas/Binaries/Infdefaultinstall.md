---
name: infdefaultinstall.exe
description: 
functions:
  execute:
    - description: Executes SCT script using scrobj.dll from a command in entered into a specially prepared INF file.
      code: InfDefaultInstall.exe Infdefaultinstall.inf
resources: 
    - resource: https://twitter.com/KyleHanslovan/status/911997635455852544
    - resource: https://gist.github.com/KyleHanslovan/5e0f00d331984c1fb5be32c40f3b265a
    - resource: https://blog.conscioushacker.io/index.php/2017/10/25/evading-microsofts-autoruns/
fullpath: 
    - path: c:\windows\system32\infdefaultinstall.exe
    - path: c:\windows\sysWOW64\infdefaultinstall.exe
notes: Thanks to Kyle Hanslovan - @kylehanslovan and Chris "Lopi" Spehn - @ConsciousHacker
---