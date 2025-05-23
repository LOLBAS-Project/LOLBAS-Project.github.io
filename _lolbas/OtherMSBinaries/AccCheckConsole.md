---
Name: AccCheckConsole.exe
Description: Verifies UI accessibility requirements
Author: bohops
Created: 2022-01-02
Commands:
  - Command: AccCheckConsole.exe -window "Untitled - Notepad" {PATH_ABSOLUTE:.dll}
    Description: Load a managed DLL in the context of AccCheckConsole.exe. The -window switch value can be set to an arbitrary active window name.
    Usecase: Local execution of managed code from assembly DLL.
    Category: Execute
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
    Tags:
      - Execute: DLL (.NET)
  - Command: AccCheckConsole.exe -window "Untitled - Notepad" {PATH_ABSOLUTE:.dll}
    Description: Load a managed DLL in the context of AccCheckConsole.exe. The -window switch value can be set to an arbitrary active window name.
    Usecase: Local execution of managed code to bypass AppLocker.
    Category: AWL Bypass
    Privileges: User
    MitreID: T1218
    OperatingSystem: Windows
    Tags:
      - Execute: DLL (.NET)
Full_Path:
  - Path: C:\Program Files (x86)\Windows Kits\10\bin\10.0.22000.0\x86\AccChecker\AccCheckConsole.exe
  - Path: C:\Program Files (x86)\Windows Kits\10\bin\10.0.22000.0\x64\AccChecker\AccCheckConsole.exe
  - Path: C:\Program Files (x86)\Windows Kits\10\bin\10.0.22000.0\arm\AccChecker\AccCheckConsole.exe
  - Path: C:\Program Files (x86)\Windows Kits\10\bin\10.0.22000.0\arm64\AccChecker\AccCheckConsole.exe
Code_Sample:
  - Code: https://docs.microsoft.com/en-us/windows/win32/winauto/custom-verification-routines
Detection:
  - Sigma: https://github.com/SigmaHQ/sigma/blob/19396788dbedc57249a46efed2bb1927abc376d4/rules/windows/process_creation/proc_creation_win_lolbin_susp_acccheckconsole.yml
  - IOC: Sysmon Event ID 1 - Process Creation
  - Analysis: https://gist.github.com/bohops/2444129419c8acf837aedda5f0e7f340
Resources:
  - Link: https://gist.github.com/bohops/2444129419c8acf837aedda5f0e7f340
  - Link: https://twitter.com/bohops/status/1477717351017680899
Acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
---
