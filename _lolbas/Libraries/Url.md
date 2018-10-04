---
name: Url.dll
description: Internet Shortcut Shell Extension DLL.
functions:
  execute:
    - description: Launch a HTML application payload by calling OpenURL.
      code: rundll32.exe url.dll,OpenURL "C:\test\calc.hta"
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Invoke an HTML Application via mshta.exe (Default Handler).
    - description: Launch an executable payload via proxy through a(n) URL (information) file by calling OpenURL.
      code: rundll32.exe url.dll,OpenURL "C:\test\calc.url"
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Load an executable payload by calling a .url file with or without quotes.
    - description: Launch an executable by calling OpenURL.
      code: rundll32.exe url.dll,OpenURL file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Load an executable payload by specifying the file protocol handler (obfuscated).
    - description: Launch an executable by calling FileProtocolHandler.
      code: rundll32.exe url.dll,FileProtocolHandler calc.exe
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Launch an executable.
    - description: Launch an executable by calling FileProtocolHandler.
      code: rundll32.exe url.dll,FileProtocolHandler file://^C^:^/^W^i^n^d^o^w^s^/^s^y^s^t^e^m^3^2^/^c^a^l^c^.^e^x^e
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Load an executable payload by specifying the file protocol handler (obfuscated).
    - description: Launch a HTML application payload by calling FileProtocolHandler.
      code: rundll32.exe url.dll,FileProtocolHandler file:///C:/test/test.hta
      mitreid: T1085
      mitrelink: https://attack.mitre.org/wiki/Technique/T1085
      operatingsystem: Windows
      privileges: User
      usecase: Invoke an HTML Application via mshta.exe (Default Handler).
resources:
    - resource: https://bohops.com/2018/03/17/abusing-exported-functions-and-exposed-dcom-interfaces-for-pass-thru-command-execution-and-lateral-movement/
    - resource: https://twitter.com/DissectMalware/status/995348436353470465
    - resource: https://twitter.com/bohops/status/974043815655956481
    - resource: https://twitter.com/yeyint_mth/status/997355558070927360
    - resource: https://twitter.com/Hexacorn/status/974063407321223168
    - resource: https://windows10dll.nirsoft.net/url_dll.html
fullpath:
    - path: c:\windows\system32\url.dll
    - path: c:\windows\syswow64\url.dll
detection:
  - IOC: 
acknowledgement:
  - Person: Adam (OpenURL)
    Handle: '@hexacorn'
  - Person: Jimmy (OpenURL)
    Handle: '@bohops'
  - Person: Malwrologist (FileProtocolHandler - HTA)
    Handle: '@DissectMalware'
  - Person: r0lan (Obfuscation)
    Handle: '@r0lan'
---
