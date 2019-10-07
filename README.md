## Thoughts
   1. show a 9x9 space of black squares ✓
   2. onclick, show the color ✓
   3. if two colors are matched, each one temporarily is increased in size by a few pixels, then returned to normal size & turned white 
   4. if two are clicked and do not match, each one shakes and flips back over to black
   5. if all tiles are white OR no matches remain, flip back to 3x3 screen but this time with a score at the top.

 ## Extras: 
    add a timer and a scoring mechanism instead of just a win count --ie, faster game == higher score

### Temporary list:  
   1. once clicked, the color must be permanently associated with that card.
      => it may be easier to associate the cards with colors out the gate, so that the flip method actually just reveals a color instead of assigning it -OR- revealing it
   2. once clicked, the card must be temporarily frozen and unclickable (so that you can't get a match with itself)
   3. if a non-match is determined, both cards must return to black (but know their color.) so the flip method must check that the card doesn't already have a color.
   4. need to make a way to ensure that no color is added to the page more than twice (without hardcoding)
