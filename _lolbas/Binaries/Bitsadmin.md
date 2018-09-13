---
name: bitsadmin.exe
description: Used for background intelligent transfer.
functions:
  ads:
    - description: Create a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command, then resume and complete the job. It will execute the file located in the Alternate data stream.
      code: bitsadmin /create 1
          bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe
          bitsadmin /SetNotifyCmdLine 1 c:\data\playfolder\1.txt:cmd.exe NULL
          bitsadmin /RESUME 1
          bitsadmin /complete 1
  download:
    - description: Create a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command, then resume and complete the job.
      code: bitsadmin /create 1
          bitsadmin /addfile 1 https://live.sysinternals.com/autoruns.exe c:\data\playfolder\autoruns.exe
          bitsadmin /RESUME 1
          bitsadmin /complete 1
  copy:
    - description: One-liner for copying file
      code: bitsadmin /create 1 & bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe & bitsadmin /RESUME 1 & bitsadmin /Complete 1 & bitsadmin /reset
  execute:
    - description: One-liner that creates a bitsadmin job named 1, add cmd.exe to the job, configure the job to run the target command, then resume and complete the job.
      code: bitsadmin /create 1 & bitsadmin /addfile 1 c:\windows\system32\cmd.exe c:\data\playfolder\cmd.exe & bitsadmin /SetNotifyCmdLine 1 c:\data\playfolder\cmd.exe NULL & bitsadmin /RESUME 1 & bitsadmin /Reset
resources: 
    - resource: https://www.slideshare.net/chrisgates/windows-attacks-at-is-the-new-black-26672679 - slide 53
    - resource: https://www.youtube.com/watch?v=_8xJaaQlpBo
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
fullpath: 
    - path: c:\Windows\System32\bitsadmin.exe
    - path: c:\Windows\SysWOW64\bitsadmin.exe
notes: Thanks to Rob Fuller - @mubix , Chris Gates - @carnal0wnage, Oddvar Moe - @oddvarmoe
---