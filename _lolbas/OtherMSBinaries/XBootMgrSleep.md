---
Name: XBootMgrSleep.exe
Description: Windows Performance Toolkit binary used for tracing and analyzing system performance during sleep and resume transitions.
Author: Avihay Eldad
Created: 2024-06-13
Commands:
  - Command: xbootmgrsleep.exe 1000 "{CMD}"
    Description: Execute a command with XBootMgrSleep as a parent process, with a 1 second (=1000 milliseconds) delay.
    Usecase: Performs execution of specified command, can be used as a defense evasion
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows
    Tags:
      - Execute: CMD
Full_Path:
  - Path: C:\Program Files\Windows Kits\10\Windows Performance Toolkit\xbootmgrsleep.exe
  - Path: C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\xbootmgrsleep.exe
Resources:
  - Link: https://learn.microsoft.com/en-us/previous-versions/windows/desktop/xperf/reference
Acknowledgement:
  - Person: Avihay Eldad
    Handle: '@AvihayEldad'
---
