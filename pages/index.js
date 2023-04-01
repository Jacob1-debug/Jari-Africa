import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Afribeads - Handmade Bangles</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        <h1 className="text-5xl font-extrabold text-purple-600">
          <span className="inline-block">Afribeads</span>
        </h1>
        <p className="mt-3 text-base text-gray-500">
          Handmade Bangles for all occasions.
        </p>

        <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
          <div className="bg-gray-100 rounded-lg p-4">
            <Image
              src="/bangle1.jpg"
              alt="Bangle 1"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <Image
              src="/bangle2.jpg"
              alt="Bangle 2"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <Image
              src="/bangle3.jpg"
              alt="Bangle 3"
              width={250}
              height={250}
            />
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <Image
              src="/bangle4.jpg"
              alt="Bangle 4"
              width={250}
              height={250}
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Founders</h2>
          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <Image
                  src="/founder1.jpg"
                  alt="Founder 1"
                  width={250}
                  height={250}
                />
                <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
                  Jane Doe
                </h3>
                <div className="mt-2 text-sm text-gray-500">
                  <a
                    href="https://www.linkedin.com/in/jane-doe/"
                    target="_blank"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadowrounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <Image
                  src="/founder1.jpg"
                  alt="Founder 1"
                  width={250}
                  height={250}
                />
                <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
                  Jane Doe
                </h3>
                <div className="mt-2 text-sm text-gray-500">
                  <a
                    href="https://www.linkedin.com/in/jane-doe/"
                    target="_blank"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
  <div className="px-4 py-5 sm:p-6">
    <h2 className="text-xl font-bold text-gray-800">Meet the Founders</h2>
    <div className="mt-5">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Image
            className="h-16 w-16 rounded-full"
            src="/founder1.jpg"
            alt="Founder 1"
            width={64}
            height={64}
          />
        </div>
        <div className="ml-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Jane Doe
          </h3>
          <p className="text-sm text-gray-500">
            Co-Founder
          </p>
          <div className="mt-2 text-sm text-gray-500">
            <a
              href="https://www.linkedin.com/in/jane-doe/"
              target="_blank"
              className="hover:underline"
            >
              <FontAwesomeIcon icon={faLinkedin} className="mr-1" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Image
              className="h-16 w-16 rounded-full"
              src="/founder2.jpg"
              alt="Founder 2"
              width={64}
              height={64}
            />
          </div>
          <div className="ml-4">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              John Smith
            </h3>
            <p className="text-sm text-gray-500">
              Co-Founder
            </p>
            <div className="mt-2 text-sm text-gray-500">
              <a
                href="https://www.linkedin.com/in/john-smith/"
                target="_blank"
                className="hover:underline"
              >
                <FontAwesomeIcon icon={faLinkedin} className="mr-1" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

<Footer />
</div>
); 

export default Home;
