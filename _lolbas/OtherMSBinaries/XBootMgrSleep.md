---
Name: XBootMgrSleep.exe
Description: Windows Performance Toolkit binary used for tracing and analyzing system performance during sleep and resume transitions.
Author: Avihay Eldad
Created: 2024-06-13
Commands:
  - Command: xbootmgrsleep.exe 1000 {PATH:.exe}
    Description: Execute executable via XBootMgrSleep, with a 1 second (=1000 milliseconds) delay. Alternatively, it is also possible to replace the delay with any string for immediate execution.
    Usecase: Performs execution of specified executable, can be used as a defense evasion
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows
    Tags:
      - Execute: EXE
Full_Path:
  - Path: C:\Program Files\Windows Kits\10\Windows Performance Toolkit\xbootmgrsleep.exe
  - Path: C:\Program Files (x86)\Windows Kits\10\Windows Performance Toolkit\xbootmgrsleep.exe
Resources:
  - Link: https://learn.microsoft.com/en-us/previous-versions/windows/desktop/xperf/reference
Acknowledgement:
  - Person: Avihay Eldad
    Handle: '@AvihayEldad'
  - Person: Yuval Saban
    Handle: '@yuvalsaban3'
---
