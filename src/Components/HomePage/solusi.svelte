<script>
  let solusi = [
    {
      link: "beranda",
      condition: true,
      img: "s1",
      active: true,
      tittle: "Beranda",
      desc: "Menu untuk menampilkan ringkasan penjualan, pembelian dan Stok yang ada di toko kamu yang di gambarkan ke dalam bentuk grafik dan angka.",
    },
    {
      link: "pembelian",
      condition: false,
      img: "s2",
      active: false,
      tittle: "Pembelian",
      desc: "Menu untuk melakukan pembelian terhadap suatu barang yang ingin di jual di toko kamu.",
    },
    {
      link: "penjualan",
      condition: false,
      img: "s3",
      active: false,
      tittle: "Penjualan",
      desc: "Menu untuk melakukan penjualan terhadap suatu barang yang ada di toko kamu.",
    },
    {
      link: "stock",
      condition: false,
      img: "s4",
      active: false,
      tittle: "Stock",
      desc: "Menu untuk menampilkan dan menyesuaikan stok suatu barang yang telah kamu beli.",
    },
    {
      link: "laporan",
      condition: false,
      img: "s5",
      active: false,
      tittle: "Laporan",
      desc: "Menu untuk menampilkan Detail transaksi setiap penjualan dan pembelian yang telah kamu input ke dalam aplikasi beserta detail stok yang masuk",
    },
    {
      link: "pengaturan",
      condition: false,
      img: "s6",
      active: false,
      tittle: "Pengaturan Toko",
      desc: "Menu Tahap Awal untuk mengatur toko kamu, seperti mengubah profil toko kamu, toko yang kamu kelola, barang yang akan dijual, Paket Bundling Barang, Promo, Data Karyawan, Data Pelanggan, Serta metode pembayaran yang kamu akan siapkan untuk pembayaran penjualan.",
    },
  ];
</script>

<main>
  <section>
    <div class="mx-auto max-w-screen-xl mb-10 sm:px-6 lg:flex lg:h-full">
      <h1 class="text-primary text-3xl max-w-full font-semibold">
        Kelola bisnis dengan baik bersama Mogi <br /> aplikasi wirausaha yang bisa
        diandalkan, untuk solusi bisnis penjualan.
      </h1>
    </div>
    <div class="py-10 sm:px-6 bg-gradient-to-b from-seccondary to-thirt">
      <h1
        class="mx-auto max-w-screen-xl text-primary text-6xl max-w-full font-semibold"
      >
        Kami memberikan Solusi Terbaik untuk pertumbuhan bisnis Kamu
      </h1>
      <div class="mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 pt-6">
        <ul
          class="border-2 border-white list-none rounded-full my-auto"
          role="tablist"
          data-te-nav-ref
        >
          {#each solusi as item}
            <div>
              {#if item.active}
                <li role="presentation" class="mx-8 my-6">
                  <a
                    href={"#tabs-" + item.link}
                    class="my-2 block bg-white text-primary data-[te-nav-active]:bg-primary data-[te-nav-active]:text-white dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 p-4 text-base font-extrabold rounded-11 shadow-lg"
                    data-te-toggle="pill"
                    data-te-target={"#tabs-" + item.link}
                    data-te-nav-active
                    role="tab"
                    aria-controls={"tabs-" + item.link}
                    aria-selected={item.condition}
                    >{item.tittle} <br />
                    <span class="text-sm font-light font-abeezee italic pt-2"
                      >{item.desc}</span
                    ></a
                  >
                </li>
              {:else}
                <li role="presentation" class="mx-8 my-6">
                  <a
                    href={"#tabs-" + item.link}
                    class="my-2 block bg-white text-primary data-[te-nav-active]:bg-primary data-[te-nav-active]:text-white dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400 p-4 text-base font-extrabold rounded-11 shadow-lg"
                    data-te-toggle="pill"
                    data-te-target={"#tabs-" + item.link}
                    role="tab"
                    aria-controls={"tabs-" + item.link}
                    aria-selected={item.condition}
                    >{item.tittle} <br />
                    <span class="text-sm font-light font-abeezee italic pt-2"
                      >{item.desc}</span
                    ></a
                  >
                </li>
              {/if}
            </div>
          {/each}
        </ul>
        <div class="p-8">
          {#each solusi as item}
            {#if item.active}
              <div
                class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id={"tabs-" + item.link}
                role="tabpanel"
                aria-labelledby={"tabs-" + item.link + "-tab"}
                data-te-tab-active
              >
                <img src={"/img/" + item.img + ".svg"} alt="" />
              </div>
            {:else}
              <div
                class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
                id={"tabs-" + item.link}
                role="tabpanel"
                aria-labelledby={"tabs-" + item.link + "-tab"}
              >
                <img src={"/img/" + item.img + ".svg"} alt="" />
              </div>
            {/if}
          {/each}
        </div>
      </div>
    </div>
  </section>
</main>

<style>
  .rounded-full {
    border-radius: 28px;
  }

  .rounded-11 {
    border-radius: 11px;
  }
</style>
