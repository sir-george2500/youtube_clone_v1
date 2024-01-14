<script lang="ts">
import ChannelInfo from '$lib/components/ChannelInfo.svelte';
import VideoDescription from '$lib/components/VideoDescription.svelte';
let videoId =''
</script>

<!-- 
<iframe
	class="w-full h-[480px]"
	src={`https://www.youtube.com/embed/${videoId}`}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
/> -->

<div class="max-w-[1200px] px-2 w-full mx-auto py-2">
    <h1 class="text-xl font-semibold capitalize">Svelt is better</h1>
	<div class="flex flex-col md:flex-grow gap-5 item-start mt-2">
		<div>
			<ChannelInfo />
			<VideoDescription/>
		</div>
	</div>
</div>