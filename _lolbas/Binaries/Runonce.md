---
name: runonce.exe
description: 
functions:
  execute:
    - description: Executes a Run Once Task that has been configured in the registry. Requires Administrative access.
      code: Runonce.exe /AlternateShellStartup
resources: 
    - resource: https://twitter.com/pabraeken/status/990717080805789697
    - resource: https://cmatskas.com/configure-a-runonce-task-on-windows/
fullpath: 
    - path: c:\windows\system32\runonce.exe
    - path: c:\windows\sysWOW64\runonce.exe
notes: Thanks to Pierre-Alexandre Braeken - @pabraeken
---