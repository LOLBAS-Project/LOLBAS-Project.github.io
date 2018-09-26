---
name: Runonce.exe
description: 
functions:
  execute:
    - description: Executes a Run Once Task that has been configured in the registry
      code: Runonce.exe /AlternateShellStartup
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: Administrator
      usecase: Persistence, bypassing defensive counter measures
resources:
    - resource: https://twitter.com/pabraeken/status/990717080805789697
    - resource: https://cmatskas.com/configure-a-runonce-task-on-windows/
fullpath:
    - path: C:\Windows\System32\runonce.exe
    - path: C:\Windows\SysWOW64\runonce.exe
detection:
  - IOC: HKLM\SOFTWARE\Microsoft\Active Setup\Installed Components\YOURKEY
acknowledgement:
  - Person: Pierre-Alexandre Braeken
    Handle: '@pabraeken'
---
