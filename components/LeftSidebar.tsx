'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { routes, sidebarNavLinks } from '@/constants'
import { cn } from '@/lib/utils'

import Each from './Each'

const LeftSidebar = () => {
  const pathname = usePathname()

  return (
    <section className={'left_sidebar'}>
      <nav className={'flex flex-col gap-6'}>
        <Link
          href={routes.Home}
          className={'flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center'}
        >
          <Image src={'/icons/logo.svg'} alt={'logo'} width={24} height={24} />
          <h1
            className={
              'text-24 font-extrabold text-white max-lg:hidden bg-gradient-to-tr from-purple-500 to-orange-500 bg-clip-text text-transparent'
            }
          >
            {'Podkast'}
          </h1>
        </Link>

        <Each
          of={sidebarNavLinks}
          render={({ route, icon, label }) => {
            const isActiveRoute = pathname === route ?? pathname.startsWith(`${route}/`)

            return (
              <Link
                href={route}
                className={cn(
                  'flex cursor-pointer items-center gap-3 py-4 max-lg:px-4 justify-center lg:justify-start hover:bg-gradient-to-r from-black-5 to-orange-500',
                  { 'bg-nav-focus border-r-4 border-orange-1': isActiveRoute },
                )}
              >
                <Image src={icon} width={24} height={24} alt={route} />
                <label className={'hover:cursor-pointer'}>{label}</label>
              </Link>
            )
          }}
        />
      </nav>
    </section>
  )
}

export default LeftSidebar
