---
name: Microsoft.Workflow.Compiler.exe
description: A utility included with .NET that is capable of compiling and executing C# or VB.net code.
functions:
  execute:
    - description: Compile and execute C# or VB.net code in a XOML file referenced in the test.txt file.
      code: Microsoft.Worflow.Compiler.exe tests.txt results.txt
      mitreid: T1127
      mitrelink: https://attack.mitre.org/wiki/Technique/T1127
      operatingsystem: Windows 10S
      privileges: User
      usecase: Compile and run code
  awl bypass:
    - description: Compile and execute C# or VB.net code in a XOML file referenced in the test.txt file.
      code: Microsoft.Worflow.Compiler.exe tests.txt results.txt
      mitreid: T1127
      mitrelink: https://attack.mitre.org/wiki/Technique/T1127
      operatingsystem: Windows 10S
      privileges: User
      usecase: Compile and run code
resources:
    - resource: https://twitter.com/mattifestation/status/1030445200475185154
    - resource: https://posts.specterops.io/arbitrary-unsigned-code-execution-vector-in-microsoft-workflow-compiler-exe-3d9294bc5efb
    - resource: https://gist.github.com/mattifestation/3e28d391adbd7fe3e0c722a107a25aba#file-workflowcompilerdetectiontests-ps1
    - resource: https://gist.github.com/mattifestation/7ba8fc8f724600a9f525714c9cf767fd#file-createcompilerinputxml-ps1
    - resource: https://www.forcepoint.com/blog/security-labs/using-c-post-powershell-attacks
    - resource: https://www.fortynorthsecurity.com/microsoft-workflow-compiler-exe-veil-and-cobalt-strike/
    - resource: https://medium.com/@Bank_Security/undetectable-c-c-reverse-shells-fab4c0ec4f15
fullpath:
    - path: C:\Windows\Microsoft.Net\Framework64\v4.0.30319\Microsoft.Workflow.Compiler.exe
detection:
  - IOC: Microsoft.Workflow.Compiler.exe would not normally be run on workstations.
  - IOC: The presence of csc.exe or vbc.exe as child processes of Microsoft.Workflow.Compiler.exe
  - IOC: Presence of "<CompilerInput" in a text file.
acknowledgement:
  - Person: Matt Graeber
    Handle: '@mattifestation'
  - Person: John Bergbom
    Handle: '@BergbomJohn'
  - Person: FortyNorth Security
    Handle: '@FortyNorthSec'
  - Person: Bank Security
    Handle: '@Bank_Security'
---
