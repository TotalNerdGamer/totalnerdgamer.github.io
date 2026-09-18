function fotr() {
    let facts = ["This page supports both light and dark mode! I think it looks better dark.","This page is made with HTML, CSS and JavaScript. As you can probably guess, the hardest one was CSS.",];
    facts = facts.concat(`This fact has a 1 in ${facts.length+1} chance of appearing!`);
    let num = Math.floor(Math.random() * (facts.length));
    let fact = facts[num];
    document.getElementById("fotr").innerHTML = "Fact of the Refresh: "+fact;
}