---
name: winrm.vbs
description: Script used for manage Windows RM settings
functions:
  execute:
    - description: Hijack the Scripting.Dictionary COM Object to execute remote scriptlet (SCT) code.
      code: reg.exe import c:\path\to\Slmgr.reg & winrm quickconfig
      mitreid: T1216
      mitrelink: https://attack.mitre.org/wiki/Technique/T1216
      operatingsystem: Windows 10
      privileges: User
      usecase: Proxy execution
    - description: Lateral movement/Remote Command Execution via WMI Win32_Process class over the WinRM protocol
      code: winrm invoke Create wmicimv2/Win32_Process @{CommandLine="notepad.exe"} -r:http://target:5985
      mitreid: T1216
      mitrelink: https://attack.mitre.org/wiki/Technique/T1216
      operatingsystem: Windows 10
      privileges: User
      usecase: Proxy execution
    - description: Lateral movement/Remote Command Execution via WMI Win32_Service class over the WinRM protocol
      code: winrm invoke Create wmicimv2/Win32_Service @{Name="Evil";DisplayName="Evil";PathName="cmd.exe /k c:\windows\system32\notepad.exe"} -r:http://acmedc:5985   \nwinrm invoke StartService wmicimv2/Win32_Service?Name=Evil -r:http://acmedc:5985
      mitreid: T1216
      mitrelink: https://attack.mitre.org/wiki/Technique/T1216
      operatingsystem: Windows 10
      privileges: User
      usecase: Proxy execution
resources:
    - resource: https://www.slideshare.net/enigma0x3/windows-operating-system-archaeology
    - resource: https://www.youtube.com/watch?v=3gz1QmiMhss
    - resource: https://github.com/enigma0x3/windows-operating-system-archaeology
    - resource: https://redcanary.com/blog/lateral-movement-winrm-wmi/
    - resource: https://twitter.com/bohops/status/994405551751815170
fullpath:
    - path: C:\Windows\System32\winrm.vbs
    - path: C:\Windows\SysWOW64\winrm.vbs
detection:
  - IOC: 
acknowledgement:
  - Person: Matt Nelson
    Handle: '@enigma0x3'
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: Jimmy
    Handle: '@bohops'
  - Person: Red Canary Company cc Tony Lambert
    Handle: '@redcanaryco'
---
