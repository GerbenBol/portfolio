const d = new Date();
const bd = new Date('September 24, 2003');

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

document.getElementById("about-text-here").innerHTML +=
    "A " + age + " year old Dutch game dev/ programming student with a passion for games, that's who I, Gerben Bol, am. " +
    "I've played a bunch, from racing games to platformers to rhythm games, which inspired me to create my own, " +
    "to let others experience that enjoyment I get from playing.<br />Aside from school projects, " +
    "I sometimes create small games in my free time, because I enjoy doing it. For example, " +
    "I've made a small remake of a game that was pretty popular a while back, called 'Watermelon Game'. " +
    "I'm currently working on a side project, which is a password manager system in Java.";
