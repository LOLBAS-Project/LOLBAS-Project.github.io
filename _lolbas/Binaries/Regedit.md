---
name: regedit.exe
description: Used by Windows to manipulate registry
functions:
  ads:
    - description: Export the target Registry key to the specified .REG file.
      code: regedit /E c:\ads\file.txt:regfile.reg HKEY_CURRENT_USER\MyCustomRegKey
    - description: Import the target .REG file into the Registry.  
      code: regedit C:\ads\file.txt:regfile.reg"
resources: 
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
fullpath: 
    - path: c:\windows\system32\regedit.exe
    - path: c:\windows\sysWOW64\regedit.exe
notes: Thanks to Oddvar Moe - @oddvarmoe
---