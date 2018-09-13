---
name: regasm.exe
description: 
functions:
  awl-bypass:
    - description: Loads the target .DLL file and executes the UnRegisterClass function.
      code: regasm.exe /U AllTheThingsx64.dll
  awl-bypass:
    - description: Loads the target .DLL file and executes the RegisterClass function.
      code: regasm.exe AllTheThingsx64.dll
  execute:
    - description: Loads the target .DLL file and executes the UnRegisterClass function.
      code: regasm.exe /U AllTheThingsx64.dll
  execute:
    - description: Loads the target .DLL file and executes the RegisterClass function.
      code: regasm.exe AllTheThingsx64.dll
resources: 
    - resource: https://pentestlab.blog/2017/05/19/applocker-bypass-regasm-and-regsvcs/
    - resource: https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/
fullpath: 
    - path: C:\Windows\Microsoft.NET\Framework\v2.0.50727\regasm.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v2.0.50727\regasm.exe
    - path: C:\Windows\Microsoft.NET\Framework\v4.0.30319\regasm.exe
    - path: C:\Windows\Microsoft.NET\Framework64\v4.0.30319\regasm.exe
notes: Thanks to Casey Smith - @subtee
---