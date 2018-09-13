---
name: forfiles.exe
description: Selects and executes a command on a file or set of files. This command is useful for batch processing.
functions:
  execute:
    - description: Executes calc.exe since there is a match for notepad.exe in the c:\\windows\\System32 folder.
      code: forfiles /p c:\windows\system32 /m notepad.exe /c calc.exe
    - description: Executes the evil.exe Alternate Data Stream (AD) since there is a match for notepad.exe in the c:\\windows\\system32 folder.
      code: forfiles /p c:\windows\system32 /m notepad.exe /c "c:\folder\normal.dll:evil.exe"
resources: 
    - resource: https://twitter.com/vector_sec/status/896049052642533376
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
    - resource: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
    - resource: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/forfiles
fullpath: 
    - path: c:\windows\system32\forfiles.exe
    - path: c:\windows\sysWOW64\forfiles.exe
notes: Thanks to Eric - @vector_sec, Oddvar Moe - @oddvarmoe
---