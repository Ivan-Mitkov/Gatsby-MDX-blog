import './src/css/main.css'
import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Headings, Code, Blockquote } from './src/components/Complete'

// const MyH2 = props => {
//   if (props.title) {
//     return (
//       <h2 {...props} style={{ fontSize: '2rem' }}>
//         {props.children}
//       </h2>
//     )
//   }
//   return (
//     <h2 {...props} className="code">
//       {props.children}
//     </h2>
//   )
// }

const Testing = ({ children }) => {
  // return <div className="code">{children}</div>
  return <code className="code">{children}</code>
}
const components = {
  //all the logic
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
}
export const wrapMDX = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
