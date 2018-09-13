---
name: Atbroker.exe
description: 
functions:
  execute:
    - description: Start a registered Assistive Technology (AT). Modifications must be made to the system registry to either register or modify an existing Assistibe Technology (AT) service entry.
      code: ATBroker.exe /start malware
resources:
    - resource: http://www.hexacorn.com/blog/2016/07/22/beyond-good-ol-run-key-part-42/
fullpath:
    - path: C:\Windows\System32\Atbroker.exe
    - path: C:\Windows\SysWOW64\Atbroker.exe
notes: Thanks to Adam - @hexacorn
---