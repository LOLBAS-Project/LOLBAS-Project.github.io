---
name: cscript.exe
description: Used to execute scripts in Windows
functions:
  ads:
    - description: Use cscript.exe to exectute a Visual Basic script stored in an Alternate Data Stream (ADS).
      code: cscript c:\ads\file.txt:script.vbs
resources: 
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
fullpath: 
    - path: c:\windows\system32\cscript.exe
    - path: c:\windows\sysWOW64\cscript.exe
notes: Thanks to Oddvar Moe - @oddvarmoe
---