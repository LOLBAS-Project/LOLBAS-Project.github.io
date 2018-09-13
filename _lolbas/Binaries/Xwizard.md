---
name: xwizard.exe
description: 
functions:
  execute:
    - description: Xwizard.exe will load a .DLL file located in the same directory (DLL Hijack) named xwizards.dll.
      code: xwizard.exe
    - description: Xwizard.exe running a custom class that has been added to the registry.
      code: xwizard RunWizard {00000001-0000-0000-0000-0000FEEDACDC}
resources: 
    - resource: http://www.hexacorn.com/blog/2017/07/31/the-wizard-of-x-oppa-plugx-style/
    - resource: https://www.youtube.com/watch?v=LwDHX7DVHWU
    - resource: https://gist.github.com/NickTyrer/0598b60112eaafe6d07789f7964290d5
fullpath: 
    - path: c:\windows\system32\xwizard.exe
    - path: c:\windows\sysWOW64\xwizard.exe
notes: Thanks to Adam - @Hexacorn, Nick Tyrer - @nicktyrer
---