<script>
  let items = [
    {
      link: "/1",
      img: "1",
      tittle: "Biaya Berlangganan Paling Terjangkau",
      desc: "Kami yakin bahwa kami yang terbaik dalam sisi harga.",
    },
    {
      link: "/2",
      img: "2",
      tittle: "Tanpa Iklan",
      desc: "Nikmati layanan kami tanpa harus terhambat karena iklan.",
    },
    {
      link: "/3",
      img: "3",
      tittle: "Layanan pelanggan 24 jam",
      desc: "Kami melayani dengan sepenuh hati 24/7 hanya untuk kamu.",
    },
  ];
</script>

<main class="py-14">
  <ul
    class="list-none border-b-0 pl-0 lg:flex mx-8"
    role="tablist"
    data-te-nav-ref
  >
    <li role="presentation" class="pelayan">
      <a
        href="#tabs-home"
        class="bg-seccondary text-primary text-2xl font-bold rounded-full px-8 py-4 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
        data-te-toggle="pill"
        data-te-target="#tabs-home"
        data-te-nav-active
        role="tab"
        aria-controls="tabs-home"
        aria-selected="true"
        >Tingkatkan Bisnis kamu dan nikmati pelayanan dari Mogi</a
      >
    </li>
  </ul>

  <div class="p-10 bg-primary border-y-6 border-seccondary">
    <div
      class="hidden opacity-100 transition-opacity lg:flex mx-auto max-w-screen-xl duration-150 ease-linear data-[te-tab-active]:block"
      id="tabs-home"
      role="tabpanel"
      aria-labelledby="tabs-home-tab"
      data-te-tab-active
    >
      <div class="grid lg:grid-cols-3 gap-24 justify-center mx-20 py-2">
        {#each items as item}
          <a
            href={item.link}
            class="block bg-white p-8 rounded-xxl text-primary"
          >
            <img
              alt="Art"
              src={"/img/p" + item.img + ".svg"}
              class="object-cover aspect-2/2 w-1/3"
            />

            <h3 class="mt-4 text-lg font-bold sm:text-xl h-14">
              {item.tittle}
            </h3>

            <p class="mt-4 font-normal font-abeezee italic">
              {item.desc}
            </p>
          </a>
        {/each}
      </div>
    </div>
  </div>
</main>

<style>
  .pelayan {
    margin-bottom: -15px;
  }
</style>
