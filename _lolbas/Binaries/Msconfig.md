---
name: msconfig.exe
description: Shows system information
functions:
  download:
    - description: Executes command embeded in crafted c:\windows\system32\mscfgtlc.xml. See the Payloads folder for an example mscfgtlc.xml file.
      code: Msconfig.exe -5
resources: 
    - resource: https://twitter.com/pabraeken/status/991314564896690177
fullpath: 
    - path: c:\windows\system32\msconfig.exe
notes: Thanks to Pierre-Alexandre Braeken - @pabraeken
---