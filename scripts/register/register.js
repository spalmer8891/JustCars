$(document).ready(function () {
    //"use strict";


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    $("#username").change(function () {
        $("#username").css('border-color', '#ced4da');
    });

    $("#passwd").change(function () {
        $("#passwd").css('border-color', '#ced4da');
    });

    $("#passwd2").change(function () {
        $("#passwd2").css('border-color', '#ced4da');
    });

    $("#email").change(function () {
        $("#email").css('border-color', '#ced4da');
    });

    $("#fname").change(function () {
        $("#fname").css('border-color', '#ced4da');
    });

    $("#lname").change(function () {
        $("#lname").css('border-color', '#ced4da');
    });

    $("#location").change(function () {
        $("#location").css('border-color', '#ced4da');
    });

    $("#gender").change(function () {
        $("#gender").css('border-color', '#ced4da');
    });

    $("#country").change(function () {
        $("#country").css('border-color', '#ced4da');
    });

    $("#dob").change(function () {
        $("#dob").css('border-color', '#ced4da');
    });


    $("#regist").click(function () {
        //console.log('---------------------------');

        var user = $("#username").val();
        var passwd = $("#passwd").val();
        var passwd2 = $("#passwd2").val();
        var email = $("#email").val();
        var fname = $("#fname").val();
        var lname = $("#lname").val();
        var location = $("#location").val();
        var gender = $("#gender").val();
        var country = $("#country").val();
        var dob = $("#dob").val();

        if (user == "") {
            $("#username").css('border-color', 'red');
        }

        if (passwd == "") {
            $("#passwd").css('border-color', 'red');
        }

        if (passwd2 == "") {
            $("#passwd2").css('border-color', 'red');
        }

        if (email == "") {
            $("#email").css('border-color', 'red');
        }

        if (fname == "") {
            $("#fname").css('border-color', 'red');
        }

        if (lname == "") {
            $("#lname").css('border-color', 'red');
        }

        if (location == "") {
            $("#location").css('border-color', 'red');
        }

        if (country == "") {
            $("#country").css('border-color', 'red');
        }

        if (dob == "") {
            $("#dob").css('border-color', 'red');
        }

        if (gender == 0) {
            console.log('aca esta entrando');
            $("#gender").css('border-color', 'red');
        }

        if (user != "" && passwd != "" && email != "" && passwd != "" && passwd2 != "" && fname != "" && lname != "" && location != "" && country != "" && dob != "" && gender != 0) {
            if(passwd == passwd2) {            
                window.location.href = "Login.html";
            }else {
                $("#passwd").css('border-color', 'red');
                $("#passwd2").css('border-color', 'red');
            }
        }

    });


});