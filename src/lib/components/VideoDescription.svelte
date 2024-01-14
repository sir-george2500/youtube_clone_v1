<script lang="ts">
	let showMore = false;
</script>

<div
	class:h-fit={showMore}
	class:h-[105px]={!showMore}
	class="group bg-gray-200 my-5 relative overflow-hidden text-sx rounded-lg hover:bg-gray-300 p-3"
>
	<div class="font-medium mb-2">
		<span>20000 views September 16, 2024</span>
	</div>
	<div class="mb-5">
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima porro, at ad, culpa ipsam esse quibusdam praesentium qui sit et nulla aliquam, ab assumenda in temporibus! Officia aliquam nemo voluptas porro hic eaque consequatur incidunt exercitationem, quaerat temporibus optio iure fugiat maiores? Quisquam adipisci inventore dolor cum molestiae, et animi. Quas incidunt odio culpa ipsum vitae voluptates perferendis unde nesciunt est iste, quisquam delectus, reiciendis tempore. Culpa laudantium voluptates quae aut, iure nulla porro natus magni dignissimos tempora itaque voluptas commodi veniam fugit aspernatur consectetur fugiat perspiciatis debitis facere. Hic, distinctio! Nesciunt nemo doloremque illum neque id labore animi ut quam architecto aliquam aperiam optio rerum obcaecati, quo excepturi adipisci dolorem itaque totam accusantium et aliquid fuga. Nam reiciendis quae tempora voluptas dolores consectetur deserunt, ab vel quis vitae nulla consequuntur distinctio natus eum et explicabo! Pariatur voluptatum consectetur nulla, fugit qui quod quis doloribus blanditiis vitae, rem deserunt aliquam sunt unde at perferendis similique. Iste praesentium ad omnis tenetur ut reprehenderit aspernatur neque cumque, dolores consequatur repellat nulla, impedit delectus molestias ipsa architecto. Reprehenderit, repellendus eos odio dolores assumenda officia distinctio voluptatem quas illum. Repellat odit fuga rem explicabo iusto facere quaerat dolorem, consectetur molestias. Blanditiis consectetur deleniti facere libero id incidunt provident laudantium molestiae quaerat, odit corporis eius vitae! Quisquam non nihil, animi quibusdam reprehenderit aspernatur dolor voluptatem maxime praesentium saepe labore perspiciatis quo esse laborum ipsam odio neque accusantium! Maxime cumque quam similique, modi amet architecto officia eveniet aperiam placeat tempore iusto, eos consequuntur non cum dolor hic natus ex possimus aliquam alias, autem id impedit. Ipsum delectus officia cupiditate necessitatibus repellat consectetur totam sapiente laborum perferendis excepturi commodi ullam sed minus, enim quas quos fugiat porro consequatur. Debitis pariatur iste, iure eum quaerat enim itaque laboriosam, qui dicta voluptates, modi expedita illum libero voluptatem optio vel?
	</div>
	<button
		on:click={() => {
			showMore = !showMore;
		}}
		class={`absolute bottom-0 font-medium p-2 mt-12 w-full flex justify-start items-center ${
			showMore ? 'bg-transparent' : 'bg-gradient-to-r from-gray-200 via-gray-200 to-transparent group-hover:from-gray-300 group-hover:via-gray-300 group-hover:to-transparent'
		} z-10`}
	>
		{showMore ? 'Show less' : '..more'}
	</button>
</div>
