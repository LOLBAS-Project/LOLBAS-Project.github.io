---
name: reg.exe
description: Used to manipulate the registry.
functions:
  ads:
    - description: Export the target Registry key and save it to the specified .REG file.
      code: reg export HKLM\SOFTWARE\Microsoft\Evilreg c:\ads\file.txt:evilreg.reg
resources: 
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
fullpath: 
    - path: c:\windows\system32\reg.exe
    - path: c:\windows\sysWOW64\reg.exe
notes: Thanks to Oddvar Moe - @oddvarmoe
---