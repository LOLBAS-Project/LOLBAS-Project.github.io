---
functions:
  execute:
    -
      Name: pester.bat
      Description: Execute code using Pester. The third parameter can be anything. The fourth is the payload.
      Author: ''
      Created: '2018-05-25'
      Categories: |
      
      Commands: |
          Command: Pester.bat [/help|?|-?|/?] "$null; notepad"
          Description: Execute notepad
      Full_Path:
          c:\Program Files\WindowsPowerShell\Modules\Pester\3.4.0\bin\Pester.bat
          c:\Program Files\WindowsPowerShell\Modules\Pester\*\bin\Pester.bat
      Code_Sample: |
          
      Detection: |
          
      Resources: |
          https://twitter.com/Oddvarmoe/status/993383596244258816
          https://github.com/LOLBAS-Project/LOLBAS/blob/master/OSScripts/pester.md
      Notes: Thanks to Emin Atac - @p0w3rsh3ll
---