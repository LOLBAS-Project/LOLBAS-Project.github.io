---
functions:
  execute:
    -
      Name: Wscript.exe
      Description: Execute, Read ADS
      Author: ''
      Created: '2018-05-25'
      Categories: |
      
      Commands: |
          Command: wscript c:\ads\file.txt:script.vbs
          Description: Executes the .VBS script stored as an Alternate Data Stream (ADS).
      Full_Path:
          c:\windows\system32\wscript.exe
          c:\windows\sysWOW64\wscript.exe
      Code_Sample: |
          
      Detection: |
          
      Resources: |
          '?'
      Notes: Thanks to ?
---