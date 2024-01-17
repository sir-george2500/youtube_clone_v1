<script lang="ts">
    export let data;
    import VideoCard from '$lib/components/VideoCard.svelte';

    let content: any[] = [];

    async function loadData() {
        try {
            const resolvedData = await data.contents;
            console.log("Resolved Data:", resolvedData);
            content = resolvedData || [];
        } catch (error) {
            console.error("Error fetching data:", error);
            content = [];
        }
    }

    $: {
        loadData();
    }
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-16">
    {#each content as { type, video }}
        {#if type === 'video' && video}
            <VideoCard
                avatar={video.author?.avatar?.[0]?.url || ''}
                publishedTimeText={video.publishedTimeText || ''}
                thumbnail={video.thumbnails?.[0]?.url || ''}
                title={video.title || ''}
                videoId={video.videoId || ''}
                views={video.stats?.views || 0}
                channelName={video.author?.title || ''}
            />
        {/if}
    {/each}
</div>
