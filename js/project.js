let project;

function StoreProject(json) {
    for (let i = 0; i < json.length; i++)
        if (json[i].id == location.href.split('=')[1])
            project = json[i];

    FillSite();
}

fetch('/json/projects.json')
    .then((r) => r.json())
    .then((json) => StoreProject(json));

function FillSite() {
    document.getElementsByTagName("title")[0].innerHTML = project.name + " - Gerben Bol";
    document.getElementById("proj-name").innerHTML = project.name;
    document.getElementsByTagName("video")[0].innerHTML = "<source src='assets/vid/" + project.vid + "'>";
    document.getElementById("desc").innerHTML = project.desc;
}
