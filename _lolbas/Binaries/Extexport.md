---
name: Extexport.exe
description: 
functions:
  execute:
    - description: Load a DLL located in the c:\test folder with one of the following names mozcrt19.dll, mozsqlite3.dll, or sqlite.dll
      code: Extexport.exe c:\test foo bar
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute dll file
resources:
    - resource: http://www.hexacorn.com/blog/2018/04/24/extexport-yet-another-lolbin/
fullpath:
    - path: C:\Program Files\Internet Explorer\Extexport.exe
    - path: C:\Program Files\Internet Explorer(x86)\Extexport.exe
detection:
  - IOC: Extexport.exe loads dll and is execute from other folder the original path
acknowledgement:
  - Person: Adam
    Handle: '@hexacorn'
---
