# Demo 
==highlight's don't work==
there is comment down here
<!-- you shouldn't see it -->
%% should be ignored %%
but you can't see it :)
`< !-- comments -->` are not parsed by `react-markdown` or `remark-gfm` packages, but I added them manually with this simple regex:
`#lang:js content.replaceAll(< !--[\s\S]*?-->/g, '')`
you can embed youtube videos in the same way as you do with images:
Images:
![Engelbart](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
`![my fav video](https://www.youtube.com/embed/...)`:
![my fav video](https://www.youtube.com/embed/927W6zzvV-c?si=0z3Z8_Ye1iYbvhZ3)

------
![auto|500x500](https://www.youtube.com/embed/927W6zzvV-c?si=0z3Z8_Ye1iYbvhZ3 "my fav video")
![dispro|500x100](https://www.youtube.com/embed/927W6zzvV-c?si=0z3Z8_Ye1iYbvhZ3 "my fav video")



auto:
![Engelbart](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
asda
asda
asd
manual: 200x289
![Engelbart|200x289](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

only width 100
![Engelbart|100](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

should be 400x50
![Engelbart|400x50](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

inline footnotes as of now don't work. ^[This is an inline footnote.]

One liner footnote[^1]
[^1]: nothing here... 

Multi liner footnote[^2].
[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.

you can do named footnotes (e.g `info[^source]`) too, but they appear as number ones[^note]:
named footnote
[^note]: but they can make it easier to identify and link references.

~~don't~~
www.example.com
tables do work (you can check with inpsect tool), but I don't need them and hence don't render them
| foo | bar |
| --- | --- |
| baz | bim |
> Wow you are soo good 
    source: You  
    



* list
* of
* items
- [X] done
- [ ] todo

Here is my picture:
![](/img/little-languages.png "some lang")
![](https://media.licdn.com/dms/image/v2/C4D03AQHtu7Z9FBSTrA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1662555093981?e=2147483647&v=beta&t=0fPFGx9FOyn2Ezalpao0Wwa4nvB5aN9hztPG-VhiDU8 "lit me")