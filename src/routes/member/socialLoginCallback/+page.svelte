<script lang="ts">
	import { page } from '$app/stores';
	import rq from '$lib/rq/rq.svelte';
	import { onMount } from 'svelte';
	onMount(() => {
		const provierTypeCode = $page.url.searchParams.get('provierTypeCode');
		console.log(provierTypeCode);
		rq.msgInfo('환영합니다.');
		rq.replace(`/`);
	});
</script>
