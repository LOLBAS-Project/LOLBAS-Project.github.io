---
Name: Shell32.dll
Description: Windows Shell Common Dll
Author: LOLBAS Team
Created: 2018-05-25
Commands:
  - Command: rundll32.exe shell32.dll,Control_RunDLL {PATH_ABSOLUTE:.dll}
    Description: Launch a DLL payload by calling the Control_RunDLL function.
    Usecase: Load a DLL payload.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows 10, Windows 11
    Tags:
      - Execute: DLL
  - Command: rundll32.exe shell32.dll,ShellExec_RunDLL {PATH:.exe}
    Description: Launch an executable by calling the ShellExec_RunDLL function.
    Usecase: Run an executable payload.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows 10, Windows 11
    Tags:
      - Execute: EXE
  - Command: rundll32 SHELL32.DLL,ShellExec_RunDLL {PATH:.exe} {CMD:args}
    Description: Launch command line by calling the ShellExec_RunDLL function.
    Usecase: Run an executable payload.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows 10, Windows 11
    Tags:
      - Execute: CMD
  - Command: rundll32.exe shell32.dll,#44 {PATH:.dll}
    Description: Load a DLL/CPL by calling undocumented Control_RunDLLNoFallback function.
    Usecase: Load a DLL/CPL payload.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows 10, Windows 11
    Tags:
      - Execute: DLL
Full_Path:
  - Path: c:\windows\system32\shell32.dll
  - Path: c:\windows\syswow64\shell32.dll
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_rundll32_susp_activity.yml
  - Splunk: https://github.com/splunk/security_content/blob/a1afa0fa605639cbef7d528dec46ce7c8112194a/detections/endpoint/rundll32_control_rundll_hunt.yml
Resources:
  - Link: https://twitter.com/Hexacorn/status/885258886428725250
  - Link: https://twitter.com/pabraeken/status/991768766898941953
  - Link: https://twitter.com/mattifestation/status/776574940128485376
  - Link: https://twitter.com/KyleHanslovan/status/905189665120149506
  - Link: https://windows10dll.nirsoft.net/shell32_dll.html
  - Link: https://www.hexacorn.com/blog/2025/05/18/shell32-dll-44-lolbin/
Acknowledgement:
  - Person: Adam (Control_RunDLL, Control_RunDLLNoFallback)
    Handle: '@hexacorn'
  - Person: Pierre-Alexandre Braeken (ShellExec_RunDLL)
    Handle: '@pabraeken'
  - Person: Matt Graeber (ShellExec_RunDLL)
    Handle: '@mattifestation'
  - Person: Kyle Hanslovan (ShellExec_RunDLL)
    Handle: '@KyleHanslovan'
---
