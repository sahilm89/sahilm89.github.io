---
layout: wide
title: Teaching and mentoring
permalink: /teaching/
description: Courses and summer schools I have taught, and the course materials I wrote for them.
---
<section class="cv-section">
  <h2>Courses and summer schools</h2>
  <ul class="cv-list">
  {% for c in site.data.teaching.courses %}
    <li><div class="what">{% if c.url %}<a href="{{ c.url }}">{{ c.what }}</a>{% else %}{{ c.what }}{% endif %}<span class="where">{{ c.where }}</span><span class="detail">{{ c.detail }}</span></div><div class="when">{{ c.when }}</div></li>
  {% endfor %}
  </ul>
</section>
<section class="cv-section">
  <h2>Mentoring</h2>
  <ul class="cv-list">
  {% for m in site.data.teaching.mentoring %}
    <li><div class="what">{{ m.what }}<span class="where">{{ m.where }}</span><span class="detail">{{ m.detail }}</span></div><div class="when">{{ m.when }}</div></li>
  {% endfor %}
  </ul>
</section>
<section class="cv-section">
  <h2>Course materials</h2>
  {% include tool-list.html items=site.data.teaching.materials %}
</section>
