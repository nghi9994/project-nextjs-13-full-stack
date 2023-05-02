/**
 * If you want to provide context to different children in the application
 * you have to use client components
 * NOTE: we cannot use those on Server Components
 */
'use client'

import {ThemeProvider} from 'next-themes'
import React, { ReactNode } from 'react'
import {SessionProvider} from 'next-auth/react'

const Providers = ({children}:{children: ReactNode}) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {/* SessionProvider is used for client side authetication for some components */}
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}

export default Providers