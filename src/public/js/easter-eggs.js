function toggleClass(el, className) {
    if (!el) {
        return;
    }
    if (el.classList) {
        el.classList.toggle(className);
    } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf(className);

        if (existingIndex >= 0)
            classes.splice(existingIndex, 1);
        else
            classes.push(className);

        el.className = classes.join(' ');
    }
}

window.setInterval(function () {
    toggleClass(document.getElementById('bug-egg'), "bug__image--animation");
    toggleClass(document.getElementById('bug-egg-bottom'), "bug__image--animation--bottom");
}, 42000);

console.log('Cosa vai cercando?');

var keyupping = false;
var keyuptext = "";
var bugfallcheck = false;
var clearkeyup = null;
var no = 150;
var hidebugtime = 0;
var bugdistance = 'pageheight';
var ie4up = (document.all) ? 1 : 0;
var ns6up = (document.getElementById && !document.all) ? 1 : 0;

function checkDoc() {
    return (document.compatMode && document.compatMode != 'BackCompat') ? document.documentElement : document.body;
}
var dx, xp, yp;
var am, stx, sty;
var i, doc_width = 800,
    doc_height = 600;
if (ns6up) {
    doc_width = self.innerWidth;
    doc_height = self.innerHeight;
} else if (ie4up) {
    doc_width = checkDoc().clientWidth;
    doc_height = checkDoc().clientHeight;
}
dx = new Array();
xp = new Array();
yp = new Array();
am = new Array();
stx = new Array();
sty = new Array();

function createBug() {
    var div = document.createElement('div');
    div.id = 'dot' + i + '';
    div.innerHTML = " <img style=\" width:40px !important;\" src=\"public/images/buconf_mini_rotated.png\" >";

    div.style.top = '0px';
    div.style.left = '15px';
    div.style.position = 'absolute';
    return div;
}

function initBugs() {
    for (i = 0; i < no; ++i) {
        dx[i] = 0;
        xp[i] = Math.random() * (doc_width - 50);
        yp[i] = Math.random() * doc_height;
        am[i] = Math.random() * 20;
        stx[i] = 0.02 + Math.random() / 10;
        sty[i] = 0.7 - Math.random();
        if (ie4up || ns6up) {
            document.body.appendChild(createBug());
        }
    }
}

function moveBugs() {
    doc_width = ns6up ? window.innerWidth - 10 : checkDoc().clientWidth - 10;
    doc_height = (ie4up && !window.opera && bugdistance == 'pageheight') ? checkDoc().scrollHeight : checkDoc().offsetHeight;
    for (i = 0; i < no; ++i) {
        yp[i] += sty[i];
        if (yp[i] > doc_height - 50) {
            xp[i] = Math.random() * (doc_width - am[i] - 30);
            yp[i] = 0;
            stx[i] = 0.02 + Math.random() / 10;
            sty[i] = 0.7 + Math.random();
        }
        dx[i] += stx[i];
        // if goes up, rotate 180
        document.getElementById('dot' + i).style.top = yp[i] + 'px';
        document.getElementById('dot' + i).style.left = xp[i] + am[i] * Math.sin(dx[i]) + 'px';
    }
    setTimeout('moveBugs()', 10);
}


document.onkeypress = function (e) {
    if (clearkeyup != null) clearTimeout(clearkeyup);
    if (bugfallcheck == false) {
        keyuptext += String.fromCharCode(e.which);
        if (keyuptext == "notabugconf") {
            bugfallcheck = true;
            initBugs();
            moveBugs();
        }
        clearkeyup = window.setTimeout(function () {
            keyuptext = "";
        }, 1000);
    }
};

