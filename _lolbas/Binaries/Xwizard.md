---
name: Xwizard.exe
description: 
functions:
  execute:
    - description: Xwizard.exe running a custom class that has been added to the registry.
      code: xwizard RunWizard {00000001-0000-0000-0000-0000FEEDACDC}
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Run a com object created in registry to evade defensive counter measures
resources:
    - resource: http://www.hexacorn.com/blog/2017/07/31/the-wizard-of-x-oppa-plugx-style/
    - resource: https://www.youtube.com/watch?v=LwDHX7DVHWU
    - resource: https://gist.github.com/NickTyrer/0598b60112eaafe6d07789f7964290d5
fullpath:
    - path: C:\Windows\System32\xwizard.exe
    - path: C:\Windows\SysWOW64\xwizard.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Adam
    Handle: '@Hexacorn'
---
