<script>
	import HeadingSecondary from './headingSecondary.svelte';
</script>

<form action="# " class="w-1/2 px-15">
	<div class="space-y-8">
		<HeadingSecondary class="mb-12 [font-size:clamp(1rem,2.5vw,var(--text-4xl))]"
			>Start booking now</HeadingSecondary
		>

		<div class="flex flex-col">
			<input
				required
				type="text"
				id="fullName"
				name="fullName"
				class="peer text-input [anchor-name:--name-input]"
				placeholder="Full name"
			/>
			<label class="text-label [position-anchor:--name-input]" for="fullName">Full name</label>
		</div>
		<div class="flex flex-col">
			<input
				required
				class="peer text-input [anchor-name:--email-input]"
				type="email"
				id="email"
				name="email"
				placeholder="Email"
			/>
			<label class="text-label [position-anchor:--email-input]" for="email">Email</label>
			<p
				class="absolute top-[anchor(bottom)] right-[anchor(right)] text-red-600 opacity-0 transition [position-anchor:--email-input] not-peer-placeholder-shown:peer-invalid:opacity-100"
			>
				Invalid email
			</p>
		</div>
		<div class="flex items-center gap-16">
			<div class="input-group flex items-center gap-2">
				<label class=" [position-anchor:--short]" for="short">
					<input
						required
						checked
						class="peer [anchor-name:--short]"
						type="radio"
						id="short"
						name="tour"
						value="short"
					/>
					<span>Small tour group</span>
				</label>
			</div>
			<div class="input-group flex items-center gap-2">
				<label class="[position-anchor:--large]" for="large">
					<input
						required
						class="[anchor-name:--large]"
						type="radio"
						id="large"
						name="tour"
						value="large"
					/>
					<span id="anchored">Large tour group</span>
				</label>
			</div>
		</div>
		<div>
			<button
				class="text-dark-main hover:border-dark-main hover:bg-dark-main inline-block cursor-pointer border-b p-1 transition hover:-translate-y-0.5 hover:text-white hover:drop-shadow-lg"
				>Next step &rarr;</button
			>
		</div>
	</div>
</form>

<style>
	@reference "tailwindcss";

	.text-input {
		&:not(:invalid):focus {
			box-shadow: 0px 3px 8px oklch(from var(--color-dark-main) l c h / 0.2);
		}
		&:invalid:focus {
			box-shadow: 0px 3px 8px oklch(from var(--color-orange-400) l c h / 0.2);
		}

		@apply rounded-sm border-b-2 border-b-transparent bg-white/50 px-4 py-3 text-lg transition placeholder:text-zinc-400 placeholder:italic focus:border-b-2 focus:outline-none not-invalid:focus:border-b-(--medium-main) invalid:focus:border-b-orange-400;
	}
	label {
		&:has(input[type='radio']) {
			display: flex;
			align-items: center;
			gap: 1rem;
			user-select: none;
			cursor: pointer;
		}
	}

	.text-label {
		/* transition-behavior: allow-discrete; */

		@apply invisible absolute [top:anchor(top)] ml-5 translate-y-4 opacity-0 transition duration-200 not-peer-placeholder-shown:visible not-peer-placeholder-shown:-translate-y-6 not-peer-placeholder-shown:opacity-100;
		/* @apply mt-1 ml-5 -translate-y-8 text-xs opacity-0 transition not-peer-placeholder-shown:translate-y-0 not-peer-placeholder-shown:opacity-100; */
	}

	input[type='radio'] {
		/* width: 900px; */
		transition: background-color;
		transition-duration: 100ms;
		appearance: none;
		outline: 1.5px solid var(--dark-main);
		outline-offset: 3px;
		width: 12px;
		height: 12px;
		aspect-ratio: 1/1;
		padding: 0.25rem;
		cursor: pointer;
		border-radius: 999px;
		&:checked {
			background-color: var(--dark-main);
		}
		&:focus {
			outline-width: 3px;
		}
	}
</style>
