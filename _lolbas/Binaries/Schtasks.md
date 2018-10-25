---
name: Schtasks.exe
description: Schedule periodic tasks
functions:
  execute:
    - description: Create a recurring task to execute every minute.
      code: schtasks /create /sc minute /mo 1 /tn "Reverse shell" /tr c:\some\directory\revshell.exe
      mitreid: T1053
      mitrelink: https://attack.mitre.org/wiki/Technique/T1053
      operatingsystem: Windows
      privileges: User
      usecase: Create a recurring task, to eg. to keep reverse shell session(s) alive
resources:
    - resource: https://isc.sans.edu/forums/diary/Adding+Persistence+Via+Scheduled+Tasks/23633/
fullpath:
    - path: c:\windows\system32\schtasks.exe
    - path: c:\windows\syswow64\schtasks.exe
detection:
  - IOC: Services that gets created
acknowledgement:
  - Person: 
    Handle: ''
---
