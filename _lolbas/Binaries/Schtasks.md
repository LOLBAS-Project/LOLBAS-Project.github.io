---
name: Schtasks.exe
description: Schedule periodic tasks
functions:
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
