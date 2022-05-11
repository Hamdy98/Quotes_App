let myQuote = document.getElementById('my-quote');

let allQuote = [
  {
    quote: `It's not what happens to you, but how you react to it that matters.`,
    author: `― Elbert Hubbard`
  },
  {
    quote: `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.`,
    author: `― Marilyn Monroe`
  },
  {
    quote: `You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.`,
    author: `― William W. Purkey`
  },
  {
    quote: `You only live once, but if you do it right, once is enough.`,
    author: `― Mae West`
  },
  {
    quote: `In three words I can sum up everything I've learned about life: it goes on.`,
    author: `― Robert Frost`
  },
  {
    quote: `To live is the rarest thing in the world. Most people exist, that is all.`,
    author: `― Oscar Wilde`
  },
  {
    quote: `Insanity is doing the same thing, over and over again, but expecting different results.`,
    author: `― Narcotics Anonymous`
  },
  {
    quote: `There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.`,
    author: `― Albert Einstein`
  },
  {
    quote: `Good friends, good books, and a sleepy conscience: this is the ideal life.`,
    author: `― Mark Twain`
  },
  {
    quote: `Life is what happens to us while we are making other plans.`,
    author: `― Allen Saunders`
  },
  {
    quote: `I may not have gone where I intended to go, but I think I have ended up where I needed to be.`,
    author: `― douglas adams, The Long Dark Tea-Time of the Soul`
  },
  {
    quote: `This life is what you make it. No matter what, you're going to mess up sometimes, it's a universal truth. But the good part is you get to decide how you're going to mess it up. Girls will be your friends - they'll act like it anyway. But just remember, some come, some go. The ones that stay with you through everything - they're your true best friends. Don't let go of them. Also remember, sisters make the best friends in the world. As for lovers, well, they'll come and go too. And baby, I hate to say it, most of them - actually pretty much all of them are going to break your heart, but you can't give up because if you give up, you'll never find your soulmate. You'll never find that half who makes you whole and that goes for everything. Just because you fail once, doesn't mean you're gonna fail at everything. Keep trying, hold on, and always, always, always believe in yourself, because if you don't, then who will, sweetie? So keep your head high, keep your chin up, and most importantly, keep smiling, because life's a beautiful thing and there's so much to smile about.`,
    author: `― Marilyn Monroe`
  },
  {
    quote: `Everything you can imagine is real`,
    author: `― Pablo Picasso`
  },
  {
    quote: `Sometimes the questions are complicated and the answers are simple`,
    author: `― Dr. Seuss`
  },
  {
    quote: `Life isn't about finding yourself. Life is about creating yourself.`,
    author: `― George Bernard Shaw`
  },
  {
    quote: `Today you are You, that is truer than true. There is no one alive who is Youer than You.`,
    author: `― Dr. Seuss`
  },
  {
    quote: `I'm not afraid of death; I just don't want to be there when it happens.`,
    author: `― Woody Allen`
  },
  {
    quote: `Sometimes people are beautiful. Not in looks. Not in what they say. Just in what they are.`,
    author: `― Markus Zusak, I Am the Messenger`
  },
  {
    quote: `Life is like riding a bicycle. To keep your balance, you must keep moving`,
    author: `― Albert Einstein`
  },
  {
    quote: `Some infinities are bigger than other infinities.`,
    author: `― John Green, The Fault in Our Stars`
  },
  {
    quote: `Reality continues to ruin my life`,
    author: `― Bill Watterson, The Complete Calvin and Hobbes`
  },
  {
    quote: `Things change. And friends leave. Life doesn't stop for anybody.`,
    author: `― Stephen Chbosky, The Perks of Being a Wallflower`
  },
  {
    quote: `Who are you to judge the life I live? I know I'm not perfect-and I don't live to be-but before you start pointing fingers...make sure you hands are clean!`,
    author: `― Bob Marley`
  },
  {
    quote: `The only way out of the labyrinth of suffering is to forgive.`,
    author: `― John Green, Looking for Alaska`
  },
  {
    quote: `When someone loves you, the way they talk about you is different. You feel safe and comfortable.`,
    author: `― Jess C. Scott, The Intern`
  },
  {
    quote: `Dumbledore watched her fly away, and as her silvery glow faded he turned back to Snape, and his eyes were full of tears. "After all this time?" "Always," said Snape.`,
    author: `― J.K. Rowling, Harry Potter and the Deathly Hallows`
  },
  {
    quote: `Finish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day. You shall begin it serenely and with too high a spirit to be encumbered with your old nonsense.`,
    author: `― Ralph Waldo Emerson`
  },
  {
    quote: `We are what we pretend to be, so we must be careful about what we pretend to be`,
    author: `― Kurt Vonnegut, Mother Night`
  },
  {
    quote: `I can never read all the books I want; I can never be all the people I want and live all the lives I want. I can never train myself in all the skills I want. And why do I want? I want to live and feel all the shades, tones and variations of mental and physical experience possible in my life. And I am horribly limited.`,
    author: `― Sylvia Plath, The Unabridged Journals of Sylvia Plath`
  },
  {
    quote: `I'm the one that's got to die when it's time for me to die, so let me live my life the way I want to.`,
    author: `― Jimi Hendrix, Jimi Hendrix - Axis: Bold as Love`
  },
  {
    quote: `But better to get hurt by the truth than comforted with a lie.`,
    author: `― Khaled Hosseini`
  },
  {
    quote: `The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.`,
    author: `― Mark Twain`
  },
  {
    quote: `Just when you think it can't get any worse, it can. And just when you think it can't get any better, it can.`,
    author: `― Nicholas Sparks, At First Sight`
  },
  {
    quote: `The one you love and the one who loves you are never, ever the same person.`,
    author: `― Chuck Palahniuk, Invisible Monsters`
  },
  {
    quote: `The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.`,
    author: `― Isaac Asimov`
  },
  {
    quote: `I speak to everyone in the same way, whether he is the garbage man or the president of the university.`,
    author: `― Albert Einstein`
  },
  {
    quote: `We're all human, aren't we? Every human life is worth the same, and worth saving.`,
    author: `― J.K. Rowling, Harry Potter and the Deathly Hallows`
  },
  {
    quote: `Every man has his secret sorrows which the world knows not; and often times we call a man cold when he is only sad.`,
    author: `― Henry Wadsworth Longfellow`
  },
  {
    quote: `If you don't know where you're going, any road'll take you there`,
    author: `― George Harrison`
  },
  {
    quote: `All God does is watch us and kill us when we get boring. We must never, ever be boring.`,
    author: `― Chuck Palahniuk, Invisible Monsters`
  },
  {
    quote: `This life's hard, but it's harder if you're stupid.`,
    author: `― George V. Higgins, The Friends of Eddie Coyle`
  },
  {
    quote: `Sometimes I can hear my bones straining under the weight of all the lives I'm not living.`,
    author: `― Jonathan Safran Foer, Extremely Loud & Incredibly Close`
  },
  {
    quote: `Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.`,
    author: `― Margaret Mead`
  },
  {
    quote: `Death ends a life, not a relationship.`,
    author: `― Mitch Albom, Tuesdays with Morrie`
  },
  {
    quote: `Do not read, as children do, to amuse yourself, or like the ambitious, for the purpose of instruction. No, read in order to live.`,
    author: `― Gustave Flaubert`
  },
  {
    quote: `You cannot find peace by avoiding life.`,
    author: `― Michael Cunningham, The Hours`
  },
  {
    quote: `May you live every day of your life.`,
    author: `― Jonathan Swift`
  },
  {
    quote: `Where there is love there is life.`,
    author: `― Mahatma Gandhi`
  },
  {
    quote: `There are two basic motivating forces: fear and love. When we are afraid, we pull back from life. When we are in love, we open to all that life has to offer with passion, excitement, and acceptance. We need to learn to love ourselves first, in all our glory and our imperfections. If we cannot love ourselves, we cannot fully open to our ability to love others or our potential to create. Evolution and all hopes for a better world rest in the fearlessness and open-hearted vision of people who embrace life.`,
    author: `― John Lennon`
  },
  {
    quote: `Get busy living or get busy dying.`,
    author: `― Stephen King`
  },
  {
    quote: `If my life is going to mean anything, I have to live it myself.`,
    author: `― Rick Riordan, The Lightning Thief`
  },
  {
    quote: `If the world were merely seductive, that would be easy. If it were merely challenging, that would be no problem. But I arise in the morning torn between a desire to improve the world and a desire to enjoy the world. This makes it hard to plan the day.`,
    author: `― E.B. White`
  },
  {
    quote: `These woods are lovely, dark and deep, But I have promises to keep, And miles to go before I sleep, And miles to go before I sleep.`,
    author: `― Robert Frost, Stopping by Woods on a Snowy Evening`
  },
  {
    quote: `To love. To be loved. To never forget your own insignificance. To never get used to the unspeakable violence and the vulgar disparity of life around you. To seek joy in the saddest places. To pursue beauty to its lair. To never simplify what is complicated or complicate what is simple. To respect strength, never power. Above all, to watch. To try and understand. To never look away. And never, never to forget.`,
    author: `― Arundhati Roy, The Cost of Living`
  },
  {
    quote: `All the world is made of faith, and trust, and pixie dust.`,
    author: `― J.M. Barrie, Peter Pan`
  },
  {
    quote: `We have to dare to be ourselves, however frightening or strange that self may prove to be.`,
    author: `― May Sarton`
  },
  {
    quote: `Anyone who lives within their means suffers from a lack of imagination.`,
    author: `― Oscar Wilde`
  },
  {
    quote: `Life is a book and there are a thousand pages I have not yet read.`,
    author: `― Cassandra Clare, Clockwork Princess`
  },
  {
    quote: `There will come a time when all of us are dead. All of us. There will come a time when there are no human beings remaining to remember that anyone ever existed or that our species ever did anything. There will be no one left to remember Aristotle or Cleopatra, let alone you. Everything that we did and built and wrote and thought and discovered will be forgotten and all of this will have been for naught. Maybe that time is coming soon and maybe it is millions of years away, but even if we survive the collapse of our sun, we will not survive forever. There was time before organisms experienced consciousness, and there will be time after. And if the inevitability of human oblivion worries you, I encourage you to ignore it. God knows that’s what everyone else does.`,
    author: `― John Green, The Fault in Our Stars`
  },
  {
    quote: `Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.`,
    author: `― Roy T. Bennett, The Light in the Heart`
  },
  {
    quote: `Life can only be understood backwards; but it must be lived forwards.`,
    author: `― Søren Kierkegaard`
  },
  {
    quote: `If you're reading this...Congratulations, you're alive. If that's not something to smile about, then I don't know what is`,
    author: `― Chad Sugg, Monsters Under Your Head`
  },
  {
    quote: `When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down ‘happy’. They told me I didn’t understand the assignment, and I told them they didn’t understand life.`,
    author: `― John Lennon`
  },
  {
    quote: `Monsters are real, and ghosts are real too. They live inside us, and sometimes, they win.`,
    author: `― Stephen King`
  },
  {
    quote: `Instead of worrying about what you cannot control, shift your energy to what you can create.`,
    author: `― Roy T. Bennett, The Light in the Heart`
  },
  {
    quote: `A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.`,
    author: `― George Bernard Shaw`
  },
  {
    quote: `Of all sad words of tongue or pen, the saddest are these, 'It might have been`,
    author: `― John Greenleaf Whittier, Maud Muller - Pamphlet`
  },
  {
    quote: `The flower that blooms in adversity is the rarest and most beautiful of all.`,
    author: `― Walt Disney Company, Mulan`
  },
  {
    quote: `The best index to a person's character is how he treats people who can't do him any good, and how he treats people who can't fight back.`,
    author: `― Abigail Van Buren`
  },
  {
    quote: `The most important thing is to enjoy your life—to be happy—it's all that matters`,
    author: `― Audrey Hepburn`
  },
  {
    quote: `Nobody realizes that some people expend tremendous energy merely to be normal.”`,
    author: `― Albert Camus`
  },
]

function quoteGenerate() {
  let v = Math.floor(Math.random() * allQuote.length);

  myQuote.innerHTML = `
    <p id="my-q">"${allQuote[v].quote}"</p>
    <p id="p-author">${allQuote[v].author}</p>
  `;
}