let project;

fetch('/json/projects.json')
    .then((r) => r.json())
    .then((json) => StoreProject(json));

function StoreProject(json) {
    for (let i = 0; i < json.length; i++)
        if (json[i].id == location.href.split('=')[1])
            project = json[i];

    FillSite();
}

function FillSite() {
    document.getElementsByTagName("title")[0].innerHTML = project.name + " - Gerben Bol";
    document.getElementById("proj-name").innerHTML = project.name;
    let vidgif = document.getElementById("vidgif");

    if (project.vid != "") {
        vidgif.innerHTML = "<video width='700' controls><source src='assets/vid/" + project.vid + "'></video>";
    } else if (project.gif != "") {
        vidgif.innerHTML = "<img width='700' src='assets/vid/" + project.gif + "'>";
    }
    
    let intro = document.getElementById("intro");
    let desc = document.getElementById("desc");

    if (project.intro == "") {
        intro.innerHTML = "<img src='assets/img/projects/" + project.img + "' width=300 id='justanimg'>";
        desc.innerHTML = "<div class='text-center' id='desc-par'><p id='desc-text'>" + project.desc + "</p></div>";
    } else {
        intro.innerHTML = "<p class='text-center' id='intro-text'>" + project.intro + "</p>";
        desc.innerHTML = "<div class='col-md-6' id='desc-par'>" +
            "<p class='text-center' id='desc-text'>" + project.desc + "</p>" +
            "</div><div class='col-md-6'>" +
            "<div><img src='assets/img/projects/" + project.img + "' width=300 id='justanimg'></div></div>";
    }

    let introtxt = document.getElementById("intro-text");
    let intropar = document.getElementById("intro-par");
    let desctxt = document.getElementById("desc-text");
    let descpar = document.getElementById("desc-par");

    setTimeout(() => {
        if (introtxt != undefined && introtxt != null) {
            let iheight = introtxt.offsetHeight;
            introtxt.style.marginTop = (intropar.offsetHeight - iheight) / 2 + "px";
        }
    
        let dheight = desctxt.offsetHeight;
        desctxt.style.marginTop = (descpar.offsetHeight - dheight) / 2 + "px";
    }, 100);

    let mywork = document.getElementById("mywork");

    for (let i = 0; i < project.mywork.length; i++) {
        let add = "";

        if (project.mywork[i + 1] == null && i % 2 == 0) {
            add += "<div class='col-md-3'></div><div class='col-md-6' id='mw" + i + "'><p class='text-center'>";
            add += project.mywork[i] + "</p></div>";
        } else {
            add += "<div class='col-md-5' id='mw" + i + "'><p class='text-center'>";
            add += project.mywork[i] + "</p></div><div class='col-md-2'></div>";
        }

        if (i % 2 != 0)
            add = add.substring(0, add.length - 28);

        mywork.innerHTML += add;
    }
}