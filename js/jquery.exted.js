(function ($) {
    $.fn.extend({
        //自动轮播
        slider: function (options) {
            var that=this;
            var defaults = {
                interval: 3000,
                dots: false,
                arrow: false
            }
            options = $.extend(defaults, options);
            //定义一个变量为0
            var curIndex = 0;
            //获取所有的节点对象
            var divs = this.find(".item");
            //获取索引长度
            var size = divs.length;
            //定时器
            var t = setInterval(function () {
                next();
            }, options.interval);
            //为页面控制点绑定事件
            if (options.dots) {
                this.find("ul").show();
                $(this).find("li").click(function () {
                    divs.eq($(this).index()).addClass("active").siblings().removeClass("active");
                    $(this).addClass("active").siblings().removeClass("active");
                    curIndex = $(this).index();
                })
            } else {
                this.find("ul").hide();
            }
            //为页面左右箭头绑定事件
            if (options.arrow) {
                this.find(".arrow").show();
                $(this).find(".left").click(function(){
                    prev();
                })
                $(this).find(".right").click(function(){
                    next();
                })
            } else {
                this.find(".arrow").hide();
            }
            this.hover(function () {
                clearInterval(t);
            }, function () {
                t = setInterval(function () {
                    next();
                }, options.interval);

            })
            //向右轮播
            function next() {
                //每次加1
                curIndex++;
                //当大于索引长度时为0
                if (curIndex == size) {
                    curIndex = 0;
                }
                //为每一个添加样式再给他的兄弟节点删除样式
                divs.eq(curIndex).addClass("active").siblings().removeClass("active");
                if(options.dots){
                    that.find("li").eq(curIndex).addClass("active").siblings().removeClass("active");
                }
            }
            function prev() {
                //每次加1
                curIndex--;
                //当大于索引长度时为0
                if (curIndex ==-1) {
                    curIndex = size-1;
                }
                //为每一个添加样式再给他的兄弟节点删除样式
                divs.eq(curIndex).addClass("active").siblings().removeClass("active");
                if(options.dots){
                    that.find("li").eq(curIndex).addClass("active").siblings().removeClass("active");
                }
            }
        }
    });
})(jQuery);