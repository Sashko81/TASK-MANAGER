$(document).ready(function() {
    function toggleReg() {
        $(".part-of-reg").toggle( "slow" );
    }

    function getStat() {
        console.log("window loaded");
        $.getJSON("/task/list", function (data) {
            console.log(data);
            var items = [];
            $.each(data.list, function (key, val) {
                items.push("<a href='#' rel='"+key+"' class='task-item list-group-item list-group-item-action list-group-item-secondary'>" + val + "</a>");
            });

            $("<div/>", {
                html: items.join("")
            }).appendTo("#task-list");

            if (data.isAuth === "ok") {
                $("#no-auth").hide();
                $("#is-auth").show();
            } else {
                $("#no-auth").show();
                $("#is-auth").hide();
            }
        }).always(function() {
            console.log( "complete" );
        });
    }

    getStat();
    // setTimeout(getStat, 1000);

    $("#btn-add").on("click", function() {
        var val = $("#inputAdd").val();
        $.get( "/task/add", {"name":"","value":val}, function( data ) {
            console.log( "number = " + data );
            var el = "<a href='#' class='task-item list-group-item list-group-item-action list-group-item-secondary'>" + val + "</a>"
            $("#task-list").append(el);
        });
    });

    $("a.task-item").on("click", function() {
        console.log( "success" );
        $("#btn-update").show();
        $("#btn-cancel").show();
        $("#btn-del").show();
        $("#inputKey").val($(this).attr("rel"));
        $("#inputAdd").val($(this).text());
    });

    $("#btn-logout").on("click", function() {
        $.get( "/task/add", function( data ) {
            console.log( "number = " + data );
            //var obj = jQuery.parseJSON( '{ "name": "John" }' );
            $(".check").each(function( index ) {
                $( this ).removeAttr("checked");
            });
            $("#f"+data).attr("checked", "checked")
        });
    });

    $("#btn-reg").on("click", function() {
        $.get( "/user/reg", {"login":"user","password":"test"}, function( data ) {
            console.log( "res = " + data );
            if (data === "ok") {
                $("#"+data).attr("checked", "checked")
            } else {
                alert("occurred some error: "+ data);
            }
        });
    });
    $("#btn-reg-show").on("click", function() {
        toggleReg();
    });


});

/*var form = document.forms['user'];
var s = form.elements.user_name.value;

alert('user name: '+s);
var el = document.getElementsByName('user_name')[0];
var s = el.value;

alert('user name: '+s);

var form1 = document.forms['Add'];
var t = form.elements.add_t.value;

alert('add task: '+t);
var ed = document.getElementsByName('add_t')[0];
var t = ed.value;

alert('user name: '+t);*/


