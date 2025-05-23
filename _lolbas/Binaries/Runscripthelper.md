---
Name: Runscripthelper.exe
Description: Execute target PowerShell script
Author: Oddvar Moe
Created: 2018-05-25
Commands:
  - Command: runscripthelper.exe surfacecheck \\?\{PATH_ABSOLUTE:.txt} {PATH_ABSOLUTE:folder}
    Description: Execute the PowerShell script with .txt extension
    Usecase: Bypass constrained language mode and execute Powershell script
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
    Tags:
      - Execute: PowerShell
Full_Path:
  - Path: C:\Windows\WinSxS\amd64_microsoft-windows-u..ed-telemetry-client_31bf3856ad364e35_10.0.16299.15_none_c2df1bba78111118\Runscripthelper.exe
  - Path: C:\Windows\WinSxS\amd64_microsoft-windows-u..ed-telemetry-client_31bf3856ad364e35_10.0.16299.192_none_ad4699b571e00c4a\Runscripthelper.exe
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/c04bef2fbbe8beff6c7620d5d7ea6872dbe7acba/rules/windows/process_creation/proc_creation_win_lolbin_runscripthelper.yml
  - BlockRule: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
  - IOC: Event ID 4104 - Microsoft-Windows-PowerShell/Operational
  - IOC: Event ID 400 - Windows PowerShell
Resources:
  - Link: https://posts.specterops.io/bypassing-application-whitelisting-with-runscripthelper-exe-1906923658fc
Acknowledgement:
  - Person: Matt Graeber
    Handle: '@mattifestation'
---
