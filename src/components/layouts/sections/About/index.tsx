const About = () => {
  return (
    <section
      className="relative flex items-center justify-center px-4 py-20 lg:p-36 min-h-screen border-t-4 border-t-blue-500 dark:border-t-jeruk"
      id="tentang"
    >
      <div>
        <h2 className="text-center text-3xl lg:text-5xl font-bold dark:text-jeruk">
          Tentang
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-24">
          <div className="lg:col-start-2 lg:row-start-1 space-y-7 bg-white/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-white/30 dark:border-gray-600/30 p-16">
            <h3 className="text-3xl font-semibold dark:text-sun">
              Latar{' '}
              <span className="text-blue-500 dark:text-jeruk">Belakang</span>
            </h3>
            <p className="text-lg font-medium text-justify dark:text-sun">
              Pembuatan website ini dilatarbelakangi dengan adanya projekan
              tugas akhir kalkulus yang dilakukan secara berkelompok, dengan
              ketentuan membebaskan setiap kelompok untuk membuat projekan apa
              saja, sebagai contoh membuat aplikasi, website dan lain lain yang
              berhubungan dengan kalkulus dan perkuliahan berbasis IT. Disini
              kelompok kami memutuskan untuk membuat suatu wibesite yang berisi
              tentang materi pembelajaran pada matakuliah kalkulus 1, yaitu
              materi Fungsi.
            </p>
          </div>

          <div className="lg:col-start-1 lg:row-start-2 space-y-7 bg-white/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-white/30 dark:border-gray-600/30 p-16">
            <h3 className="text-3xl font-semibold dark:text-sun">
              Fungsi{' '}
              <span className="text-blue-500 dark:text-jeruk">Website</span>
            </h3>
            <p className="text-lg font-medium text-justify dark:text-sun">
              Website ini berfungsi sebagai media digital yang mampu meyediakan
              informasi materi fungsi Kakulus 1 secara lengkap, yang apat di
              akses secara cepat, mudah diakses kapan saja dan dimana saja.
              Website ini juga sebagai sarana pembelajaran kepada mahasiswa yang
              memiliki matakuliah kakulus 1 yaitu materi fungsi. Selain itu,
              website ini juga memiliki kalkulator, yang memiliki fitur yang
              lengkap untuk menghitung sebuah fungsi dan dikalkulator di website
              ini juga bisa bisa membuatkan suatu grafik fungsi yang bisa kalian
              pakai sebagai pengecekan grafik dan membuat grafik dari suatu
              fungsi yang kalian input pada kalkulator.
            </p>
          </div>

          <div className="lg:col-start-2 lg:row-start-3 space-y-7 bg-white/20 dark:bg-gray-600/20 backdrop-blur-md rounded-xl border-2 border-white/30 dark:border-gray-600/30 p-16">
            <h3 className="text-3xl font-semibold dark:text-sun">
              Ada <span className="text-blue-500 dark:text-jeruk">Apa</span>{' '}
              Saja di sini?
            </h3>
            <p className="text-lg font-medium text-justify dark:text-sun">
              Di website ini terdapat suatu informasi yang dapat user cari
              dengan cara yang mudah, cepat dan dapat di akses dimana saja.
              Untuk mahasiswa atau siswa yang mendapatkan kesulitan dalam
              memahami materi fungsi dalam perkuliahan atau dalam kelas. Di
              website ini kalian akan mendapatkan sebuah pejelasan materi, rumus
              rumus apa saja yang ada pada materi fungsi, contoh grafik, dan
              contoh soal. Selain itu juga terdapat kalkulator yang dapat
              menunjang pembelajaran padamateri fungsi. Website ini juga
              menyediakan latihan soal yang berupa pilihan ganda berikut dengan
              kunci jawaban dan pembahasannya.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
