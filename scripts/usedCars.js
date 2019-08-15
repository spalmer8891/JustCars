$(document).ready(function() {

    $("table tr td").click(function(e) {
        //console.log(e.getAttribute());

        //console.log($("table tr td img").html());
    });



    $(".r_I20").click(function(e) {
        e.preventDefault();
        goPage("HyundaiI20");
    });

    $(".r_TAvalon").click(function(e) {
        e.preventDefault();
        goPage("TAvalon");
    });


    $(".r_AudiTron").click(function(e) {
        e.preventDefault();
        goPage("AudiTron");
    });

    $(".r_Ffocus").click(function(e) {
        e.preventDefault();
        goPage("Ffocus");
    });

    function goPage(identifier) {
        //alert("aca vamos " + identifier);
        $("#inner_container").load("../../views/CarReviews/review_" + identifier + ".html");
        $("#wowslider-container").hide();
    }


});