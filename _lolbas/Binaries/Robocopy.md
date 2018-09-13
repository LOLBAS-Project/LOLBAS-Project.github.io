---
name: robocopy.exe
description: Used to perform file copy in Windows
functions:
  copy:
    - description: Copy the entire contents of the SourceFolder to the DestFolder.
      code: Robocopy.exe C:\SourceFolder C:\DestFolder
    - description: Copy the entire contents of the SourceFolder to the DestFolder.
      code: Robocopy.exe \\SERVER\SourceFolder C:\DestFolder
resources: 
    - resource: https://social.technet.microsoft.com/wiki/contents/articles/1073.robocopy-and-a-few-examples.aspx
fullpath: 
    - path: c:\windows\system32\robocopy.exe
    - path: c:\windows\sysWOW64\robocopy.exe
notes:
---