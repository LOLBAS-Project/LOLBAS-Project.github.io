---
Name: Devtoolslauncher.exe
Description: Binary will execute specified binary. Part of VS/VScode installation.
Author: felamos
Created: 2019-10-04
Commands:
  - Command: devtoolslauncher.exe LaunchForDeploy {PATH_ABSOLUTE:.exe} "{CMD:args}" test
    Description: The above binary will execute other binary.
    Usecase: Execute any binary with given arguments and it will call developertoolssvc.exe. developertoolssvc is actually executing the binary.
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows 7 and up with VS/VScode installed
    Tags:
      - Execute: CMD
  - Command: devtoolslauncher.exe LaunchForDebug {PATH_ABSOLUTE:.exe} "{CMD:args}" test
    Description: The above binary will execute other binary.
    Usecase: Execute any binary with given arguments.
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows 7 and up with VS/VScode installed
    Tags:
      - Execute: CMD
Full_Path:
  - Path: 'c:\windows\system32\devtoolslauncher.exe'
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_lolbin_devtoolslauncher.yml
  - IOC: DeveloperToolsSvc.exe spawned an unknown process
Resources:
  - Link: https://twitter.com/_felamos/status/1179811992841797632
Acknowledgement:
  - Person: felamos
    Handle: '@_felamos'
---
