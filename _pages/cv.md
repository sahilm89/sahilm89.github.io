---
layout: wide
title: Curriculum vitae
permalink: /cv/
---
<div class="cv-actions">
  <a class="btn btn--primary" href="{{ site.profile.cv | relative_url }}">Download the full CV <span class="btn__meta">PDF</span></a>
  <a class="btn" href="{{ '/publications/' | relative_url }}">Publications</a>
</div>

<section class="cv-section">
  <h2>Research program</h2>
  <ul class="cv-bullets">{% for b in site.data.cv.program %}<li>{{ b | markdownify | remove: '<p>' | remove: '</p>' }}</li>{% endfor %}</ul>
</section>
<section class="cv-section"><h2>Positions</h2>{% include cv-list.html items=site.data.cv.positions %}</section>
<section class="cv-section"><h2>Education</h2>{% include cv-list.html items=site.data.cv.education %}</section>
<section class="cv-section"><h2>Research software</h2>{% include cv-list.html items=site.data.cv.software %}</section>
<section class="cv-section"><h2>Talks, conferences and workshops</h2>{% include cv-list.html items=site.data.cv.talks %}</section>
<section class="cv-section">
  <h2>Teaching and mentoring</h2>
  {% include cv-list.html items=site.data.teaching.courses %}
  {% include cv-list.html items=site.data.teaching.mentoring %}
</section>
<section class="cv-section"><h2>Professional service</h2>{% include cv-list.html items=site.data.cv.service %}</section>
<section class="cv-section"><h2>Fellowships</h2>{% include cv-list.html items=site.data.cv.fellowships %}</section>
<section class="cv-section"><h2>Travel awards</h2>{% include cv-list.html items=site.data.cv.travel %}</section>
<section class="cv-section">
  <h2>Skills</h2>
  <div class="cv-cols">{% for s in site.data.cv.skills %}<div><h3>{{ s.title }}</h3><p>{{ s.text | markdownify | remove: '<p>' | remove: '</p>' }}</p></div>{% endfor %}</div>
</section>
