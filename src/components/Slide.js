/** @jsxImportSource @emotion/react */
import React, { memo } from 'react'
// import Text from './SliderText'
import { css} from '@emotion/core'

const Slide = ({ content, width }) => {
  return (
    <div
      css={css`
        height: 100%;
        width: ${width}px;
        background-image: url('${content}');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
      `}
      >
          {/* <Text/> */}
      </div>
    
  )
}

export default memo(Slide)
