---
name: gpscript.exe
description: Used by group policy to process scripts
functions:
  execute:
    - description: Executes logon scripts configured in Group Policy. Requires administrative rights and modifications to local group policy settings.
      code: Gpscript /logon
    - description: Executes startup scripts configured in Group Policy.
      code: Gpscript /startup
resources: 
    - resource: https://oddvar.moe/2018/04/27/gpscript-exe-another-lolbin-to-the-list/
fullpath: 
    - path: c:\windows\system32\gpscript.exe
    - path: c:\windows\sysWOW64\gpscript.exe
notes: Thanks to Oddvar Moe - @oddvarmoe
---