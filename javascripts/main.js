(function(){var e;window.location_pathname=function(){return location.pathname.replace(/index.\w+$/,"")},e=function(){},$(function(){return e(),$("article.single").find("a").each(function(e,t){return $(t).attr("target","_blank")}),$(".aside img").on("click",function(e){return e.preventDefault(),$(this).parent(".aside").toggleClass("stretch")}),$(document).on("scroll",function(e){var t,n;return n=$(window).scrollTop(),t=$(".annoucement"),n>0?t.addClass("sticky"):t.removeClass("sticky")})})}).call(this);