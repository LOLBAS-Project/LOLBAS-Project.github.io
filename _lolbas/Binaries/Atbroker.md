---
name: Atbroker.exe
description: Helper binary for Assistive Technology (AT)
functions:
  execute:
    - description: Start a registered Assistive Technology (AT).
      code: ATBroker.exe /start malware
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Executes code defined in registry for a new AT. Modifications must be made to the system registry to either register or modify an existing Assistibe Technology (AT) service entry.
resources:
    - resource: http://www.hexacorn.com/blog/2016/07/22/beyond-good-ol-run-key-part-42/
fullpath:
    - path: C:\Windows\System32\Atbroker.exe
    - path: C:\Windows\SysWOW64\Atbroker.exe
detection:
  - IOC: Changes to HKCU\Software\Microsoft\Windows NT\CurrentVersion\Accessibility\Configuration
  - IOC: Changes to HKCU\Software\Microsoft\Windows NT\CurrentVersion\Accessibility\ATs
  - IOC: Unknown AT starting C:\Windows\System32\ATBroker.exe /start malware
acknowledgement:
  - Person: Adam
    Handle: '@hexacorn'
---
