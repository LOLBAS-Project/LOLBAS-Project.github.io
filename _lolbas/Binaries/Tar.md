---
Name: Tar.exe
Description: Used by Windows to extract and create archives.
Author: 'Brian Lucero'
Created: 2023-01-30
Commands:
  - Command: tar -xf \\host1\archive.tar
    Description: Extracts archive.tar from the remote (internal) host (host1) to the current host.
    Usecase: Copy files
    Category: Copy
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows 10, Windows 11
Full_Path:
  - Path: C:\Windows\System32\tar.exe
Detection:
  - IOC: tar.exe extracting files from a remote host within the environment
Resources:
  - Link: https://twitter.com/Cyber_Sorcery/status/1619819249886969856
Acknowledgement:
  - Person: Brian Lucero
    Handle: '@Cyber_Sorcery'
---
