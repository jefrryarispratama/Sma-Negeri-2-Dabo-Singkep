import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/Card';
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from 'flowbite-react';
import picsOne from '@/components/images/gambar-1.svg';
import picsTwo from '@/components/images/gambar-2.svg';
import picsThree from '@/components/images/gambar-3.svg';
import picsFour from '@/components/images/gambar-4.svg';
import teacherImg from '@/components/images/profil-guru.svg';
import stationaryImage from '@/components/images/student-stationary.svg';

const Home = () => {
  return (
    <div>
      <section className="lg:max-w-screen-lg w-[90%] mx-auto grid md:grid-cols-2 mt-[130px] mb-[65px] gap-2">
        <div className="self-center	justify-self-center lg:w-[90%]">
          <div className="order-last md:order-first text-center md:text-left">
            <h1 className="font-opensans text-4xl lg:text-5xl font-semibold mb-2 transition duration-150 hover:text-green-500">
              SMA NEGERI 2 DABO SINGKEP
            </h1>
            <p className="font-montserrat text-base lg:text-lg mb-5 text-balance">
              Sekolah Unggul, Berprestasi, dan berkarakter Ayo jelajahi terlebih
              dalam mengenai sekolah kita!
            </p>

            <Link href="#">
              <button
                type="button"
                className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
              >
                Lihat Sekarang
              </button>
            </Link>
          </div>
        </div>

        <Image
          className="w-full order-first md:order-last mb-5"
          src={stationaryImage}
          alt="ilustrasi gambar student-stationary"
          priority
        />
      </section>

      <section className="lg:max-w-screen-lg w-[90%] mx-auto mb-[40px]">
        <h2 className="font-opensans text-3xl lg:text-4xl font-semibold mb-2 text-center transition duration-150 hover:text-green-500">
          Berita Terkini
        </h2>
        <p className="font-montserrat text-base text-center lg:text-lg text-balance mb-5">
          Baca berita terkini terkait dengan sekolah kami!
        </p>

        <div className="grid justify-center md:grid-cols-3 gap-3 mb-5">
          <Card />
          <Card />
          <Card />
        </div>

        <div>
          <p className="font-montserrat text-center mb-3">
            Temukan banyak lagi berita menarik lainnya dibawah ini
          </p>

          <div className="flex justify-center">
            <Link href={'/berita'}>
              <button
                type="button"
                className="py-2.5 px-[30px] text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
              >
                Selengkapnya
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="lg:max-w-screen-lg w-[90%] mx-auto mb-[30px]">
        <h2 className="font-opensans text-3xl lg:text-4xl font-semibold mb-2 text-center">
          Sarana dan Prasarana
        </h2>
        <p className="font-montserrat text-sm text-center lg:text-lg text-balance mb-5">
          Lihatlah sarana dan prasarana yang diberikan oleh kami
        </p>

        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-4 mb-5">
          <Image
            className="w-full md:col-span-2 lg:col-span-3 h-[306px] object-cover"
            src={picsOne}
            alt="Gambar Sekolah 1"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <Image
            className="w-full md:col-span-2 lg:col-span-1 h-[306px] object-cover"
            src={picsTwo}
            alt="Gambar Sekolah 2"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <Image
            className="w-full md:col-span-2  lg:col-span-2 h-[306px] object-cover"
            src={picsThree}
            alt="Gambar Sekolah 3"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
          <Image
            className="w-full md:col-span-2 lg:col-span-2 h-[306px] object-cover"
            src={picsFour}
            alt="Gambar Sekolah 4"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-2">
          <div className="mb-5">
            <h3 className="font-opensans text-center sm:text-left text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2">
              Fasilitas Sekolah
            </h3>
            <p className="font-montserrat text-sm text-center sm:text-left lg:text-md mb-2 text-balance line-clamp-4	">
              Kami berkomitmen memberikan pendidikan berkualitas dan fasilitas
              yang mendukung perkembangan siswa. Lingkungan nyaman dan
              inspiratif kami mendukung pengalaman belajar yang luar biasa.
            </p>

            <div className="flex justify-center sm:inline">
              <Link href="#">
                <button
                  type="button"
                  className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
                >
                  Lihat Sekarang
                </button>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-opensans text-2xl sm:text-3xl lg:text-4xl text-center sm:text-left font-semibold mb-2">
              Kegiatan Sekolah
            </h3>

            <p className="font-montserrat text-sm text-center sm:text-left lg:text-md mb-2 line-clamp-4	">
              Dengan tekad kami, kami berupaya memperbaiki pengalaman belajar
              siswa dengan mengintegrasikan kurikulum yang relevan dengan metode
              pengajaran terkini, sehingga membantu mereka mencapai potensi
              penuh.
            </p>

            <div className="flex justify-center sm:inline">
              <Link href="#">
                <button
                  type="button"
                  className="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
                >
                  Lihat Sekarang
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:max-w-screen-lg w-[90%] mx-auto mb-[100px]">
        <Image
          className="mb-5"
          src={teacherImg}
          alt="profil-guru"
          width={'auto'}
          height={'auto'}
        />
        <h2 className="font-opensans text-3xl lg:text-4xl font-semibold text-center mb-3">
          Profil Guru
        </h2>
        <p className="font-montserrat text-base text-center lg:text-lg mb-5">
          Kami berkomitmen memberikan pendidikan berkualitas dan fasilitas yang
          mendukung perkembangan siswa. Lingkungan nyaman dan inspiratif kami
          mendukung pengalaman belajar yang luar biasa.
        </p>

        <div className="flex justify-center">
          <Link href={'/profil-guru'}>
            <button
              type="button"
              className="py-2.5 px-5  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
            >
              Lihat Sekarang
            </button>
          </Link>
        </div>
      </section>

      <section className="lg:max-w-screen-lg w-[90%] mx-auto mb-[100px]">
        <h2 className="font-opensans text-3xl lg:text-4xl font-semibold mb-5 text-center">
          Pertanyaan Umum
        </h2>

        <div>
          <Accordion>
            <AccordionPanel>
              <AccordionTitle>
                Bagaimana cara mendaftar ke sekolah ini?
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to&nbsp;
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    get started&nbsp;
                  </a>
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>
                Apa saja fasilitas yang tersedia di sekolah ini?
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>
                    <a
                      href="https://flowbite.com/pro/"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionPanel>
            <AccordionPanel>
              <AccordionTitle>
                Apa saja program akademik yang ditawarkan oleh sekolah ini?
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the
                  <a
                    href="https://flowbite.com/figma/"
                    className="text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Figma design system
                  </a>
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
                </p>
              </AccordionContent>
            </AccordionPanel>

            <AccordionPanel>
              <AccordionTitle>
                Apakah ada kegiatan ekstrakurikuler yang tersedia di sekolah
                ini?
              </AccordionTitle>
              <AccordionContent>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>
                    <a
                      href="https://flowbite.com/pro/"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>
      </section>

      <section className="lg:max-w-screen-lg w-[90%] mx-auto mb-[30px]">
        <h2 className="font-['Open_Sans'] text-3xl lg:text-4xl font-semibold mb-5 text-center">
          {' '}
          Beri Kami Pertanyaan
        </h2>
        <p className="font-['Montserrat'] text-base text-center lg:text-lg text-pretty mb-5">
          Jika tidak terdapat jawaban yang kamu dapatkan di atas, silahkan klik
          tombol dibawah ini untuk informasi yang lebih lanjut
        </p>

        <div className="flex justify-center">
          <Link href="#">
            <button
              type="button"
              className="py-2.5 px-5  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
            >
              Hubungi Kami
            </button>
          </Link>
        </div>
      </section>

      <section className="lg:max-w-screen-lg w-[90%] mx-auto mb-[30px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.674979492955!2d104.5598613!3d-0.4856768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e271bc55d4f1797%3A0xcc8394f80dcbdb28!2sSMA%20Negeri%202%20Singkep!5e0!3m2!1sen!2sid!4v1704784474437!5m2!1sen!2sid"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};

export default Home;
