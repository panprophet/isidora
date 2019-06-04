

$(document).ready(function() {

    $('[data-fancybox]').fancybox({
      youtube : {
        showinfo : 0, 
      }
    });
  });

function url2embed(url){
    var a = document.getElementsByClassName('video-url');
    var video_url = null
    if(url) {
        // https://gist.github.com/yangshun/9892961
          
          url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
          if (RegExp.$3.indexOf('youtu') > -1) {
              //video_type = 'youtube';
              video_url = '//www.youtube.com/embed/' + RegExp.$6
          } else if (RegExp.$3.indexOf('vimeo') > -1) {
              //video_type = 'vimeo';
              video_url = '//player.vimeo.com/video/' + RegExp.$6
          }
          //video_id: RegExp.$6
    
      } 
      a.href = video_url;
    }