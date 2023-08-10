<script>
  let items = [
    {
      kiri: [
        {
          judul: "1. Pengaturan Struk Toko",
          desc: "",
          point: [
            `Pada Halaman Rincian Toko, Pilih Tab "Struk" `,
            `Pilih "Ukuran Kertas Printer" Sesuai dengan printer yang kamu miliki `,
          ],
        },
        {
          judul: "2. Tambah Cabang Toko Lain",
          desc: "",
          point: [
            `Bagaimana Sih Langkah-Langkah untuk Menambah Cabang Toko Lain?Halo Sobat Mogi, Ada Beberapa Langkah untuk Menambah Cabang Toko Lain Yaitu:1.Klik Pada Menu "Pengaturan Toko" `,
            `Pilih SubMenu "Profil toko" `,
            `Pada Halaman Profil, akan Menampilkan Seluruh List Toko yang sudah pernah dibuat `,
            `Klik Tombol "+" pada Sisi Kanan Bawah Halaman Profil `,
            `Masukkan "Nama Toko" `,
            `Masukkan "No. Telepon Toko" `,
            `Unggah Foto Toko ( Opsional ) `,
            `Masukkan "Alamat Toko" `,
            `Pilih Toko Utama `,
          ],
        },
        {
          judul: "3. Mengatur Barang yang ingin di jual",
          desc: "Bagaimana Sih Langkah-Langkah untuk mengatur barang yang ingin di jual ?Halo Sobat Mogi, Ada Beberapa Langkah untuk Mengatur Barang yang akan dijual Yaitu:",
          point: [
            `Klik Pada Menu "Pengaturan Toko" `,
            `Pilih SubMenu "Barang" `,
            `Pada Halaman Barang, terdapat 3 tab ( Kategori, Barang, dan Bundling )" `,
          ],
        },
      ],
      kanan: [
        {
          judul: "4. Pengaturan Karyawan",
          desc: "Bagaimana Sih Langkah-Langkah untuk Mengatur Karyawan Baru ?Halo Sobat Mogi, Ada Beberapa Langkah untuk Pengaturan Karyawan Baru Yaitu :",
          point: [
            `Klik Pada Menu "Pengaturan Toko" `,
            `Pilih SubMenu "Karyawan" `,
            `Pada Halaman Karyawan akan menampilkan seluruh list Karyawan `,
            `Klik Tombol "+" di sisi kanan bawah untuk menambah Karyawan Toko `,
            `Masukan "Nama Karyawan"6.Masukkan "Username Karyawan" `,
          ],
        },
        {
          judul: "5. Pengaturan Metode Pembayaran",
          desc: "Bagaimana Sih Langkah-Langkah untuk Mengatur atau Menambah Metode Pembayaran ?Halo Sobat Mogi, Ada Beberapa Langkah untuk Pengaturan atau Penambahan Metode Pembayaran Yaitu :",
          point: [
            `Klik Pada Menu "Pengaturan Toko" `,
            `Pilih SubMenu "Metode Pembayaran" `,
            `Pada Halaman Metode Pembayaran akan menampilkan seluruh list Metode Pembayaran `,
            `Klik Tombol "+" di sisi kanan bawah untuk menambah Metode Pembayaran `,
            `Pilih Tipe Pembayaran`,
          ],
        },
      ],
    },
  ];
  let items2 = [
    {
      tittle: "Beranda",
      desc: "Beranda adalah Menu untuk menampilkan ringkasan penjualan, pembelian dan Stok yang ada di toko kamu yang di gambarkan ke dalam bentuk grafik dan angka",
    },
    {
      tittle: "Pembelian",
      desc: "Pembelian adalah Menu untuk melakukan pembelian terhadap suatu barang yang ingin di jual di toko kamu",
    },
    {
      tittle: "Penjualan",
      desc: "Penjualan adalah Menu untuk melakukan penjualan terhadap suatu barang yang ada di toko kamu",
    },
    {
      tittle: "Stok",
      desc: "Stok adalah Menu untuk menampilkan dan menyesuaikan stok suatu barang yang telah kamu beli",
    },
    {
      tittle: "Laporan",
      desc: "Laporan adalah Menu untuk menampilkan Detail transaksi setiap penjualan dan pembelian yang telah kamu input ke dalam aplikasi beserta detail stok yang masuk",
    },
    {
      tittle: "Pengaturan Toko",
      desc: "Pengaturan Toko adalah Menu Tahap Awal untuk mengatur toko kamu, seperti mengubah profil toko kamu, toko yang kamu kelola, barang yang akan dijual, Paket Bundling Barang, Promo, Data Karyawan, Data Pelanggan, Serta metode pembayaran yang kamu akan siapkan untuk pembayaran penjualan",
    },
    {
      tittle: "Kelola Akun",
      desc: "Pengaturan Toko adalah Menu Tahap Awal untuk mengatur toko kamu, seperti mengubah profil toko kamu, toko yang kamu kelola, barang yang akan dijual, Paket Bundling Barang, Promo, Data Karyawan, Data Pelanggan, Serta metode pembayaran yang kamu akan siapkan untuk pembayaran penjualan",
    },
  ];
  let icons = ["1", "2", "3", "4", "5", "6", "7"];
</script>

<main>
  <div class="mx-auto max-w-screen-xl pb-8 rounded-xxl lg:flex lg:h-full">
    <h1 class="text-seccondary text-3xl max-w-full font-bold">FAQ</h1>
  </div>
  <div class=" rounded-xxl mx-28 lg:h-full bg-white">
    <div class="py-6">
      {#each items as item}
        <details
          class="group m-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          <summary
            class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg border-4 border-primary p-4"
          >
            <h2 class="font-extrabold text-lg text-primary">Tutor Aplikasi</h2>
            <svg
              class="h-5 w-5 shrink-0 transition text-end duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <h2 class="mt-4 px-4 text-primary text-2xl font-bold">
            Sering Ditanyakan
          </h2>
          <div class="grid grid-cols-2 px-4 leading-relaxed text-primary">
            <div>
              {#each item.kiri as peng}
                <details
                  class="group py-4 [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary class="flex cursor-pointer items-center">
                    <h2 class="font-extrabold text-lg text-primary text-[14px]">
                      {peng.judul}
                    </h2>
                    <svg
                      class="h-5 w-5 shrink-0 transition text-end duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p class="text-[14px]">
                    {peng.desc}
                  </p>
                  <ul class="list-decimal px-10">
                    {#each peng.point as poin}
                      <li class="leading-relaxed text-primary text-[14px]">
                        {poin}
                      </li>
                    {/each}
                  </ul>
                </details>
              {/each}
            </div>
            <div>
              {#each item.kanan as peng}
                <details
                  class="group py-4 [&_summary::-webkit-details-marker]:hidden"
                  open
                >
                  <summary class="flex cursor-pointer items-center">
                    <h2 class="font-extrabold text-lg text-primary text-[14px]">
                      {peng.judul}
                    </h2>
                    <svg
                      class="h-5 w-5 shrink-0 transition text-end duration-300"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </summary>
                  <p class="text-[14px]">
                    {peng.desc}
                  </p>
                  <ul class="list-decimal px-10">
                    {#each peng.point as poin}
                      <li class="leading-relaxed text-primary text-[14px]">
                        {poin}
                      </li>
                    {/each}
                  </ul>
                </details>
              {/each}
            </div>
          </div>
        </details>
      {/each}
      <h2 class="px-8 text-primary text-2xl font-bold">Kategori</h2>
      {#each items2 as item2}
        <details
          class="details2 group m-6 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary
            class="flex warna cursor-pointer items-center justify-between gap-1.5 rounded-lg border-3 border-primary p-4"
          >
            <h2 class="font-bold text-lg text-primary warna1">
              {item2.tittle}
            </h2>
            <svg
              class="h-5 w-5 shrink-0 transition text-end duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>
          <div class="leading-relaxed text-primary">
            <div class="warna3 px-4 pb-4">
              <p class="font-abeezee italic font-sm">
                {item2.desc}
              </p>
            </div>
            <div class="mx-auto w-1/2 text-center pt-10">
              <p class="text-md">Apakah artikel ini membantu anda ?</p>
              <div class="flex mx-auto justify-center pt-6">
                <button class="mx-4"><img src="/img/like.svg" alt="" /></button>
                <button class="mx-4"
                  ><img src="/img/dislike.svg" alt="" /></button
                >
              </div>
            </div>
          </div>
        </details>
      {/each}
    </div>
    <div class="py-6 mx-96 max-w-screen-xl justify-center lg:flex lg:h-full">
      {#each icons as icon}
        <a href="/1">
          <img
            class="aspect-2/2 bg-contain"
            src={"/img/icon/" + icon + ".svg"}
            alt="icon1"
          />
        </a>
      {/each}
    </div>
  </div>
</main>

<style>
  .details2[open] .warna {
    background-color: #5a5ba7;
    border-radius: 10px 10px 0 0;
    color: #fff;
  }

  .details2[open] .warna3 {
    background-color: #5a5ba7;
    border-radius: 0 0 10px 10px;
    color: #fff;
  }

  .details2[open] .warna1 {
    color: #0ceac6;
  }
</style>
