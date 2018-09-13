---
name: odbcconf.exe
description: 
functions:
  execute:
    - description:  Load DLL specified in target .RSP file. See the Playloads folder for an example .RSP file.
      code:  odbcconf -f file.rsp
resources: 
    - resource: https://gist.github.com/NickTyrer/6ef02ce3fd623483137b45f65017352b
    - resource: https://github.com/woanware/application-restriction-bypasses
    - resource: https://twitter.com/subTee/status/789459826367606784
fullpath: 
    - path: c:\windows\system32\odbcconf.exe
    - path: c:\windows\sysWOW64\odbcconf.exe
notes: Thanks to Casey Smith - @subtee, Nick Tyrer - @NickTyrer
---