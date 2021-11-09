$(function () {
    $('#auth-button').click(function () {
        $('#modal-1').addClass('modal_active');
        $('body').addClass('hidden');
    });

    $('#registration-button').click(function () {
        $('#modal-2').addClass('modal_active');
        $('body').addClass('hidden');
    });

    $('.modal__close-button').click(function () {
        $('#modal-1, #modal-2').removeClass('modal_active');
        $('body').removeClass('hidden');
    });
});

$('.modal').mouseup(function (e) {
    let modalContent = $(".modal__content");
    if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
      $(this).removeClass('modal_active');
      $('body').removeClass('hidden');
    }
});