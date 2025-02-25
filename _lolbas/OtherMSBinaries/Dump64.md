---
Name: Dump64.exe
Description: Memory dump tool that comes with Microsoft Visual Studio
Author: mr.d0x
Created: 2021-11-16
Commands:
  - Command: dump64.exe {PID} out.dmp
    Description: Creates a memory dump of the LSASS process.
    Usecase: Create memory dump and parse it offline to retrieve credentials.
    Category: Dump
    Privileges: Administrator
    MitreID: T1003.001
    OperatingSystem: Windows 10, Windows 11
Full_Path:
  - Path: C:\Program Files (x86)\Microsoft Visual Studio\Installer\Feedback\dump64.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_dump64.yml
  - IOC: As a Windows SDK binary, execution on a system may be suspicious
Resources:
  - Link: https://twitter.com/mrd0x/status/1460597833917251595
Acknowledgement:
  - Person: mr.d0x
    Handle: '@mrd0x'
---
