$().ready(function() {
    $(".fs_menu ").hover(function() {
        $(this).find(".fs_menus").show();
    }, function() {
        $(this).find(".fs_menus").hide();
    });
});