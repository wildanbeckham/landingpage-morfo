<script>
  let items = [
    {
      tittle: "Digital campaigns",
      desc: "Memudahkan user karena bisa di gunakan dalam platform apapun dan Interface UI yang mudah dipahami.",
    },
    {
      tittle: "Monitoring Yang Mudah Diakses",
      desc: "Proses Monitoring Bisa diakses dimanapun dan kapanpun dalam genggaman tangan dengan baik.",
    },
    {
      tittle: "Kelola Banyak Toko",
      desc: "   Pengelolaan Banyak Toko dapat di lakukan tanpa harus membayar lebih.",
    },
    {
      tittle: "Mendukung Fitur ERP Lite",
      desc: " Penerapan bagian kecil dari ERP dengan adanya fitur pembelian, penjualan dan stok.",
    },
    {
      tittle: "Pengelolaan Stok Barang",
      desc: "Pengelolaan Stok barang dapat terorganisir dengan baik.",
    },
    {
      tittle: "DiLaporan Lengkap",
      desc: "Laporan Pembelian dan Penjualan yang sudah selesai, dapatotomatis terbuat dalam bentuk laporan yang lengkap.",
    },
  ];
</script>

<main>
  <section>
    <div class="mx-auto max-w-screen-xl pt-10 sm:px-6 lg:flex lg:h-full">
      <h1 class="text-primary text-5xl max-w-full mx-auto font-semibold">
        Kenapa Harus Memilih Mogi ?
      </h1>
    </div>
    <section class="bg-white text-white">
      <div class="mx-auto max-w-screen-xl px-4 sm:py-12 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-3">
          {#each items as item}
            <div
              class="block rounded-xl bg-[url('/img/whyus.svg')] bg-cover bg-center bg-no-repeat p-6 transition hover:border-pink-500/10 hover:shadow-pink-500/10 border-2 border-seccondary rounded-full"
            >
              <h2
                class="text-xl font-bold text-primary bg-white rounded-full text-center h-16"
              >
                {item.tittle}
              </h2>
              <div class="pt-4 w-5/12 h-60 max-h-60">
                <p class="mt-1 text-sm font-light font-abeezee italic">
                  {item.desc}
                </p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </section>
  </section>
</main>

<style>
  .rounded-full {
    border-radius: 30px;
  }
</style>
