---
name: Ieaframe.dll
description: Internet Browser DLL for translating HTML code.
functions:
  execute:
    - description: Launch an executable payload via proxy through a(n) URL (information) file by calling OpenURL.
      code: rundll32.exe ieframe.dll,OpenURL "C:\test\calc.url"
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Load an executable payload by calling a .url file with or without quotes.  The .url file extension can be renamed.
resources:
    - resource: http://www.hexacorn.com/blog/2018/03/15/running-programs-via-proxy-jumping-on-a-edr-bypass-trampoline-part-5/
    - resource: https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/
    - resource: https://twitter.com/bohops/status/997690405092290561
    - resource: https://windows10dll.nirsoft.net/ieframe_dll.html
fullpath:
    - path: c:\windows\system32\ieframe.dll
    - path: c:\windows\syswow64\ieframe.dll
detection:
  - IOC: 
acknowledgement:
  - Person: Jimmy
    Handle: '@bohops'
  - Person: Adam
    Handle: '@hexacorn'
---
