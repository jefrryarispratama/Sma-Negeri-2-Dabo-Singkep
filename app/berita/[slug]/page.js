import Image from 'next/image';
import teacherImg from '@/components/images/profil-guru.svg';
import logoImg from '@/components/images/sma-negeri-2-dabo-singkep.svg';
import copyImg from '@/components/images/copy.svg';

const BacaBeritaPage = () => {
  return (
    <section className="max-w-screen-lg w-[90%] mb-[4.5rem] mx-auto mt-[100px]">
      <div className="text-center w-full mb-3">
        <span className="justify-center flex mb-3 text-sm font-semibold font-['Montserrat'] text-blue-500">
          1 Januari, 2024
        </span>
        <h1 className="font-['Open_Sans'] text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-6">
          Tips Siap Masuk Sekolah Setelah Libur Semester, Jangan Sampai
          Kesiangan!
        </h1>
        <div className="w-full md:w-[80%] mx-auto mb-4">
          <p className="font-['Montserrat'] text-sm  lg:text-base mb-2 flex justify-center text-center">
            Menghadapi Kembalinya Rutinitas Sekolah: Tips Berharga untuk
            Memastikan Kesiapan Setelah Libur Semester, Mulai dari Menjaga Waktu
            Hingga Memelihara Semangat Belajar agar Tidak Kesiangan
          </p>
        </div>

        <Image
          className="w-full"
          src={teacherImg}
          width={100}
          height={100}
          alt="gambar-berita"
        />
      </div>

      <div className="flex justify-between items-center mb-10">
        <div className="flex gap-2">
          <div>
            <Image
              className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px] rounded-full border object-cover"
              src={logoImg}
              alt="logo sekolah"
            />
          </div>

          <div className="flex flex-col">
            <span className="block text-sm  lg:text-base font-bold font-['Open_Sans'] mt-1">
              Admin Sekolah
            </span>
            <span className="font-['Montserrat'] text-xs">1 Januari, 2024</span>
          </div>
        </div>

        <div>
          <button
            type="button"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-1"
          >
            <div className="inline-flex gap-2 items-center mt-1">
              <Image
                src={copyImg}
                className="h-5 w-5 lg:h-7 lg:w-7"
                alt="copy link"
              />
              <span className="hidden sm:flex">Copy Link</span>
            </div>
          </button>
        </div>
      </div>

      <div className="grid mx-auto md:w-[80%] lg:w-full lg:grid-cols-[58%_39%] justify-between">
        <article className="mb-5">
          <p className="text-pretty font-['Montserrat'] text-sm leading-normal">
            Jakarta - Libur semester ganjil akan berakhir sebentar lagi. Sebelum
            masuk sekolah, intip tips menyiapkan masuk sekolah setelah libur
            semester di bawah ini.Libur semester ganjil biasanya dimulai pada
            Hari Natal hingga setelah tahun baru. Meski lebih singkat dari libur
            semester genap, kamu bisa menghabiskannya dengan berlibur keluar
            kota atau di rumah saja.
            <br />
            <br />
            Setelah menghabiskan waktu untuk mengistirahatkan diri dari
            tugas-tugas sekolah, kamu juga perlu bersiap sebelum memulai
            semester baru. Melansir dari laman BPK Penabur Tips Siap Masuk
            Sekolah Setelah Libur Semester1. Makan Makanan yang Bergizi
            <br />
            <br />
            Masuk sekolah nanti kamu akan kembali dihadapkan dengan jadwal yang
            padat. Maka dari itu, penting untuk menjaga kesehatan dengan makan
            makanan yang bergizi.Kamu juga bisa mengonsumsi vitamin dan
            berolahraga. Siapkan tubuhmu agar siap menghadapi hari-hari
            sekolah.2. Latih Tidur TeraturTerkadang, jam tidur jadi tidak
            teratur selama liburan. Nah, sekarang saatnya untuk memperbaiki jam
            tidurmu.
            <br />
            <br />
            Usahakan untuk tidur 6-8 jam perhari. Selain itu, jauhkan mata dari
            handphone atau layar agar tidur lebih nyenyak.3. Siapkan Seragam dan
            Buku PelajaranTerakhir, cek jadwal dan siapkan buku pelajaran yang
            akan dibawa besok.
            <br />
            <br />
            Jangan lupa untuk menyiapkan seragam yang akan dipakai.Itulah tips
            siap masuk sekolah setelah libur semester. Kapan waktu masuk sekolah
            di daerahmu? Cek jadwal masuk sekolah semester genap di 38 provinsi
            seperti dilansir dari Kalender Akademiknya berikut ini.
            <br />
            <br />
            Baca artikel detikedu, "Tips Siap Masuk Sekolah Setelah Libur
            Semester, Jangan Sampai Kesiangan!" selengkapnya
            https://www.detik.com/edu/sekolah/d-7118745/tips-siap-masuk-sekolah-setelah-libur-semester-jangan-sampai-kesiangan.Download
            Apps Detikcom Sekarang https://apps.detik.com/detik/
          </p>
        </article>
        <div>
          <h2 className="font-bold text-xl mb-5">Berita Lainnya</h2>

          <div className=" grid md:grid-cols-2 lg:grid-cols-1 gap-5">
            <div className="border-b-2 py-2">
              <h3 className="font-bold line-clamp-3 font-['Open_Sans'] mb-1">
                Catatan Akhir Tahun Pendidikan 2023, FSGI: Kasus Bullying
                Meningkat
              </h3>
              <p className="font-['Montserrat'] text-sm mb-2">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Selengkapnya
              </button>
            </div>

            <div className="border-b-2 py-2">
              <h3 className="font-bold line-clamp-3 font-['Open_Sans'] mb-1">
                Catatan Akhir Tahun Pendidikan 2023, FSGI: Kasus Bullying
                Meningkat Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quibusdam magni sapiente, nihil inventore voluptatum qui
                sit tenetur. Dignissimos quidem rerum, explicabo, esse
                voluptatibus vitae quod ab voluptas autem deleniti neque?
              </h3>
              <p className="font-['Montserrat'] text-sm mb-2 line-clamp-3">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Similique, reiciendis vel!
                Labore eius assumenda nihil, magnam numquam recusandae corrupti
                inventore sapiente eveniet facilis illo, placeat earum!
                Blanditiis repudiandae alias tempore.
              </p>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Selengkapnya
              </button>
            </div>

            <div className="border-b-2 py-2">
              <h3 className="font-bold line-clamp-3 font-['Open_Sans'] mb-1">
                Catatan Akhir Tahun Pendidikan 2023, FSGI: Kasus Bullying
                Meningkat Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quibusdam magni sapiente, nihil inventore voluptatum qui
                sit tenetur. Dignissimos quidem rerum, explicabo, esse
                voluptatibus vitae quod ab voluptas autem deleniti neque?
              </h3>
              <p className="font-['Montserrat'] text-sm mb-2 line-clamp-3">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Similique, reiciendis vel!
                Labore eius assumenda nihil, magnam numquam recusandae corrupti
                inventore sapiente eveniet facilis illo, placeat earum!
                Blanditiis repudiandae alias tempore.
              </p>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Selengkapnya
              </button>
            </div>

            <div className="border-b-2 py-2">
              <h3 className="font-bold line-clamp-3 font-['Open_Sans'] mb-1">
                Catatan Akhir Tahun Pendidikan 2023, FSGI: Kasus Bullying
                Meningkat Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quibusdam magni sapiente, nihil inventore voluptatum qui
                sit tenetur. Dignissimos quidem rerum, explicabo, esse
                voluptatibus vitae quod ab voluptas autem deleniti neque?
              </h3>
              <p className="font-['Montserrat'] text-sm mb-2 line-clamp-3">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Similique, reiciendis vel!
                Labore eius assumenda nihil, magnam numquam recusandae corrupti
                inventore sapiente eveniet facilis illo, placeat earum!
                Blanditiis repudiandae alias tempore.
              </p>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
              >
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BacaBeritaPage;
