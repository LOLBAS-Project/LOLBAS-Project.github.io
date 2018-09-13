---
name: pester.bat
description: Execute code using Pester. The third parameter can be anything. The fourth is the payload.
functions:
  execute:
    - description:  Execute notepad
      code:  Pester.bat [/help|?|-?|/?] "$null; notepad"
resources: 
    - resource: 
fullpath: 
    - path: c:\Program Files\WindowsPowerShell\Modules\Pester\3.4.0\bin\Pester.bat
    - path: c:\Program Files\WindowsPowerShell\Modules\Pester\*\bin\Pester.bat
notes: Thanks to Emin Atac - @p0w3rsh3ll
---