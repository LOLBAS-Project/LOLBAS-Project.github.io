---
Name: DumpMinitool.exe
Description: Dump tool part Visual Studio 2022
Author: mr.d0x
Created: 2022-01-20
Commands:
  - Command: DumpMinitool.exe --file {PATH_ABSOLUTE} --processId 1132 --dumpType Full
    Description: Creates a memory dump of the lsass process
    Usecase: Create memory dump and parse it offline
    Category: Dump
    Privileges: Administrator
    MitreID: T1003.001
    OperatingSystem: Windows 10, Windows 11
Full_Path:
  - Path: C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\Extensions\TestPlatform\Extensions\DumpMinitool.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/b02e3b698afbaae143ac4fb36236eb0b41122ed7/rules/windows/process_creation/proc_creation_win_dumpminitool_execution.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/b02e3b698afbaae143ac4fb36236eb0b41122ed7/rules/windows/process_creation/proc_creation_win_dumpminitool_susp_execution.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/b02e3b698afbaae143ac4fb36236eb0b41122ed7/rules/windows/process_creation/proc_creation_win_devinit_lolbin_usage.yml
Resources:
  - Link: https://twitter.com/mrd0x/status/1511415432888131586
Acknowledgement:
  - Person: mr.d0x
    Handle: '@mrd0x'
---
