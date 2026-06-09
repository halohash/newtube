export async function onRequest(context) {
  const url = new URL(context.request.url);
  const id = url.searchParams.get("v");

  if (!id) {
    return Response.redirect(new URL("/", context.request.url).toString(), 301);
  }

  const videoSrc = `https://da-twotube.pages.dev/video?v=${encodeURIComponent(id)}`;
  const apiUrl = `https://da-twotube.pages.dev/feeds/api/videos/${encodeURIComponent(id)}?alt=json`;

  let title = "Video unavailable";

  try {
    const res = await fetch(apiUrl);
    if (res.ok) {
      const data = await res.json();
      title =
        data?.entry?.media$title?.$t ||
        data?.entry?.title?.$t ||
        "Untitled video";
    }
  } catch (e) {
    title = "Unknown";
  }

  const html = `<!DOCTYPE html>
  <html lang="en" dir="ltr" >

<!-- machid: pWWVleGVkeVVTNVdqRGU0RW1ZcDBOZVlTMHhhNTVpZ1lHUFFyeXIycHpIeGQxMGRuRzBHb29R -->
<head>
  
        <script>
var yt = yt || {};yt.timing = yt.timing || {};yt.timing.tick = function(label, opt_time) {var timer = yt.timing['timer'] || {};if(opt_time) {timer[label] = opt_time;}else {timer[label] = new Date().getTime();}yt.timing['timer'] = timer;};yt.timing.info = function(label, value) {var info_args = yt.timing['info_args'] || {};info_args[label] = value;yt.timing['info_args'] = info_args;};yt.timing.info('e', '917000,904820,919001,916201,907519');yt.timing.wff = true;yt.timing.info('an', '');yt.timing.tick('start');yt.timing.info('li','0');try {yt.timing['srt'] = window.gtbExternal && window.gtbExternal.pageT() ||window.external && window.external.pageT;} catch(e) {}if (window.chrome && window.chrome.csi) {yt.timing['srt'] = Math.floor(window.chrome.csi().pageT);}if (window.msPerformance && window.msPerformance.timing) {yt.timing['srt'] = window.msPerformance.timing.responseStart - window.msPerformance.timing.navigationStart;}    </script>

    <script>
      var yt = yt || {};
        yt.preload_crossdomain = {};
        yt.preload_crossdomain.start = function() {
          var img = new Image();
          yt.preload_crossdomain.videoConnection = img;
          img.onload = img.onerror = function () {
            delete yt.preload_crossdomain.videoConnection;
          };
          img.src = "http:\/\/o-o.preferred.nuq04s10.v17.lscache6.c.youtube.com\/crossdomain.xml";
          img = null;
        };
        yt.preload_crossdomain.start();
      yt.preload = {};
      yt.preload.start = function() {
        var img = new Image();
        yt.preload.videoConnection = img;
        img.onload = img.onerror = function () {
          delete yt.preload.videoConnection;
        };
        img.src = "http:\/\/o-o.preferred.nuq04s10.v17.lscache6.c.youtube.com\/generate_204?sparams=id%2Cexpire%2Cip%2Cipbits%2Citag%2Csource%2Calgorithm%2Cburst%2Cfactor%2Ccp\u0026fexp=917000%2C904820%2C919001%2C916201%2C907519\u0026algorithm=throttle-factor\u0026itag=34\u0026ip=207.0.0.0\u0026burst=40\u0026sver=3\u0026signature=975B7016E8161987EC569ECC364E0A53ABF6E43A.5741BBC345313C388CC6B67813D5F801812AC04C\u0026source=youtube\u0026expire=1329734463\u0026key=yt1\u0026ipbits=8\u0026factor=1.25\u0026cp=U0hRTldOUl9LTUNOMV9PSFZFOkthZk43OFZ5MzY5\u0026id=8407dc62e2db31af";
        img = null;
      };
      yt.preload.start();
    </script>

    <title>
        ${title}
      - TwoTube
  </title>

    
  <link rel="search" type="application/opensearchdescription+xml" href="http://www.youtube.com/opensearch?locale=en_US" title="YouTube Video Search">

  <link rel="icon" href="http://s.ytimg.com/yt/favicon-refresh-vfldLzJxy.ico" type="image/x-icon">
  <link rel="shortcut icon" href="http://s.ytimg.com/yt/favicon-refresh-vfldLzJxy.ico" type="image/x-icon"> 


      




  

    <link id="www-core-css" rel="stylesheet" href="/assets/css/www-refresh-vflIIALcc.css">










  







  <style>
    .video-list-item .ux-thumb-wrap .video-count {
        position: absolute;
        top: 2px;
        right: 2px;
        padding: 2px;
        background: #000;
        background: rgba(0, 0, 0, 0.8);
        color: #fff;
        font-weight: normal;
        font-size: 90%;
        line-height: 1;
        text-align: center;
    }
    .video-list-item .ux-thumb-wrap .video-count strong {
      display: block;
    }
    .video-list-item .thumb-row .video-thumb {
      margin-right: 5px;
    }
  </style>






  


    <script>
    var gYouTubePlayerReady = false;
    if (!window['onYouTubePlayerReady']) {
      window['onYouTubePlayerReady'] = function() {
        gYouTubePlayerReady = true;
      };
    }
  </script>
      <script>
      if (window.yt.timing) {
        yt.timing.tick('ct');
      }
    </script>


</head>
  <body id="" class="date-20120217 en_US ltr  " dir="ltr">

  <form name="logoutForm" method="POST" action="/">
    <input type="hidden" name="action_logout" value="1">
  </form>
  <!-- begin page -->
  <div id="page" class="  watch  ">
      
  <div id="masthead-container">
    <!-- begin masthead -->
      <div id="masthead" class="" dir="ltr">
          <a id="logo-container" href="/" title="YouTube home">
    <img id="logo" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="YouTube home">
  </a>


      <div id="masthead-user-bar-container" >
        <div id="masthead-user-bar">
          <div id="masthead-user">
              <a class="start" href="/signup?next=%2Fwatch%3Fv%3DhAfcYuLbMa8">Create Account</a>  <span class="masthead-link-separator">|</span>  <a class="end" href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26nomobiletemp%3D1%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253DhAfcYuLbMa8&amp;hl=en_US&amp;ltmpl=sso">Sign In</a>
          </div>
        </div>
      </div>
    <div id="masthead-search-bar-container" >
      <div id="masthead-search-bar">
<div id="masthead-nav"><a href="/videos?feature=mh" >Browse</a><span class="masthead-link-separator">|</span><a href="/movies?feature=mh" >Movies</a>                <span class="masthead-link-separator">|</span><a href="//www.youtube.com/my_videos_upload" >Upload</a></div>        


  <form id="masthead-search" class="search-form consolidated-form" action="/results" onsubmit="if (_gel(&#39;masthead-search-term&#39;).value == &#39;&#39;) return false;">
<button class="search-btn-compontent search-button yt-uix-button yt-uix-button-default" onclick="if (_gel(&#39;masthead-search-term&#39;).value == &#39;&#39;) return false; _gel(&#39;masthead-search&#39;).submit(); return false;;return true;" type="submit" id="search-btn" dir="ltr" tabindex="2"  role="button"><span class="yt-uix-button-content">Search </span></button><div id="masthead-search-terms" class="masthead-search-terms-border" dir="ltr"><label><input id="masthead-search-term" autocomplete="off" class="search-term" name="search_query" value="" type="text" tabindex="1" onkeyup="goog.i18n.bidi.setDirAttribute(event,this)"  title="Search"></label></div>  </form>

      </div>
    </div>
  </div>
  


    <div id="alerts">    <div  class="yt-alert yt-alert-info "><span class="yt-alert-icon"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon"></span><div  class="yt-alert-content">        We're changing our privacy policy. This stuff matters.&nbsp;&nbsp;<a href="http://www.google.com/intl/en/policies/" onclick="yt.www.privacynotice.learnMore();">Learn more</a>&nbsp;&nbsp;<a onclick="yt.www.privacynotice.dismiss(); _hidediv(this.parentNode); return false;">Dismiss</a>

</div><button type="button" onclick="_hidediv(this.parentNode);yt.www.privacynotice.dismiss()" class="close">Close</button></div>


</div>
    <!-- end masthead -->
  </div>
  <div id="content-container">
    <!-- begin content -->
    <div id="content">
      <div id="watch-container" itemscope itemtype="http://schema.org/VideoObject">
      <link itemprop="url" href="http://www.youtube.com/watch?v=hAfcYuLbMa8">
    <meta itemprop="name" content="Mad Men - Season 5 - &#39;Don Is Back&#39; Teaser">
    <meta itemprop="description" content="Mad Men - Season 5 Teaser">
    <link itemprop="thumbnailUrl" href="http://i1.ytimg.com/vi/hAfcYuLbMa8/hqdefault.jpg">
      <link itemprop="embedURL" href="http://www.youtube.com/v/hAfcYuLbMa8?version=3&amp;autohide=1">
      <meta itemprop="playerType" content="Flash">
      <meta itemprop="width" content="640">
      <meta itemprop="height" content="360">


  <!-- begin watch-headline-container -->
  <div id="watch-headline-container">
      <div id="watch-headline" class="watch-headline">
      



    <h1 id="watch-headline-title">
      


  <span id="eow-title" class="" dir="ltr" title="${title}">
    ${title}
  </span>

    </h1>

    <div id="watch-headline-user-info">
        <span class="yt-uix-button-group"><button href="/user/TheTVShowsRU?feature=watch" type="button" class="start yt-uix-button yt-uix-button-default" onclick=";window.location.href=this.getAttribute(&#39;href&#39;);return false;"  role="button"><span class="yt-uix-button-content">TheTVShowsRU </span></button><div class="yt-subscription-button-hovercard yt-uix-hovercard" data-card-class="watch-subscription-card"><button href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26nomobiletemp%3D1%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253DhAfcYuLbMa8&amp;hl=en_US&amp;ltmpl=sso" type="button" class="yt-subscription-button yt-subscription-button-js-default end  yt-uix-button yt-uix-button-default" onclick=";window.location.href=this.getAttribute(&#39;href&#39;);return false;" data-enable-hovercard="true" data-subscription-value="SlgR0ghcssvjZLI05hEWfA" data-force-position="true" data-position="topright" data-subscription-feature="watch" data-subscription-type="" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-subscribe" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content">  <span class="subscribe-label">Subscribe</span>
  <span class="subscribed-label">Subscribed</span>
  <span class="unsubscribe-label">Unsubscribe</span>
 </span></button><div class="yt-uix-hovercard-content hid">  <p class="loading-spinner">
    <img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="">
Loading...
  </p>
</div></div></span><button onclick="_toggleclass(this,&#39;yt-uix-expander-collapsed&#39;);return false;" type="button" id="watch-mfu-button" class="yt-uix-expander-collapsed yt-uix-button yt-uix-button-default" data-button-toggle="true" data-video-user-id="SlgR0ghcssvjZLI05hEWfA" data-button-menu-id="some-nonexistent-menu" data-video-id="hAfcYuLbMa8" data-button-action="yt.www.watch.watch5.handleToggleMoreFromUser" role="button"><span class="yt-uix-button-content">75 videos </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
    </div>

        <div id="subscription-button-module-menu" class="hid subscription-menu-expandable subscription-menu">
      <div class="subscription-menu-not-logged-in">
          <strong>
      <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26nomobiletemp%3D1%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253DhAfcYuLbMa8&amp;hl=en_US&amp;ltmpl=sso">Sign in</a> or <a href="/signup?next=%2Fwatch%3Fv%3DhAfcYuLbMa8">sign up</a> now!
    
</strong>

      </div>
  </div>


    <div id="watch-more-from-user" class="collapsed">
      <div id="watch-channel-discoverbox" class="yt-rounded">
        <span id="watch-channel-loading">Loading...</span>
      </div>
    </div>


  </div>

  </div>
  <!-- end watch-headline-container -->
  <div id="watch-video-container">
    <div id="watch-video" >
          <script>
      if (window.yt.timing) {
        yt.timing.tick('bf');
      }
    </script>

          <div id="watch-player" class="flash-player"><iframe  src="https://www.youtube.com/embed/${id}" width="100%" height="100%"></iframe></div>
    

      <!-- begin watch-video-extra -->
      <div id="watch-video-extra">
        
        
      </div>
      <!-- end watch-video-extra -->
    </div>
  </div>
  <!-- begin watch-main-container -->
  <div id="watch-main-container">
    <div id="watch-main">
      <div id="watch-panel">
            <div  id="flash10-promo-div" style="display: none;" class="yt-alert yt-alert-warn "><span class="yt-alert-icon"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon"></span><div  class="yt-alert-content">        Upgrade to the latest Flash Player for improved playback performance. <a href="http://www.adobe.com/go/getflashplayer/" onmousedown="urchinTracker(&#39;/Events/VideoWatch/GetFlashUpgrade&#39;);">Upgrade now</a> or <a href="//support.google.com/youtube/bin/answer.py?answer=95402">more info</a>.
</div><button type="button" onclick="_hidediv(this.parentNode);" class="close">Close</button></div>


  <div id="watch-actions">
      <div id="watch-actions-right">
          <span class="watch-view-count">
    <strong>49,654</strong>
  </span>
  <button onclick=";return false;" title="Show video statistics" type="button" id="watch-insight-button" class="yt-uix-tooltip yt-uix-tooltip-reverse yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" data-button-action="yt.www.watch.actions.stats" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-insight" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Show video statistics"></button>

      </div>
    <span id="watch-like-unlike" class="yt-uix-button-group " data-button-toggle-group="true"><button onclick=";return false;" title="I like this" type="button" class="start yt-uix-tooltip-reverse  yt-uix-button yt-uix-button-default yt-uix-tooltip" id="watch-like" data-button-toggle="true" data-button-action="yt.www.watch.actions.like" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-like" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="I like this"><span class="yt-uix-button-content">Like </span></button><button onclick=";return false;" title="I dislike this" type="button" class="end yt-uix-tooltip-reverse  yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" id="watch-unlike" data-button-toggle="true" data-button-action="yt.www.watch.actions.unlike" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-unlike" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="I dislike this"></button></span>
    <button onclick=";return false;" title="Add to favorites or playlist" type="button" class="addto-button watch show-label yt-uix-tooltip-reverse yt-uix-button yt-uix-button-default yt-uix-tooltip" id="watch-addto-button" data-button-menu-id="some-nonexistent-id" data-video-ids="hAfcYuLbMa8" data-button-action="yt.www.watch.actions.showSigninOrCreateChannelWarning" data-feature="watch" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Add to favorites or playlist"><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>

  <button onclick=";return false;" title="Share or embed this video" type="button" class="yt-uix-tooltip-reverse yt-uix-button yt-uix-button-default yt-uix-tooltip" id="watch-share" data-button-action="yt.www.watch.actions.share" role="button"><span class="yt-uix-button-content">Share </span></button>

  <button onclick=";return false;" title="Flag as inappropriate" type="button" class="yt-uix-tooltip-reverse yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" id="watch-flag" data-button-action="yt.www.watch.actions.flag" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-flag" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Flag as inappropriate"></button>



  </div>

  <div id="watch-actions-area-container" class="hid">
    <div id="watch-actions-area" class="yt-rounded">
        <div id="watch-actions-loading" class="watch-actions-panel hid">
Loading...
  </div>
  <div id="watch-actions-logged-out" class="watch-actions-panel hid">
      <div  class="yt-alert yt-alert-warn yt-alert-naked "><span class="yt-alert-icon"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon"></span><div  class="yt-alert-content">          <strong>
      <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26nomobiletemp%3D1%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253DhAfcYuLbMa8&amp;hl=en_US&amp;ltmpl=sso">Sign in</a> or <a href="/signup?next=%2Fwatch%3Fv%3DhAfcYuLbMa8">sign up</a> now!
    
</strong>

</div></div>
  </div>
  <div id="watch-actions-error" class="watch-actions-panel hid">
    <div  class="yt-alert yt-alert-error yt-alert-naked "><span class="yt-alert-icon"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon"></span><div id="watch-error-string" class="yt-alert-content"></div></div>
  </div>


  <div id="watch-actions-share" class="watch-actions-panel hid"></div>

  <div id="watch-actions-ajax" class="watch-actions-panel hid"></div>

  <div class="close">
    <img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="close-button" onclick="yt.www.watch.actions.hide();">
  </div>

    </div>
  </div>
  <div id="watch-info">
    
  <div id="watch-description" class="watch-expander yt-uix-expander  yt-uix-expander-collapsed" data-expander-action="yt.www.watch.watch5.handleToggleDescription">
    <div id="watch-description-clip">
      <p id="watch-uploader-info">
        Uploaded by <a href="/user/TheTVShowsRU" class="yt-user-name author" rel="author"  dir="ltr">TheTVShowsRU</a> on <span id="eow-date" class="watch-video-date" >Feb 18, 2012</span>

      </p>
      <div id="watch-description-text">
        <p id="eow-description" >Mad Men - Season 5 Teaser</p>
      </div>
        <div id="watch-description-extras">
    <h4>
Category:
    </h4>
        <p id="eow-category"><a href="/film">Film &amp; Animation</a></p>



      <h4>
Tags:
      </h4>
        <ul id="eow-tags" class="watch-info-tag-list">
    <li><a href="/results?search_query=Mad&amp;search=tag">Mad</a></li>
    <li><a href="/results?search_query=Men&amp;search=tag">Men</a></li>
  </ul>


      <h4>License:</h4>
        <p id="eow-reuse">
Standard YouTube License
  </p>


  </div>

    </div>
    <div id="watch-description-fadeout"></div>

      <ul id="watch-description-extra-info">

      <li>
        <div class="watch-sparkbars">
          <div class="watch-sparkbar-likes" style="width: 95.1086956522%"></div>
          <div class="watch-sparkbar-dislikes" style="width: 4.89130434783%"></div>
        </div>
        <span class="watch-likes-dislikes">
<span class="likes">175</span> likes, <span class="dislikes">9</span> dislikes
        </span>
      </li>





















  </ul>


        <div class="horizontal-rule ">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

  <div id="watch-description-toggle" class="yt-uix-expander-head">
    <div id="watch-description-expand" class="expand">
      <button type="button" class="metadata-inline yt-uix-button yt-uix-button-text" onclick=";return false;"  role="button"><span class="yt-uix-button-content">Show more <img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Show more">
 </span></button>
    </div>
    <div id="watch-description-collapse" class="collapse">
      <button type="button" class="metadata-inline yt-uix-button yt-uix-button-text" onclick=";return false;"  role="button"><span class="yt-uix-button-content">Show less <img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Show less">
 </span></button>
    </div>
  </div>



  </div> 

  </div>

  <div id="watch-discussion">
      

          <div id="comments-view" data-type="highlights" class="">
        <div id="comment-share-area" class="comment-share-area yt-rounded hid">
    <div class="comment-share-content">
      <h4>Link to this comment:</h4>
      <div>
        <input type="text" class="comment-share-url yt-uix-form-input-text">
      </div>
      <div>
        <span>Share to:</span>
      </div>
    </div>
    <div class="close comment-action" data-action="close-share">
      <img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="close-button">
    </div>
  </div>


                <div class="comments-section">
    <h4>Top Comments</h4>
    <ul class="comment-list">
          


  <li class="comment yt-tile-default "
      data-tag="R"
    data-author-viewing=""
    data-id="5EsNg-2PVCIyUgerQAlKsn5UD3C8Y-00gVAwzJo_4W8"
    data-score="24"
      data-author="DERAJYDAC"
    >

    <div class="comment-body">
        <div class="content-container">
    <div class="content">

        <div class="comment-text" dir="ltr">
          <p>&#39;trust me, i work in advertising&#39; = best line ever﻿</p>

        </div>

      <p class="metadata">
        <span class="author ">
          <a href="/user/DERAJYDAC" class="yt-user-name "  dir="ltr">DERAJYDAC</a>
        </span>
        <span class="time">
          1 day ago
        </span>
          <span class="comments-rating-positive" title="25 up, 1 down">
            24
            <img class="comments-rating-thumbs-up" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
          </span>
      </p>
    </div>


      <div class="comment-actions">
<span class="yt-uix-button-group"><button type="button" class="start comment-action-vote-up comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Up" data-action="vote-up" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Up"></button><button type="button" class="end comment-action-vote-down comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Down" data-action="vote-down" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Down"></button></span><span class="yt-uix-button-group"><button type="button" class="start comment-action yt-uix-button yt-uix-button-default" onclick=";return false;" data-action="reply" role="button"><span class="yt-uix-button-content">Reply </span></button><button type="button" class="end flip yt-uix-button yt-uix-button-default yt-uix-button-empty" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant=""><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><div class="yt-uix-button-menu yt-uix-button-menu-default" style="display: none;"><ul><li class="comment-action" data-action="share"><span class="yt-uix-button-menu-item">Share</span></li><li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li><li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li><li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li><li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li></ul></div></button></span>  </div>

  </div>

    </div>
  </li>

    


  <li class="comment yt-tile-default  last"
      data-tag="R"
    data-author-viewing=""
    data-id="5EsNg-2PVCLKIRjJ7ULHqi16OVh2YJ1Zm75AnTC-92I"
    data-score="3"
      data-author="hieronymusboschful"
    >

    <div class="comment-body">
        <div class="content-container">
    <div class="content">

        <div class="comment-text" dir="ltr">
          <p>The problem is﻿ that this teaser has nothing new. It would be more exciting if it weren&#39;t a bunch of grabs from season 4.</p>
<p></p>

        </div>

      <p class="metadata">
        <span class="author ">
          <a href="/user/hieronymusboschful" class="yt-user-name "  dir="ltr">hieronymusboschful</a>
        </span>
        <span class="time">
          20 hours ago
        </span>
          <span class="comments-rating-positive" title="20 up, 17 down">
            3
            <img class="comments-rating-thumbs-up" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
          </span>
      </p>
    </div>


      <div class="comment-actions">
<span class="yt-uix-button-group"><button type="button" class="start comment-action-vote-up comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Up" data-action="vote-up" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Up"></button><button type="button" class="end comment-action-vote-down comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Down" data-action="vote-down" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Down"></button></span><span class="yt-uix-button-group"><button type="button" class="start comment-action yt-uix-button yt-uix-button-default" onclick=";return false;" data-action="reply" role="button"><span class="yt-uix-button-content">Reply </span></button><button type="button" class="end flip yt-uix-button yt-uix-button-default yt-uix-button-empty" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant=""><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><div class="yt-uix-button-menu yt-uix-button-menu-default" style="display: none;"><ul><li class="comment-action" data-action="share"><span class="yt-uix-button-menu-item">Share</span></li><li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li><li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li><li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li><li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li></ul></div></button></span>  </div>

  </div>

    </div>
  </li>


    </ul>
  </div>

        

  <div class="comments-section " >
    <div id="comments-header-container">
      <div id="comments-header">
          <a class="comments-section-see-all" href="/all_comments?v=hAfcYuLbMa8">
see all
          </a>
        <h4>
All Comments
          <span class="comments-section-stat">(22)</span>
        </h4>
      </div>
    </div>

          <div class="comments-post-container">
      <div class="comments-post-alert">
        <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26nomobiletemp%3D1%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253DhAfcYuLbMa8&amp;hl=en_US&amp;ltmpl=sso">Sign In</a> or <a href="/signup?next=%2Fwatch%3Fv%3DhAfcYuLbMa8">Sign Up</a><span class="comments-post-form-rollover-text"> now to post a comment!</span>

      </div>
  </div>



    <ul class="comment-list" >
          


  <li class="comment yt-tile-default "
    data-author-viewing=""
    data-id="5EsNg-2PVCKBnv9wQM7cNLZ1-Iq1caHYSAHfT_l9pPc"
    data-score="12"
      data-author="iNudeGirlsi"
    >

    <div class="comment-body">
        <div class="content-container">
    <div class="content">

        <div class="comment-text" dir="ltr">
          <p>Leaked Selena﻿ Gomez nude pic link on my channel!</p>

        </div>

      <p class="metadata">
        <span class="author ">
          <a href="/user/iNudeGirlsi" class="yt-user-name "  dir="ltr">iNudeGirlsi</a>
        </span>
        <span class="time">
          18 minutes ago
        </span>
          <span class="comments-rating-positive" title="12 up, 0 down">
            12
            <img class="comments-rating-thumbs-up" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
          </span>
      </p>
    </div>


      <div class="comment-actions">
<span class="yt-uix-button-group"><button type="button" class="start comment-action-vote-up comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Up" data-action="vote-up" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Up"></button><button type="button" class="end comment-action-vote-down comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Down" data-action="vote-down" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Down"></button></span><span class="yt-uix-button-group"><button type="button" class="start comment-action yt-uix-button yt-uix-button-default" onclick=";return false;" data-action="reply" role="button"><span class="yt-uix-button-content">Reply </span></button><button type="button" class="end flip yt-uix-button yt-uix-button-default yt-uix-button-empty" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant=""><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><div class="yt-uix-button-menu yt-uix-button-menu-default" style="display: none;"><ul><li class="comment-action" data-action="share"><span class="yt-uix-button-menu-item">Share</span></li><li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li><li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li><li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li><li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li></ul></div></button></span>  </div>

  </div>

    </div>
  </li>

    


  <li class="comment yt-tile-default "
    data-author-viewing=""
    data-id="5EsNg-2PVCJfJNvQ21KlGv4aF8G5_SBPHNSi3chMgAs"
    data-score="0"
      data-author="tpaladino"
    >

    <div class="comment-body">
        <div class="content-container">
    <div class="content">

        <div class="comment-text" dir="ltr">
          <p><a class="watch-comment-atlink" href="/comment_search?username=carolinagirl861">@CarolinaGirl861</a> The show ends with Don in present day as an old﻿ man. </p>

        </div>

      <p class="metadata">
        <span class="author ">
          <a href="/user/tpaladino" class="yt-user-name "  dir="ltr">tpaladino</a>
        </span>
        <span class="time">
          1 hour ago
        </span>
      </p>
    </div>


      <div class="comment-actions">
<span class="yt-uix-button-group"><button type="button" class="start comment-action-vote-up comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Up" data-action="vote-up" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Up"></button><button type="button" class="end comment-action-vote-down comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Down" data-action="vote-down" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Down"></button></span><span class="yt-uix-button-group"><button type="button" class="start comment-action yt-uix-button yt-uix-button-default" onclick=";return false;" data-action="reply" role="button"><span class="yt-uix-button-content">Reply </span></button><button type="button" class="end flip yt-uix-button yt-uix-button-default yt-uix-button-empty" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant=""><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><div class="yt-uix-button-menu yt-uix-button-menu-default" style="display: none;"><ul><li class="comment-action" data-action="share"><span class="yt-uix-button-menu-item">Share</span></li><li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li><li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li><li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li><li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li></ul></div></button></span>  </div>

  </div>

    </div>
  </li>

    


  <li class="comment yt-tile-default "
    data-author-viewing=""
    data-id="5EsNg-2PVCIeJbCi6yBonUvKJ7yGEXIQr16fH3V1XR4"
    data-score="0"
      data-author="alexeifacesav"
    >

    <div class="comment-body">
        <div class="content-container">
    <div class="content">

        <div class="comment-text" dir="ltr">
          <p><a class="watch-comment-atlink" href="/comment_search?username=whiteganser">@whiteganser</a> apples and oranges imo. It&#39;s like comparing Game of Thrones to Archer...god there are﻿ so many good shows on tv now</p>

        </div>

      <p class="metadata">
        <span class="author ">
          <a href="/user/alexeifacesav" class="yt-user-name "  dir="ltr">alexeifacesav</a>
        </span>
        <span class="time">
          2 hours ago
        </span>
      </p>
    </div>


      <div class="comment-actions">
<span class="yt-uix-button-group"><button type="button" class="start comment-action-vote-up comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Up" data-action="vote-up" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Up"></button><button type="button" class="end comment-action-vote-down comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Down" data-action="vote-down" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Down"></button></span><span class="yt-uix-button-group"><button type="button" class="start comment-action yt-uix-button yt-uix-button-default" onclick=";return false;" data-action="reply" role="button"><span class="yt-uix-button-content">Reply </span></button><button type="button" class="end flip yt-uix-button yt-uix-button-default yt-uix-button-empty" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant=""><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><div class="yt-uix-button-menu yt-uix-button-menu-default" style="display: none;"><ul><li class="comment-action" data-action="share"><span class="yt-uix-button-menu-item">Share</span></li><li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li><li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li><li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li><li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li></ul></div></button></span>  </div>

  </div>

    </div>
  </li>

    


  <li class="comment yt-tile-default "
    data-author-viewing=""
    data-id="5EsNg-2PVCKPydUDkI93Ecf_5CAmkyQ3qk7l53jlQ1o"
    data-score="0"
      data-author="alexeifacesav"
    >

    <div class="comment-body">
        <div class="content-container">
    <div class="content">

        <div class="comment-text" dir="ltr">
          <p>what&#39;s﻿ the song in the background?</p>

        </div>

      <p class="metadata">
        <span class="author ">
          <a href="/user/alexeifacesav" class="yt-user-name "  dir="ltr">alexeifacesav</a>
        </span>
        <span class="time">
          2 hours ago
        </span>
      </p>
    </div>


      <div class="comment-actions">
<span class="yt-uix-button-group"><button type="button" class="start comment-action-vote-up comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Up" data-action="vote-up" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Up"></button><button type="button" class="end comment-action-vote-down comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Down" data-action="vote-down" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Down"></button></span><span class="yt-uix-button-group"><button type="button" class="start comment-action yt-uix-button yt-uix-button-default" onclick=";return false;" data-action="reply" role="button"><span class="yt-uix-button-content">Reply </span></button><button type="button" class="end flip yt-uix-button yt-uix-button-default yt-uix-button-empty" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant=""><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><div class="yt-uix-button-menu yt-uix-button-menu-default" style="display: none;"><ul><li class="comment-action" data-action="share"><span class="yt-uix-button-menu-item">Share</span></li><li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li><li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li><li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li><li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li></ul></div></button></span>  </div>

  </div>

    </div>
  </li>

    


  <li class="comment yt-tile-default "
    data-author-viewing=""
    data-id="5EsNg-2PVCKDrwsN15RR0xQevM-JYHPllUioMta6LPQ"
    data-score="0"
      data-author="stefanjules88"
    >

    <div class="comment-body">
        <div class="content-container">
    <div class="content">

        <div class="comment-text" dir="ltr">
          <p><a class="watch-comment-atlink" href="/comment_search?username=carolinagirl861">@CarolinaGirl861</a> Betty finally snaps all﻿ the way and kills Don</p>

        </div>

      <p class="metadata">
        <span class="author ">
          <a href="/user/stefanjules88" class="yt-user-name "  dir="ltr">stefanjules88</a>
        </span>
        <span class="time">
          3 hours ago
        </span>
      </p>
    </div>


      <div class="comment-actions">
<span class="yt-uix-button-group"><button type="button" class="start comment-action-vote-up comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Up" data-action="vote-up" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Up"></button><button type="button" class="end comment-action-vote-down comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Down" data-action="vote-down" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Down"></button></span><span class="yt-uix-button-group"><button type="button" class="start comment-action yt-uix-button yt-uix-button-default" onclick=";return false;" data-action="reply" role="button"><span class="yt-uix-button-content">Reply </span></button><button type="button" class="end flip yt-uix-button yt-uix-button-default yt-uix-button-empty" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant=""><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><div class="yt-uix-button-menu yt-uix-button-menu-default" style="display: none;"><ul><li class="comment-action" data-action="share"><span class="yt-uix-button-menu-item">Share</span></li><li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li><li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li><li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li><li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li></ul></div></button></span>  </div>

  </div>

    </div>
  </li>

    


  <li class="comment yt-tile-default "
    data-author-viewing=""
    data-id="5EsNg-2PVCIOexllgU9WiOMxZKD_5u6R_3RxsEk2vqQ"
    data-score="0"
      data-author="CarolinaGirl861"
    >

    <div class="comment-body">
        <div class="content-container">
    <div class="content">

        <div class="comment-text" dir="ltr">
          <p>YAY!!!!!!!! SO EXCITED! It&#39;s been long﻿ enough! I&#39;m so curious as to how they&#39;re going to end the show though!</p>
<p></p>

        </div>

      <p class="metadata">
        <span class="author ">
          <a href="/user/CarolinaGirl861" class="yt-user-name "  dir="ltr">CarolinaGirl861</a>
        </span>
        <span class="time">
          5 hours ago
        </span>
      </p>
    </div>


      <div class="comment-actions">
<span class="yt-uix-button-group"><button type="button" class="start comment-action-vote-up comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Up" data-action="vote-up" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Up"></button><button type="button" class="end comment-action-vote-down comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Down" data-action="vote-down" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Down"></button></span><span class="yt-uix-button-group"><button type="button" class="start comment-action yt-uix-button yt-uix-button-default" onclick=";return false;" data-action="reply" role="button"><span class="yt-uix-button-content">Reply </span></button><button type="button" class="end flip yt-uix-button yt-uix-button-default yt-uix-button-empty" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant=""><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><div class="yt-uix-button-menu yt-uix-button-menu-default" style="display: none;"><ul><li class="comment-action" data-action="share"><span class="yt-uix-button-menu-item">Share</span></li><li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li><li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li><li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li><li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li></ul></div></button></span>  </div>

  </div>

    </div>
  </li>

    


  <li class="comment yt-tile-default  last"
    data-author-viewing=""
    data-id="5EsNg-2PVCIhRfzqcznY9cTPnB-GKUY-rV3UkWRgIGE"
    data-score="0"
      data-author="HooverTuber"
    >

    <div class="comment-body">
        <div class="content-container">
    <div class="content">

        <div class="comment-text" dir="ltr">
          <p>Besides,﻿ teasers and previews will be posted to AMC&#39;s channel first</p>

        </div>

      <p class="metadata">
        <span class="author ">
          <a href="/user/HooverTuber" class="yt-user-name "  dir="ltr">HooverTuber</a>
        </span>
        <span class="time">
          6 hours ago
        </span>
      </p>
    </div>


      <div class="comment-actions">
<span class="yt-uix-button-group"><button type="button" class="start comment-action-vote-up comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Up" data-action="vote-up" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-up" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Up"></button><button type="button" class="end comment-action-vote-down comment-action yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty" onclick=";return false;" title="Vote Down" data-action="vote-down" data-tooltip-show-delay="300" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-watch-comment-vote-down" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Vote Down"></button></span><span class="yt-uix-button-group"><button type="button" class="start comment-action yt-uix-button yt-uix-button-default" onclick=";return false;" data-action="reply" role="button"><span class="yt-uix-button-content">Reply </span></button><button type="button" class="end flip yt-uix-button yt-uix-button-default yt-uix-button-empty" onclick=";return false;" data-button-has-sibling-menu="true" role="button" aria-pressed="false" aria-expanded="false" aria-haspopup="true" aria-activedescendant=""><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><div class="yt-uix-button-menu yt-uix-button-menu-default" style="display: none;"><ul><li class="comment-action" data-action="share"><span class="yt-uix-button-menu-item">Share</span></li><li class="comment-action-remove comment-action" data-action="remove"><span class="yt-uix-button-menu-item">Remove</span></li><li class="comment-action" data-action="flag"><span class="yt-uix-button-menu-item">Flag for spam</span></li><li class="comment-action-block comment-action" data-action="block"><span class="yt-uix-button-menu-item">Block User</span></li><li class="comment-action-unblock comment-action" data-action="unblock"><span class="yt-uix-button-menu-item">Unblock User</span></li></ul></div></button></span>  </div>

  </div>

    </div>
  </li>


    </ul>
  </div>




            <div class="comments-section">
      <div class="comments-pagination" data-ajax-enabled="true">
          

    <div class="yt-uix-pager" role="navigation">

        


<a href="/all_comments?v=hAfcYuLbMa8&amp;page=1"class="yt-uix-button yt-uix-pager-page-num yt-uix-pager-button yt-uix-button-toggled yt-uix-button-default" data-page="1" aria-label="Go to page 1"><span class="yt-uix-button-content">1</span></a>&nbsp;
        


<a href="/all_comments?v=hAfcYuLbMa8&amp;page=2"class="yt-uix-button yt-uix-pager-page-num yt-uix-pager-button yt-uix-button-default" data-page="2" aria-label="Go to page 2"><span class="yt-uix-button-content">2</span></a>&nbsp;
        


<a href="/all_comments?v=hAfcYuLbMa8&amp;page=3"class="yt-uix-button yt-uix-pager-page-num yt-uix-pager-button yt-uix-button-default" data-page="3" aria-label="Go to page 3"><span class="yt-uix-button-content">3</span></a>&nbsp;

        


<a href="/all_comments?v=hAfcYuLbMa8&amp;page=2"class="yt-uix-button yt-uix-pager-next yt-uix-pager-button yt-uix-button-default" data-page="2"><span class="yt-uix-button-content">Next »</span></a>&nbsp;
    </div>

      </div>
  </div>



    <div id="comments-loading" class="hid">Loading...</div>
  </div>



  </div>

      </div>
      <div id="watch-sidebar">
        



<div class="watch-sidebar-section "><div id="watch-related-container" class="watch-sidebar-body"><ul id="watch-related" class="video-list"><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=vgFAq9Q8l8U&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="&quot;I Will Always Love You&quot; (Live) - Chris Cornell - San Francisco, Masonic - February 16, 2012" data-thumb="//i3.ytimg.com/vi/vgFAq9Q8l8U/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">5:09</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="vgFAq9Q8l8U" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="&quot;I Will Always Love You&quot; (Live) - Chris Cornell - San Francisco, Masonic - February 16, 2012">&quot;I Will Always Love You&quot; (Live) - Chris Cornell - San Francisco, Masonic - February 16, 2012</span><span class="stat">by <span class="yt-user-name " dir="ltr">concertkid2</span></span><span class="stat">305 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=1-fIFeMVMso&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Mad Men - Season 5 Promo" data-thumb="//i2.ytimg.com/vi/1-fIFeMVMso/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">0:31</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="1-fIFeMVMso" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="Mad Men - Season 5 Promo">Mad Men - Season 5 Promo</span><span class="stat">by <span class="yt-user-name " dir="ltr">televisionpromos</span></span><span class="stat">2,393 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=CxCl_vUOHoA&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Mark of the Spider-Man" data-thumb="//i4.ytimg.com/vi/CxCl_vUOHoA/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">0:46</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="CxCl_vUOHoA" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="Mark of the Spider-Man">Mark of the Spider-Man</span><span class="stat">by <span class="yt-user-name " dir="ltr">MarkoftheSpiderMan</span></span><span class="stat alt"><span class="yt-badge-std">Watched</span></span><span class="stat">161,987 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=oHsrT8Om_Rk&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Puggles teach baby to chew." data-thumb="//i4.ytimg.com/vi/oHsrT8Om_Rk/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">0:36</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="oHsrT8Om_Rk" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="Puggles teach baby to chew.">Puggles teach baby to chew.</span><span class="stat">by <span class="yt-user-name " dir="ltr">pugglepit</span></span><span class="stat">15,574 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=jaQY7PrbyDQ&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Chirigota - Los Puretas Del Caribe \ Actuación Completa SEMIFINALES \ Carnaval 2012" data-thumb="//i3.ytimg.com/vi/jaQY7PrbyDQ/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">24:24</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="jaQY7PrbyDQ" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="Chirigota - Los Puretas Del Caribe \ Actuación Completa SEMIFINALES \ Carnaval 2012">Chirigota - Los Puretas Del Caribe \ Actuación Completa SEMIFINALES \ Carnaval 2012</span><span class="stat">by <span class="yt-user-name " dir="ltr">71Javier</span></span><span class="stat">205,636 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=sYAKDdZ5lz4&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="TELUS LG Optimus LTE Contest - MobileSyrup" data-thumb="//i4.ytimg.com/vi/sYAKDdZ5lz4/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">0:28</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="sYAKDdZ5lz4" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="TELUS LG Optimus LTE Contest - MobileSyrup">TELUS LG Optimus LTE Contest - MobileSyrup</span><span class="stat">by <span class="yt-user-name " dir="ltr">MobileSyrup</span></span><span class="stat">2,643 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=ceF6zSJhhm4&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Càrrega policial d&#39;alumnes de l&#39;IES Lluís Vives de València" data-thumb="//i4.ytimg.com/vi/ceF6zSJhhm4/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">0:46</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="ceF6zSJhhm4" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="Càrrega policial d&#39;alumnes de l&#39;IES Lluís Vives de València">Càrrega policial d&#39;alumnes de l&#39;IES Lluís Vives de València</span><span class="stat">by <span class="yt-user-name " dir="ltr">moreratv</span></span><span class="stat">217,749 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=KurK_1gcuQE&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Missing - New Action Promo" data-thumb="//i4.ytimg.com/vi/KurK_1gcuQE/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">0:51</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="KurK_1gcuQE" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="Missing - New Action Promo">Missing - New Action Promo</span><span class="stat">by <span class="yt-user-name " dir="ltr">TheTVShowsRU</span></span><span class="stat">247 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=9tOsgdrp2fg&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Hervé Renard : &quot;Tu as peur !!??  Tu as peur !!??&quot; Finale CAN 2012" data-thumb="//i2.ytimg.com/vi/9tOsgdrp2fg/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">0:24</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="9tOsgdrp2fg" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="Hervé Renard : &quot;Tu as peur !!??  Tu as peur !!??&quot; Finale CAN 2012">Hervé Renard : &quot;Tu as peur !!??  Tu as peur !!??&quot; Finale CAN 2012</span><span class="stat">by <span class="yt-user-name " dir="ltr">ChuckyRMC</span></span><span class="stat">313,894 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=Sh_dWnjxclw&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Kiernan Shipka Discusses Season 5 of Mad Men" data-thumb="//i4.ytimg.com/vi/Sh_dWnjxclw/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">1:06</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="Sh_dWnjxclw" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="Kiernan Shipka Discusses Season 5 of Mad Men">Kiernan Shipka Discusses Season 5 of Mad Men</span><span class="stat">by <span class="yt-user-name " dir="ltr">HollyscoopTV</span></span><span class="stat">7,216 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=RCasZ2EB4Oc&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="NYC 22 - Behind the Scenes Featurette" data-thumb="//i3.ytimg.com/vi/RCasZ2EB4Oc/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">2:56</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="RCasZ2EB4Oc" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="NYC 22 - Behind the Scenes Featurette">NYC 22 - Behind the Scenes Featurette</span><span class="stat">by <span class="yt-user-name " dir="ltr">TheTVShowsRU</span></span><span class="stat">750 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=gb3I4R58oZ0&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="The Walking Dead Season 2 - Dead Man Walking" data-thumb="//i4.ytimg.com/vi/gb3I4R58oZ0/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">2:44</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="gb3I4R58oZ0" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="The Walking Dead Season 2 - Dead Man Walking">The Walking Dead Season 2 - Dead Man Walking</span><span class="stat">by <span class="yt-user-name " dir="ltr">toptvsa</span></span><span class="stat">112,330 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=4Am7oKBD3PU&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Henry &amp; Aaron - IT&#39;S A SNAP!" data-thumb="//i1.ytimg.com/vi/4Am7oKBD3PU/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">1:58</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="4Am7oKBD3PU" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="Henry &amp; Aaron - IT&#39;S A SNAP!">Henry &amp; Aaron - IT&#39;S A SNAP!</span><span class="stat">by <span class="yt-user-name " dir="ltr">Centralinstitute</span></span><span class="stat">859,394 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=5T1gYUvXlzs&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="The best of Mad Men" data-thumb="//i2.ytimg.com/vi/5T1gYUvXlzs/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">14:59</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="5T1gYUvXlzs" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="The best of Mad Men">The best of Mad Men</span><span class="stat">by <span class="yt-user-name " dir="ltr">reeljanet</span></span><span class="stat">2,605 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=xrMoDvnc4dE&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="GCB - Welcome to Dallas - Promo" data-thumb="//i1.ytimg.com/vi/xrMoDvnc4dE/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">0:36</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="xrMoDvnc4dE" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="GCB - Welcome to Dallas - Promo">GCB - Welcome to Dallas - Promo</span><span class="stat">by <span class="yt-user-name " dir="ltr">TheTVShowsRU</span></span><span class="stat">211 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=rVK-7xBsFfY&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Mad Men - Season 5 - Teaser Video HD" data-thumb="//i3.ytimg.com/vi/rVK-7xBsFfY/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">0:31</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="rVK-7xBsFfY" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="Mad Men - Season 5 - Teaser Video HD">Mad Men - Season 5 - Teaser Video HD</span><span class="stat">by <span class="yt-user-name " dir="ltr">MrAllYouNeedToKnow</span></span><span class="stat">63,631 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=MvIB0uLG15Y&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Telepathy exists! (телепатия существует!)" data-thumb="//i2.ytimg.com/vi/MvIB0uLG15Y/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">0:15</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="MvIB0uLG15Y" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="Telepathy exists! (телепатия существует!)">Telepathy exists! (телепатия существует!)</span><span class="stat">by <span class="yt-user-name " dir="ltr">ignoramusky</span></span><span class="stat">28,235 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=WYVPrP4AXQo&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Mad Men Season 5 Teaser Trailer - Sky Atlantic" data-thumb="//i4.ytimg.com/vi/WYVPrP4AXQo/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">0:32</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="WYVPrP4AXQo" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="Mad Men Season 5 Teaser Trailer - Sky Atlantic">Mad Men Season 5 Teaser Trailer - Sky Atlantic</span><span class="stat">by <span class="yt-user-name " dir="ltr">skyatlantic</span></span><span class="stat">22,833 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=-x-XyhLpxGI&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Pola Dior [Film]" data-thumb="//i2.ytimg.com/vi/-x-XyhLpxGI/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">1:17</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="-x-XyhLpxGI" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="Pola Dior [Film]">Pola Dior [Film]</span><span class="stat">by <span class="yt-user-name " dir="ltr">Dior</span></span><span class="stat">165,260 views</span></a></li><li class="video-list-item video-list-item-related"><a class="related-video" href="/watch?v=LbFFEF1pHO0&amp;feature=related"  ><span class="ux-thumb-wrap contains-addto "><span class="video-thumb ux-thumb ux-thumb-110 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Mad Men Interview" data-thumb="//i1.ytimg.com/vi/LbFFEF1pHO0/default.jpg" ><span class="vertical-align"></span></span></span></span><span class="video-time">14:34</span>
<button type="button" class="addto-button default video-actions yt-uix-button yt-uix-button-default yt-uix-button-short" onclick=";return false;" data-button-menu-action="yt.www.lists.addto.toggleMenu" data-button-menu-id="shared-addto-menu" data-video-ids="LbFFEF1pHO0" data-feature="thumbnail" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-addto" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""><span class="yt-uix-button-content"><span class="addto-label">Add to</span> </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span dir="ltr" class="title" title="Mad Men Interview">Mad Men Interview</span><span class="stat">by <span class="yt-user-name " dir="ltr">worldscreenings</span></span><span class="stat">28,237 views</span></a></li></ul><ul id="watch-more-related" class="video-list hid"><li id="watch-more-related-loading">Loading more suggestions...</li></ul><p class="content"></p></div>     <div class="watch-sidebar-foot"><p class="content"><button type="button" id="watch-more-related-button" onclick=";return false;" class=" yt-uix-button yt-uix-button-default" data-button-action="yt.www.watch.watch5.handleLoadMoreRelated" role="button"><span class="yt-uix-button-content">Load more suggestions </span></button></p></div></div> 
          <span class="vertical-rule-main"></span>
  <span class="vertical-rule-corner-top"></span>
  <span class="vertical-rule-corner-bottom"></span>

      </div>
      <div class="clear"></div>
    </div>
    <div style="visibility: hidden; height: 0px; padding: 0px; overflow: hidden;">
      


  <div id="baseDiv"></div>

    </div>
  </div>
  <!-- end watch-main-container -->
</div>

    </div>
    <!-- end content -->
  </div>
  <div id="footer-container">
    <!-- begin footer -->
      <div id="footer">
      <div class="horizontal-rule ">
    <span class="first"></span>
    <span class="second"></span>
    <span class="third"></span>
  </div>

    <div id="footer-logo">
      <a href="/" title="YouTube home">
        <img id="logo" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="YouTube home">
      </a>
      
      <span id="footer-divider"></span>
    </div>
    <div id="footer-main">
        
  <div id="in-product-help" class="yt-uix-clickcard">
    <button type="button" id="help-button" onclick=";return false;" class="yt-uix-clickcard-target yt-uix-button-reverse yt-uix-button yt-uix-button-default" data-iph-anchor-text="More Help" data-orientation="vertical" data-iph-search-button-text="Search" data-iph-tracking="iph-questionmark" data-iph-title-text="Need Help on this page?" data-iph-topic-id="1699712" data-iph-css-url="//s.ytimg.com/yt/cssbin/www-helpie-vfljFuS-h.css" data-iph-js-url="//s.ytimg.com/yt/jsbin/www-help-vfl9mF912.js" role="button"><span class="yt-uix-button-content">  <img class="questionmark" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
  <span>Help</span>
  <img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
 </span></button>
    <div class="yt-uix-clickcard-content" id="help-target">  <p class="loading-spinner">
    <img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="">
Loading...
  </p>
</div>
  </div>

      <ul id="footer-links-primary">
          <li><a href="/t/about_youtube">About</a></li>
          <li><a href="/t/press">Press &amp; Blogs</a></li>
          <li><a href="/t/copyright_center">Copyright</a></li>
          <li><a href="/creators">Creators &amp; Partners</a></li>
          <li><a href="/t/advertising_overview">Advertising</a></li>
          <li><a href="/dev">Developers</a></li>
      </ul>


      <ul id="footer-links-secondary">
          <li><a href="/t/terms">Terms</a></li>
          <li><a href="/t/privacy_at_youtube"><span class="new-label">New</span> Privacy</a></li>
          <li><a href="//support.google.com/youtube/bin/request.py?contact_type=abuse&amp;hl=en-US">Safety</a></li>
          <li><a href="//www.google.com/tools/feedback/intl/en/error.html" onclick="return yt.www.feedback.start(yt.getConfig('FEEDBACK_LOCALE_LANGUAGE'), yt.getConfig('FEEDBACK_LOCALE_EXTRAS'));" id="reportbug">Report a bug</a></li>
        <li><a href="/testtube">Try something new!</a></li>
      </ul>
        <ul class="pickers yt-uix-button-group" data-button-toggle-group="true">
      <li>  <button type="button" class=" yt-uix-button yt-uix-button-text" onclick="yt.www.masthead.loadPicker(&#39;language-picker&#39;, &quot;&quot;); return false;;return false;" data-button-toggle="true" data-button-menu-id="arrow" role="button"><span class="yt-uix-button-content">English </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</li>
      <li>  <button type="button" class=" yt-uix-button yt-uix-button-text" onclick="yt.www.masthead.loadPicker(&#39;region-picker&#39;, &quot;&quot;); return false;;return false;" data-button-toggle="true" data-button-menu-id="arrow" role="button"><span class="yt-uix-button-content">Worldwide </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</li>
      <li>  <button type="button" class=" yt-uix-button yt-uix-button-text" onclick="yt.www.masthead.loadPicker(&#39;safetymode-picker&#39;, &quot;&quot;);return false;" data-button-toggle="true" data-button-menu-id="arrow" role="button"><span class="yt-uix-button-content">Safety:
  <span class="yt-footer-safety-value">
Off
  </span>
 </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button>
</li>
  </ul>
    <div id="picker-container"></div>
  <div id="picker-loading" style="display: none">Loading...</div>


    </div>
  </div>

    <!-- end footer -->
  </div>
    



  <div id="playlist-bar" class="hid passive editable" data-video-url="/watch?v=&amp;feature=BFql&amp;playnext=1&amp;list=QL" data-list-id="" data-list-type="QL">
    <div id="playlist-bar-bar-container">
      <div id="playlist-bar-bar">
        <div  id="playlist-bar-notifications" style="display: none;" class="yt-alert yt-alert-success yt-alert-naked "><span class="yt-alert-icon"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon"></span><div  class="yt-alert-content"></div></div>
<span id="playlist-bar-info"><span class="playlist-bar-active playlist-bar-group"><button onclick=";return false;" title="Previous video" type="button" id="playlist-bar-prev-button" class="yt-uix-tooltip yt-uix-tooltip-masked  yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty"  role="button"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-prev" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Previous video"></button><span class="playlist-bar-count"><span class="playing-index">0</span> / <span class="item-count">0</span></span><button type="button" class="yt-uix-tooltip yt-uix-tooltip-masked  yt-uix-button yt-uix-button-default yt-uix-button-empty" onclick=";return false;" id="playlist-bar-next-button"  role="button"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-next" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span class="playlist-bar-active playlist-bar-group"><button type="button" class="yt-uix-tooltip yt-uix-tooltip-masked  yt-uix-button yt-uix-button-default yt-uix-button-empty" onclick=";return false;" id="playlist-bar-autoplay-button" data-button-toggle="true" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-autoplay" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button><button type="button" class="yt-uix-tooltip yt-uix-tooltip-masked  yt-uix-button yt-uix-button-default yt-uix-button-empty" onclick=";return false;" id="playlist-bar-shuffle-button" data-button-toggle="true" role="button"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-shuffle" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span class="playlist-bar-passive playlist-bar-group"><button onclick=";return false;" title="Play videos" type="button" id="playlist-bar-play-button" class="yt-uix-tooltip yt-uix-tooltip-masked  yt-uix-button yt-uix-button-default yt-uix-tooltip yt-uix-button-empty"  role="button"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-play" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Play videos"></button><span class="playlist-bar-count"><span class="item-count">0</span></span></span><span id="playlist-bar-title" class="yt-uix-button-group"><span class="playlist-title">Unsaved Playlist</span></span></span>
        <a id="playlist-bar-lists-back" href="#">
Return to active list
        </a>

<span id="playlist-bar-controls"><span class="playlist-bar-group"><button type="button" class="yt-uix-tooltip yt-uix-tooltip-masked  yt-uix-button yt-uix-button-text yt-uix-button-empty" onclick=";return false;" id="playlist-bar-toggle-button"  role="button"><img class="yt-uix-button-icon yt-uix-button-icon-playlist-bar-toggle" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span><span class="playlist-bar-group"><button type="button" class="yt-uix-tooltip yt-uix-tooltip-masked yt-uix-button-reverse flip yt-uix-button yt-uix-button-text" onclick=";return false;" data-button-menu-id="playlist-bar-options-menu" data-button-has-sibling-menu="true" role="button"><span class="yt-uix-button-content">Options </span><img class="yt-uix-button-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt=""></button></span></span>      </div>
    </div>

<div id="playlist-bar-tray-container"><div id="playlist-bar-tray" class="yt-uix-slider yt-uix-slider-fluid"><button class="yt-uix-button playlist-bar-tray-button yt-uix-button-default yt-uix-slider-prev" onclick="return false;"><img class="yt-uix-slider-prev-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Previous video"></button><button class="yt-uix-button playlist-bar-tray-button yt-uix-button-default yt-uix-slider-next" onclick="return false;"><img class="yt-uix-slider-next-arrow" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Next video"></button><div class="yt-uix-slider-body"><div id="playlist-bar-tray-content" class="yt-uix-slider-slide"><ol class="video-list"></ol><ol id="playlist-bar-help"><li class="empty playlist-bar-help-message">Your queue is empty. Add videos to your queue using this button: <img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="addto-button-help"><br> or <a href="https://accounts.google.com/ServiceLogin?uilel=3&amp;service=youtube&amp;passive=true&amp;continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26nomobiletemp%3D1%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253DhAfcYuLbMa8&amp;hl=en_US&amp;ltmpl=sso">sign in</a> to load a different list.</li></ol></div><div class="yt-uix-slider-shade-left"></div><div class="yt-uix-slider-shade-right"></div></div></div><div id="playlist-bar-save"></div><div id="playlist-bar-lists" class="dark-lolz"></div><div id="playlist-bar-loading"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Loading..."><span id="playlist-bar-loading-message">Loading...</span><span id="playlist-bar-saving-message" class="hid">Saving...</span></div><div id="playlist-bar-template" style="display: none;" data-video-thumb-url="//i4.ytimg.com/vi/__video_encrypted_id__/default.jpg"><!--<li class="playlist-bar-item yt-uix-slider-slide-unit __classes__" data-video-id="__video_encrypted_id__"><a href="__video_url__" title="__video_title__"><span class="video-thumb ux-thumb ux-thumb-96 "><span class="clip"><span class="clip-inner"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="__video_title__" data-thumb-manual="true" data-thumb="__video_thumb_url__" ><span class="vertical-align"></span></span></span></span><span class="screen"></span><span class="count"><strong>__list_position__</strong></span><span class="play"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif"></span><span class="yt-uix-button yt-uix-button-default delete"><img class="yt-uix-button-icon-playlist-bar-delete" src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" alt="Delete"></span><span class="now-playing">Now playing</span><span dir="ltr" class="title"><span>__video_title__  <span class="uploader">by __video_display_name__</span>
</span></span><span class="dragger"></span></a></li>--></div><div id="playlist-bar-next-up-template" style="display: none;"><!--<div class="playlist-bar-next-thumb"><span class="video-thumb ux-thumb ux-thumb-64 "><span class="clip"><span class="clip-inner"><img src="//i4.ytimg.com/vi/__video_encrypted_id__/default.jpg" alt="Thumbnail
" ><span class="vertical-align"></span></span></span></span></div>--></div></div>      <div id="playlist-bar-options-menu" class="hid">

    <div id="playlist-bar-extras-menu">
        <ul>
      <li><span class="yt-uix-button-menu-item" data-action="clear">
Clear all videos from this list
      </span></li>
  </ul>

    </div>

    <ul>
      <li><span class="yt-uix-button-menu-item" onclick="window.location.href=&#39;http://www.google.com/support/youtube/bin/answer.py?answer=146749&#39;">Learn more</span></li>
    </ul>
  </div>

  </div>


  

  <div id="shared-addto-menu" style="display: none;" class="hid sign-in">
      <div class="addto-menu">
        <div id="addto-list-panel" class="menu-panel active-panel">
        <span class="yt-uix-button-menu-item yt-uix-tooltip sign-in" data-possible-tooltip="" data-tooltip-show-delay="750"><a class="sign-in-link">Sign in</a> to add this to a playlist
</span>

  </div>
  <div id="addto-list-saved-panel" class="menu-panel">
    <div class="panel-content">
      <div  class="yt-alert yt-alert-success yt-alert-naked "><span class="yt-alert-icon"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon"></span><div  class="yt-alert-content">        
  <span class="message">Added to <span class="addto-title yt-uix-tooltip yt-uix-tooltip-reverse" title="More information about this playlist" data-tooltip-show-delay="750"></span></span>

</div></div>
    </div>
  </div>
  <div id="addto-list-error-panel" class="menu-panel">
    <div class="panel-content">
      <img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
      <span class="error-details"></span>
      <a class="show-menu-link">Back to list</a>
    </div>
  </div>

        <div id="addto-note-input-panel" class="menu-panel">
    <div class="panel-content">
      <div  class="yt-alert yt-alert-success yt-alert-naked "><span class="yt-alert-icon"><img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="icon master-sprite" alt="Alert icon"></span><div  class="yt-alert-content">          <span class="message">Added to playlist:</span>
  <span class="addto-title yt-uix-tooltip" title="More information about this playlist" data-tooltip-show-delay="750"></span>

</div></div>
    </div>
<div class="yt-uix-char-counter" data-char-limit="150"><div class="addto-note-box addto-text-box"><textarea id="addto-note" class="addto-note yt-uix-char-counter-input" maxlength="150"></textarea><label for="addto-note" class="addto-note-label">Add an optional note</label></div><span class="yt-uix-char-counter-remaining">150</span></div>    <button disabled="disabled" type="button" class="playlist-save-note yt-uix-button yt-uix-button-default" onclick=";return false;"  role="button"><span class="yt-uix-button-content">Add note </span></button>
  </div>
  <div id="addto-note-saving-panel" class="menu-panel">
    <div class="panel-content loading-content">
      <img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
      <span>Saving note...</span>
    </div>
  </div>
  <div id="addto-note-saved-panel" class="menu-panel">
    <div class="panel-content">
      <img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
      <span class="message">Note added to:</span>
    </div>
  </div>
  <div id="addto-note-error-panel" class="menu-panel">
    <div class="panel-content">
      <img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif">
      <span class="message">Error adding note:</span>
      <ul class="error-details"></ul>
      <a class="add-note-link">Click to add a new note</a>
    </div>
  </div>
  <div class="close-note hid">
    <img src="//s.ytimg.com/yt/img/pixel-vfl3z5WfW.gif" class="close-button">
  </div>

  </div>

  </div>




  </div>
  <!-- end page -->
    
    
    <script id="www-core-js" src="//s.ytimg.com/yt/jsbin/www-core-vflF3s3p7.js"></script>



  <script>
        yt.setConfig({
      'XSRF_TOKEN': 'NhThRY_ZcypGULx8IHZSeojNR7V8MTMyOTc5NjgyOUAxMzI5NzEwNDI5',
      'XSRF_FIELD_NAME': 'session_token'
    });
    yt.pubsub.subscribe('init', yt.www.xsrf.populateSessionToken);

    yt.setConfig('XSRF_REDIRECT_TOKEN', '46n9g-N64BIhGXo6W8wg5-_0r0t8MTMyOTc5NjgyOUAxMzI5NzEwNDI5');

    yt.setConfig('LOGGED_IN', false);
    yt.setConfig('SESSION_INDEX', null);

    yt.setConfig('FEEDBACK_LOCALE_LANGUAGE', "en");
    yt.setConfig('FEEDBACK_LOCALE_EXTRAS', {"experiments": "917000,904820,919001,916201,907519", "accept_language": null});
  </script>

      <script>
    yt.net.ajax.setToken('subscription_ajax', "");
    yt.pubsub.subscribe('init', yt.www.subscriptions.SubscriptionButton.init);
  </script>


  <script>
    yt.setConfig({
      'VIDEO_ID': "hAfcYuLbMa8",
      'VIDEO_USERNAME': "TheTVShowsRU"    });
    yt.net.ajax.setToken('watch_actions_ajax', "");

    yt.net.ajax.setToken('video_acls_ajax', "");

    if (window['gYouTubePlayerReady']) {
      yt.registerGlobal('gYouTubePlayerReady');
    }
  </script>

  <script>
    yt = yt || {};
    yt.playerConfig = {"assets": {"html": "\/html5_player_template", "css": "http:\/\/s.ytimg.com\/yt\/cssbin\/www-player-vfl4XWvmT.css", "js": "http:\/\/s.ytimg.com\/yt\/jsbin\/html5player-vflw_qeX0.js"}, "url": "http:\/\/s.ytimg.com\/yt\/swfbin\/watch_as3-vflTsQfnT.swf", "min_version": "8.0.0", "args": {"tabsb": "1", "fexp": "917000,904820,919001,916201,907519", "url_encoded_fmt_stream_map": "url=http%3A%2F%2Fo-o.preferred.nuq04s10.v16.lscache1.c.youtube.com%2Fvideoplayback%3Fsparams%3Did%252Cexpire%252Cip%252Cipbits%252Citag%252Csource%252Cratebypass%252Ccp%26fexp%3D917000%252C904820%252C919001%252C916201%252C907519%26itag%3D43%26ip%3D207.0.0.0%26signature%3D1463A7FE6A4FDC6F5A158FEAB7FFE1EC7C2EA074.68500082F9E2D801B79121B9F5185FD66DFADDB9%26sver%3D3%26ratebypass%3Dyes%26source%3Dyoutube%26expire%3D1329734463%26key%3Dyt1%26ipbits%3D8%26cp%3DU0hRTldOUl9LTUNOMV9PSFZFOkthZk43OFZ5MzY5%26id%3D8407dc62e2db31af\u0026quality=medium\u0026fallback_host=tc.v16.cache1.c.youtube.com\u0026type=video%2Fwebm%3B+codecs%3D%22vp8.0%2C+vorbis%22\u0026itag=43,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v17.lscache6.c.youtube.com%2Fvideoplayback%3Fsparams%3Did%252Cexpire%252Cip%252Cipbits%252Citag%252Csource%252Calgorithm%252Cburst%252Cfactor%252Ccp%26fexp%3D917000%252C904820%252C919001%252C916201%252C907519%26algorithm%3Dthrottle-factor%26itag%3D34%26ip%3D207.0.0.0%26burst%3D40%26sver%3D3%26signature%3D975B7016E8161987EC569ECC364E0A53ABF6E43A.5741BBC345313C388CC6B67813D5F801812AC04C%26source%3Dyoutube%26expire%3D1329734463%26key%3Dyt1%26ipbits%3D8%26factor%3D1.25%26cp%3DU0hRTldOUl9LTUNOMV9PSFZFOkthZk43OFZ5MzY5%26id%3D8407dc62e2db31af\u0026quality=medium\u0026fallback_host=tc.v17.cache6.c.youtube.com\u0026type=video%2Fx-flv\u0026itag=34,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v20.lscache6.c.youtube.com%2Fvideoplayback%3Fsparams%3Did%252Cexpire%252Cip%252Cipbits%252Citag%252Csource%252Cratebypass%252Ccp%26fexp%3D917000%252C904820%252C919001%252C916201%252C907519%26itag%3D18%26ip%3D207.0.0.0%26signature%3DD911A271B5FB3B75E268C8A288DB5BCCE9D16C40.1BE4FBFFD0A7390B55084A14A5974C73132EBDA5%26sver%3D3%26ratebypass%3Dyes%26source%3Dyoutube%26expire%3D1329734463%26key%3Dyt1%26ipbits%3D8%26cp%3DU0hRTldOUl9LTUNOMV9PSFZFOkthZk43OFZ5MzY5%26id%3D8407dc62e2db31af\u0026quality=medium\u0026fallback_host=tc.v20.cache6.c.youtube.com\u0026type=video%2Fmp4%3B+codecs%3D%22avc1.42001E%2C+mp4a.40.2%22\u0026itag=18,url=http%3A%2F%2Fo-o.preferred.nuq04s10.v13.lscache4.c.youtube.com%2Fvideoplayback%3Fsparams%3Did%252Cexpire%252Cip%252Cipbits%252Citag%252Csource%252Calgorithm%252Cburst%252Cfactor%252Ccp%26fexp%3D917000%252C904820%252C919001%252C916201%252C907519%26algorithm%3Dthrottle-factor%26itag%3D5%26ip%3D207.0.0.0%26burst%3D40%26sver%3D3%26signature%3D6AA4D4B16C80A3F576B4C10D1870AA1D4EC3E885.1631792755C53ECEC969C6A7A4D7E67ACFF9FECC%26source%3Dyoutube%26expire%3D1329734463%26key%3Dyt1%26ipbits%3D8%26factor%3D1.25%26cp%3DU0hRTldOUl9LTUNOMV9PSFZFOkthZk43OFZ5MzY5%26id%3D8407dc62e2db31af\u0026quality=small\u0026fallback_host=tc.v13.cache4.c.youtube.com\u0026type=video%2Fx-flv\u0026itag=5", "enablecsi": "1", "watermark": ",http:\/\/s.ytimg.com\/yt\/img\/watermark\/youtube_watermark-vflHX6b6E.png,http:\/\/s.ytimg.com\/yt\/img\/watermark\/youtube_hd_watermark-vflAzLcD6.png", "sourceid": "y", "timestamp": 1329710429, "plid": "AAS5XVXTwvc3zfam", "allow_embed": 1, "rvs": "view_count=305\u0026author=concertkid2\u0026length_seconds=309\u0026id=vgFAq9Q8l8U\u0026title=%22I+Will+Always+Love+You%22+%28Live%29+-+Chris+Cornell+-+San+Francisco%2C+Masonic+-+February+16%2C+2012,view_count=2%2C393\u0026author=televisionpromos\u0026length_seconds=31\u0026id=1-fIFeMVMso\u0026title=Mad+Men+-+Season+5+Promo,view_count=161%2C987\u0026author=MarkoftheSpiderMan\u0026length_seconds=46\u0026id=CxCl_vUOHoA\u0026title=Mark+of+the+Spider-Man,view_count=15%2C574\u0026author=pugglepit\u0026length_seconds=36\u0026id=oHsrT8Om_Rk\u0026title=Puggles+teach+baby+to+chew.,view_count=205%2C636\u0026author=71Javier\u0026length_seconds=1464\u0026id=jaQY7PrbyDQ\u0026title=Chirigota+-+Los+Puretas+Del+Caribe+%5C+Actuaci%C3%B3n+Completa+SEMIFINALES+%5C+Carnaval+2012,view_count=2%2C643\u0026author=MobileSyrup\u0026length_seconds=28\u0026id=sYAKDdZ5lz4\u0026title=TELUS+LG+Optimus+LTE+Contest+-+MobileSyrup,view_count=217%2C749\u0026author=moreratv\u0026length_seconds=46\u0026id=ceF6zSJhhm4\u0026title=C%C3%A0rrega+policial+d%27alumnes+de+l%27IES+Llu%C3%ADs+Vives+de+Val%C3%A8ncia,view_count=247\u0026author=TheTVShowsRU\u0026length_seconds=51\u0026id=KurK_1gcuQE\u0026title=Missing+-+New+Action+Promo,view_count=313%2C894\u0026author=ChuckyRMC\u0026length_seconds=24\u0026id=9tOsgdrp2fg\u0026title=Herv%C3%A9+Renard+%3A+%22Tu+as+peur+%21%21%3F%3F++Tu+as+peur+%21%21%3F%3F%22+Finale+CAN+2012,view_count=7%2C216\u0026author=HollyscoopTV\u0026length_seconds=66\u0026id=Sh_dWnjxclw\u0026title=Kiernan+Shipka+Discusses+Season+5+of+Mad+Men,view_count=750\u0026author=TheTVShowsRU\u0026length_seconds=176\u0026id=RCasZ2EB4Oc\u0026title=NYC+22+-+Behind+the+Scenes+Featurette,view_count=112%2C330\u0026author=toptvsa\u0026length_seconds=164\u0026id=gb3I4R58oZ0\u0026title=The+Walking+Dead+Season+2+-+Dead+Man+Walking", "vq": "auto", "showpopout": 1, "account_playback_token": "", "autohide": "2", "hl": "en_US", "csi_page_type": "watch5", "keywords": "Mad,Men", "cr": "US", "no_get_video_log": "1", "endscreen_module": "http:\/\/s.ytimg.com\/yt\/swfbin\/endscreen-vflAUwBII.swf", "fmt_list": "43\/640x360\/99\/0\/0,34\/640x360\/9\/0\/115,18\/640x360\/9\/0\/115,5\/320x240\/7\/0\/0", "iid": 1, "referrer": "http:\/\/www.youtube.com\/embed\/hAfcYuLbMa8", "video_id": "hAfcYuLbMa8", "length_seconds": 31, "sendtmp": "1", "enablejsapi": 1, "sk": "eNw4jUUYweXjN5S-8tHde3hKiocsE3d3C", "theme": "tlb", "t": "vjVQa1PpcFOxr_hN7Y8PUaaWXxrx67hQIJuP0Qybgzs=", "supersizefeatured": "1", "tmi": "1", "sdetail": "p:\/embed\/hAfcYuLbMa8"}, "url_v9as2": "http:\/\/s.ytimg.com\/yt\/swfbin\/cps-vflqUUMW4.swf", "params": {"allowscriptaccess": "always", "allowfullscreen": "true", "bgcolor": "#000000"}, "attrs": {"width": "640", "id": "movie_player", "height": "390"}, "url_v8": "http:\/\/s.ytimg.com\/yt\/swfbin\/cps-vflqUUMW4.swf", "html5": false};
      yt.setConfig({
    'EMBED_HTML_TEMPLATE': "\u003ciframe width=\"__width__\" height=\"__height__\" src=\"__url__\" frameborder=\"0\" allowfullscreen\u003e\u003c\/iframe\u003e",
    'EMBED_HTML_URL': "http:\/\/www.youtube.com\/embed\/__videoid__"
  });
  yt.net.ajax.setToken('html5_ajax', "t1o7HA-GR8Dc-Os0gMFY7qWptBp8MEAxMzI5NzEwNDI5");

  yt.setMsg('HTML5_DEFAULT_FALLBACK', "Your browser does not currently recognize any of the video formats available.\u003cbr\u003e\u003ca href=\"\/html5\"\u003eClick here to visit our frequently asked questions about HTML5 video.\u003c\/a\u003e");
  yt.setMsg('PLAYER_FALLBACK', "\u003cdiv  class=\"yt-alert yt-alert-error yt-alert-player \"\u003e\u003cspan class=\"yt-alert-icon\"\u003e\u003cimg s\u0072c=\"\/\/s.ytimg.com\/yt\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"Alert icon\"\u003e\u003c\/span\u003e\u003cdiv  class=\"yt-alert-content\"\u003e        The Adobe Flash Player or an HTML5 supported browser is required for video playback. \u003cbr\u003e \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003eGet the latest Flash Player\u003c\/a\u003e \u003cbr\u003e \u003ca href=\"\/html5\"\u003eLearn more about upgrading to an HTML5 browser\u003c\/a\u003e\n\u003c\/div\u003e\u003c\/div\u003e");
  yt.setMsg('QUICKTIME_FALLBACK', "\u003cdiv  class=\"yt-alert yt-alert-error yt-alert-player \"\u003e\u003cspan class=\"yt-alert-icon\"\u003e\u003cimg s\u0072c=\"\/\/s.ytimg.com\/yt\/img\/pixel-vfl3z5WfW.gif\" class=\"icon master-sprite\" alt=\"Alert icon\"\u003e\u003c\/span\u003e\u003cdiv  class=\"yt-alert-content\"\u003e        The Adobe Flash Player or QuickTime is required for video playback. \u003cbr\u003e \u003ca href=\"http:\/\/get.adobe.com\/flashplayer\/\"\u003eGet the latest Flash Player\u003c\/a\u003e \u003cbr\u003e \u003ca href=\"http:\/\/www.apple.com\/quicktime\/download\/\"\u003eGet the latest version of QuickTime\u003c\/a\u003e\n\u003c\/div\u003e\u003c\/div\u003e");
  yt.setMsg('HTML5_QUALITY_SETTING', "quality");
  yt.setMsg('HTML5_SPEED_SETTING', "speed");
  yt.setMsg('HTML5_SPEED_NORMAL', "normal");
  yt.setMsg('HTML5_VOLUME_SETTING', "volume");
  yt.setMsg('HTML5_VOLUME_MUTED', "muted");
  yt.setMsg('HTML5_VOLUME_MUTE', "mute");
  yt.setMsg('HTML5_VOLUME_UNMUTE', "unmute");
  yt.setMsg('HTML5_CONTROL_TOGGLE', "toggle");
  yt.setMsg('HTML5_SUBS_TRANSCRIBED', "transcribed");

    (function() {
        var forceUpdate =
            yt.www.watch.player.updateConfig(yt.playerConfig) ||
            false;
        var youTubePlayer =
            yt.player.update('watch-player', yt.playerConfig,
            forceUpdate, gYouTubePlayerReady);
      yt.setConfig({'PLAYER_REFERENCE': youTubePlayer});
    })();
  </script>





  <script>
    yt.setConfig({
      'BLOCK_USER_XSRF': "",
      'SUBSCRIBE_AXC': "",

      'IS_OWNER_VIEWING': null,
      'IS_WIDESCREEN': true,
      'IS_HD_AVAILABLE': false,
      'PREFER_LOW_QUALITY': false,
      'WIDE_PLAYER_STYLES': ["watch-wide-mode"],
      'COMMENT_SHARE_URL': "http:\/\/www.youtube.com\/comment?lc=_COMMENT_ID_",
      'ALLOW_EMBED': true,
      'ALLOW_RATINGS': true,
      'AJAX_MODE': false,

      'LIST_AUTO_PLAY_ON': false,
      'LIST_AUTO_PLAY_VALUE': 1,
      'SHUFFLE_VALUE': 0,
      'SHUFFLE_ENABLED': false,
      'YPC_CAN_RATE_VIDEO': true,
      'YPC_SHOW_VPPA_CONFIRM_RATING': false,




        'USE_CHIPS_UI': false,




      'CONVERSION_URLS_DICT': {},
      'PLAYBACK_ID': "AAS5XVXTwvc3zfam",
      'PLAY_ALL_MAX': 480    });

    yt.setMsg({
      'LOADING': "Loading...",
      'WATCH_ERROR_MESSAGE': "This feature is not available right now. Please try again later."    });



    
  yt.setMsg({
    'UNBLOCK_USER': "Are you sure you want to unblock this user?",
    'BLOCK_USER': "Are you sure you want to block this user?"
  });
  yt.setConfig('BLOCK_USER_XSRF', '');
  yt.setConfig('BLOCK_USER_AJAX_XSRF', '');



      yt.setConfig({
    'COMMENT_SHARE_URL': "http:\/\/www.youtube.com\/comment?lc=_COMMENT_ID_",
    'COMMENTS_SIGNIN_URL': "https:\/\/accounts.google.com\/ServiceLogin?uilel=3\u0026service=youtube\u0026passive=true\u0026continue=http%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26nomobiletemp%3D1%26hl%3Den_US%26next%3D%252Fwatch%253Fv%253DhAfcYuLbMa8\u0026hl=en_US\u0026ltmpl=sso",
    'COMMENTS_THRESHHOLD': -5,
    'COMMENTS_PAGE_SIZE': 10,
    'COMMENTS_COUNT': 22,
    'COMMENTS_YPC_CAN_POST_OR_REACT_TO_COMMENT': true,
    'COMMENT_VOTE_XSRF' : '',
    'COMMENT_ACTIONS_XSRF' : '',
    'COMMENT_SOURCE': "w",
    'ENABLE_LIVE_COMMENTS': false  });

  yt.net.ajax.setToken('link_servlet', "");
  yt.net.ajax.setToken('comment_servlet', "");
  yt.net.ajax.setToken('comment_voting', "");

  yt.setMsg({
    'COMMENT_OK': "OK",
    'COMMENT_BLOCKED': "You have been blocked by the owner of this video.",
    'COMMENT_CAPTCHAFAIL': "The response to the letters on the image was not correct, please try again.",
    'COMMENT_PENDING': "Comment Pending Approval!",
    'COMMENT_ERROR_EMAIL': "Error, account unverified (see email)",
    'COMMENT_ERROR': "Error, try again"
  });

  yt.pubsub.subscribe('init', yt.www.comments.init);



    yt.pubsub.subscribe('init', function() {
    });

    yt.pubsub.subscribe('init', yt.www.watch.activity.init);
    yt.pubsub.subscribe('init', yt.www.watch.player.init);
    yt.pubsub.subscribe('init', yt.www.watch.actions.init);


    yt.pubsub.subscribe('init', function() {
      var description = _gel('watch-description');
      if (!_hasclass(description, 'yt-uix-expander-collapsed')) {
        yt.www.watch.watch5.handleToggleDescription(description);
      }
    });





  </script>

  

    <script>
      yt.pubsub.subscribe('init', function() {
          var iframeContents = "\n  \u003cscript\u003e\n    var google_max_num_ads = '1';\n    var google_ad_output = 'js';\n    var google_ad_type = 'text';\n    var google_only_pyv_ads = true;\n    var google_video_doc_id = \"yt_hAfcYuLbMa8\";\n    var google_ad_request_done = parent.yt.www.ads.pyv.pyvWatchAfcCallback;\n    var google_ad_client = 'ca-pub-6219811747049371';\n    var google_ad_block = '3';\n      var google_page_url = \"http:\\\/\\\/www.youtube.com\\\/video\\\/hAfcYuLbMa8\";\n      var google_ad_channel = \"PyvWatchInRelated+PyvYTWatch+PyvWatchNoAdX+lpw+afv_ugc+yt_mpvid_AAS5XVXUFPshwT5l+ytexp_917000.904820.919001.916201.907519+Vertical_Banner_3+Vertical_Banner_36+Vertical_Banner_358+Vertical_Banner_1193+VidVert3+VidVert36+VidVert358+VidVert1193+Vertical_3+Vertical_36+Vertical_358+Vertical_1193\";\n      var google_language = \"en\";\n  \u003c\/script\u003e\n\n  \u003cscript s\u0072c=\"\/\/pagead2.googlesyndication.com\/pagead\/show_ads.js\"\u003e\u003c\/script\u003e\n";
          yt.www.ads.pyv.loadPyvIframe(iframeContents);
      });
    </script>






  

  

        <script>
      yt.setConfig('TIMING_ACTION', 'watch5');
    </script>



  <script>
    


  yt.setMsg({
    'LIST_CLEARED': "List cleared",
    'PLAYLIST_VIDEO_DELETED': "Video deleted.",
    'ERROR_OCCURRED': "Sorry, an error occurred.",
    'NEXT_VIDEO_TOOLTIP': "Next video:\u003cbr\u003e \u0026#8220;${next_video_title}\u0026#8221;",
    'NEXT_VIDEO_NOTHUMB_TOOLTIP': "Next video",
    'SHOW_PLAYLIST_TOOLTIP': "Show playlist",
    'HIDE_PLAYLIST_TOOLTIP': "Hide playlist",
    'AUTOPLAY_ON_TOOLTIP': "Turn autoplay off",
    'AUTOPLAY_OFF_TOOLTIP': "Turn autoplay on",
    'SHUFFLE_ON_TOOLTIP': "Turn shuffle off",
    'SHUFFLE_OFF_TOOLTIP': "Turn shuffle on",
    'PLAYLIST_BAR_PLAYLIST_SAVED': "Playlist saved!",
    'PLAYLIST_BAR_ADDED_TO_FAVORITES': "Added to favorites",
    'PLAYLIST_BAR_ADDED_TO_PLAYLIST': "Added to playlist",
    'PLAYLIST_BAR_ADDED_TO_QUEUE': "Added to queue",
    'AUTOPLAY_WARNING1': "Next video starts in 1 second...",
    'AUTOPLAY_WARNING2': "Next video starts in 2 seconds...",
    'AUTOPLAY_WARNING3': "Next video starts in 3 seconds...",
    'AUTOPLAY_WARNING4': "Next video starts in 4 seconds...",
    'AUTOPLAY_WARNING5': "Next video starts in 5 seconds...",
    'UNDO_LINK': "Undo"  });


  yt.setConfig({
    'DRAGDROP_BINARY_URL': "\/\/s.ytimg.com\/yt\/jsbin\/www-dragdrop-vflk8evqw.js",
    'PLAYLIST_BAR_PLAYING_INDEX': -1,
    'LIST_COPY_ON_EDIT_ENABLED': false  });

    yt.net.ajax.setToken('addto_ajax_logged_out', "k_vYgpePBbrIvVJbqpi0gk8sOb18MEAxMzI5NzEwNDI5");

    yt.www.lists.init();





        yt.pubsub.subscribe('init', function() {
      yt.www.thumbnaildelayload.init();
    });






      yt.pubsub.subscribe('init', function() {
        yt.net.scriptloader.load("\/\/s.ytimg.com\/yt\/jsbin\/www-searchbox-vflgcaFzT.js", function() {
          
      if (_gel('masthead-search')) {
        yt.setTimeout(function() {
          searchbox.yt.install(_gel('masthead-search'),
              _gel('masthead-search')["search_query"],
              "en",
              "us",
              "close",
              false,
              '',
              '',
              null,
              "Suggestion dismissed. Visit \u003ca href=\"\/my_search_history\"\u003emy search history\u003c\/a\u003e to remove it from your history as well.\n",
              -1,
              null);
        }, 100);
      }

        });
      });


  </script>

  


  
</body>
</html>`;

try {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=UTF-8"
    }
  });
} catch (e) {
  return new Response(e?.stack || e?.message || String(e), {
    status: 503,
    headers: {
      "Content-Type": "text/plain; charset=UTF-8"
    }
  });
}
}}
