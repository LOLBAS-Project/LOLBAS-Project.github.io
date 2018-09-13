---
name: csc.exe
description: C# compiler 
functions:
  compile:
    - description: Use CSC.EXE to compile C# code stored in File.cs and output the compiled version to My.exe.
      code: csc.exe -out:My.exe File.cs
    - description: Use CSC.EXE to compile C# code stored in File.cs and output the compiled version to a dll file.
      code: csc -target:library File.cs
resources: 
    - resource: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-options/command-line-building-with-csc-exe
fullpath: 
    - path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\Csc.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Csc.exe
notes:
---