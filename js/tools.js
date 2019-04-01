(function($){
    $.extend({
        sum:function(arr){
            var s=0;
            //遍历
            $.each(arr,function(index,item){
                //相加，如果有无法转化类型为0
                 s+=parseFloat(item)||0
            })
            return s;
        }
    })

})(jQuery)
