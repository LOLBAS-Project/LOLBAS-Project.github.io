---
Name: Pcalua.exe
Description: Program Compatibility Assistant
Author: Oddvar Moe
Created: 2018-05-25
Commands:
  - Command: pcalua.exe -a {PATH:.exe}
    Description: Open the target .EXE using the Program Compatibility Assistant.
    Usecase: Proxy execution of binary
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
    Tags:
      - Execute: EXE
  - Command: pcalua.exe -a {PATH_SMB:.dll}
    Description: Open the target .DLL file with the Program Compatibilty Assistant.
    Usecase: Proxy execution of remote dll file
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
    Tags:
      - Execute: DLL
      - Execute: Remote
  - Command: pcalua.exe -a {PATH_ABSOLUTE:.cpl} -c Java
    Description: Open the target .CPL file with the Program Compatibility Assistant.
    Usecase: Execution of CPL files
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
    Tags:
      - Execute: DLL
Full_Path:
  - Path: C:\Windows\System32\pcalua.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_lolbin_pcalua.yml
Resources:
  - Link: https://twitter.com/KyleHanslovan/status/912659279806640128
Acknowledgement:
  - Person: Kyle Hanslovan
    Handle: '@kylehanslovan'
  - Person: Fab
    Handle: '@0rbz_'
---
