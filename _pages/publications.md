---
layout: wide
title: Publications
permalink: /publications/
description: >-
  Peer-reviewed articles, preprints, a book chapter and commentary. Asterisks mark equal contribution.
  Also on <a href="https://scholar.google.com/citations?user=hzfvStkAAAAJ">Google Scholar</a> and
  <a href="https://orcid.org/0000-0002-2225-8841">ORCID</a>.
---
<section class="pubs-group">
  <h2>Preprints and manuscripts under revision</h2>
  {% bibliography -q @*[kind=preprint]* %}
</section>
<section class="pubs-group">
  <h2>Peer-reviewed articles</h2>
  {% bibliography -q @*[kind=article]* %}
</section>
<section class="pubs-group">
  <h2>Book chapter</h2>
  {% bibliography -q @*[kind=chapter]* %}
</section>
<section class="pubs-group">
  <h2>Commentary</h2>
  {% bibliography -q @*[kind=commentary]* %}
</section>
<section class="pubs-group">
  <h2>Thesis</h2>
  {% bibliography -q @*[kind=thesis]* %}
</section>
<p class="eqnote"><sup>*</sup> equal contribution</p>
