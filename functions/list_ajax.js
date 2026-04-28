export async function onRequestGet(context) {
    const url = new URL(context.request.url);
    const params = url.searchParams;

    const rawList = params.get("list");
    if (!rawList) {
        return new Response(JSON.stringify({
            error: "Missing list parameter"
        }), { status: 400 });
    }

    const listId = rawList.split(",")[0];

    const feedMap = {
        LBpop: "standardfeeds/most_popular"
    };

    const feedPath = feedMap[listId];
    if (!feedPath) {
        return new Response(JSON.stringify({
            error: "Invalid list"
        }), { status: 400 });
    }

    const upstreamParams = new URLSearchParams();

    for (const [key, value] of params.entries()) {
        if (key !== "list") {
            upstreamParams.append(key, value);
        }
    }

    upstreamParams.set("alt", "json");

    const apiUrl = `https://tv36.pages.dev/feeds/api/${feedPath}?${upstreamParams.toString()}`;

    try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
            return new Response(JSON.stringify({
                error: "Failed to fetch feed"
            }), { status: 500 });
        }

        const data = await res.json();
        const entries = data.feed?.entry || [];

        const items = entries.map(e => {
            const media = e["media$group"] || {};
            const thumbnails = media["media$thumbnail"] || [];

            return {
                video_id: media["yt$videoid"]?.["$t"] || "",
                title: media["media$title"]?.["$t"] || "",
                author: e.author?.[0]?.name?.["$t"] || "",
                view_count: e["yt$statistics"]?.viewCount || null,
                length_seconds: media["yt$duration"]?.seconds || null,
                description: media["media$description"]?.["$t"] || "",
                thumbnail: thumbnails[0]?.url || "",
                uploaded: media["yt$uploaded"]?.["$t"] || e.published || "",
                is_hd: !!e["yt$hd"]
            };
        });

        const response = {
            list: rawList,
            title: data.feed?.title?.["$t"] || "",
            total_results: data.feed?.["openSearch$totalResults"]?.["$t"] || 0,
            start_index: data.feed?.["openSearch$startIndex"]?.["$t"] || 1,
            items_per_page: data.feed?.["openSearch$itemsPerPage"]?.["$t"] || items.length,
            video_count: items.length,
            videos: items
        };

        return new Response(JSON.stringify(response), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            }
        });

    } catch (err) {
        return new Response(JSON.stringify({
            error: "Server error",
            details: err.message
        }), { status: 500 });
    }
}