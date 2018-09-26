---
name: Bash.exe
description: File used by Windows subsystem for Linux
functions:
  execute:
    - description: Executes calc.exe from bash.exe
      code: bash.exe -c calc.exe
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows 10
      privileges: User
      usecase: Performs execution of specified file, can be used as a defensive evasion.
  awl bypass:
    - description: Executes calc.exe from bash.exe
      code: bash.exe -c calc.exe
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows 10
      privileges: User
      usecase: Performs execution of specified file, can be used to bypass Application Whitelisting.
resources:
    - resource: https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-defender-application-control/microsoft-recommended-block-rules
fullpath:
    - path: C:\Windows\System32\bash.exe
    - path: C:\Windows\SysWOW64\bash.exe
detection:
  - IOC: Child process from bash.exe
acknowledgement:
  - Person: Alex Ionescu
    Handle: '@aionescu'
---
