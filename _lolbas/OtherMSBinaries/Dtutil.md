---
Name: dtutil.exe
Description: Microsoft command line utility used to manage SQL Server Integration Services packages.
Author: Avihay Eldad
Created: 2024-06-17
Commands:
  - Command: dtutil.exe /FILE C:\Windows\System32\calc.exe /COPY FILE;C:\Users\Public\calc.exe
    Description: Copy file from source to destination
    Usecase: Use to copies the source file to the destination file
    Category: Copy
    Privileges: Administrator
    MitreID: T1105
    OperatingSystem: Windows
Full_Path:
  - Path: C:\Program Files\Microsoft SQL Server\<version>\DTS\Binn\dtutil.exe
  - Path: C:\Program Files (x86)\Microsoft SQL Server\<version>\DTS\Binn\dtutil.exe
Resources:
  - Link: https://learn.microsoft.com/en-us/sql/integration-services/dtutil-utility?view=sql-server-ver16
Acknowledgement:
  - Person: Avihay Eldad
    Handle: '@AvihayEldad'
---