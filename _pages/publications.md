---
layout: page
permalink: /publications/
title: publications
description: 
years: [2021, 2020, 2019]
nav: true
---

<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>


---
layout: page
permalink: /publications/
title: publications
description: 
years: [2021, 2020, 2019]
nav: true
---


<div class="publications">

{% for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>


<div class="thesis">

<h2>PhD Thesis</h2>
Robust memory and precise balance: Computations using biological network motifs.
</div>
