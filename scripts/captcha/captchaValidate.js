$(document).ready(function() {

    $.fn.shuffle = function() {
        return this.each(function() {
            var items = $(this).children();

            return (items.length) ?
                $(this).html($.shuffle(items, $(this))) :
                this;
        });
    }

    $.fn.validate = function() {
        var res = false;
        this.each(function() {
            var arr = $(this).children();
            res = ((arr[0].innerHTML == "1") &&
                (arr[1].innerHTML == "2") &&
                (arr[2].innerHTML == "3") &&
                (arr[3].innerHTML == "4") &&
                (arr[4].innerHTML == "5") &&
                (arr[5].innerHTML == "6"));
        });
        return res;
    }

    $.shuffle = function(arr, obj) {
        for (
            var j, x, i = arr.length; i; j = parseInt(Math.random() * i),
            x = arr[--i], arr[i] = arr[j], arr[j] = x
        );
        if (arr[0].innerHTML == "1") obj.html($.shuffle(arr, obj))
        else return arr;
    }

    $(function(e) {
        $("#sortable").sortable();
        $("#sortable").disableSelection();
        $('ul').shuffle();

        $(".login100-form-btn").click(function() {
            var userNameAndPassword = {
                Sherwayne: "1234",
                Deivid: "1234",
                Diego: "1234"
            };

            var isUser = false;
            var username = $("#username").val();
            var password = $("#password").val();
            for (var key in userNameAndPassword) {
                var value = userNameAndPassword[key];

                if (username.toLowerCase() == key.toString().toLocaleLowerCase() && password == value && isUser == false) {
                    isUser = true;
                    if ($('ul').validate() && isUser == true) {
                        window.location = "JustCars/views/SiteMaster.html";
                        break;
                    } else {

                        //alert("Please submit correct screen captcha.");
                        notifyError("Please submit correct screen captcha.");
                        break;
                    }
                }
            }
            if (isUser == false) {
                //alert("Username or password is incorrect");
                notifyError("Username or password is incorrect");
            }
            //($('ul').validate()) ? alert("Yeah, you are a human!"): alert("No, you are not a human!");
        });
    });

});
