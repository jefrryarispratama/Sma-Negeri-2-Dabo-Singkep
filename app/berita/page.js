import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import newsImgOne from '@/components/images/gambar-1.svg';
import NewsCard from '@/components/NewsCard';
import PageNavigation from '@/components/PageNavigation';

const BeritaPage = () => {
  return (
    <div>
      <section className="max-w-screen-lg w-[90%] mb-5 mx-auto mt-[100px] grid  lg:grid-cols-2 gap-[2rem] lg:gap-[1rem] items-center">
        <Image
          className="w-full lg:w-[571px] lg:h-[320px] object-cover"
          src={newsImgOne}
          alt="gambar-berita-1"
        />

        <div className="flex flex-col w-full">
          <span className="font-medium text-blue-500">4 Januari 2024</span>

          <h1 className="font-opensans text-lg md:text-xl lg:text-3xl font-semibold mb-2">
            {' '}
            Tips Siap Masuk Sekolah Setelah Libur Semester, Jangan Sampai
            Kesiangan!
          </h1>
          <p className="font-montserrat text-sm  lg:text-base mb-2 lg:text-balance line-clamp-4">
            Menghadapi Kembalinya Rutinitas Sekolah: Tips Berharga untuk
            Memastikan Kesiapan Setelah Libur Semester, Mulai dari Menjaga Waktu
            Hingga Memelihara Semangat Belajar agar Tidak Kesiangan.
          </p>

          <Link href="">
            <button
              type="button"
              className="py-2.5 px-[2rem] me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10"
            >
              Baca
            </button>
          </Link>
        </div>
      </section>

      <section className="max-w-screen-lg w-[90%] mx-auto mb-3">
        <div className="mb-5">
          <form>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mb-10">
          <NewsCard />
          <NewsCard />
        </div>

        <div className="flex justify-center">
          <PageNavigation />
        </div>
      </section>
    </div>
  );
};

export default BeritaPage;
