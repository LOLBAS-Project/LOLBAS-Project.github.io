---
name: Register-cimprovider.exe
description: Used to register new wmi providers
functions:
  execute:
    - description: Load the target .DLL.
      code: Register-cimprovider -path "C:\folder\evil.dll"
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute code within dll file
resources:
    - resource: https://twitter.com/PhilipTsukerman/status/992021361106268161
fullpath:
    - path: C:\Windows\System32\Register-cimprovider.exe
    - path: C:\Windows\SysWOW64\Register-cimprovider.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Philip Tsukerman
    Handle: '@PhilipTsukerman'
---
