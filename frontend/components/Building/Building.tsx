import Image from 'next/image'
import 'aos/dist/aos.css'


const CardData = [
  {
    title: 'Build the right team to scale',
    text: 'Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers. Our delivery model helps you cut costs and deliver within budget.',
    quote:
      'Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules',
    image: '/images/Rectangle17.png',
    profile: '/images/Ellipse1.png',
    name: 'Neil Sims',
    role: 'CEO',
    animation: 'fade-up'
  },
  {
    title: 'Build the right team to scale',
    text: 'Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers. Our delivery model helps you cut costs and deliver within budget.',
    quote:
      'Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules',
    image: '/images/Rectangle18.png',
    profile: '/images/Ellipse2.png',
    name: 'Neil Sims',
    role: 'CEO',
    animation: 'fade-down'
  },
  {
    title: 'Build the right team to scale',
    quote:
      'Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules',
    text: 'Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers. Our delivery model helps you cut costs and deliver within budget.',
    image: '/images/Rectangle19.png',
    profile: '/images/Ellipse3.png',
    name: 'Neil Sims',
    role: 'CEO',
    animation: 'fade-up'
  }
]

const Building = () => {

  return (
    <div className='grid lg:grid-flow-row  gap-16 lg:px-32 px-8'>
      {CardData.map((card, index) => (
        <div
          data-aos-duration='3000'
          key={index}
          className={`flex w-full lg:flex-row flex-col justify-around  items-center bg-gray-100 rounded hover:bg-gray-50 px-2
          ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
          `}
        >
          <Image
            className='rounded-t-lg md:rounded-none md:rounded-s-lg'
            src={card.image}
            width={400}
            height={400}
            alt='Card Image Alt Text'
          />
          <div className='flex flex-col justify-between p-4 leading-normal w-full'>
            <p className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
              {card.title}
            </p>
            <div className='mb-3 font-normal text-balance text-gray-700 dark:text-gray-400'>
              {card.text} <br /> <br />
              <span className='text-fuchsia-600 italic font-medium pl-2 border-fuchsia-700 border-l-2'>
                {card.quote}
              </span>
              <div className='w-full p-2'>
                <div className='flow-root'>
                  <ul role='list' className='divide-y divide-gray-200 '>
                    <li className='py-2'>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0'>
                          <Image
                            width={80}
                            height={80}
                            className=' rounded-full'
                            src={card.profile}
                            alt='Neil image'
                          />
                        </div>
                        <div className='flex-1 min-w-0'>
                          <p className='text-sm font-medium text-gray-900 truncate '>
                            {card.name}
                          </p>
                          <p className='text-sm text-gray-500 truncate '>
                            {card.role}
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Building
