---
name: Runscripthelper.exe
description: 
functions:
  execute:
    - description: Execute the PowerShell script named test.txt
      code: runscripthelper.exe surfacecheck \\?\C:\Test\Microsoft\Diagnosis\scripts\test.txt C:\Test
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Bypass constrained language mode and execute Powershell script
resources:
    - resource: https://posts.specterops.io/bypassing-application-whitelisting-with-runscripthelper-exe-1906923658fc
fullpath:
    - path: C:\Windows\WinSxS\amd64_microsoft-windows-u..ed-telemetry-client_31bf3856ad364e35_10.0.16299.15_none_c2df1bba78111118\Runscripthelper.exe
    - path: CC:\Windows\WinSxS\amd64_microsoft-windows-u..ed-telemetry-client_31bf3856ad364e35_10.0.16299.192_none_ad4699b571e00c4a\Runscripthelper.exe
detection:
  - IOC: Event 4014 - Powershell logging
  - IOC: Event 400
acknowledgement:
  - Person: Matt Graeber
    Handle: '@mattifestation'
---
