function checkIfOpen()
{
    var element = document.getElementById("easyGame"),
        style = window.getComputedStyle(element),
        display = style.getPropertyValue("display");
    if (display !== 'none') {

        element.style.display='none';
        return;
    }
     element = document.getElementById("mediumGame"),
        style = window.getComputedStyle(element),
        display = style.getPropertyValue("display");
    if (display !== 'none') {

        element.style.display='none';
        return;
    }

    element = document.getElementById("hardGame"),
        style = window.getComputedStyle(element),
        display = style.getPropertyValue("display");
    if (display !== 'none') {

        element.style.display='none';

    }

}
function easy()
{
    checkIfOpen();

    var element = document.getElementById("easyGame"),
        style = window.getComputedStyle(element),
        display = style.getPropertyValue("display");

    if (display !== 'none') {

        element.style.display='none';
    }
    else {
        element.style.display='block';
    }


}

function medium()
{
    checkIfOpen();
    var element = document.getElementById("mediumGame"),
        style = window.getComputedStyle(element),
        display = style.getPropertyValue("display");

    if (display !== 'none') {

        element.style.display='none';
    }
    else {
        element.style.display='block';
    }


}
function hard()
{

    var element = document.getElementById("hardGame"),
        style = window.getComputedStyle(element),
        display = style.getPropertyValue("display");

    if (display !== 'none') {

        element.style.display='none';
    }
    else {
        element.style.display='block';
    }


}