---
title: "Taking a first look at the game"
description: "Opening up the game for the first time and seeing what's there"
pubDate: 2026-01-31
draft: false
---

Everything starts from the disc for a PSX game. At least that's my opinion.
You can't learn very much if you don't know how the disc data is structured or read, and my initial thoughts were that I should take some extra time to examine the layout and see if I could guess at the function of anything right away or not.


So, I used a tool called *IsoBuster* to help me do this..

![IsoBuster showing the layout of the game disc](/lom-decomp-site/images/posts/iso-buster-001.png)

It let's me see the data layed out on the disc with the appropriate offsets and the bytes each file holds. Right away just from previous experience, I know that code is stored in `SLUS_010.13`. This is the serial number for this specific PSX game, and for any PSX game out there that's where the initial boot code will be.


There are a few other files and folders that look interesting:

![IsoBuster showing the BIN folder and other files on the disc](/lom-decomp-site/images/posts/iso-buster-002.png)

Let's look at the `BIN` folder, since that usually means "binaries". These are quite large files. We can kind of figure out from the names that these relate to some important functionalities - `MOVIE` must deal with cinematics, `NIKI` is probably the diary 「日記」in Japanese, or `TITLE` which is probably the title screen.

So most of my initial research is just looking at these files and recording my assumptions and guesses as to what they are. All of this is important to keep in mind once I actually open up `SLUS_010.13` and begin trying to understand what is happening. Which I'll be using a tool called *Ghidra* to do this. I'll use that to get an initial pseudo-code view so I can understand what the game is doing.

Next time I'll write about that.

-celophi