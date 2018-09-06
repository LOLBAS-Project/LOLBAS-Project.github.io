---
functions:
  execute:
    -
      name: Msbuild.exe
      description: Execute
      author: ''
      created: '2018-05-25'
      categories: []
      commands:
        - Command: msbuild.exe pshell.xml
          Description: Build and execute a C# project stored in the target XML file.
        - Command: msbuild.exe Msbuild.csproj
          Description: Build and execute a C# project stored in the target CSPROJ file.
      full_path: |
        C:\Windows\Microsoft.NET\Framework\v2.0.50727\Msbuild.exe
        C:\Windows\Microsoft.NET\Framework64\v2.0.50727\Msbuild.exe
        C:\Windows\Microsoft.NET\Framework\v3.5\Msbuild.exe
        C:\Windows\Microsoft.NET\Framework64\v3.5\Msbuild.exe
        C:\Windows\Microsoft.NET\Framework\v4.0.30319\Msbuild.exe
        C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Msbuild.exe
      code_sample: []
      detection: []
      resources: |
        https://github.com/redcanaryco/atomic-red-team/blob/master/Windows/Execution/Trusted_Developer_Utilities.md
        https://github.com/Cn33liz/MSBuildShell
        https://pentestlab.blog/2017/05/29/applocker-bypass-msbuild/
        https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
      notes: Thanks to Casey Smith - @subtee, Cn33liz - @Cneelis
---