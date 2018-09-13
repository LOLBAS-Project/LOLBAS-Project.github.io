---
name: cmdkey.exe
description: creates, lists, and deletes stored user names and passwords or credentials.
functions:
  credentials:
    - description: List cached credentials.
      code: cmdkey /list
resources: 
    - resource: https://www.peew.pw/blog/2017/11/26/exploring-cmdkey-an-edge-case-for-privilege-escalation
    - resource: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cmdkey
fullpath: 
    - path: c:\windows\system32\cmdkey.exe
    - path: c:\windows\sysWOW64\cmdkey.exe
notes:
---