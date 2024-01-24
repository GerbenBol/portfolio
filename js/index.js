const d = new Date();
const bd = new Date('September 24, 2003');

document.getElementById("copyright").innerHTML += d.getFullYear();

const ynew = d.getFullYear();
const mnew = d.getMonth();
const dnew = d.getDate();
const yold = bd.getFullYear();
const mold = bd.getMonth();
const dold = bd.getDate();
let age = ynew - yold;

if (mold > mnew)
    age--;
else if (mold == mnew)
    if (dold > dnew)
        age--;

document.getElementById("about-text").innerHTML = "A " + age + " year old programmer with a passion for games, that's who I, Gerben Bol, am. I've played a bunch, from racing games to souls-likes, and now I want to create my own, to let others experience that enjoyment I get from playing."
