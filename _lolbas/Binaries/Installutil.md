---
name: Installutil.exe
description: The Installer tool is a command-line utility that allows you to install and uninstall server resources by executing the installer components in specified assemblies
functions:
  execute:
    - description: Execute the target .NET DLL or EXE.
      code: InstallUtil.exe /logfile= /LogToConsole=false /U AllTheThings.dll
      mitreid: T1118
      mitrelink: https://attack.mitre.org/wiki/Technique/T1118
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Use to execute code and bypass application whitelisting
  awl bypass:
    - description: Execute the target .NET DLL or EXE.
      code: InstallUtil.exe /logfile= /LogToConsole=false /U AllTheThings.dll
      mitreid: T1118
      mitrelink: https://attack.mitre.org/wiki/Technique/T1118
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Use to execute code and bypass application whitelisting
resources:
    - resource: https://pentestlab.blog/2017/05/08/applocker-bypass-installutil/
    - resource: https://evi1cg.me/archives/AppLocker_Bypass_Techniques.html#menu_index_12
    - resource: https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1118/T1118.md
    - resource: https://www.blackhillsinfosec.com/powershell-without-powershell-how-to-bypass-application-whitelisting-environment-restrictions-av/
    - resource: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
    - resource: https://docs.microsoft.com/en-us/dotnet/framework/tools/installutil-exe-installer-tool
fullpath:
    - path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\InstallUtil.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\InstallUtil.exe
    - path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\InstallUtil.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\InstallUtil.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
