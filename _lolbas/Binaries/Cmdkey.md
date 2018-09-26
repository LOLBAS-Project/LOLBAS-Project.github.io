---
name: Cmdkey.exe
description: creates, lists, and deletes stored user names and passwords or credentials.
functions:
  credentials:
    - description: List cached credentials
      code: cmdkey /list
      mitreid: T1078
      mitrelink: https://attack.mitre.org/wiki/Technique/T1078
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Get credential information from host
resources:
    - resource: https://www.peew.pw/blog/2017/11/26/exploring-cmdkey-an-edge-case-for-privilege-escalation
    - resource: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cmdkey
fullpath:
    - path: C:\Windows\System32\cmdkey.exe
    - path: C:\Windows\SysWOW64\cmdkey.exe
detection:
  - IOC: Usage of this command could be an IOC
acknowledgement:
  - Person: 
    Handle: ''
---
