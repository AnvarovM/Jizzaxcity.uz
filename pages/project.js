import React from 'react'
import Navbar from '../components/Navbar'
import Transition from '../components/Transiton'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['home'])),
      },
    };
  }

const about = () => {
    return (
        <div className='bg-black h-screen w-full'>
            <Transition />
            <Navbar />
        </div>
    )
}

export default about
