---
Name: winfile.exe
Description: Windows File Manager executable
Author: Avihay Eldad
Created: 2024-04-30
Commands:
  - Command: winfile.exe {PATH:.exe}
    Description: Execute an executable file with WinFile as a parent process.
    Usecase: Performs execution of specified file, can be used as a defense evasion
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows 10, Windows 11
    Tags:
      - Execute: EXE
Full_Path:
  - Path: C:\Windows\System32\winfile.exe
  - Path: C:\Windows\winfile.exe
  - Path: C:\Program Files\WinFile\winfile.exe
  - Path: C:\Program Files (x86)\WinFile\winfile.exe
  - Path: C:\Program Files\WindowsApps\Microsoft.WindowsFileManager_10.3.0.0_x64__8wekyb3d8bbwe\WinFile\winfile.exe
Resources:
  - Link: https://github.com/microsoft/winfile
Acknowledgement:
  - Person: Avihay Eldad
    Handle: '@AvihayEldad'
---
