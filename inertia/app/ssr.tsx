/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />
/// <reference path="../../config/auth.ts" />
import '../css/app.css'



import { NextUIProvider } from '@nextui-org/react'
const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'

export default function render(page:any) {
  return createInertiaApp({
    page,
    title: (title) => `${title} - ${appName}`,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
      return pages[`./pages/${name}.tsx`]
    },
    setup: ({ App, props }) => (
        <NextUIProvider>
        <App {...props} />
      </NextUIProvider>
    ),
  })
}