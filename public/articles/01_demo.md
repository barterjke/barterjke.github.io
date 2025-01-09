# Demo 

Basic stuff like __\_\_strong\_\___, italic _\_italic\__, [links](https://google.com)

Quotes also work:
> Wow you are soo good 
    cite: You  

Numbered lists:
## top-3 digits of english alphabet
1. one
2. two
3. (arguably) nine

------

btw, headers are also [linkable](#top-3_digits_of_english_alphabet)

Bullet lists (you can use any of `*`, `+`, `-`):
* list
* of
* items
    * nested item
----    
And even fancy lists:
- [X] done
- [ ] todo
---
`< !-- comments -->` are parsed by neither of `react-markdown` or `remark-gfm` packages, but I added them manually with this simple regex:
`#lang:js content.replaceAll(< !--[\s\S]*?-->/g, '')`
there is comment down here
<!-- you shouldn't see it -->
but you can't see it :)

---
Images are embedded with classical `![title](link)`
![Engelbart](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

With no title: 
![](/img/little-languages.png)

you can embed youtube videos in the same way as you do with images:
`![my fav video](https://www.youtube.com/embed/...)`:
![my fav video](https://www.youtube.com/embed/927W6zzvV-c?si=0z3Z8_Ye1iYbvhZ3)

you could also specify dimensions for media in obsidian style:
 `![title|500x500](link)` (height is optional)

![manual|500x500](https://www.youtube.com/embed/927W6zzvV-c?si=0z3Z8_Ye1iYbvhZ3 "my fav video")

and even atrocities like this (please don't):
![Engelbart|400x20](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

---------
One liner footnote[^1]
[^1]: nothing here... 

Multi liner footnote[^2].
[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.

You can do named footnotes (e.g `info[^source]`) too, but they appear as number ones[^note]:
[^note]: but they can make it easier to identify and link references.

~~use strikethrough~~
auto detects link: www.example.com

## what doesn't work
_(and probably never will)_
==highlights don't work==
Obsidian style comments are %% not ignored %%
inline footnotes as of now don't work. ^[although it would be cool]
tables do work (you can check with inspect tool if you don't trust me), 
but I don't need them and hence don't render them
| foo | bar |
| --- | --- |
| baz | bim |

btw, headers are also [linkable](#top-3_digits_of_english_alphabet)
