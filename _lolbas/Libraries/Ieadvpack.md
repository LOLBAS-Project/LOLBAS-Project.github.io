---
name: Ieadvpack.dll
description: INF installer for Internet Explorer. Has much of the same functionality as advpack.dll.
functions:
  execute:
    - description: Launch a DLL payload by calling the RegisterOCX function.
      code: rundll32.exe ieadvpack.dll,RegisterOCX test.dll
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Load a DLL payload.
    - description: Launch an executable by calling the RegisterOCX function.
      code: rundll32.exe ieadvpack.dll,RegisterOCX calc.exe
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: 
      privileges: User
      usecase: Run an executable payload.
    - description: Launch command line by calling the RegisterOCX function.
      code: rundll32 ieadvpack.dll, RegisterOCX "cmd.exe /c calc.exe"
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: 
      privileges: User
      usecase: Run an executable payload.
  awl bypass:
    - description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (section name specified).
      code: rundll32.exe ieadvpack.dll,LaunchINFSection c:\test.inf,DefaultInstall_SingleUser,1,
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Run local or remote script(let) code through INF file specification.
    - description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (DefaultInstall section implied).
      code: rundll32.exe ieadvpack.dll,LaunchINFSection c:\test.inf,,1,
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Run local or remote script(let) code through INF file specification.
resources:
    - resource: https://bohops.com/2018/03/10/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence-part-2/
    - resource: https://twitter.com/pabraeken/status/991695411902599168
    - resource: https://twitter.com/0rbz_/status/974472392012689408
fullpath:
    - path: c:\windows\system32\ieadvpack.dll
    - path: c:\windows\syswow64\ieadvpack.dll
detection:
  - IOC: 
acknowledgement:
  - Person: Jimmy (LaunchINFSection)
    Handle: '@bohops'
  - Person: Fabrizio (RegisterOCX - DLL)
    Handle: '@0rbz_'
  - Person: Pierre-Alexandre Braeken (RegisterOCX - CMD)
    Handle: '@pabraeken'
---
