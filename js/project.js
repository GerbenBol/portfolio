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

    if (project.intro == "") {
        document.getElementById("intro").innerHTML = "<img src='assets/img/projects/" + project.img + "' width=300>";
        document.getElementById("desc").innerHTML = project.desc; // !!!!!!!!
    } else {
        document.getElementById("intro").innerHTML = "<p>" + project.intro + "</p>";
        document.getElementById("desc").innerHTML = "<div class='col-md-6'>" +
            "<p class='text-center'>" + project.desc + "</p>" +
            "</div><div class='col-md-4'>" +
            "<div><img src='assets/img/projects/" + project.img + "' width=300></div></div>";
    }

    document.getElementById("desc").innerHTML = project.desc;
    document.getElementById("mywork").innerHTML = project.mywork;
}
