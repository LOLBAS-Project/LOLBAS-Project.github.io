---
Name: winget.exe
Description: Windows Package Manager tool
Author: Paul Sanders
Created: 2022-01-03
Commands:
  - Command: winget.exe install --manifest {PATH:.yml}
    Description: 'Downloads a file from the web address specified in .yml file and executes it on the system. Local manifest setting must be enabled in winget for it to work: `winget settings --enable LocalManifestFiles`'
    Usecase: Download and execute an arbitrary file from the internet
    Category: Execute
    Privileges: Local Administrator - required to enable local manifest setting
    MitreID: T1105
    OperatingSystem: Windows 10, Windows 11
    Tags:
      - Execute: Remote
      - Execute: EXE
  - Command: winget.exe install --accept-package-agreements -s msstore {name or ID}
    Description: 'Download and install any software from the Microsoft Store using its name or Store ID, even if the Microsoft Store App itself is blocked on the machine. For example, use "Sysinternals Suite" or `9p7knl5rwt25` for obtaining ProcDump, PsExec via the Sysinternals Suite. Note: a Microsoft account is required for this.'
    Usecase: Download and install software from Microsoft Store, even if Microsoft Store App is blocked
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows 10, Windows 11
  - Command: winget.exe install --accept-package-agreements -s msstore {name or ID}
    Description: 'Download and install any software from the Microsoft Store using its name or Store ID, even if the Microsoft Store App itself is blocked on the machine, and even if AppLocker is active on the machine. For example, use "Sysinternals Suite" or `9p7knl5rwt25` for obtaining ProcDump, PsExec via the Sysinternals Suite. Note: a Microsoft account is required for this.'
    Usecase: Download and install software from Microsoft Store, even if Microsoft Store App is blocked, and AppLocker is activated on the machine
    Category: AWL Bypass
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows 10, Windows 11
Full_Path:
  - Path: C:\Users\user\AppData\Local\Microsoft\WindowsApps\winget.exe
Code_Sample:
  - Code: https://gist.github.com/saulpanders/00e1177602a8c01a3a8bfa932b3886b0
Detection:
  - IOC: winget.exe spawned with local manifest file
  - IOC: Sysmon Event ID 1 - Process Creation
  - Analysis: https://saulpanders.github.io/2022/01/02/New-Year-New-LOLBAS.html
  - Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_winget_local_install_via_manifest.yml
Resources:
  - Link: https://saulpanders.github.io/2022/01/02/New-Year-New-LOLBAS.html
  - Link: https://docs.microsoft.com/en-us/windows/package-manager/winget/#production-recommended
  - Link: https://www.youtube.com/watch?v=zuL7x4Wltto
Acknowledgement:
  - Person: Paul
    Handle: '@saulpanders'
  - Person: Konrad 'unrooted' Klawikowski
  - Person: Fredrik H. Brathen
---
