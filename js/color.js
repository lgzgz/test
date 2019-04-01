(function($){
     $.fn.extend({
         color:function(color){
             //不传参时默认为000；
             color=color||"#000"
             this.css("color",color);
             return this;
         }
     })
})(jQuery)