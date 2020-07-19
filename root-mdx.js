import './src/css/main.css'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'

const components = {
  //all the logic
}
export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
