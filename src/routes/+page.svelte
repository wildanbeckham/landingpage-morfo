<script>
  import Daftar from "../Components/HomePage/daftar.svelte";
  import Fitur from "../Components/HomePage/fitur.svelte";
  import Hero from "../Components/HomePage/hero.svelte";
  import Kustomisasi from "../Components/HomePage/kustomisasi.svelte";
  import Langganan from "../Components/HomePage/langganan.svelte";
  import Layanan from "../Components/HomePage/layanan.svelte";
  import Pelayanan from "../Components/HomePage/pelayanan.svelte";
  import Solusi from "../Components/HomePage/solusi.svelte";
  import Whyus from "../Components/HomePage/whyus.svelte";
  import Navbar from "../Components/navbar.svelte";
  import "../app.css";
</script>

<main>
  <Navbar />
  <Hero />
  <Whyus />
  <Solusi />
  <Layanan />
  <Pelayanan />
  <Fitur />
  <Daftar />
  <Kustomisasi />
  <Langganan />
</main>
