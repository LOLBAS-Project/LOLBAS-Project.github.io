---
name: Regsvcs.exe
description: Regsvcs and Regasm are Windows command-line utilities that are used to register .NET Component Object Model (COM) assemblies
functions:
  execute:
    - description: Loads the target .DLL file and executes the RegisterClass function.
      code: regsvcs.exe AllTheThingsx64.dll
      mitreid: T1121
      mitrelink: https://attack.mitre.org/wiki/Technique/T1121
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute dll file and bypass Application whitelisting
  awl bypass:
    - description: Loads the target .DLL file and executes the RegisterClass function.
      code: regsvcs.exe AllTheThingsx64.dll
      mitreid: T1121
      mitrelink: https://attack.mitre.org/wiki/Technique/T1121
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute dll file and bypass Application whitelisting
resources:
    - resource: https://pentestlab.blog/2017/05/19/applocker-bypass-regasm-and-regsvcs/
    - resource: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
    - resource: https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1121/T1121.md
fullpath:
    - path: C:\Windows\System32\regsvcs.exe
    - path: C:\Windows\SysWOW64\regsvcs.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
