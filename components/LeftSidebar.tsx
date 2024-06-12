import Image from 'next/image'
import Link from 'next/link'

import { routes } from '@/constants'

const LeftSidebar = () => {
  return (
    <section className={'left_sidebar'}>
      <nav className={'flex flex-col gap-6'}>
        <Link
          href={routes.Home}
          className={'flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'}
        >
          <Image src={'/icons/logo.svg'} alt={'logo'} width={24} height={24} />
          <h1 className={'text-24 font-extrabold text-white max-lg:hidden'}>{'Podkast'}</h1>
        </Link>
      </nav>
    </section>
  )
}

export default LeftSidebar
