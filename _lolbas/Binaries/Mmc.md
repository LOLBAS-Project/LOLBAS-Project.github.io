---
Name: Mmc.exe
Description: Load snap-ins to locally and remotely manage Windows systems
Author: '@bohops'
Created: 2018-12-04
Commands:
  - Command: mmc.exe -Embedding {PATH_ABSOLUTE:.msc}
    Description: Launch a 'backgrounded' MMC process and invoke a COM payload
    Usecase: Configure a snap-in to load a COM custom class (CLSID) that has been added to the registry
    Category: Execute
    Privileges: User
    MitreID: T1218.014
    OperatingSystem: Windows 10 (and possibly earlier versions), Windows 11
    Tags:
      - Execute: COM
  - Command: mmc.exe gpedit.msc
    Description: Load an arbitrary payload DLL by configuring COR Profiler registry settings and launching MMC to bypass UAC.
    Usecase: Modify HKCU\Environment key in Registry with COR profiler values then launch MMC to load the payload DLL.
    Category: UAC Bypass
    Privileges: Administrator
    MitreID: T1218.014
    OperatingSystem: Windows 10 (and possibly earlier versions), Windows 11
    Tags:
      - Execute: DLL
  - Command: mmc.exe -Embedding {PATH_ABSOLUTE:.msc}
    Description: Download and save an executable to disk
    Usecase: Download file from Internet
    Category: Download
    Privileges: User
    MitreID: T1218.014
    OperatingSystem: Windows 10 (and possibly earlier versions), Windows 11
    Tags:
      - Application: GUI
Full_Path:
  - Path: C:\Windows\System32\mmc.exe
  - Path: C:\Windows\SysWOW64\mmc.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_mmc_susp_child_process.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/file/file_event/file_event_win_uac_bypass_dotnet_profiler.yml
Resources:
  - Link: https://bohops.com/2018/08/18/abusing-the-com-registry-structure-part-2-loading-techniques-for-evasion-and-persistence/
  - Link: https://offsec.almond.consulting/UAC-bypass-dotnet.html
  - Link: https://www.youtube.com/watch?v=LFgZOTmhzeA
Acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
  - Person: clem
    Handle: '@clavoillotte'
  - Person: Fredrik H. Brathen
---
