---
Name: Mshtml.dll
Description: Microsoft HTML Viewer
Author: LOLBAS Team
Created: 2018-05-25
Commands:
  - Command: rundll32.exe Mshtml.dll,PrintHTML {PATH_ABSOLUTE:.hta}
    Description: "Invoke an HTML Application via mshta.exe (note: pops a security warning and a print dialogue box)."
    Usecase: Launch an HTA application.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows 10, Windows 11
    Tags:
      - Execute: HTA
Full_Path:
  - Path: c:\windows\system32\mshtml.dll
  - Path: c:\windows\syswow64\mshtml.dll
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_rundll32_susp_activity.yml
Resources:
  - Link: https://twitter.com/pabraeken/status/998567549670477824
  - Link: https://windows10dll.nirsoft.net/mshtml_dll.html
Acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
