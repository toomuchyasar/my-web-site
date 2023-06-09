import React, { useContext } from 'react'
import { Contexts } from '../contexts/contexts'


const FooterSvg = () => {

    const { lightMode } = useContext(Contexts);


  return (
    <div className='flex gap-x-10 mt-5'>
      <svg
      width="36"
      height="31"
      viewBox="0 0 36 31"
      fill="none"
      xmlns="https://www.google.com/"
    >
      <path
        d="M34.0416 2.37489C32.6451 3.35997 31.0988 4.11339 29.4624 4.60614C28.5841 3.59626 27.4169 2.88049 26.1185 2.55562C24.8202 2.23075 23.4533 2.31247 22.203 2.78972C20.9526 3.26697 19.8789 4.11673 19.1272 5.22406C18.3755 6.3314 17.982 7.64288 17.9999 8.98114V10.4395C15.4371 10.5059 12.8976 9.93754 10.6076 8.78492C8.31767 7.6323 6.3483 5.93124 4.87492 3.83323C4.87492 3.83323 -0.958415 16.9582 12.1666 22.7916C9.16319 24.8303 5.58536 25.8525 1.95825 25.7082C15.0833 32.9999 31.1249 25.7082 31.1249 8.93739C31.1236 8.53118 31.0845 8.12597 31.0083 7.72698C32.4966 6.25915 33.547 4.40593 34.0416 2.37489V2.37489Z"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>  

    <svg
      width="36"
      height="35"
      viewBox="0 0 36 35"
      fill="none"
      xmlns="https://www.google.com/"
    >
      <path
        d="M25.2917 2.91663H10.7084C6.68134 2.91663 3.41675 6.18122 3.41675 10.2083V24.7916C3.41675 28.8187 6.68134 32.0833 10.7084 32.0833H25.2917C29.3188 32.0833 32.5834 28.8187 32.5834 24.7916V10.2083C32.5834 6.18122 29.3188 2.91663 25.2917 2.91663Z"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.8333 16.5811C24.0133 17.7948 23.806 19.0343 23.2409 20.1234C22.6758 21.2125 21.7817 22.0956 20.6857 22.6473C19.5897 23.1989 18.3477 23.3909 17.1363 23.196C15.925 23.0011 14.8059 22.4291 13.9383 21.5615C13.0707 20.6939 12.4988 19.5749 12.3038 18.3635C12.1089 17.1521 12.3009 15.9101 12.8525 14.8141C13.4042 13.7182 14.2873 12.824 15.3764 12.2589C16.4655 11.6938 17.705 11.4865 18.9187 11.6665C20.1567 11.8501 21.3029 12.427 22.1879 13.3119C23.0728 14.1969 23.6497 15.3431 23.8333 16.5811Z"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.0208 9.47913H26.0353"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    <svg
      width="36"
      height="35"
      viewBox="0 0 36 35"
      fill="none"
      xmlns="https://www.google.com/"
    >
      <path
        d="M18.0001 2.91663L32.5834 12.3958V22.6041L18.0001 32.0833L3.41675 22.6041V12.3958L18.0001 2.91663Z"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 32.0833V22.6041"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.5834 12.3959L18.0001 22.6042L3.41675 12.3959"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.41675 22.6042L18.0001 12.3959L32.5834 22.6042"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 2.91663V12.3958"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <svg
      width="36"
      height="35"
      viewBox="0 0 36 35"
      fill="none"
      xmlns="www.google.com"
    >
      <path
        d="M18.0001 23.3333C21.2217 23.3333 23.8334 20.7216 23.8334 17.5C23.8334 14.2783 21.2217 11.6666 18.0001 11.6666C14.7784 11.6666 12.1667 14.2783 12.1667 17.5C12.1667 20.7216 14.7784 23.3333 18.0001 23.3333Z"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.8334 11.6666V18.9582C23.8334 20.1186 24.2944 21.2314 25.1148 22.0518C25.9353 22.8723 27.0481 23.3332 28.2084 23.3332C29.3688 23.3332 30.4816 22.8723 31.302 22.0518C32.1225 21.2314 32.5834 20.1186 32.5834 18.9582V17.4999C32.5832 14.2085 31.4696 11.0139 29.4236 8.43568C27.3776 5.85743 24.5197 4.04711 21.3144 3.29909C18.1091 2.55107 14.745 2.90934 11.7691 4.31565C8.79329 5.72196 6.38067 8.09359 4.9236 11.0449C3.46652 13.9962 3.05067 17.3537 3.74367 20.5713C4.43668 23.789 6.19777 26.6775 8.7406 28.7674C11.2834 30.8572 14.4584 32.0254 17.7494 32.082C21.0403 32.1386 24.2536 31.0803 26.8668 29.0791"
        stroke={lightMode ? "#4731D3" : "#8F88FF"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>

    </div>
  )
}

export default FooterSvg