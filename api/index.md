---
layout: page
title: APIs
---

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-133649096-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-133649096-1');
</script>


Currently, data from the LOLBAS Project can be accessed in the following ways:

## JSON
**Entry point**: <a href="{{'/api/lolbas.json' | relative_url }}">{{'/api/lolbas.json' | relative_url}}</a>

**Type**: Single file

This file contains every LOLBAS entry in a single file, using the same structure as the underlying YAML files.

## CSV
**Entry point**: <a href="{{'/api/lolbas.csv' | relative_url }}">{{'/api/lolbas.csv' | relative_url}}</a>

**Type**: Single file

This file contains every LOLBAS entry in a single file, broken down by LOLBAS file and command.

## YAML
**Entry point**: <a href="https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/yml/">https://raw.githubusercontent.com/LOLBAS-Project/LOLBAS/master/yml/</a>

**Type**: File per entry

Finally, it is possible to access the raw YAML files via GitHub. The file structure can be found on <a href="https://github.com/LOLBAS-Project/LOLBAS/tree/master/yml">GitHub</a>.
