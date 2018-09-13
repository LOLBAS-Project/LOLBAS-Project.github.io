---
name: cdb.exe
description: 
functions:
  execute:
    - description: Launch 64-bit shellcode from the x64_calc.wds file using cdb.exe.
      code: cdb.exe -cf x64_calc.wds -o notepad.exe
resources: 
    - resource: http://www.exploit-monday.com/2016/08/windbg-cdb-shellcode-runner.html
    - resource: https://docs.microsoft.com/en-us/windows-hardware/drivers/debugger/cdb-command-line-options
    - resource: https://gist.github.com/mattifestation/94e2b0a9e3fe1ac0a433b5c3e6bd0bda
fullpath: 
    - path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x86\cdb.exe
    - path: C:\Program Files (x86)\Windows Kits\10\Debuggers\x64\cdb.exe
notes: Thanks to Matt Graeber - @mattifestation
---