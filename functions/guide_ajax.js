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

  function formatTime(sec) {
    const m = Math.floor(sec / 60);
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  }

  const items = entries.map((entry, i) => {
    const title = entry.title?.$t || "";
    const author = entry.author?.name?.$t || "";
    const channelId = entry.author?.yt$userId?.$t || "";
    const videoId = entry.media$group?.yt$videoid?.$t || "";
    const duration = parseInt(entry.media$group?.yt$duration?.seconds || "0", 10);
    const views = entry.yt$statistics?.viewCount || "0";
    const description = entry.media$group?.media$description?.$t || "";

    const videoThumb = `https://tv36.pages.dev/get_thumb?v=${videoId}`;
    const userThumb = `https://tv36.pages.dev/get_thumb?v=${channelId}&t=1`;

    return `
<li class="feed-item-container">
  <div class="feed-item upload">
    <div class="feed-item-content">

      <h3 class="feed-item-title">
        <span class="feed-item-author">
          <a href="/user/${author}" class="yt-user-photo">
            <span class="video-thumb ux-thumb ux-thumb-profile-24">
              <span class="clip">
                <span class="clip-inner">
                  <img src="${userThumb}" alt="${author}">
                  <span class="vertical-align"></span>
                </span>
              </span>
            </span>
          </a>
        </span>

        <span class="feed-item-owner">
          <a href="/user/${author}" class="yt-user-name" dir="ltr">${author}</a>
        </span>
        uploaded

        <span class="time-created"></span>
      </h3>

      <div class="feed-item-visual">
        <div class="feed-item-visual-thumb">
          <a class="ux-thumb-wrap contains-addto yt-uix-sessionlink"
             href="/watch?v=${videoId}">

            <span class="video-thumb ux-thumb ux-thumb-288">
              <span class="clip">
                <span class="clip-inner">
                  <img src="${videoThumb}" alt="Thumbnail">
                  <span class="vertical-align"></span>
                </span>
              </span>
            </span>

            <span class="video-time">${formatTime(duration)}</span>
          </a>
        </div>

        <div class="feed-item-visual-content">
          <div class="feed-item-visual-description">
            <h4>
              <a class="title yt-uix-sessionlink"
                 href="/watch?v=${videoId}"
                 dir="ltr">${title}</a>
            </h4>

            <div class="description" dir="ltr">
              <p>${description}</p>
            </div>
          </div>

          <p class="metadata">
            <span class="view-count">
              ${views} views
            </span>
          </p>
        </div>
      </div>

    </div>
  </div>
</li>`;
  }).join("");

  const responseData = {
    paging: null,
    feed_html: `
<div class="feed-container">
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
