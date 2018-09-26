---
name: Forfiles.exe
description: Selects and executes a command on a file or set of files. This command is useful for batch processing.
functions:
  execute:
    - description: Executes calc.exe since there is a match for notepad.exe in the c:\windows\System32 folder.
      code: forfiles /p c:\windows\system32 /m notepad.exe /c calc.exe
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Use forfiles to start a new process to evade defensive counter measures
  ads:
    - description: Executes the evil.exe Alternate Data Stream (AD) since there is a match for notepad.exe in the c:\windows\system32 folder.
      code: forfiles /p c:\windows\system32 /m notepad.exe /c "c:\folder\normal.dll:evil.exe"
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Use forfiles to start a new process from a binary hidden in an alternate data stream
resources:
    - resource: https://twitter.com/vector_sec/status/896049052642533376
    - resource: https://gist.github.com/api0cradle/cdd2d0d0ec9abb686f0e89306e277b8f
    - resource: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
fullpath:
    - path: C:\Windows\System32\forfiles.exe
    - path: C:\Windows\SysWOW64\forfiles.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Eric
    Handle: '@vector_sec'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
