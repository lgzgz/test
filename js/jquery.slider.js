(function ($) {
    $.fn.extend({
        //点击显示
        slideRight: function (speed, callback) {
            this.animate({
                width: "show",
                marginLeft: "show",
                marginRight: "show",
                paddingLeft: "show",
                paddingRight: "show"
            }, speed, callback)
        },
        //点击隐藏
        slideLeft: function (speed, callback) {
            this.animate({
                width: "hide",
                marginLeft: "hide",
                marginRight: "hide",
                paddingLeft: "hide",
                paddingRight: "hide",
            }, speed, callback)
        },
        //点击切换显示隐藏
        slideToggle2: function (speed, callback) {
            this.animate({
                width: "toggle",
                marginLeft: "toggle",
                marginRight: "toggle",
                paddingLeft: "toggle",
                paddingRight: "toggle"
            }, speed, callback)
        }
    })

})(jQuery)