import Link from 'next/link';
import pictureTwo from './images/gambar-2.svg';
import Image from 'next/image';

export const Card = (props) => {
  return (
    <div>
      <figure className="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
        <Link href={"/berita/slug"}>

          <Image
            className="rounded-md w-full h-[400px] md:h-[300px] lg:h-[400px] object-cover"
            src={pictureTwo}
            alt="image description"
          />
        </Link>
        <figcaption className="absolute px-4 lg:text-lg text-base text-white bottom-6">
          <p className="font-['Open_Sans'] underline underline-offset-4 line-clamp-4">
            <mark>
              Do you want to get notified when a new component is added to
              Flowbite?
            </mark>
          </p>
        </figcaption>
      </figure>
    </div>
  );
};
