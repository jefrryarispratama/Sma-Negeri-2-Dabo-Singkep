import Image from 'next/image';
import picsOne from '@/components/images/gambar-1.svg';
import picsTwo from '@/components/images/gambar-2.svg';
import picsThree from '@/components/images/gambar-3.svg';
const page = () => {
  return (
    <div>
      <section className="my-[65px]">
        <h1 className="text-2xl lg:text-3xl font-bold text-center mt-[10rem] mb-[4rem]">
          Harmoni Ilmu dan Dedikasi
          <br />
          Kecemerlangan Bersama SMAN 2 Dabo Singkep
        </h1>
        <Image
          src={picsOne}
          className="w-full mb-10"
          alt="fasilitas-sekolah"
        />
      </section>

      <section className="w-[80%] md:w-[70%] lg:w-[60%] mx-auto border-b-2">
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-center mb-5">
            Histori Dibalik Sekolah Berprestasi dan Gemilang
          </h2>
          <p className="mb-10 text-sm md:text-base">
            SMA Negeri 2 Dabo Singkep, atau yang lebih dikenal dengan nama SMAN
            2 Singkep, adalah sebuah sekolah menengah atas negeri yang terletak
            di Kota Dabo Singkep, Kabupaten Lingga, Kepulauan Riau. Sekolah ini
            didirikan pada tahun 1991, berdasarkan Surat Keputusan Menteri
            Pendidikan dan Kebudayaan Republik Indonesia Nomor 0283/0/1991
            tanggal 1 Januari 1991.
            <br />
            <br />
            Sebelum berdirinya SMAN 2 Singkep, pendidikan menengah atas di
            Kabupaten Lingga hanya tersedia di SMAN 1 Dabo Singkep. Hal ini
            menyebabkan banyak lulusan SMP di Kabupaten Lingga yang tidak dapat
            melanjutkan pendidikan ke jenjang SMA karena keterbatasan kuota
            penerimaan siswa baru di SMAN 1 Dabo Singkep.
            <br />
            <br />
            Pada tahun 1990, pemerintah Kabupaten Lingga mulai merencanakan
            pendirian sekolah menengah atas baru di Kabupaten Lingga. Rencana
            tersebut disetujui oleh pemerintah pusat dan akhirnya pada tahun
            1991, SMAN 2 Singkep resmi berdiri.
          </p>

          <Image
            width={100}
            height={100}
            src={picsTwo}
            className="w-full mb-5"
            alt="gambar murid sekolah"
          />

          <p className="text-sm md:text-base mb-5">
            Pada awal berdirinya, SMAN 2 Singkep hanya memiliki dua ruang kelas
            dan lima tenaga pengajar. Jumlah siswanya pun hanya sekitar 40
            orang. Namun, seiring berjalannya waktu, jumlah siswa dan tenaga
            pengajar di SMAN 2 Singkep terus bertambah.
            <br />
            <br />
            Pada tahun 2002, SMAN 2 Singkep mulai menerapkan Kurikulum Berbasis
            Kompetensi (KBK). Hal ini diikuti dengan peningkatan sarana dan
            prasarana sekolah. Pada tahun 2005, SMAN 2 Singkep mulai menerapkan
            Kurikulum Tingkat Satuan Pendidikan (KTSP).
            <br />
            <br />
            Pada tahun 2013, SMAN 2 Singkep menjadi salah satu pilot project
            penerapan Kurikulum 2013 di Kabupaten Lingga. Hal ini diikuti dengan
            peningkatan kualitas pendidikan di SMAN 2 Singkep.
          </p>

          <div className="flex flex-col gap-1 w-full md:flex-row mb-10">
            <Image
              width={100}
              height={100}
              src={picsTwo}
              className="w-full md:w-[50%]"
              alt="gambar sekolah 1"
            />
            <Image
              width={100}
              height={100}
              src={picsTwo}
              className="w-full md:w-[50%]"
              alt="gambar sekolah 2"
            />
          </div>
          <p className="mb-10 text-sm md:text-base">
            Saat ini, SMAN 2 Singkep memiliki 12 ruang kelas, 24 tenaga
            pengajar, dan sekitar 600 siswa. SMAN 2 Singkep telah menghasilkan
            banyak lulusan yang berhasil melanjutkan pendidikan ke perguruan
            tinggi dan berkarir di berbagai bidang.
            <br />
            <br />
            SMAN 2 Singkep telah menjadi salah satu sekolah menengah atas
            ternama di Kabupaten Lingga. Sekolah ini telah banyak berkontribusi
            dalam meningkatkan kualitas pendidikan di Kabupaten Lingga.
          </p>
        </div>
      </section>
    </div>
  );
};

export default page;
