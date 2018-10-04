---
name: Syssetup.dll
description: Windows NT System Setup
functions:
  execute:
    - description: Launch an executable file via the SetupInfObjectInstallAction function and .inf file section directive.
      code: rundll32 syssetup.dll,SetupInfObjectInstallAction DefaultInstall 128 c:\temp\something.inf
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Load an executable payload.
  awl bypass:
    - description: Execute the specified (local or remote) .wsh/.sct script with scrobj.dll in the .inf file by calling an information file directive (section name specified).
      code: rundll32.exe syssetup.dll,SetupInfObjectInstallAction DefaultInstall 128 c:\test\shady.inf
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Run local or remote script(let) code through INF file specification (Note May pop an error window).
resources:
    - resource: https://twitter.com/pabraeken/status/994392481927258113
    - resource: https://twitter.com/harr0ey/status/975350238184697857
    - resource: https://twitter.com/bohops/status/975549525938135040
    - resource: https://windows10dll.nirsoft.net/syssetup_dll.html
fullpath:
    - path: c:\windows\system32\syssetup.dll
    - path: c:\windows\syswow64\syssetup.dll
detection:
  - IOC: 
acknowledgement:
  - Person: Pierre-Alexandre Braeken (Execute)
    Handle: '@pabraeken'
  - Person: Matt harr0ey (Execute)
    Handle: '@harr0ey'
  - Person: Jimmy (Scriptlet)
    Handle: '@bohops'
---
