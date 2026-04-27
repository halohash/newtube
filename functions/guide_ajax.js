export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  const feedName = url.searchParams.get("feed_name") || "most_popular";

  const apiUrl = `https://tv36.pages.dev/feeds/api/standardfeeds/${encodeURIComponent(feedName)}?alt=json`;

  let apiData;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      return new Response(JSON.stringify({ error: "Upstream fetch failed" }), {
        status: 502,
        headers: { "content-type": "application/json" }
      });
    }
    apiData = await res.json();
  } catch {
    return new Response(JSON.stringify({ error: "Fetch error" }), {
      status: 500,
      headers: { "content-type": "application/json" }
    });
  }

  const entries = apiData?.feed?.entry || [];

  const items = entries.map(entry => {
    const title = entry.title?.$t || "";
    const author = entry.author?.name?.$t || "";
    const channelId = entry.author?.yt$userId?.$t || "";
    const videoId = entry.media$group?.yt$videoid?.$t || "";
    const durationSec = parseInt(entry.media$group?.yt$duration?.seconds || "0", 10);
    const views = entry.yt$statistics?.viewCount || "0";

    const minutes = Math.floor(durationSec / 60);
    const seconds = String(durationSec % 60).padStart(2, "0");

    const videoThumb = `https://tv36.pages.dev/get_thumb?v=${videoId}`;
    const userThumb = `https://tv36.pages.dev/get_thumb?v=${channelId}&t=1`;

    return `
<li class="feed-item-container" data-channel-key="${channelId}">
  <div class="feed-author-bubble-container">
    <a href="/user/${author}" class="feed-author-bubble">
      <span class="feed-item-author">
        <span class="video-thumb ux-thumb yt-thumb-square-28">
          <span class="yt-thumb-clip">
            <span class="yt-thumb-clip-inner">
              <img src="${userThumb}" width="28">
              <span class="vertical-align"></span>
            </span>
          </span>
        </span>
      </span>
    </a>
  </div>

  <div class="feed-item-main">
    <div class="feed-item-header">
      <span class="feed-item-actions-line">
        <span class="feed-item-owner">
          <a dir="ltr" href="/user/${author}">${author}</a>
        </span>
        uploaded a video
      </span>
      <span class="feed-item-time">${entry.published || ""}</span>
    </div>

    <div class="feed-item-main-content">
      <div class="feed-item-content-wrapper clearfix context-data-item"
        data-context-item-title="${title}"
        data-context-item-actionuser="${author}"
        data-context-item-id="${videoId}"
        data-context-item-user="${author}"
        data-context-item-type="video"
        data-context-item-time="${minutes}:${seconds}"
        data-context-item-views="${views} views">

        <div class="feed-item-thumb">
          <a class="ux-thumb-wrap contains-addto yt-uix-contextlink yt-uix-sessionlink"
             href="/watch?v=${videoId}" tabindex="-1">

            <span class="video-thumb ux-thumb yt-thumb-default-106">
              <span class="yt-thumb-clip">
                <span class="yt-thumb-clip-inner">
                  <img src="${videoThumb}" width="106">
                  <span class="vertical-align"></span>
                </span>
              </span>
            </span>

            <span class="video-time">${minutes}:${seconds}</span>
          </a>
        </div>

      </div>
    </div>
  </div>
</li>`;
  }).join("");

  const responseData = {
    paging: null,
    feed_html: `
<div class="feed-header no-metadata">
  <div class="feed-header-thumb">
    <img class="feed-header-icon trending" src="//s.ytimg.com/yts/img/pixel-vfl3z5WfW.gif">
  </div>
  <div class="feed-header-details">
    <h2>${apiData?.feed?.title?.$t || ""}</h2>
  </div>
</div>

<div class="feed-container" data-filter-type="" data-view-type="">
  <div class="feed-page">
    <ul class="context-data-container">
      ${items}
    </ul>
  </div>
</div>`
  };

  return new Response(JSON.stringify(responseData), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
      "access-control-allow-origin": "*"
    }
  });
}
