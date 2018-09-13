---
name: control.exe
description: 
functions:
  ads:
    - description: Execute evil.dll which is stored in an Alternate Data Stream (ADS).
      code: control.exe c:\windows\tasks\file.txt:evil.dll
resources: 
    - resource: https://pentestlab.blog/2017/05/24/applocker-bypass-control-panel/
    - resource: https://www.contextis.com/resources/blog/applocker-bypass-registry-key-manipulation/
    - resource: https://bohops.com/2018/01/23/loading-alternate-data-stream-ads-dll-cpl-binaries-to-bypass-applocker/
    - resource: https://twitter.com/bohops/status/955659561008017409
fullpath: 
    - path: c:\windows\system32\control.exe
    - path: c:\windows\sysWOW64\control.exe
notes: Thanks to Jimmy - @bohops
---