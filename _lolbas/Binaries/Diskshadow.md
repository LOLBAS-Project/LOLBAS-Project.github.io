---
name: diskshadow.exe
description: diskshadow.exe is a tool that exposes the functionality offered by the volume shadow copy Service (VSS). By default, diskshadow uses an interactive command interpreter similar to that of diskraid or DiskPart. diskshadow also includes a scriptable mode.
functions:
  execute:
    - description: Execute commands using diskshadow.exe from a prepared diskshadow script.
      code: diskshadow.exe /s c:\test\diskshadow.txt
    - description: Execute a calc.exe using diskshadow.exe.
      code: diskshadow> exec calc.exe
resources: 
    - resource: https://bohops.com/2018/03/26/diskshadow-the-return-of-vss-evasion-persistence-and-active-directory-database-extraction/
    - resource: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/diskshadow
fullpath: 
    - path: c:\windows\system32\diskshadow.exe
    - path: c:\windows\sysWOW64\diskshadow.exe
notes: Thanks to Jimmy - @bohops
---