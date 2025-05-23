---
Name: Regedit.exe
Description: Used by Windows to manipulate registry
Author: Oddvar Moe
Created: 2018-05-25
Commands:
  - Command: regedit /E {PATH_ABSOLUTE}:regfile.reg HKEY_CURRENT_USER\MyCustomRegKey
    Description: Export the target Registry key to the specified .REG file.
    Usecase: Hide registry data in alternate data stream
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
  - Command: regedit {PATH_ABSOLUTE}:regfile.reg
    Description: Import the target .REG file into the Registry.
    Usecase: Import hidden registry data from alternate data stream
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
Full_Path:
  - Path: C:\Windows\regedit.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_regedit_import_keys_ads.yml
  - IOC: regedit.exe reading and writing to alternate data stream
  - IOC: regedit.exe should normally not be executed by end-users
Resources:
  - Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
