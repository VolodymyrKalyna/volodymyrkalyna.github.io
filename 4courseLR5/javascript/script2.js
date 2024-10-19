

const block = document.getElementById('block')
let code = document.getElementById('textarea')
function generate()
{
    let rtl = document.getElementById('rtl').value
    let rtr = document.getElementById('rtr').value
    let rbr = document.getElementById('rbr').value
    let rbl = document.getElementById('rbl').value

    let ttl = document.getElementById('ttl')
    let ttr = document.getElementById('ttr')
    let tbr = document.getElementById('tbr')
    let tbl = document.getElementById('tbl')
    ttl.value = rtl
    ttr.value = rtr
    tbr.value = rbr
    tbl.value = rbl
    block.style.borderRadius = `${rtl}px ${rtr}px ${rbr}px ${rbl}px;`
    code.value = `border-radius: ${rtl}px ${rtr}px ${rbr}px ${rbl}px;`

}

function generateByText()
{
    if(document.getElementById('ttl').value > 0)
    document.getElementById('rtl').value = document.getElementById('ttl').value
    else
    document.getElementById('rtl').value = 0

    if(document.getElementById('ttr').value > 0)
    document.getElementById('rtr').value = document.getElementById('ttr').value
    else
    document.getElementById('rtr').value = 0

    if(document.getElementById('tbr').value > 0)
    document.getElementById('rbr').value = document.getElementById('tbr').value
    else
    document.getElementById('rbr').value = 0

    if(document.getElementById('tbl').value > 0)
    document.getElementById('rbl').value = document.getElementById('tbl').value
    else
    document.getElementById('rbl').value = 0

    generate()

}

const block2 = document.getElementById('block2')
let code2 = document.getElementById('textarea2')
block2.style.float = 'left'
code2.value = "float: left;"
function generate2(side)
{
    block2.style.float = side;

    code2.value = `float: ${side};`

}

const textformated = document.getElementById('textformated')
let code3 = document.getElementById('textarea3')
function generate3()
{
    textformated.style.fontFamily = document.getElementById('font').value
    console.log(document.getElementById('font').value)
    code3.value = `${font-family}: document.getElementById('font').value;`
}


var tab;
var tabContent;
window.onload=function() {
tabContent=document.getElementsByClassName('tabContent');
tab=document.getElementsByClassName('tab');
hideTabsContent(1);
}

function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add("hide");
    tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick= function (event) {
    var target=event.target;
    if (target.className=='tab') {
    for (var i=0; i<tab.length; i++) {
    if (target == tab[i]) {
    showTabsContent(i);
    break;
}}}}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
    hideTabsContent(0);
    tab[b].classList.add('whiteborder');
    tabContent[b].classList.remove('hide'); tabContent[b].classList.add('show');
    }
}
