---
Name: Extrac32.exe
Description: Extract to ADS, copy or overwrite a file with Extrac32.exe
Author: Oddvar Moe
Created: 2018-05-25
Commands:
  - Command: extrac32 {PATH_ABSOLUTE:.cab} {PATH_ABSOLUTE}:file.exe
    Description: Extracts the source CAB file into an Alternate Data Stream (ADS) of the target file.
    Usecase: Extract data from cab file and hide it in an alternate data stream.
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
    Tags:
      - Type: Compression
  - Command: extrac32 {PATH_ABSOLUTE:.cab} {PATH_ABSOLUTE}:file.exe
    Description: Extracts the source CAB file on an unc path into an Alternate Data Stream (ADS) of the target file.
    Usecase: Extract data from cab file and hide it in an alternate data stream.
    Category: ADS
    Privileges: User
    MitreID: T1564.004
    OperatingSystem: Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
    Tags:
      - Type: Compression
  - Command: extrac32 /Y /C {PATH_SMB} {PATH_ABSOLUTE}
    Description: Copy the source file to the destination file and overwrite it.
    Usecase: Download file from UNC/WEBDav
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
  - Command: extrac32.exe /C {PATH_ABSOLUTE:.source.exe} {PATH_ABSOLUTE:.dest.exe}
    Description: Command for copying file from one folder to another
    Usecase: Copy file
    Category: Copy
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows XP, Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10, Windows 11
Full_Path:
  - Path: C:\Windows\System32\extrac32.exe
  - Path: C:\Windows\SysWOW64\extrac32.exe
Detection:
  - Elastic: https://github.com/elastic/detection-rules/blob/12577f7380f324fcee06dab3218582f4a11833e7/rules/windows/defense_evasion_misc_lolbin_connecting_to_the_internet.toml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_lolbin_extrac32.yml
  - Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_lolbin_extrac32_ads.yml
Resources:
  - Link: https://oddvar.moe/2018/04/11/putting-data-in-alternate-data-streams-and-how-to-execute-it-part-2/
  - Link: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
  - Link: https://twitter.com/egre55/status/985994639202283520
Acknowledgement:
  - Person: egre55
    Handle: '@egre55'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
  - Person: Hai Vaknin(Lux
    Handle: '@VakninHai'
  - Person: Tamir Yehuda
    Handle: '@tim8288'
---
