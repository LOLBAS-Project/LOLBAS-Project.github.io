---
name: psr.exe
description: Problem step recorder.
functions:
  credentials:
    - description: Capture screenshots of the desktop and save them in the target .ZIP file.
      code: psr.exe /start /gui 0 /output c:\users\user\out.zip
    - description: Capture a maximum of 100 screenshots of the desktop and save them in the target .ZIP file.
      code: psr.exe /start /maxsc 100 /gui 0 /output c:\users\user\out.zip
    - description: Stop the Problem Step Recorder.
      code: psr.exe /stop
resources: 
    - resource: https://www.sans.org/summit-archives/file/summit-archive-1493861893.pdf
fullpath: 
    - path: c:\windows\system32\psr.exe
    - path: c:\windows\sysWOW64\psr.exe
notes:
---