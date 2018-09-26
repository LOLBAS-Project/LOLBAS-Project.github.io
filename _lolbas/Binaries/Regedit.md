---
name: Regedit.exe
description: Used by Windows to manipulate registry
functions:
  ads:
    - description: Export the target Registry key to the specified .REG file.
      code: regedit /E c:\ads\file.txt:regfile.reg HKEY_CURRENT_USER\MyCustomRegKey
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Hide registry data in alternate data stream
    - description: Import the target .REG file into the Registry.
      code: regedit C:\ads\file.txt:regfile.reg"
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Import hidden registry data from alternate data stream
resources:
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
fullpath:
    - path: C:\Windows\System32\regedit.exe
    - path: C:\Windows\SysWOW64\regedit.exe
detection:
  - IOC: regedit.exe reading and writing to alternate data stream
  - IOC: regedit.exe should normally not be executed by end-users
acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
