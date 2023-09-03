---
Name: Teams.exe
Description: Electron runtime binary which runs the Teams application
Author: Andrew Kisliakov
Created: 2022-01-17
Commands:
  - Command: Teams.exe
    Description: Generate JavaScript payload and package.json, and save to "%LOCALAPPDATA%\\Microsoft\\Teams\\current\\app\\" before executing.
    Usecase: Execute JavaScript code
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
  - Command: Teams.exe
    Description: Generate JavaScript payload and package.json, archive in ASAR file and save to "%LOCALAPPDATA%\\Microsoft\\Teams\\current\\app.asar" before executing.
    Usecase: Execute JavaScript code
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
Full_Path:
  - Path: "%LOCALAPPDATA%\\Microsoft\\Teams\\current\\Teams.exe"
Code_Sample:
  - Code: https://github.com/lltltk/LOLBAS-research/tree/master/Teams
Detection:
  - IOC: "%LOCALAPPDATA%\\Microsoft\\Teams\\current\\app directory created"
  - IOC: "%LOCALAPPDATA%\\Microsoft\\Teams\\current\\app.asar file created/modified by non-Teams installer/updater"
Resources:
  - Link: https://l--k.uk/2022/01/16/microsoft-teams-and-other-electron-apps-as-lolbins/
Acknowledgement:
  - Person: Andrew Kisliakov
---
