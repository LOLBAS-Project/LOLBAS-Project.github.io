---
name: Advpack.dll
description: Utility for installing software and drivers with rundll32.exe
functions:
  execute:
    - description: Launch a DLL payload by calling the RegisterOCX function.
      code: rundll32.exe advpack.dll,RegisterOCX test.dll
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Load a DLL payload.
    - description: Launch an executable by calling the RegisterOCX function.
      code: rundll32.exe advpack.dll,RegisterOCX calc.exe
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: 
      privileges: User
      usecase: Run an executable payload.
    - description: Launch command line by calling the RegisterOCX function.
      code: rundll32 advpack.dll, RegisterOCX "cmd.exe /c calc.exe"
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: 
      privileges: User
      usecase: Run an executable payload.
  awl bypass:
    - description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (section name specified).
      code: rundll32.exe advpack.dll,LaunchINFSection c:\test.inf,DefaultInstall_SingleUser,1,
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Run local or remote script(let) code through INF file specification.
    - description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (DefaultInstall section implied).
      code: rundll32.exe advpack.dll,LaunchINFSection c:\test.inf,,1,
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Run local or remote script(let) code through INF file specification.
resources:
    - resource: https://bohops.com/2018/02/26/leveraging-inf-sct-fetch-execute-techniques-for-bypass-evasion-persistence/
    - resource: https://twitter.com/ItsReallyNick/status/967859147977850880
    - resource: https://twitter.com/bohops/status/974497123101179904
    - resource: https://twitter.com/moriarty_meng/status/977848311603380224
fullpath:
    - path: c:\windows\system32\advpack.dll
    - path: c:\windows\syswow64\advpack.dll
detection:
  - IOC: 
acknowledgement:
---
