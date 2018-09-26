---
name: Infdefaultinstall.exe
description: Binary used to perform installation based on content inside inf files
functions:
  execute:
    - description: Executes SCT script using scrobj.dll from a command in entered into a specially prepared INF file.
      code: InfDefaultInstall.exe Infdefaultinstall.inf
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Code execution
resources:
    - resource: https://twitter.com/KyleHanslovan/status/911997635455852544
    - resource: https://blog.conscioushacker.io/index.php/2017/10/25/evading-microsofts-autoruns/
fullpath:
    - path: C:\Windows\System32\Infdefaultinstall.exe
    - path: C:\Windows\SysWOW64\Infdefaultinstall.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Kyle Hanslovan
    Handle: '@kylehanslovan'
---
