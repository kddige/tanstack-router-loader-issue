/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as appLayoutImport } from './routes/(app)/_layout'
import { Route as appLayoutCustomersIdIndexImport } from './routes/(app)/_layout.customers.$id.index'

// Create Virtual Routes

const appImport = createFileRoute('/(app)')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const appRoute = appImport.update({
  id: '/(app)',
  getParentRoute: () => rootRoute,
} as any)

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const appLayoutRoute = appLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => appRoute,
} as any)

const appLayoutCustomersIdIndexRoute = appLayoutCustomersIdIndexImport
  .update({
    path: '/customers/$id/',
    getParentRoute: () => appLayoutRoute,
  } as any)
  .lazy(() =>
    import('./routes/(app)/_layout.customers.$id.index.lazy').then(
      (d) => d.Route,
    ),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/(app)': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof appImport
      parentRoute: typeof rootRoute
    }
    '/(app)/_layout': {
      id: '/_layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof appLayoutImport
      parentRoute: typeof appRoute
    }
    '/(app)/_layout/customers/$id/': {
      id: '/_layout/customers/$id/'
      path: '/customers/$id'
      fullPath: '/customers/$id'
      preLoaderRoute: typeof appLayoutCustomersIdIndexImport
      parentRoute: typeof appLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AboutLazyRoute,
  appRoute: appRoute.addChildren({
    appLayoutRoute: appLayoutRoute.addChildren({
      appLayoutCustomersIdIndexRoute,
    }),
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/"
      ]
    },
    "/": {
      "filePath": "(app)",
      "children": [
        "/_layout"
      ]
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/_layout": {
      "filePath": "(app)/_layout.tsx",
      "parent": "/",
      "children": [
        "/_layout/customers/$id/"
      ]
    },
    "/_layout/customers/$id/": {
      "filePath": "(app)/_layout.customers.$id.index.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
