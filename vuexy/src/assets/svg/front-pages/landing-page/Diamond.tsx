// React Imports
import type { SVGAttributes } from 'react'

const Diamond = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='65' height='65' viewBox='0 0 65 65' fill='none' {...props}>
      <path
        opacity='0.2'
        d='M46.5001 10.7568H32.5001L20.2251 26.7568L32.5001 56.7568L60.5001 26.7568L46.5001 10.7568Z'
        fill='currentColor'
      />
      <path
        d='M18.5 10.7568H46.5L60.5 26.7568L32.5 56.7568L4.5 26.7568L18.5 10.7568Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M33.2934 10.1481C33.1042 9.90146 32.8109 9.75684 32.5 9.75684C32.1891 9.75684 31.8958 9.90146 31.7066 10.1481L19.7318 25.7568H4.5C3.94772 25.7568 3.5 26.2046 3.5 26.7568C3.5 27.3091 3.94772 27.7568 4.5 27.7568H19.5537L31.5745 57.1355C31.7282 57.5113 32.094 57.7568 32.5 57.7568C32.906 57.7568 33.2718 57.5113 33.4255 57.1355L45.4463 27.7568H60.5C61.0523 27.7568 61.5 27.3091 61.5 26.7568C61.5 26.2046 61.0523 25.7568 60.5 25.7568H45.2682L33.2934 10.1481ZM42.7474 25.7568L32.5 12.3997L22.2526 25.7568H42.7474ZM21.7146 27.7568L32.5 54.1162L43.2854 27.7568H21.7146Z'
        fill='currentColor'
      />
    </svg>
  )
}

export default Diamond
