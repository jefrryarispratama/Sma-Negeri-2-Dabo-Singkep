import Image from 'next/image';
import NewsImgTwo from './images/gambar-2.svg';
import Link from 'next/link';

const NewsCard = () => {
  return (
    <div className="flex flex-col">
      <Image
        className="w-full md:w-[100%] md:h-[350px]  lg:w-[571px] lg:h-[320px] object-cover mb-2"
        src={NewsImgTwo}
        alt="contoh"
      />

      <span className="font-medium text-blue-500">4 Januari 2024</span>
      <h2 className="font-opensans text-lg md:text-xl lg:text-2xl font-semibold mb-2">
        {' '}
        Ada Sekolah Kedinasan Tanpa Syarat Tinggi Badan Lho, Cek di Sini
      </h2>
      <p className="font-montserrat text-sm  lg:text-base mb-2 line-clamp-4">
        Sekolah kedinasan merupakan tinggi yang berada di bawah naungan lembaga
        pemerintahan sebagai penyelenggara pendidikan. Banyak yang ingin
        mengenyam pendidikan di sekolah ini karena sejumlah keuntungan yang
        kelak didapatkan
      </p>

      <Link href={'./berita/slug'}>
        <button
          type="button"
          className="py-2.5 px-[2rem] me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10"
        >
          Baca
        </button>
      </Link>
    </div>
  );
};

export default NewsCard;