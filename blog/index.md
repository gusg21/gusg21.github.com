---
layout: page
title: gusg21/blog
tagline: nananananananananaBLOGMAN
---
{% include JB/setup %}

# Welcome to my blog.

### I write my thoughts here. Occasionally. Probably. Maybe. You get the idea. I do Python and I will probably write about that. I like to find ways to blend web-dev and Python (see [dars](http://github.com/darssites/dars) and [chainsaw](http://github.com/gusg21/chainsaw)). I also like web design and am very fond of [sass](http://sass-lang.com/), (and, between Sass and SCSS I'd have to choose SCSS...)

<br><br>

<h1>Latest Posts</h1>
<hr>
{% for post in site.posts limit:3 %}
<div class="panel panel-default">
  <div class="entry-title panel-body">
  {% if post.title %}
      <h2><a href="{{ root_url }}{{ post.url }}">{{ post.title }}</a></h2>
  {% endif %}
  <i><b>Date:</b> {{ post.date | date_to_long_string }}</i>
  </div>
  <hr>
  <div class="entry-content panel-body">{{ post.content }}</div>
</div>
{% endfor %}
