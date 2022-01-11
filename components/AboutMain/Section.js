import { useRouter } from 'next/router'
import React from 'react'

const Section = () => {
    const router = useRouter()
    return (
        <div>
            <div className='container mx-auto my-10 md:my-24'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-0'>
                    <div className='text-[#333] space-y-4 md:space-y-6 text-lg font-medium md:mt-20'>
                        <h1 className='text-2xl font-medium'>Biz kimmiz?</h1>
                        <strong className='text-4xl md:text-5xl font-semibold'>Qurlish Kompaniya</strong>
                        
                        <p>Jizzax city - majmuali aqlli shaharlarni yaratishga ixtisoslashgan strategik developerlik tashkiloti. O‘zbekistonga alohida e'tibor qaratgan holda, rivojlanayotgan bozorlarda premium darajadagi aqlli shaharlarni rivojlantirish va sarmoyalar tashkilotning asosiy vazifasi sanaladi. Biz iqtisodiy qadriyatlar yaratish bilan bir vaqtda ko‘chmas mulkdagi innovasion va yuqori sifatli mahsulotlarimiz tufayli turmush darajasini oshirishga yordam beramiz</p>

                        <p>Qadriyatlarning mustahkam poydevoriga asoslangan va mas`uliyatli korporativ fuqaro sifatidagi tashkilot — Jizzax city o‘z biznesini rivojlantirishda jamiyatning qanday rol o‘ynashini yaxshi biladi. Natijada, tashkilot ijtimoiy muammolarni hal etish uchun qishloq joylariga alohida e`tibor qaratgan holda, ijtimoiy himoya tizimini rivojlantirish bo‘yicha kompleks strategiyani qabul qildi. Jizzax city dasturini yaratdi, bu ta`lim va savodxonlik, turizm, oziq-ovqat, xavfsizlik, tadbirkorlikdan tortib va boshqa ko‘plab sohalargacha ijtimoiy muammolarni doimiy ravishda hal qilishga qaratilgan jamoalar rivojlanishining </p>

                        <button onClick={() => router.push('/contact')} className="hidden md:block text-xl font-medium hover:bg-white hover:bg-opacity-20 hover:backdrop-filter hover:backdrop-blur-md py-4 px-6 border border-gray-600 tracking-wider">Aloqaga chiqish</button>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/dbfeb768784309.5b69773d32071.jpg" className='w-full md:w-[85%] h-[22rem] md:h-[90%] md:mt-20 rounded-2xl object-cover' alt="" />
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/18be2720062597.562e4e0a658b6.jpg" className='hidden lg:block w-[85%] h-[22rem] md:h-[90%] rounded-2xl object-cover sticky self-start top-30' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section
