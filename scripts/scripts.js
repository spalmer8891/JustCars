$(document).ready(function() {

    //author:Sherwayne Palmer

    $("#inner_container").load("views/Home.html"); //load home page by default


    $(".home").click(function() {

        $("#inner_container").load("views/Home.html"); //load home page on click	

        if (window.matchMedia("(min-width: 769px)").matches) //if media query size min-width is 769px show slider
        {
            $("#wowslider-container").show();
        }
    });

    $(".usedcars").click(function() {
        $("#inner_container").load("views/UsedCars.html"); //load contact us page on click
        $("#wowslider-container").hide();
    });

    $(".aboutus").click(function() {
        $("#inner_container").load("views/AboutUs.html"); //load contact us page on click
        $("#wowslider-container").hide();
    });

    $(".contactus").click(function() {
        $("#inner_container").load("views/ContactUs.html"); //load contact us page on click
        $("#wowslider-container").hide();
    });

    $(".services").click(function() {
        $("#inner_container").load("views/Services.html"); //load contact us page on click
        $("#wowslider-container").hide();
    });
    $(".partners").click(function() {
        $("#inner_container").load("views/partners.html"); //load partners us page on click
        $("#wowslider-container").hide();
    });
    $('.main').addClass('highlight'); //set home to highlighted on page load

    //highlight current page
    $('.home,.usedcars,.services,.aboutus,.contactus').click(function() {

        var pageIdentArr = this.className;
        var pageIdent = pageIdentArr.split(" ");
        if (pageIdent[0] == "home") {
            $("#usedcars").removeClass('highlight');
            $("#aboutus").removeClass('highlight');
            $("#contactus").removeClass('highlight');
            $("#services").removeClass('highlight');
            $("#home").addClass('highlight');
        } else if (pageIdent[0] == "services") {
            $("#home").removeClass('highlight');
            $("#aboutus").removeClass('highlight');
            $("#contactus").removeClass('highlight');
            $("#usedcars").removeClass('highlight');
            $("#services").addClass('highlight');
        } else if (pageIdent[0] == "usedcars") {
            $("#home").removeClass('highlight');
            $("#services").removeClass('highlight');
            $("#aboutus").removeClass('highlight');
            $("#contactus").removeClass('highlight');
            $("#usedcars").addClass('highlight');
        } else if (pageIdent[0] == "aboutus") {
            $("#home").removeClass('highlight');
            $("#contactus").removeClass('highlight');
            $("#usedcars").removeClass('highlight');
            $("#services").removeClass('highlight');
            $("#aboutus").addClass('highlight');
        } else if (pageIdent[0] == "contactus") {
            $("#home").removeClass('highlight');
            $("#usedcars").removeClass('highlight');
            $("#services").removeClass('highlight');
            $("#aboutus").removeClass('highlight');
            $("#contactus").addClass('highlight');
        }
    });
    // $('#headerNav li a').click(function() {
    //     $('#headerNav li a').removeClass('highlight');
    //     $(this).addClass('highlight');
    // });

    $(".frpghome,.frpgusedcars,.frpgservices,.frpgaboutus,.frpgcontactus").click(function(e) {
        //alert("you have to be logged in, to access this link");

        notifyError("You have to be logged in, to access this link");
        //window.location = "../../views/Login.html";
        //e.PreventDefault();

    });

    $(window).resize(function() { //performs functionality based on screen resize event
        var pageIdent = $("#pageIdent").val();

        if (window.matchMedia("(min-width: 769px)").matches && pageIdent == "home") //if media query size min-width is 769px show slider
        {
            $("#wowslider-container").show();

        } else {
            $("#wowslider-container").hide();
        }

    });

    $("#login-btn").click(function() {
        window.location = "../../views/Login.html";
    });

    $("#register-btn").click(function() {
        window.location = "../../views/register.html";
    });

    $(".logout").click(function() {
        window.location = "../../views/FrontPage.html";
    });

});

function mobileDropDown() {
    var x = document.getElementById("mainNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/**
 * Get the button, and when the user clicks on it, execute navButton function
 * 
 * date: 13/03/2019
 * author: Deivid Mafra
 **/

function navButton() {
    document.getElementById("myDropdown").classList.toggle("show");
}