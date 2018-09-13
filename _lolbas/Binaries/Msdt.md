---
name: msdt.exe
description: Microsoft diagnostics tool
functions:
  execute:
    - description: Executes the Microsoft Diagnostics Tool and executes the malicious .MSI referenced in the PCW8E57.xml file. See the Payloads folder for an example PCW8E57.xml file.
      code: msdt.exe -path C:\WINDOWS\diagnostics\index\PCWDiagnostic.xml -af C:\PCW8E57.xml /skip TRUE
resources: 
    - resource: https://cybersyndicates.com/2015/10/a-no-bull-guide-to-malicious-windows-trouble-shooting-packs-and-application-whitelist-bypass/
    - resource: https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/
    - resource: https://twitter.com/harr0ey/status/991338229952598016
fullpath: 
    - path: c:\windows\system32\msdt.exe
    - path: c:\windows\sysWOW64\msdt.exe
notes:
---