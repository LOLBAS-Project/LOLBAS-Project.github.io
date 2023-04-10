---
layout: page
title: LOLBAS
---

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-133649096-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-133649096-1');
</script>

<div class="header-box">
<a href="https://github.com/LOLBAS-Project/LOLBAS/blob/master/README.md"><img src="{{ '/assets/logo.png' | relative_url }}" height="150" style="margin-right: 10px;"></a>
<div>
<h2 style="margin-top: 0">Living Off The Land Binaries, Scripts and Libraries</h2>



For more info on the project, click on the logo.
<br><br>
If you want to contribute, check out our
<a href="https://github.com/LOLBAS-Project/LOLBAS/blob/master/CONTRIBUTING.md">contribution guide</a>.
Our <a href="https://github.com/LOLBAS-Project/LOLBAS#criteria">criteria list</a> sets out what we define as a LOLBin/Script/Lib. More information on programmatically accesssing this project can be found on the <a href="{{'/api' | relative_url }}">API page</a>.
<br>
<br>
<span style="font-style: italic;">MITRE ATT&amp;CK&reg; and ATT&amp;CK&reg; are registered trademarks of The MITRE Corporation.</span> You can see the current ATT&amp;CK&reg; mapping of this project on the <a href="https://mitre-attack.github.io/attack-navigator/#layerURL={{ '/mitre_attack_navigator_layer.json' | absolute_url | replace:"http://","https://" }}">ATT&amp;CK&reg; Navigator</a>.
<br>
<br>
If you are looking for UNIX binaries, please visit <a href="https://gtfobins.github.io/">gtfobins.github.io</a>.
<br>
If you are looking for drivers, please visit <a href="https://www.loldrivers.io/">loldrivers.io</a>.
</div>
</div>

[functions]: /functions/
{% include bin_table.html %}
