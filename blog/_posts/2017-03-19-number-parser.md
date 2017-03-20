---
layout: post
title: "Number Parser"
description: "A thought on Number Parsing"
category: post
tags: ["number", "parser", "python"]
---
{% include JB/setup %}

I was thinking. I've heard of and have used lightly date parsers. For those who do not know, they change dates of many formats in strings into objects. They're fun to push to the boundaries. But is there such a thing as a number parser? So I could convert this:

```python
    "four hundred and twenty two"
```

Into this:

```python
    422
```

That could be useful. Hmmm... Normal people would look into this and probably find it's been done, but not me. I'm gonna go write one. And it's gonna crash. Crash and burn.
