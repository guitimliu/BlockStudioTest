$('.btn_menu').click((e) => {
    switchSidebar(e);
})

$('.btn_close').click((e) => {
    switchSidebar(e);
})

function switchSidebar(e) {
    e.preventDefault();
    $('.sidebar').fadeToggle(200);
}