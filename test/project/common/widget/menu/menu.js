var $ = require('common:widget/ui/jquery/jquery.js');

exports.init = function() {
    $('.menu-ui ul li a').click(function(event) {
        var self = this;
        $('.menu-ui ul li a').each(function() {
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            }
        });
        $(self).addClass('active');
        event.preventDefault();
    });
};