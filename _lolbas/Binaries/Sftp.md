---
Name: Sftp.exe
Description: sftp.exe is a Windows command-line utility that uses the Secure File Transfer Protocol (SFTP) to securely transfer files between a local machine and a remote server.
Author: Swachchhanda Shrawan Poudel
Created: 2025-05-13
Commands:
  - Command: sftp -o ProxyCommand="{CMD}" .
    Description: "Spawns ssh.exe which in turn spawns the specified command line. See also this project's entry for ssh.exe."
    Usecase: Proxy execution of specified command, can be used as a defensive evasion.
    Category: Execute
    Privileges: User
    MitreID: T1202
    OperatingSystem: Windows 10, Windows 11
    Tags:
      - Execute: CMD
Full_Path:
  - Path: C:\Windows\System32\OpenSSH\sftp.exe
Detection:
  - IOC: sftp.exe executions with ProxyCommand on the command line
  - IOC: sftp.exe spawning ssh.exe with ProxyCommand on the command line
  - Sigma: https://github.com/SigmaHQ/sigma/pull/5414/files
Resources:
  - Link: https://news.sophos.com/en-us/2025/05/09/lumma-stealer-coming-and-going/
Acknowledgement:
  - Person: Swachchhanda Shrawan Poudel
    Handle: '@_swachchhanda_'
---
