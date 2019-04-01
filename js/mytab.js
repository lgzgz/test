(function($){
    $.fn.extend({
        tab:function(options){
            var  defaults={
                 click:false,
                 auto:false
             }
             //索引为0
             var index=0;
             //计时器为null
             var t=null;
             options=$.extend(defaults,options)
            //获取span元素
            var $titles=this.children(".title").children("span");
            //获取内容元素对象
            var $contents=this.children(".content").children("div");
            //获取内容长度
            var size=$titles.size();
            //当点击时间为true时执行点击事件，否则执行鼠标移入事件
            if(options.click){
                $titles.click(fn);

            }else{
               $titles.mouseover(fn);
            }
            //当为true时执行循环，否则停止
            if(options.auto){
              autoChange();
            }else{
               clearInterval(t);
            }
            //内容显示
            function fn(){
                var index=$(this).index();
                //当前的显示，兄弟节点删除
                $(this).addClass("active").siblings().removeClass('active');
                //当前内容显示，兄弟节点删除
                $contents.eq(index).addClass("move").siblings().removeClass('move');
            }
            //内容轮播
            function autoChange(){
                t=setInterval(function(){
                    index++;
                    if(index==size){
                        index=0;
                    }
                    //当前的显示，兄弟节点删除
                    $titles.eq(index).addClass("active").siblings().removeClass('active');
                    //当前内容显示，兄弟节点删除
                    $contents.eq(index).addClass("move").siblings().removeClass('move');
                },2000)
            }
        }
    })

})(jQuery)