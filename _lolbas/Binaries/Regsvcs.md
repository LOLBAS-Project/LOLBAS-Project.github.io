---
name: Regsvcs.exe
description: 
functions:
  awl-bypass:
    - description: Loads the target .DLL file and executes the RegisterClass function.
      code: regsvcs.exe AllTheThingsx64.dll
  execute:
    - description: Loads the target .DLL file and executes the RegisterClass function.
      code: regsvcs.exe AllTheThingsx64.dll
resources: 
    - resource: https://pentestlab.blog/2017/05/19/applocker-bypass-regasm-and-regsvcs/
    - resource: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
fullpath: 
    - path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\regsvcs.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\regsvcs.exe
    - path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\regsvcs.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\regsvcs.exe
notes: Thanks to Casey Smith - @subtee
---