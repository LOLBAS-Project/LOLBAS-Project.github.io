---
Name: Makecab.exe
Description: Binary to package existing files into a cabinet (.cab) file
Author: Oddvar Moe
Created: 2018-05-25
Commands:
  - Command: makecab {PATH_ABSOLUTE:.exe} {PATH_ABSOLUTE}:autoruns.cab
    Description: Compresses the target file into a CAB file stored in the Alternate Data Stream (ADS) of the target file.
    Usecase: Hide data compressed into an alternate data stream
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
    Tags:
      - Type: Compression
  - Command: makecab {PATH_SMB:.exe} {PATH_ABSOLUTE}:file.cab
    Description: Compresses the target file into a CAB file stored in the Alternate Data Stream (ADS) of the target file.
    Usecase: Hide data compressed into an alternate data stream
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
    Tags:
      - Type: Compression
  - Command: makecab {PATH_SMB:.exe} {PATH_ABSOLUTE:.cab}
    Description: Download and compresses the target file and stores it in the target file.
    Usecase: Download file and compress into a cab file
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
    Tags:
      - Type: Compression
  - Command: makecab /F {PATH:.ddf}
    Description: Execute makecab commands as defined in the specified Diamond Definition File (.ddf); see resources for the format specification.
    Usecase: Bypass command-line based detections
    Category: Execute
    Privileges: User
    MitreID: T1036
    OperatingSystem: Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
    Tags:
      - Type: Compression
Full_Path:
  - Path: C:\Windows\System32\makecab.exe
  - Path: C:\Windows\SysWOW64\makecab.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_susp_alternate_data_streams.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/12577f7380f324fcee06dab3218582f4a11833e7/rules/windows/defense_evasion_misc_lolbin_connecting_to_the_internet.toml
  - IOC: Makecab retrieving files from Internet
  - IOC: Makecab storing data into alternate data streams
Resources:
  - Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
  - Link: https://ss64.com/nt/makecab-directives.html
  - Link: https://www.pearsonhighered.com/assets/samplechapter/0/7/8/9/0789728583.pdf
  - Link: https://learn.microsoft.com/en-us/previous-versions/bb417343(v=msdn.10)#makecab-application
Acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
