$(() => {
    $("div.main-levels-items-item").on('click', scrollLevelArea);
});

function scrollLevelArea(e) {
    let id = $(e.target).attr('id');

    if(id === undefined)
        id = $(e.target).parent().attr('id');

    let level = id.split("_")[1];
    let top = $("#rankItem_" + level).offset().top;
    let scrollPos = top - 300;

    $(window).scrollTop(scrollPos);
}
