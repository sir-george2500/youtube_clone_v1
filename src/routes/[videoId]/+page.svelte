<script lang="ts">
	import RecommendedVideos from './../../lib/components/RecommendedVideos.svelte';
	import ChannelInfo from '$lib/components/ChannelInfo.svelte';
	import VideoDescription from '$lib/components/VideoDescription.svelte';
	import Comments from '$lib/components/Comments.svelte';
let videoId =''
</script>


<div class="flex gap-2 m-5">
	<div class="max-w-[1200px] px-2 w-full mx-auto py-2">		
	<iframe
	class="w-full h-[480px] rounded-md"
	src={`https://www.youtube.com/embed/${videoId}`}
	title="YouTube video player"
	frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
	allowfullscreen
	/>
		<h1 class="text-xl font-semibold capitalize py-2">Svelte is better</h1>
		<div class="flex flex-col md:flex-grow gap-5 item-start mt-2">
			<div>
				<ChannelInfo />
				<VideoDescription/>
				<Comments />
			</div>
		</div>
	</div>
	<div class="w-[500px]">
		<RecommendedVideos/>
	</div>
</div>