/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { jsx } from '@emotion/react'
import { css } from '@emotion/react/macro'
import theme from './styledTheme'

const global = css({
  body: {
    fontFamily: theme.fonts.regular,
    backgroundColor: theme.colors.accent.backgroundColor,
    margin: 0,
    boxSizing: 'border-box',
    padding: 0,
    overflowX: 'hidden'
  },
  p: {
    margin: 0
  },
  'button, input': {
    minWidth: '44px',
    minHeight: '44px',
    padding: 0,
    margin: 0
  }
})

export default global
