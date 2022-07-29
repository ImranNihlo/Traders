import React from 'react'
import ContentBlock1 from './ContentBlock-1'
import ContentBlock2 from './ContentBlock-2'
import ContentBlock3 from './ContentBlock-3'

function Content (props) {
  return (
    <div className="container">
      <ContentBlock1 />
      <ContentBlock2 />
      <ContentBlock3 />
    </div>
  )
}

export default Content