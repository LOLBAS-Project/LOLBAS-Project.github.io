---
Name: Pcwutl.dll
Description: Microsoft HTML Viewer
Author: LOLBAS Team
Created: 2018-05-25
Commands:
  - Command: rundll32.exe pcwutl.dll,LaunchApplication {PATH:.exe}
    Description: Launch executable by calling the LaunchApplication function.
    Usecase: Launch an executable.
    Category: Execute
    Privileges: User
    MitreID: T1218.011
    OperatingSystem: Windows 10, Windows 11
    Tags:
      - Execute: EXE
Full_Path:
  - Path: c:\windows\system32\pcwutl.dll
  - Path: c:\windows\syswow64\pcwutl.dll
Detection:
  - Analysis: https://redcanary.com/threat-detection-report/techniques/rundll32/
  - Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_rundll32_susp_activity.yml
Resources:
  - Link: https://twitter.com/harr0ey/status/989617817849876488
  - Link: https://windows10dll.nirsoft.net/pcwutl_dll.html
Acknowledgement:
  - Person: Matt harr0ey
    Handle: '@harr0ey'
---
