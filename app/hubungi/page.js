'use client';
import Image from 'next/image';
import globeImg from '@/components/images/globe.jpg';
import { Label, TextInput, Textarea } from 'flowbite-react';

const HubungiPage = () => {
  

  return (
    <div className="grid lg:grid-cols-2 my-auto">
      <section className="mb-10 lg:mb-0">
        <Image
          src={globeImg}
          className="h-[360px] w-full object-cover lg:h-full lg:w-full"
          alt="globe"
          style={{
            width: '100%',
          }}
        />
      </section>

      <section className="flex flex-col self-center mb-8">
        <div>
          <h1 className="w-[90%] md:w-[450px] font-opensans mx-auto font-bold text-base md:text-2xl mb-3">
            - Sampaikan Pendapat atau Pertanyaan Anda melalui kusioner dibawah
            ini -
          </h1>
          <form
            className="w-[90%] md:w-[450px] mx-auto"
          >
            <div className="mb-5">
              <div className="mb-2 block">
               
              </div>
              <TextInput
                id="base"
                type="text"
                sizing="md"
              />
            </div>
            <div className="mb-5">
              <div className="mb-2 block">
                <Label
                  htmlFor="email2"
                  value="Email"
                />
              </div>
              <TextInput
                id="email2"
                type="email"
                placeholder="name@flowbite.com"
                shadow
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="phone-input"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nomor Telepon
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 19 18"
                  >
                    <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  id="phone-input"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="123-456-7890"
                />
              </div>
            </div>

            <div className="mb-4">
              <div className="mb-2 block">
                <Label
                  htmlFor="comment"
                  value="Your message"
                />
              </div>
              <Textarea
                id="comment"
                placeholder="Leave a comment..."
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Kirim
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HubungiPage;
