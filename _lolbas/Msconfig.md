---
functions:
  execute:
    -
      Name: Msconfig.exe
      Description: Execute
      Author: ''
      Created: '2018-05-25'
      Categories: |
          Example
      Commands: |
          Command: Msconfig.exe -5
          Description: Executes command embeded in crafted c:\windows\system32\mscfgtlc.xml.
      Full_Path: |
          c:\windows\system32\msconfig.exe
      Code_Sample: |
          Example
      Detection: []
      Resources: |
        https://twitter.com/pabraeken/status/991314564896690177
      Notes: |
          Thanks to Pierre-Alexandre Braeken - @pabraeken
          See the Payloads folder for an example mscfgtlc.xml file.
---