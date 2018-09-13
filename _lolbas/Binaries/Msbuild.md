---
name: msbuild.exe
description: Used to build and execute code 
functions:
  awl-bypass:
    - description: Build and execute a C# project stored in the target XML file.
      code: msbuild.exe pshell.xml
  execute:
    - description: Build and execute a C# project stored in the target XML file.
      code: msbuild.exe project.csproj	  
resources: 
    - resource: https://github.com/Cn33liz/MSBuildShell
    - resource: https://pentestlab.blog/2017/05/29/applocker-bypass-msbuild/
    - resource: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
fullpath: 
    - path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\Msbuild.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\Msbuild.exe	
    - path: C:\Windows\Microsoft.NET\Framework\v3.5\Msbuild.exe	
    - path: C:\Windows\Microsoft.NET\Framework64\v3.5\Msbuild.exe	
    - path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\Msbuild.exe	
    - path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Msbuild.exe	
notes: Thanks to Casey Smith - @subtee, Cn33liz - @Cneelis
---