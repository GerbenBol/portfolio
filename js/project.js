let project;
let link;
console.log(location.href.substring(8,17));

if (location.href.substring(8, 17) == "gerbenbol")
    link = "https://gerbenbol.github.io/portfolio/json/projects.json";
else
    link = "../json/projects.json";
console.log(link);

fetch(link)
    .then((r) => r.json())
    .then((json) => StoreProject(json));

function StoreProject(json) {
    for (let i = 0; i < json.length; i++)
        if (json[i].id == location.href.split('=')[1])
            project = json[i];

    setTimeout(FillSite(), 300);
}

function FillSite() {
    document.getElementsByTagName("title")[0].innerHTML = project.name + " - Gerben Bol";
    let projname = document.getElementById("proj-name");

    projname.innerHTML = "<h1 class='section-heading text-uppercase' style='font-size: 4rem;'>" + project.name + "</h1>";

    if (project.nameimg != "")
        projname.innerHTML = "<img src='assets/img/projects/" + project.nameimg + "' style='width:75%'>";

    let vidgif = document.getElementById("vidgif");

    if (project.vid != "") {
        vidgif.innerHTML = "<iframe width='560' height='315' src='" + project.vid + "'title='YouTube video player' frameborder='0' allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerpolicy='strict-origin-when-cross-origin' allowfullscreen></iframe>";
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
        let descHTML = "";

        if (project.img != "") {
            descHTML = "<div class='col-md-6' id='desc-par'>" +
                "<p class='text-center' id='desc-text'>" + project.desc + "</p>" +
                "</div><div class='col-md-6'>" + "<div><img src='assets/img/projects/" +
                project.img + "' width='" + project.imgwidth + "' id='justanimg'></div></div>";
        } else {
            descHTML = "<div class='col-md-2'></div><div class='col-md-8'><p class='text-center' id='desc-text'>" + project.desc + "</p></div>";
        }

        desc.innerHTML = descHTML;
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
    }, 650);

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
