---
Name: te.exe
Description: Testing tool included with Microsoft Test Authoring and Execution Framework (TAEF).
Author: 'Oddvar Moe'
Created: 2018-05-25
Commands:
  - Command: te.exe bypass.wsc
    Description: Run COM Scriptlets (e.g. VBScript) by calling a Windows Script Component (WSC) file.
    Usecase: Execute Visual Basic script stored in local Windows Script Component file.
    Category: Execute
    Privileges: User
    MitreID: T1127
    OperatingSystem: Windows
Full_Path:
  - Path: no default
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/683b63f8184b93c9564c4310d10c571cbe367e1e/rules/windows/process_creation/proc_creation_win_susp_use_of_te_bin.yml
Resources:
  - Link: https://twitter.com/gn3mes1s/status/927680266390384640?lang=bg
Acknowledgement:
  - Person: Giuseppe N3mes1s
    Handle: '@gN3mes1s'
---
