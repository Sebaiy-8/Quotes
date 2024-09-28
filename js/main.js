var quote = [

{
    quote :" “In three words I can sum up everything I've learned about life: it goes on.” ",
    Author:" ― Robert Frost " 
},
{
    quote:" “Be yourself; everyone else is already taken.”  ",
    Author:" ― Oscar Wilde " 
},
{
    quote :" “So many books, so little time.” ",
    Author:" ― Frank Zappa " 
},
{
    quote :" “Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.” ",
    Author:" ― Bill Kean " 
},
{
    quote :" “Good friends, good books, and a sleepy conscience: this is the ideal life.”  ",
    Author:" ― Mark Twain" 
},
{
    quote :" “Life is what happens to us while we are making other plans.” ",
    Author:" ― Allen Saunders " 
},
{
    quote :" “Everything you can imagine is real.” ",
    Author:" ― Pablo Picasso " 
},
{
    quote :" “Life isn't about finding yourself. Life is about creating yourself.” ",
    Author:" ― George Bernard Shaw "
},
{
    quote :" “I speak to everyone in the same way, whether he is the garbage man or the president of the university.” ",
    Author:" ― Albert Einstein " 
},
{
    quote :" “If you don't know where you're going, any road'll take you there” ",
    Author:" ― George Harrison " 
}
]

function getQuotes(){
    var num = Math.floor(Math.random()*quote.length)

    document.getElementById("quote").innerHTML=quote[num].quote;
    document.getElementById("writer").innerHTML=quote[num].Author;

}

