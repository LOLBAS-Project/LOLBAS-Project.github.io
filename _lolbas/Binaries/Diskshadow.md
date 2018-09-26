---
name: Diskshadow.exe
description: Diskshadow.exe is a tool that exposes the functionality offered by the volume shadow copy Service (VSS).
functions:
  execute:
    - description: Execute commands using diskshadow.exe to spawn child process
      code: diskshadow> exec calc.exe
      mitreid: T1003
      mitrelink: https://attack.mitre.org/wiki/Technique/T1003
      operatingsystem: Windows server
      privileges: User
      usecase: Use diskshadow to bypass defensive counter measures
  dump:
    - description: Execute commands using diskshadow.exe from a prepared diskshadow script.
      code: diskshadow.exe /s c:\test\diskshadow.txt
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows server
      privileges: User
      usecase: Use diskshadow to exfiltrate data from VSS such as NTDS.dit
resources:
    - resource: https://bohops.com/2018/03/26/diskshadow-the-return-of-vss-evasion-persistence-and-active-directory-database-extraction/
fullpath:
    - path: C:\Windows\System32\diskshadow.exe
    - path: C:\Windows\SysWOW64\diskshadow.exe
detection:
  - IOC: Child process from diskshadow.exe
  - IOC: Diskshadow reading input from file
acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
---
