"use client";
import { useState } from 'react';
import Image from "next/image";
import Button from '@/components/Button';
import CopyIcon from '@/components/Copy';
import CountdownTimer from '@/components/CountDownTimer';
import InstagramIcon from '@/components/Instagram';
import MapsIcon from '@/components/Maps';
import Alert from '@/components/Alert';
import GiftIcon from '@/components/GIft';
import Form from '@/components/Form';
import { Fade } from 'react-awesome-reveal';
import Sound from '@/components/Sound';

export default function Home() {
  const [showInvitation, setShowInvitation] = useState(false);
  const accounts = [
    { number: '1370238002', name: 'Nurfitri Lianti', image: '/images/Bank.png' }
  ];

  const address = 'Kp. Gunung Masigit rt04 rw01 Desa Cigugur Girang Kec. Parongpong';

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setAlertMessage(type === 'account' ? 'Nomor rekening telah disalin ke clipboard!' : 'Alamat telah disalin ke clipboard!');
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 3000); // Menyembunyikan alert setelah 3 detik
    }, (err) => {
      console.error('Gagal menyalin teks: ', err);
    });
  };

  if (!showInvitation) {
    return (
      <section className={`h-screen`}>
        <div className="absolute top-0 w-full h-full">
          <Image
            width={430}
            height={3000}
            src="/images/foto1.jpg"
            className="object-cover w-full h-full"
            alt='foto1'
          />
        </div> 
        <div className="max-w-7xl h-full mx-auto flex flex-col justify-center relative bg-black/60 text-white text-center">
          <div className="">
            <h3 className="font-elsie text-lg">The Wedding Of</h3>
            <h1 className="font-waterfall text-6xl">Tedi & Nurfitri</h1>
            <p className="font-elsie text-lg">10.01.2025</p>
          </div>
          <div className="mt-5">
            <h3 className="font-elsie text-lg">Kepada Yth: Bapak/Ibu/Saudara/I</h3>
            <h2 className="font-poppins text-2xl mt-4"></h2>
            <button
              onClick={() => setShowInvitation(true)}
              className="font-elsie tex-lg bg-blue-denim px-8 py-3 mt-4 rounded-2xl"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">drafts</span>
                Buka Undangan
              </div>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <Fade damping={0.3} duration={1000}>
      <div className='w-full scroll-smooth'>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center mt-10">
            <h3 className="font-elsie text-lg">Save The Date</h3>
            <Fade damping={0.2} duration={2000}>
              <h1 className="font-waterfall font-medium text-6xl">Tedi & Nurfitri</h1>
            </Fade>
            <p className="font-elsie text-lg">10.01.2024</p>
            <Fade delay={300} direction="up" duration={1500}>
              <CountdownTimer targetDate={'2025-01-10T10:00:00'} />
            </Fade>
          </div>
          <div className='flex flex-col items-center justify-center mt-10'>
            <div className='w-1 h-24 bg-blue-denim'>
            </div>
            <div className="font-elsie text-center my-8">
              <Fade delay={200} direction="down" duration={2000}>
                <span className='text-xl'>
                  اَلسَلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكاَتُه <br />
                  بِسْمِ اللهِ الرَّحمنِ الرَّحِيْمِ <br />
                </span>
              </Fade>
              <Fade delay={300} direction="up" duration={1000}>
                <h2 className="mt-5 text-base mx-3">
                  Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami.
                </h2>
              </Fade>
            </div>
            <div className='w-1 h-24 bg-blue-denim'>
            </div>
          </div>
        </div>
        <Fade delay={200} direction="up" duration={2000}>
          <div className="max-w-7xl mx-auto mt-20 pl-4">
            <div className="flex items-center justify-between">
              <h1 className='text-blue-denim font-poppins uppercase font-bold text-3xl'>Pasangan Mempelai</h1>
              <div className='w-48 h-5 bg-blue-denim'>
              </div>
            </div>
            <h2 className="mt-3 text-base font-normal font-serif text-slate-700">
              &quot; Dan segala sesuatu Kami ciptakan berpasang-pasangan supaya kamu mengingat kebesaran Allah. &quot; <br /> <br />
              Q.S. Az-Zariyat: 49
            </h2>
          </div>
        </Fade>
        <div className="max-w-7xl mx-auto mt-10 pl-4 overflow-hidden">
          <Fade direction="right" duration={2000}>
            <div className="flex items-center justify-between relative mt-10">
              <Image
                width={150}
                height={200}
                src="/images/foto_cewe_new.jpg"
                className="object-cover rounded-md shadow-lg shadow-slate-600"
                alt='Nurfitri'
              />
              <div className="p-3">
                <h1 className='font-waterfall text-5xl'>Nurfitri Lianti, S.Kep. Ners</h1>
                <h3 className='font-serif text-lg mt-3'>Putri Ke-1 Dari Bpk. Dede Nana Supriatna & Ibu Iim Masdiah</h3>
                {/* <Button
                  link='https://www.instagram.com/putrilisdaa/'
                  className='bg-blue-denim mt-5 hover:bg-white transition-all button-wrapper text-white hover:text-blue-denim z-50 group'
                  classNameIcon={<InstagramIcon className={'icon w-6 h-6 fill-blue-denim stroke-white group-hover:fill-white group-hover:stroke-blue-denim'} />}
                >Instagram</Button> */}
              </div>
            </div>
          </Fade>
          <Fade direction="left" duration={2000}>
            <div className="flex items-center justify-between relative mt-[100px]">
              <div className="px-3 pb-10">
                <h1 className='font-waterfall text-5xl'>Tedi Rusmana</h1>
                <h3 className='font-serif text-lg mt-3'>Putra Ke-1 Dari Bpk. Rahmat & Ibu Titin Hayati</h3>
                {/* <Button
                  link='https://www.instagram.com/m_farhan2908/'
                  className='bg-blue-denim mt-5 hover:bg-white transition-all button-wrapper text-white hover:text-blue-denim z-50 group'
                  classNameIcon={<InstagramIcon className={'icon w-6 h-6 fill-blue-denim stroke-white group-hover:fill-white group-hover:stroke-blue-denim'} />}
                >Instagram</Button> */}
              </div>
              <Image
                width={150}
                height={200}
                src="/images/foto_cowo_new.jpg"
                className="object-cover mr-4 rounded-md shadow-lg shadow-slate-600"
                alt='tedi'
              />
            </div>
          </Fade>
        </div>
        <div className="max-w-7xl mx-auto h-auto py-20 mt-10 bg-blue-denim">
          <Fade direction="down" duration={2000}>
            <h1 className='text-white font-waterfall font-bold text-6xl text-center mb-5'>Waktu & Tempat <span className='block'>Pernikahan</span></h1>
          </Fade>
          <Fade direction="down" duration={2000}>
            <div className="bg-white flex flex-col gap-3 py-5 items-center mx-5 mt-5 rounded-xl z-[9999]">
              <h1 className="font-waterfall text-4xl">Akad Nikah & Resepsi</h1>
              <h3 className="font-elsie text-xl">Jum'at, 10 Januari 2025</h3>
              <h3 className="font-elsie text-lg">09:00 WIB - Selesai</h3>
              <div className="w-14 h-14">
                <MapsIcon className={'stroke-blue-denim fill-white cursor-pointer transition-all'} />
              </div>
              <h1 className="font-elsie font-medium text-xl">Kediaman Mempelai Wanita</h1>
              <h1 className='font-elsie font-normal text-base text-center px-4'>
                Kp. Gunung Masigit rt04 rw01 Desa Cigugur Girang Kec. Parongpong
              </h1>
              <Button
                link='https://maps.app.goo.gl/eH8gqCKqAyR8Qdbf9'
                className='bg-blue-denim mt-5 hover:bg-white transition-all button-wrapper text-white hover:text-blue-denim z-50 group'
                classNameIcon={<MapsIcon className={'icon w-6 h-6 fill-blue-denim stroke-white group-hover:fill-white group-hover:stroke-blue-denim'} />}
              >Kunjungi Lokasi</Button>
            </div>
          </Fade>
          {/* <Fade direction="up" duration={1500}>
            <div className="bg-white flex flex-col gap-3 py-5 items-center mx-5 mt-5 rounded-xl z-[9999]">
              <h1 className="font-waterfall text-4xl">Resepsi</h1>
              <h3 className="font-elsie text-xl">Ahad, 7 Juli 2024</h3>
              <h3 className="font-elsie text-lg">11:00 WIB - Selesai</h3>
              <div className="w-14 h-14">
                <MapsIcon className={'stroke-blue-denim fill-white cursor-pointer transition-all'} />
              </div>
              <h1 className="font-elsie font-medium text-xl">Kediaman Mempelai Wanita</h1>
              <h1 className='font-elsie font-normal text-base text-center px-4'>
                Bertempat di Setiabudi Regency jln. Kiara Payung Kp.Sukabaru RT.02 / RW.01 Kec. Parongpong Kab. Bandung Barat &#40;Lapang Volly&#41;
              </h1>
              <Button
                link='https://maps.app.goo.gl/Pj5AfYzDTcvMHQUk7'
                className='bg-blue-denim mt-5 hover:bg-white transition-all button-wrapper text-white hover:text-blue-denim z-50 group'
                classNameIcon={<MapsIcon className={'icon w-6 h-6 fill-blue-denim stroke-white group-hover:fill-white group-hover:stroke-blue-denim'} />}
              >Kunjungi Lokasi</Button>
            </div>
          </Fade> */}
        </div>
        <div className="max-w-7xl mx-auto h-auto pb-32 bg-white relative overflow-hidden">
          {/* <div className="absolute top-0 w-full h-full ">
            <Image
              width={300}
              height={200}
              src="/images/bg-blur.png"
              className="object-cover w-full h-full"
            />
          </div> */}
          <h1 className='text-blue-denim font-bold font-serif text-5xl text-center mt-5'>Momen<span className='block font-waterfall mb-5'>Bahagia Kami</span></h1>
          <h1 className='font-elsie font-normal text-base text-center px-10 mt-12'>Menikah bukan perlombaan, bukan soal cepat atau lambat. Tetapi, siapa yang siap mengemban amanah yang besar</h1>
          <div className="flex items-center justify-center">
          <Image
              width={280}
              height={250}
              src="/images/foto_cewe_cowo.jpg"
              alt='foto_cewe_cowo'
              className='rounded-tl-full rounded-tr-full rounded-b-3xl shadow-md shadow-slate-300 mt-7'
            />
            {/* <Image
              width={300}
              height={250}
              src="/images/full_cowo.png"
              className='-translate-x-10 translate-y-[44px] z-40'
            /> */}
          </div>
          <div className="w-full h-8 bg-blue-denim absolute bottom-0"></div>
        </div>
        <div className="max-w-7xl mx-auto h-auto py-14 bg-blue-denim">
          <Fade direction='down' duration={2000} cascade>
            <h1 className='text-white font-elsie font-normal text-4xl text-center'>Kirim<span className='block'>Hadiah Pernikahan</span></h1>
            <h2 className="text-white font-elsie font-medium text-xl text-center mt-3">Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi kado secara cashless dan kami akan senang hati menerimanya dan tentu semakin melengkapi kebahagiaan kami.</h2>
          </Fade>
          {accounts.map((account, index) => (
            <div key={index} className="bg-white flex flex-col gap-3 py-5 items-center mx-5 mt-5 rounded-xl z-[9999]">
              <Image
                width={100}
                height={100}
                src={account.image}
                alt="Bank"
              />
              <h1 className="font-poppins font-medium text-2xl">{account.number}</h1>
              <h1 className='font-elsie font-normal text-2xl text-center'>a.n {account.name}</h1>
              <Button
                onClick={() => copyToClipboard(account.number, 'account')}
                className='bg-blue-denim mt-5 hover:bg-white transition-all button-wrapper text-white hover:text-blue-denim z-50 group'
                classNameIcon={<CopyIcon className={'icon w-6 h-6 fill-blue-denim stroke-white group-hover:fill-white group-hover:stroke-blue-denim'} />}
              >Salin No. Rek</Button>
            </div>
          ))}
          {alertVisible && (
            <Alert
              message={alertMessage}
              subMessage={alertMessage === 'Nomor rekening telah disalin ke clipboard!' ? 'Silahkan kirim hadiah ke nomor rekening yang telah di salin' : 'Alamat telah disalin ke clipboard!'}
            />
          )}
          <Fade direction="up" duration={2000} cascade>
            <div className="flex flex-col items-center gap-3 mt-5">
              <GiftIcon className={'icon w-16 h-16 fill-blue-denim stroke-white group-hover:fill-white group-hover:stroke-blue-denim'} />
              <h1 className='font-elsie font-normal text-xl text-center text-white px-3'>Kirim Hadiah Fisik</h1>
              <h1 className='font-elsie font-normal text-lg text-center text-white px-3'>{address}</h1>
              <Button
                onClick={() => copyToClipboard(address, 'address')}
                className='bg-white mt-5 hover:bg-blue-denim transition-all button-wrapper text-blue-denim hover:text-white z-50 group mb-4'
                classNameIcon={<CopyIcon className={'icon w-6 h-6 fill-blue-denim stroke-white group-hover:fill-white group-hover:stroke-blue-denim'} />}
              >Salin Alamat</Button>
            </div>
          </Fade>

        </div>
        <div className="max-w-7xl mx-auto h-auto py-10 bg-white">
          <Fade direction="down" duration={2000} cascade>
            <h1 className='text-blue-denim font-bold font-serif text-3xl text-center'>Ucapan & Doa Restu</h1>
            <h1 className='text-blue-denim font-elsie font-normal text-xl text-center px-10 mt-3'>Berikan Doa Terbaik Untuk Momen Bahagia Kami</h1>
          </Fade>
          <Form />
        </div>
        <Sound />
      </div>
    </Fade>
  );
}
