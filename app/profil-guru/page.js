import picsOne from '@/components/images/gambar-1.svg';
import Image from 'next/image';
const ProfilGuruPage = () => {
  return (
    <div>
      <section className="max-w-screen-lg w-[90%] mb-[4.5rem] mx-auto mt-[100px] border-b-2 pb-10">
        <div className="mb-10">
          <h1 className="font-opensans text-lg md:text-xl lg:text-4xl font-semibold mb-2 text-center">
            Profil Guru
          </h1>
          <span className="font-montserrat text-sm  lg:text-base mb-2 flex justify-center text-center">
            {' '}
            Perkenalkan guru-guru yang aktif pada SMAN 2 Dabo Singkep
          </span>
        </div>

        <div className="w-full mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <figure>
            <Image
              className="h-[306px] w-full object-cover rounded"
              src={picsOne}
              alt="image description"
            />
            <figcaption className="font-semibold text-xl block mb-1">
              {' '}
              Kepala Sekolah
            </figcaption>
            <figcaption>Frans Edwinata</figcaption>
          </figure>
          <figure>
            <Image
              className="h-[306px] w-full object-cover rounded"
              src={picsOne}
              alt="image description"
            />
            <figcaption className="font-semibold text-xl block mb-1">
              {' '}
              Wakil Kepala Sekolah
            </figcaption>
            <figcaption>Frans Edwinata</figcaption>
          </figure>
          <figure>
            <Image
              className="h-[306px] w-full object-cover rounded"
              src={picsOne}
              alt="image description"
            />
            <figcaption className="font-semibold text-xl block mb-1">
              {' '}
              Sekretaris
            </figcaption>
            <figcaption>Frans Edwinata</figcaption>
          </figure>
        </div>
      </section>

      <section className="lg:max-w-screen-lg w-[90%] mx-auto mb-[4.5rem] ">
        <h2 className="font-opensans text-lg md:text-xl lg:text-4xl font-semibold mb-2 text-center">
          {' '}
          Beri Kami Pertanyaan
        </h2>
        <p className="font-montserrat text-sm  lg:text-base mb-2 flex justify-center text-center">
          Jika tidak terdapat jawaban yang kamu dapatkan di atas, silahkan klik
          tombol dibawah ini untuk informasi yang lebih lanjut
        </p>

        <div className="flex justify-center">
          <a href="#">
            <button
              type="button"
              className="py-2.5 px-5  mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
            >
              Hubungi Kami
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProfilGuruPage;
