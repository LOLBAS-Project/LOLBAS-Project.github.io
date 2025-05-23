---
Name: Runexehelper.exe
Description: Launcher process
Author: Grzegorz Tworek
Created: 2022-12-13
Commands:
  - Command: runexehelper.exe {PATH_ABSOLUTE:.exe}
    Description: 'Launches the specified exe. Prerequisites: (1) diagtrack_action_output environment variable must be set to an existing, writable folder; (2) runexewithargs_output.txt file cannot exist in the folder indicated by the variable.'
    Usecase: Executes arbitrary code
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows 10, Windows 11, Windows Server 2012, Windows Server 2016, Windows Server 2019, Windows Server 2022
    Tags:
      - Execute: EXE
Full_Path:
  - Path: c:\windows\system32\runexehelper.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/197615345b927682ab7ad7fa3c5f5bb2ed911eed/rules/windows/process_creation/proc_creation_win_lolbin_runexehelper.yml
  - IOC: c:\windows\system32\runexehelper.exe is run
  - IOC: Existence of runexewithargs_output.txt file
Resources:
  - Link: https://twitter.com/0gtweet/status/1206692239839289344
Acknowledgement:
  - Person: Grzegorz Tworek
    Handle: '@0gtweet'
---
