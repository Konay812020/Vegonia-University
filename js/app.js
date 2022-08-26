// For JQuery
// Start Jquery Area
$(document).ready(function () {
    // Start Header
    // Start Nav Bar
    $(".navbuttons").click(function () {
        $(this).toggleClass("crossxs");
    });
    //End Nav Bars 
    // End Header
});
// End Jquery Area
// Start Js Area
var getcountervalues = document.querySelectorAll(".countervalues");
// console.log(getcountervalues)
getcountervalues.forEach(function (getcountervalue) {
    // console.log(getcountervalue);
    getcountervalue.textContent = 0;
    const updatecounter = function () {
        // console.log(" I am working")
        const getcttarget = +getcountervalue.getAttribute("data-target");
        // console.log(typeof getcttarget); //string
        const getctcontent = +getcountervalue.textContent;
        // console.log(getctcontent)//number
        const incnumber = getcttarget / 100;
        // console.log(incnumber);
        if (getctcontent < getcttarget) {
            getcountervalue.textContent = getctcontent + incnumber;
            setTimeout(updatecounter, 50);
        }
    }
    updatecounter();
})
// 25CT

// End Js Area 