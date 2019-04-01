(function(){
  $.fn.extend({
      hello:function(name){
          //如果不传参默认hello every one，传参是hello加参数
          name=name||" every one";
          console.log("hello"+name+"!")
      }
  })
})(jQuery)