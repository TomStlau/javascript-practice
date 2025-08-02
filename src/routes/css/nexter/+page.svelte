<script>
	import EtGlobal from '~icons/et/global';
	import EtTrophy from '~icons/et/trophy';
	import EtMapPin from '~icons/et/map-pin';
	import EtKey from '~icons/et/key';
	import EtPresentation from '~icons/et/presentation';
	import EtLock from '~icons/et/lock';
	import MdiHeart from '~icons/mdi/heart';
	import EtProfileMale from '~icons/et/profile-male';
	import EtExpand from '~icons/et/expand';
	import { cn } from '$lib/utils';
</script>

<main class="font-primary grid">
	<!-- Sidebar -->
	<div class="sidebar bg-nexter-primary col-start-[sidebar-start] col-end-[sidebar-end] row-[1/-1]">
		Sidebar
	</div>
	<!-- Header container-->
	<header class="bg-nexter-grey-dark-1 col-[full-start/col-end_6] row-[1]">Header</header>
	<!-- header realtors -->
	<div class="realtors bg-nexter-secondary col-[col-start_7/full-end] row-[1]">Top 3 realtors</div>

	<!-- Features -->
	<section
		class={cn(
			'features col-[center-start/center-end] my-[9.375rem] grid grid-cols-[repeat(auto-fit,minmax(15rem,1fr))] gap-x-[3rem] gap-y-[6rem]',
			'[&_h4]:font-josefin [&_h4]:text-nexter-grey-dark-1 [&_h4]:font-bold',
			'[&_svg]:text-nexter-primary-dark [&_svg]:size-11',
			'[&>div]:feature  [&>div]:grid [&>div]:grid-cols-[min-content_1fr] [&>div]:grid-rows-[min-content_min-content] [&>div]:items-center [&>div]:gap-x-6 [&>div]:gap-y-2',
			'[&_p]:col-2'
		)}
	>
		<!-- feature 1 -->
		<div>
			<EtGlobal></EtGlobal>
			<h4>World's best luxury homes</h4>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus
				pariatur voluptatibus.
			</p>
		</div>
		<!-- feature 2 -->
		<div>
			<EtTrophy></EtTrophy>
			<h4>Only the best properties</h4>
			<p>
				Voluptatum mollitia quae. Vero ipsum sapiente molestias accusamus rerum sed a eligendi aut
				quia.
			</p>
		</div>
		<!-- feature 3 -->
		<div>
			<EtMapPin></EtMapPin>
			<h4>All homes in top locations</h4>
			<p>Tenetur distinctio necessitatibus pariatur voluptatibus quidem consequatur harum.</p>
		</div>
		<!-- feature 4 -->
		<div>
			<EtKey></EtKey>
			<h4>New home in one week</h4>
			<p>
				Vero ipsum sapiente molestias accusamus rerum. Lorem, ipsum dolor sit amet consectetur
				adipisicing elit.
			</p>
		</div>
		<!-- feature 5 -->
		<div>
			<EtPresentation></EtPresentation>
			<h4>Top 1% realtors</h4>
			<p>
				Quidem consequatur harum, voluptatum mollitia quae. Tenetur distinctio necessitatibus
				pariatur voluptatibus.
			</p>
		</div>
		<!-- feature 6 -->
		<div>
			<EtLock></EtLock>
			<h4>Secure payments on nexter</h4>
			<p>Pariatur voluptatibus quidem consequatur harum, voluptatum mollitia quae.</p>
		</div>
	</section>

	<!-- story -->
	<!-- story pictures -->
	<div
		class="story-pictures col-[full-start/col-end_4] row-3 grid grid-cols-6 grid-rows-6 items-center"
	>
		<img class="col-[2/6] row-[2/6] shadow" src="/css/nexter/img/story-1.jpeg" alt="" />
		<img
			class="relative col-[4/-1] row-[4/6] origin-left scale-115 drop-shadow-md/20"
			src="/css/nexter/img/story-2.jpeg"
			alt=""
		/>
	</div>
	<!-- story content -->
	<div
		class="story-content bg-nexter-grey-light-1 col-[col-start_5/full-end] row-[3] grid items-center justify-items-start px-30 py-15"
	>
		<div>
			<h3 class="text-nexter-primary mb-5 uppercase">Happy Customers</h3>
			<h2 class="mb-7.5 text-4xl italic">&ldquo;The best decision of our lives&rdquo;</h2>
			<p class="mb-10">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus
				pariatur voluptatibus. Quidem consequatur harum volupta!
			</p>
			<button
				class="hover:bg-nexter-primary-dark bg-nexter-primary cursor-pointer self-start px-8 py-4 text-white uppercase transition"
				>Find your own home</button
			>
		</div>
	</div>
	<!-- homes -->
	<section
		class={cn(
			'homes  col-[center-start/center-end] row-[4] my-37 grid w-full grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-17',
			// home
			'[&>.home]:bg-nexter-grey-light-1 [&>.home]:relative [&>.home]:grid [&>.home]:w-full [&>.home]:grid-cols-2 [&>.home]:gap-y-6 ',
			// div
			'[&>.home]:[&>div]:flex [&>.home]:[&>div]:gap-2 [&>.home]:[&>div]:px-4',
			// img
			'[&>.home]:[&>img]:col-[1/-1] [&>.home]:[&>img]:row-1 [&>.home]:[&>img]:mb-6',
			// h5
			'[&>.home]:[&>h5]:bg-nexter-secondary [&>.home]:[&>h5]:col-[1/-1] [&>.home]:[&>h5]:row-1 [&>.home]:[&>h5]:w-8/10 [&>.home]:[&>h5]:self-end [&>.home]:[&>h5]:justify-self-center [&>.home]:[&>h5]:py-3 [&>.home]:[&>h5]:text-center [&>.home]:[&>h5]:text-white ',
			// button
			'[&>.home]:[&>button]:bg-nexter-primary [&>.home]:[&>button]:hover:bg-nexter-primary-dark [&>.home]:[&>button]:col-span-2 [&>.home]:[&>button]:cursor-pointer [&>.home]:[&>button]:py-3 [&>.home]:[&>button]:text-sm [&>.home]:[&>button]:text-white  [&>.home]:[&>button]:uppercase  [&>.home]:[&>button]:transition',
			// svg
			'[&_svg]:text-nexter-primary [&>svg]:size-5'
		)}
	>
		<div class="home">
			<!-- House 1 -->
			<img src="/css/nexter/img/house-1.jpeg" alt="" />
			<MdiHeart class="absolute top-1 right-1"></MdiHeart>
			<h5>Beautiful Family House</h5>
			<div class="home-location">
				<EtMapPin></EtMapPin>
				<p>USA</p>
			</div>
			<div class="home-rooms">
				<EtProfileMale></EtProfileMale>
				<p>5 rooms</p>
			</div>
			<div class="home-area">
				<EtExpand></EtExpand>
				<p>325 m<sup>2</sup></p>
			</div>
			<div class="home-price">
				<EtKey></EtKey>
				<p>$1,200,000</p>
			</div>
			<button>Contact realtor</button>
		</div>
		<!-- House 2 -->
		<div class="home">
			<img src="/css/nexter/img/house-2.jpeg" alt="" />
			<MdiHeart class="absolute top-1 right-1"></MdiHeart>
			<h5>Modern Glass Villa</h5>
			<div class="home-location">
				<EtMapPin></EtMapPin>
				<p>Canada</p>
			</div>
			<div class="home-rooms">
				<EtProfileMale></EtProfileMale>
				<p>6 rooms</p>
			</div>
			<div class="home-area">
				<EtExpand></EtExpand>
				<p>450 m<sup>2</sup></p>
			</div>
			<div class="home-price">
				<EtKey></EtKey>
				<p>$2,750,000</p>
			</div>
			<button>Contact realtor</button>
		</div>
		<!-- House 3 -->
		<div class="home">
			<img src="/css/nexter/img/house-3.jpeg" alt="" />
			<MdiHeart class="absolute top-1 right-1"></MdiHeart>
			<h5>Cozy Country House</h5>
			<div class="home-location">
				<EtMapPin></EtMapPin>
				<p>UK</p>
			</div>
			<div class="home-rooms">
				<EtProfileMale></EtProfileMale>
				<p>4 rooms</p>
			</div>
			<div class="home-area">
				<EtExpand></EtExpand>
				<p>250 m<sup>2</sup></p>
			</div>
			<div class="home-price">
				<EtKey></EtKey>
				<p>$800,000</p>
			</div>
			<button>Contact realtor</button>
		</div>
		<!-- House 4 -->
		<div class="home">
			<img src="/css/nexter/img/house-4.jpeg" alt="" />
			<MdiHeart class="absolute top-1 right-1"></MdiHeart>
			<h5>Large Rustical Villa</h5>
			<div class="home-location">
				<EtMapPin></EtMapPin>
				<p>Portugal</p>
			</div>
			<div class="home-rooms">
				<EtProfileMale></EtProfileMale>
				<p>6 rooms</p>
			</div>
			<div class="home-area">
				<EtExpand></EtExpand>
				<p>480 m<sup>2</sup></p>
			</div>
			<div class="home-price">
				<EtKey></EtKey>
				<p>$1,950,000</p>
			</div>
			<button>Contact realtor</button>
		</div>
		<!-- House 5 -->
		<div class="home">
			<img src="/css/nexter/img/house-5.jpeg" alt="" />
			<MdiHeart class="absolute top-1 right-1"></MdiHeart>
			<h5>Majestic Palace House</h5>
			<div class="home-location">
				<EtMapPin></EtMapPin>
				<p>Germany</p>
			</div>
			<div class="home-rooms">
				<EtProfileMale></EtProfileMale>
				<p>18 rooms</p>
			</div>
			<div class="home-area">
				<EtExpand></EtExpand>
				<p>4230 m<sup>2</sup></p>
			</div>
			<div class="home-price">
				<EtKey></EtKey>
				<p>$9,500,000</p>
			</div>
			<button>Contact realtor</button>
		</div>
		<div class="home">
			<img src="/css/nexter/img/house-6.jpeg" alt="" />
			<MdiHeart class="absolute top-1 right-1"></MdiHeart>
			<h5>Modern Family Apartment</h5>
			<div class="home-location">
				<EtMapPin></EtMapPin>
				<p>Italy</p>
			</div>
			<div class="home-rooms">
				<EtProfileMale></EtProfileMale>
				<p>3 rooms</p>
			</div>
			<div class="home-area">
				<EtExpand></EtExpand>
				<p>180 m<sup>2</sup></p>
			</div>
			<div class="home-price">
				<EtKey></EtKey>
				<p>$600,000</p>
			</div>
			<button>Contact realtor</button>
		</div>
	</section>
	<!-- gallery -->
	<section
		class="gallery bg-nexter-grey-dark-1 col-[full-start/full-end] row-[5] columns-[15rem] p-4 [&>img]:not-first:my-4"
	>
		<img src="/css/nexter/img/gal-1.jpeg" alt="" />
		<img src="/css/nexter/img/gal-2.jpeg" alt="" />
		<img src="/css/nexter/img/gal-3.jpeg" alt="" />
		<img src="/css/nexter/img/gal-4.jpeg" alt="" />
		<img src="/css/nexter/img/gal-5.jpeg" alt="" />
		<img src="/css/nexter/img/gal-6.jpeg" alt="" />
		<img src="/css/nexter/img/gal-7.jpeg" alt="" />
		<img src="/css/nexter/img/gal-8.jpeg" alt="" />
		<img src="/css/nexter/img/gal-9.jpeg" alt="" />
		<img src="/css/nexter/img/gal-10.jpeg" alt="" />
		<img src="/css/nexter/img/gal-11.jpeg" alt="" />
		<img src="/css/nexter/img/gal-12.jpeg" alt="" />
		<img src="/css/nexter/img/gal-13.jpeg" alt="" />
		<img src="/css/nexter/img/gal-14.jpeg" alt="" />
	</section>
	<!-- footer -->
	<footer class="bg-nexter-secondary col-[full-start/full-end] row-[6]">Footer</footer>
</main>

<style>
	main {
		grid-template-rows: 80dvh min-content 40vw repeat(3, min-content);
		grid-template-columns:
			[sidebar-start] 5rem
			[sidebar-end full-start] minmax(3rem, 1fr)
			[center-start] repeat(8, [col-start] minmax(min-content, 8rem) [col-end])
			[center-end] minmax(3rem, 1fr) [full-end];
	}
	.story-pictures {
		border-image: fill 1
			linear-gradient(
				oklch(from var(--color-nexter-primary) l c h / 0.4),
				oklch(from var(--color-nexter-primary) l c h / 0.4)
			);
		background-image: url('/css/nexter/img/back.jpg');
	}
</style>
