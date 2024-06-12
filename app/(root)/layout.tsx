import { PropsWithChildren } from 'react'

import LeftSidebar from '@/components/LeftSidebar'

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <main>
      <LeftSidebar />
      {children}
      <p className={'text-white-1'}>Right sidebar</p>
    </main>
  )
}
