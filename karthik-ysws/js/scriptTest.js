$(function() {
    $('.popOver').tooltip({ trigger: 'manual' }).tooltip('show');
});

$(".progress-bar").each(function() {
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
});