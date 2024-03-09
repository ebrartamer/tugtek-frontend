import Image from 'next/image'
import React from 'react'
import Card from '../Card/Card'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  const CardData = [
    {
      title: 'Web & Desktop Uygulama Geliştirme',
      description:
        ' İş ihtiyaçlarınızı karşılamak için profesyonel web ve masaüstü uygulama geliştirme.'
    },
    {
      title: 'IOT Elektronik Tasarım Proje',
      description:
        'Sensörler, mikrodenetleyiciler ve iletişim protokollerini entegre ederek, günlük yaşamı kolaylaştıran ve verimliliği artıran özelleştirilmiş elektronik çözümler'
    },
    {
      title: 'Server Kurulum & Danışmanlık',
      description:
        'İşletmelerin ihtiyaçlarına uygun güvenilir sunucu altyapısı kurulumu sağlıyor, aynı zamanda uzman danışmanlık ile sistemlerini optimize etmelerine destek oluyoruz.'
    }
  ]

  return (
    <div className='bg-[#F9F9FF] flex-col flex justify-center items-center py-4  '>
      <text className='font-bold text-2xl lg:text-4xl bg---Gray-900 my-12'>
        Sunduğumuz Hizmetler
      </text>

      <div className='flex lg:flex-row flex-col lg:space-x-8 lg:space-y-0 space-y-8  w-[80%]'>
        {CardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}

export default Services
