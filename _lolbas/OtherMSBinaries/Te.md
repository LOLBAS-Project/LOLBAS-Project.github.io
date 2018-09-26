---
name: te.exe
description: Testing tool included with Microsoft Test Authoring and Execution Framework (TAEF).
functions:
  execute:
    - description: Run COM Scriptlets (e.g. VBScript) by calling a Windows Script Component (WSC) file.
      code: te.exe bypass.wsc
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Execute Visual Basic script stored in local Windows Script Component file.
resources:
    - resource: https://twitter.com/gn3mes1s/status/927680266390384640?lang=bg
fullpath:
    - path: 
detection:
  - IOC: 
acknowledgement:
---
