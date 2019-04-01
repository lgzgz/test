(function ($) {
    $.fn.extend({
        slider: function (options) {
            var that = this;
            var defaults = {
                interval: 3000,
                dots: false,
                arrow: false
            }
            options = $.extend(defaults, options);
            //定义一个变量为0
            var curIndex = 0;
            //获取所有的图片
            var divs = $(this).find(".item");
            //获取长度
            var size = divs.length;
            //定时器
            var t = setInterval(function () {
                next();
            }, options.interval)
            //绑定小圆点点击切换图片事件
            if (options.dots) { 
                //显示ul
                this.find("ul").show();
                //点击每个li时为当前点击的添加样式，兄弟节点删除样式
                $(this).find("li").click(function () {
                    divs.eq($(this).index()).addClass("active").siblings().removeClass("active");
                    $(this).addClass("active").siblings().removeClass("active");
                    curIndex = $(this).index();
                })
            } else {
                this.find("ul").hide();
            }
            if (options.arrow) {
                this.find("arrow").show();
                //点击时图片向左循环
                this.find(".left").click(function () {
                    prev();
                })
                //点击时图片向右循环
                this.find(".right").click(function () {
                    next();
                })
            } else {
                this.find("arrow").hide()
            }
            //鼠标移入循环停止移出继续
            this.hover(function () {
                //停止循环
                clearInterval(t);
            }, function () {
                //继续循环
                t = setInterval(function () {
                    next();
                }, options.interval)
            })
            //向右循环
            function next() {
                curIndex++;
                //当索引大于最后一张时
                if (curIndex == size) {
                    //索引为0
                    curIndex = 0;
                }
                //为当前索引添加样式，其他兄弟节点删除样式
                divs.eq(curIndex).addClass("active").siblings().removeClass("active");
                if (options.dots) {
                    that.find("li").eq(curIndex).addClass("active").siblings().removeClass("active")
                }
            }
            function prev() {
                curIndex--;
                //当索引小于第一张时
                if (curIndex == -1) {
                    //索引为0
                    curIndex = size - 1;
                }
                //为当前索引添加样式，其他兄弟节点删除样式
                divs.eq(curIndex).addClass("active").siblings().removeClass("active");
                if (options.dots) {
                    that.find("li").eq(curIndex).addClass("active").siblings().removeClass("active")
                }
            }

        }
    })

})(jQuery);