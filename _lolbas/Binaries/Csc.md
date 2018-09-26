---
name: Csc.exe
description: Binary file used by .NET to compile C# code
functions:
  compile:
    - description: Use CSC.EXE to compile C# code stored in File.cs and output the compiled version to My.exe.
      code: csc.exe -out:My.exe File.cs
      mitreid: T1127
      mitrelink: https://attack.mitre.org/wiki/Technique/T1127
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Compile attacker code on system. Bypass defensive counter measures.
    - description: Use CSC.EXE to compile C# code stored in File.cs and output the compiled version to a dll file.
      code: csc -target:library File.cs
      mitreid: T1127
      mitrelink: https://attack.mitre.org/wiki/Technique/T1127
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Compile attacker code on system. Bypass defensive counter measures.
resources:
    - resource: https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-options/command-line-building-with-csc-exe
fullpath:
    - path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\Csc.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Csc.exe
detection:
  - IOC: Csc.exe should normally not run a system unless it is used for development.
acknowledgement:
  - Person: 
    Handle: ''
---
