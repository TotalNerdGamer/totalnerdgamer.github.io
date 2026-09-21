/*Hey! Are you trying to cheat at the Hunt?
Just kidding! Feel free to look through this. 
It doesn't tell you the location of most of the links anyway.
Why does that matter?
Well, as you'll see below, the logic for updating the visited list is tied to the links and not the pages!
Why?
Because it seemed like it would be easier at the time.
And because now I can't link it to the pages without removing the $pamton $weep$take$ from the hunt.
If you really want to cheat on the Hunt, you can just look in the html files or use your console to modify your localStorage.
But if you just want some hints, feel free to check the list of hidden link names.

*/
function fotr() {
    const facts = [
        "This page supports both light and dark mode! I think it looks better dark.",
        "This page is made with HTML, CSS and JavaScript. As you can probably guess, the hardest one was CSS.",
        "This site has plenty of hidden pages and links. It's like the <a class=\"hiddenlink\" href=\"https://deltarune.com/sweepstakes\" target=\"_blank_\" onclick=\"hidlink('spamton')\">Spamton Sweepstakes</a>, but not as creepy or lore-heavy. Can you find them all?",
        
    ];
    const chancefact = `This fact has a 1 in ${facts.length+1} chance of appearing!`;
    facts.push(chancefact);
    let num = Math.floor(Math.random() * (facts.length));
    let fact = facts[num];
    document.getElementById("fotr").innerHTML = "Fact of the Refresh: "+fact;
}

function hidlink(name) {
    const allhid = ["spamton","archie"];
    if (localStorage.vishid) {
        const vislist = JSON.parse(localStorage.vishid);
        if (!vislist.includes(name)) {
            vislist.push(name);
            localStorage.vishid = JSON.stringify(vislist);
        }
    } else {
        localStorage.vishid = JSON.stringify([name]);
        let text = ("Congrats! You found your first hidden link! The link will be visible(on the page where you found it) from now on. Go to the \"Hunt\" page to see links you've found.");
        const alerttimer = setTimeout(alert,0,text);
    }
}

function genhuntlist() {
    let result = "<p>You don't have any found sites recorded yet! Keep searching! The list will refresh every 30 seconds.</p>";
    const conv = {
        "spamton": "<li><p>Deltarune's <a href='https://deltarune.com/sweepstakes' target='_blank_'>Spamton Sweepstakes</a>.</p></li>",
        "archie": "<li><p>The page discussing the development of <a href='archie.html'>my indie game \"Archie: Of Mice and Men.\"</a></p></li>",
    }
    if (localStorage.vishid) {
        const vislist = JSON.parse(localStorage.vishid);
        if (vislist.length > 0) {
            const list = ["<p>So far, you've found: </p>"];
            for (let x of vislist) {
                list.push(conv[x]);
            }
            result = list.join("\n");
        }
    } else {
        localStorage.vishid = JSON.stringify([]);
    }
    document.getElementById("huntlist").innerHTML = result;
}