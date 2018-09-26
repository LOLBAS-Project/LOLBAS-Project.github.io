---
name: Setupapi.dll
description: Windows Setup Application Programming Interface
functions:
  awl bypass:
    - description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (section name specified).
      code: rundll32.exe setupapi.dll,InstallHinfSection DefaultInstall 128 C:\Tools\shady.inf
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Run local or remote script(let) code through INF file specification.
resources:
    - resource: https://github.com/huntresslabs/evading-autoruns
    - resource: https://twitter.com/pabraeken/status/994742106852941825
    - resource: https://windows10dll.nirsoft.net/setupapi_dll.html
fullpath:
    - path: c:\windows\system32\setupapi.dll
    - path: c:\windows\syswow64\setupapi.dll
detection:
  - IOC: 
acknowledgement:
---
