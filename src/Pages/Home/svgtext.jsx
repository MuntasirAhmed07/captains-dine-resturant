import React from 'react'
import './home.css'

const svgtext = () => {
  return (
    <div className='text-svg'><svg width="583" height="274" viewBox="0 0 583 274" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.214 5.85938L30.339 7.17188C25.6828 10.3281 22.214 13.7031 19.9328 17.2969C16.9953 21.9219 15.5265 26.9531 15.5265 32.3906C15.5265 38.9844 17.6984 45.0781 22.0421 50.6719C23.9171 49.1406 25.0421 47.8594 25.4171 46.8281C25.7921 45.7656 25.9796 42.8906 25.9796 38.2031V17.2031L46.0421 0.46875C50.7296 2.3125 54.4171 3.51562 57.1046 4.07812C59.7921 4.60938 62.9484 4.875 66.5734 4.875H67.6515L68.4015 6.5625L60.6671 13.9688C55.4484 13.4062 49.5578 11.5 42.9953 8.25L43.5109 61.7812L45.2921 61.8281C49.7921 61.8281 53.8859 61.0625 57.5734 59.5312C61.2921 58 65.1359 55.5156 69.1046 52.0781L70.5109 53.4375C67.6046 57.4375 64.7453 60.5469 61.9328 62.7656C59.1515 64.9844 55.7921 66.7656 51.8546 68.1094C47.9171 69.4219 44.0109 70.0781 40.1359 70.0781C34.3859 70.0781 28.964 68.6875 23.8703 65.9062C18.8078 63.125 14.839 59.1406 11.964 53.9531C9.089 48.7656 7.6515 43.4219 7.6515 37.9219C7.6515 31.1406 9.68275 24.8594 13.7452 19.0781C16.9328 14.5469 22.089 10.1406 29.214 5.85938ZM40.8859 7.96875L35.4015 12.7031V34.0781C35.4015 36.7344 35.2609 38.5 34.9796 39.375C34.6671 40.5312 33.9484 41.7656 32.8234 43.0781C30.5421 45.7344 27.3546 48.7656 23.2609 52.1719C25.7609 54.9531 28.4328 57.0938 31.2765 58.5938C34.1515 60.0625 37.5109 61.0469 41.3546 61.5469L40.8859 7.96875Z" fill="white"/>
    <path d="M108.855 22.125L110.542 22.7812C108.855 25.4062 107.776 27.4219 107.308 28.8281C106.87 30.2031 106.651 32.0781 106.651 34.4531V54.4219C106.651 57.7344 106.901 59.8125 107.401 60.6562C107.933 61.4688 108.558 61.875 109.276 61.875C109.651 61.875 110.042 61.7812 110.448 61.5938C110.698 61.4375 111.433 60.875 112.651 59.9062L113.683 61.4531L103.23 70.0781C100.823 68.2031 99.214 66.5312 98.4015 65.0625C97.589 63.5625 97.1359 61.4844 97.0421 58.8281L82.7921 70.0781C77.4484 65.7031 74.7765 61.3906 74.7765 57.1406C74.7765 54.2969 75.3546 51.625 76.5109 49.125C78.0421 45.8438 80.6827 42.0156 84.4327 37.6406L78.8077 25.6406L79.464 24.3281C80.6827 24.4531 81.589 24.5156 82.1827 24.5156C85.8702 24.5156 89.1202 23.0469 91.9327 20.1094C94.214 21.4531 96.6984 22.5312 99.3859 23.3438C102.105 24.1562 104.183 24.5625 105.62 24.5625C106.276 24.5625 106.776 24.4531 107.12 24.2344C107.464 23.9844 108.042 23.2812 108.855 22.125ZM97.0421 31.0781L81.0109 26.1562L86.7296 38.25L97.0421 43.0781V31.0781ZM97.0421 45L85.6984 39.7031C83.9484 43.5156 83.0734 46.8594 83.0734 49.7344C83.0734 54.7969 85.3702 58.9688 89.964 62.25L97.0421 56.5312V45Z" fill="white"/>
    <path d="M116.495 27.3281L126.011 20.1094C128.542 21.8594 130.214 23.4844 131.027 24.9844C131.87 26.4844 132.292 28.5469 132.292 31.1719L144.433 20.1094C148.527 23.0781 151.261 25.625 152.636 27.75C153.511 29.125 153.948 31.1719 153.948 33.8906V60.1406C149.855 61.9844 145.245 65.2969 140.12 70.0781C138.277 68.8906 135.667 67.5156 132.292 65.9531V69.2812C132.292 73.1875 132.683 75.9844 133.464 77.6719C134.245 79.3594 135.652 80.8438 137.683 82.125L137.073 83.3906C133.605 82.1719 131.011 81 129.292 79.875C128.073 79.0625 126.98 77.9531 126.011 76.5469C123.761 78.5469 121.636 79.9062 119.636 80.625L119.026 79.6875C120.37 78.4062 121.308 77.0781 121.839 75.7031C122.401 74.3594 122.683 72.4844 122.683 70.0781V63.2344C120.933 62.8906 119.12 62.7188 117.245 62.7188C117.089 62.7188 116.839 62.7344 116.495 62.7656V58.8281C118.745 58.2969 120.808 57.9375 122.683 57.75V34.4062C122.683 31.875 122.355 30.125 121.698 29.1562C121.042 28.1875 120.37 27.7031 119.683 27.7031C119.151 27.7031 118.448 28.1094 117.573 28.9219L116.495 27.3281ZM132.292 33.6094V57.7969C135.948 58.5469 138.433 59.125 139.745 59.5312C141.089 59.9062 142.652 60.5 144.433 61.3125V35.0156C144.433 33.5781 144.37 32.7344 144.245 32.4844C144.152 32.2031 143.698 31.7188 142.886 31.0312C141.073 29.4688 139.667 28.3438 138.667 27.6562L132.292 33.6094Z" fill="white"/>
    <path d="M160.183 25.2656L173.261 9.09375H174.62L174.152 22.0312H183.573V27.3281H174.152V58.875L179.402 62.7656L182.402 60.4219L183.573 61.8281L173.261 70.0781C169.73 66.4844 165.73 64.0469 161.261 62.7656V61.8281C162.511 60.9844 163.339 60.1094 163.745 59.2031C164.277 58.0469 164.542 56.375 164.542 54.1875V27.3281H160.183V25.2656Z" fill="white"/>
    <path d="M221.917 22.125L223.605 22.7812C221.917 25.4062 220.839 27.4219 220.37 28.8281C219.933 30.2031 219.714 32.0781 219.714 34.4531V54.4219C219.714 57.7344 219.964 59.8125 220.464 60.6562C220.995 61.4688 221.62 61.875 222.339 61.875C222.714 61.875 223.105 61.7812 223.511 61.5938C223.761 61.4375 224.495 60.875 225.714 59.9062L226.745 61.4531L216.292 70.0781C213.886 68.2031 212.277 66.5312 211.464 65.0625C210.652 63.5625 210.198 61.4844 210.105 58.8281L195.855 70.0781C190.511 65.7031 187.839 61.3906 187.839 57.1406C187.839 54.2969 188.417 51.625 189.573 49.125C191.105 45.8438 193.745 42.0156 197.495 37.6406L191.87 25.6406L192.527 24.3281C193.745 24.4531 194.652 24.5156 195.245 24.5156C198.933 24.5156 202.183 23.0469 204.995 20.1094C207.277 21.4531 209.761 22.5312 212.448 23.3438C215.167 24.1562 217.245 24.5625 218.683 24.5625C219.339 24.5625 219.839 24.4531 220.183 24.2344C220.527 23.9844 221.105 23.2812 221.917 22.125ZM210.105 31.0781L194.073 26.1562L199.792 38.25L210.105 43.0781V31.0781ZM210.105 45L198.761 39.7031C197.011 43.5156 196.136 46.8594 196.136 49.7344C196.136 54.7969 198.433 58.9688 203.027 62.25L210.105 56.5312V45Z" fill="white"/>
    <path d="M243.902 4.07812H249.855L243.386 14.2031H241.511L243.902 4.07812ZM240.339 20.1094L248.683 27L244.98 30.6094V56.1094C244.98 58.7969 245.23 60.5469 245.73 61.3594C246.23 62.1719 246.745 62.5781 247.277 62.5781C247.652 62.5781 247.995 62.5 248.308 62.3438C248.745 62.125 249.652 61.5 251.027 60.4688L252.152 61.9219L241.511 70.0781C239.011 68.2969 237.402 66.625 236.683 65.0625C235.964 63.4688 235.605 60.7031 235.605 56.7656V30.6094L232.089 27L240.339 20.1094Z" fill="white"/>
    <path d="M287.167 20.1094L294.855 27.2812L299.401 22.875L300.714 24.1406C298.526 26.1406 297.198 27.6562 296.73 28.6875C296.105 30.0625 295.792 31.9531 295.792 34.3594V56.625C295.792 58.6875 296.12 60.2188 296.776 61.2188C297.183 61.875 297.636 62.2031 298.136 62.2031C298.573 62.2031 299.605 61.5938 301.23 60.375L302.355 61.8281L292.276 70.0781C289.683 68.1094 288.011 66.375 287.261 64.875C286.542 63.3438 286.183 60.8906 286.183 57.5156V31.6875L281.073 27.2812L273.48 33.3281V60L276.855 63.375L268.558 70.0781L260.214 63.375L263.87 60V36.0469C263.87 32.6406 263.526 30.3438 262.839 29.1562C262.37 28.3438 261.839 27.9375 261.245 27.9375C260.62 27.9375 259.683 28.4219 258.433 29.3906L257.308 28.0781L267.292 20.1094C270.042 22.0469 271.761 23.5781 272.448 24.7031C273.136 25.8281 273.48 27.3906 273.48 29.3906V30.9844L287.167 20.1094Z" fill="white"/>
    <path d="M310.605 6.89062L317.542 0L324.433 6.46875C322.714 14.0625 318.48 19.4844 311.73 22.7344L310.605 21.0938C312.667 19.4062 313.917 18.2031 314.355 17.4844C315.073 16.2969 315.433 15.125 315.433 13.9688C315.433 12.9375 315.105 11.9062 314.448 10.875C313.823 9.8125 312.542 8.48438 310.605 6.89062Z" fill="white"/>
    <path d="M347.214 37.5L358.042 43.1719V62.9062C355.417 63.1562 353.042 63.7969 350.917 64.8281C348.792 65.8594 346.386 67.6094 343.698 70.0781C341.386 68.7031 339.37 67.75 337.651 67.2188C335.964 66.6875 334.167 66.4219 332.261 66.4219C329.323 66.4219 326.714 67.3125 324.433 69.0938C323.589 69.75 322.98 70.0781 322.605 70.0781C322.261 70.0781 321.917 69.9062 321.573 69.5625C321.23 69.2188 321.058 68.875 321.058 68.5312C321.058 68.1562 321.386 67.6562 322.042 67.0312C322.417 66.6562 323.058 65.9375 323.964 64.875L328.23 59.5781L334.276 51.5625L324.011 46.0312V28.5469C327.23 27.5469 329.745 26.4375 331.558 25.2188C333.401 23.9688 335.167 22.2656 336.855 20.1094C340.855 21.7969 344.073 22.9844 346.511 23.6719C348.261 24.1406 349.933 24.375 351.526 24.375C353.276 24.375 354.636 24 355.605 23.25C356.573 22.4688 357.058 21.6562 357.058 20.8125C357.058 20.25 356.745 19.6875 356.12 19.125C354.901 18.0312 354.292 16.9688 354.292 15.9375C354.292 14.9688 354.558 14.2031 355.089 13.6406C355.62 13.0469 356.214 12.75 356.87 12.75C357.745 12.75 358.526 13.1562 359.214 13.9688C359.933 14.75 360.292 15.7969 360.292 17.1094C360.292 18.4531 360.011 19.7656 359.448 21.0469C358.886 22.3281 357.808 23.9844 356.214 26.0156L347.214 37.5ZM333.48 40.7344L339.901 44.0625L350.12 30.4688C348.026 31.0625 346.214 31.3594 344.683 31.3594C340.839 31.3594 337.105 30.0781 333.48 27.5156V40.7344ZM341.542 45L330.245 60.1406C331.62 59.6719 332.901 59.3281 334.089 59.1094C335.276 58.8906 336.355 58.7812 337.323 58.7812C340.917 58.7812 344.651 59.9688 348.526 62.3438V48.75L341.542 45Z" fill="white"/>
    <path d="M389.308 0.46875H391.511C392.011 2.03125 392.839 3.14062 393.995 3.79688C395.495 4.67188 397.933 5.10938 401.308 5.10938C403.464 5.10938 410.308 4.89062 421.839 4.45312C428.808 4.17188 433.151 4.03125 434.87 4.03125C440.058 4.03125 444.464 4.92188 448.089 6.70312C451.745 8.48438 454.714 11.2188 456.995 14.9062C459.276 18.5938 460.792 23.6719 461.542 30.1406C462.073 34.6719 462.526 44.6562 462.901 60.0938C456.808 63.9375 452.12 67.2656 448.839 70.0781C438.901 67.2969 430.136 65.9062 422.542 65.9062C417.386 65.9062 412.605 66.5312 408.198 67.7812C403.792 69 399.12 70.9688 394.183 73.6875L392.823 71.9062C399.23 68.5938 404.855 65.2031 409.698 61.7344C414.542 58.2656 417.73 55.1719 419.261 52.4531C420.823 49.7031 421.605 46.2188 421.605 42C421.605 40.4688 421.573 38.2031 421.511 35.2031C421.448 33.1094 421.417 30.9375 421.417 28.6875C421.417 24.7188 421.636 21.7969 422.073 19.9219C422.542 18.0469 423.511 15.8906 424.98 13.4531H423.761C419.948 15.6406 417.401 17.6406 416.12 19.4531C414.87 21.2344 414.245 23.5156 414.245 26.2969L414.62 42.9375C414.62 47.375 413.292 51.3594 410.636 54.8906C407.98 58.3906 401.605 63.4531 391.511 70.0781L390.151 68.25C395.245 64.6875 398.605 61.7656 400.23 59.4844C401.855 57.2031 402.667 54.8125 402.667 52.3125C402.667 50.1562 401.98 48.3281 400.605 46.8281C399.23 45.2969 397.714 44.5312 396.058 44.5312C395.214 44.5312 394.433 44.7656 393.714 45.2344C392.995 45.7031 392.026 46.6719 390.808 48.1406L389.308 46.6406C390.37 43.9531 391.776 41.9844 393.526 40.7344C395.308 39.4844 397.433 38.8594 399.901 38.8594C400.62 38.8594 401.401 38.9375 402.245 39.0938C403.12 39.25 404.058 39.4844 405.058 39.7969C404.995 37.9844 404.964 36.4062 404.964 35.0625C404.964 30.1562 405.948 26.1719 407.917 23.1094C409.917 20.0156 413.73 16.7969 419.355 13.4531C414.198 13.9844 409.745 14.25 405.995 14.25C402.026 14.25 398.62 13.6875 395.776 12.5625C393.651 11.6875 392.089 10.2969 391.089 8.39062C390.089 6.45312 389.495 3.8125 389.308 0.46875ZM427.276 13.4531C425.933 15.7344 425.026 17.7188 424.558 19.4062C423.933 21.7188 423.62 23.875 423.62 25.875L423.995 44.3438C423.995 46.7188 423.401 49.1406 422.214 51.6094C421.308 53.4531 419.605 55.7031 417.105 58.3594C421.667 57.6094 425.151 57.25 427.558 57.2812L430.23 57.3281V13.4531H427.276ZM432.62 31.4531C434.526 32.7969 436.183 33.7188 437.589 34.2188C439.026 34.7188 440.573 34.9688 442.23 34.9688C443.886 34.9688 445.433 34.7188 446.87 34.2188C448.308 33.6875 449.995 32.7656 451.933 31.4531C451.339 24.4219 449.526 19.6719 446.495 17.2031C443.464 14.7031 438.839 13.4531 432.62 13.4531V31.4531ZM432.62 46.9219C434.745 45.7031 436.558 44.875 438.058 44.4375C439.558 43.9688 441.198 43.7344 442.98 43.7344C444.698 43.7344 446.292 43.9531 447.761 44.3906C449.23 44.7969 450.995 45.5781 453.058 46.7344L452.261 34.0312C450.261 35.25 448.526 36.0938 447.058 36.5625C445.62 37 444.042 37.2188 442.323 37.2188C440.667 37.2188 439.026 36.9531 437.401 36.4219C435.776 35.8906 434.183 35.0938 432.62 34.0312V46.9219ZM432.62 57.4688C436.433 57.7812 439.526 58.1719 441.901 58.6406C444.308 59.0781 448.058 60.0156 453.151 61.4531C453.214 56.7344 453.245 54.2969 453.245 54.1406C453.245 53.7656 453.214 52.2656 453.151 49.6406C451.151 48.2656 449.386 47.3125 447.855 46.7812C446.355 46.25 444.714 45.9844 442.933 45.9844C441.12 45.9844 439.433 46.25 437.87 46.7812C436.339 47.3125 434.589 48.2656 432.62 49.6406V57.4688Z" fill="white"/>
    <path d="M484.37 4.07812H490.323L483.855 14.2031H481.98L484.37 4.07812ZM480.808 20.1094L489.151 27L485.448 30.6094V56.1094C485.448 58.7969 485.698 60.5469 486.198 61.3594C486.698 62.1719 487.214 62.5781 487.745 62.5781C488.12 62.5781 488.464 62.5 488.776 62.3438C489.214 62.125 490.12 61.5 491.495 60.4688L492.62 61.9219L481.98 70.0781C479.48 68.2969 477.87 66.625 477.151 65.0625C476.433 63.4688 476.073 60.7031 476.073 56.7656V30.6094L472.558 27L480.808 20.1094Z" fill="white"/>
    <path d="M527.636 20.1094L535.323 27.2812L539.87 22.875L541.183 24.1406C538.995 26.1406 537.667 27.6562 537.198 28.6875C536.573 30.0625 536.261 31.9531 536.261 34.3594V56.625C536.261 58.6875 536.589 60.2188 537.245 61.2188C537.651 61.875 538.105 62.2031 538.605 62.2031C539.042 62.2031 540.073 61.5938 541.698 60.375L542.823 61.8281L532.745 70.0781C530.151 68.1094 528.48 66.375 527.73 64.875C527.011 63.3438 526.651 60.8906 526.651 57.5156V31.6875L521.542 27.2812L513.948 33.3281V60L517.323 63.375L509.026 70.0781L500.683 63.375L504.339 60V36.0469C504.339 32.6406 503.995 30.3438 503.308 29.1562C502.839 28.3438 502.308 27.9375 501.714 27.9375C501.089 27.9375 500.151 28.4219 498.901 29.3906L497.776 28.0781L507.761 20.1094C510.511 22.0469 512.23 23.5781 512.917 24.7031C513.605 25.8281 513.948 27.3906 513.948 29.3906V30.9844L527.636 20.1094Z" fill="white"/>
    <path d="M568.23 20.1094L581.448 35.5312L560.448 50.25V58.7812L571.323 63.0938L578.683 58.0781L579.714 59.4844L564.526 70.0781C561.433 68.4219 558.886 67.2344 556.886 66.5156C554.886 65.7969 552.042 65.0469 548.355 64.2656V63.0938C549.417 62.4688 550.12 61.7031 550.464 60.7969C550.839 59.8594 551.026 57.8594 551.026 54.7969V27.9844C553.964 26.9219 556.401 25.9531 558.339 25.0781C559.745 24.4219 563.042 22.7656 568.23 20.1094ZM561.105 25.5L560.448 25.8281V47.0625L572.776 38.4375L561.105 25.5Z" fill="white"/>
    <path d="M124.417 83.4219L140.589 104L125.542 114.172C129.823 116.734 133.245 119.781 135.808 123.312C138.402 126.812 140.417 131.344 141.855 136.906C142.511 139.594 143.183 141.562 143.87 142.812C144.339 143.625 145.214 144.594 146.495 145.719L151.183 141.734L152.777 143.422L141.433 153.078C139.152 151.641 137.511 150.109 136.511 148.484C135.792 147.391 134.48 143.688 132.573 137.375C131.542 134.031 130.23 131.172 128.636 128.797C127.042 126.422 125.355 124.641 123.573 123.453C121.792 122.234 119.401 121.156 116.401 120.219L113.214 122.281V141.734C116.058 142.672 119.058 144 122.214 145.719L127.089 141.406L128.589 143.047L116.401 153.078C111.964 150.828 108.105 149.25 104.823 148.344C101.573 147.438 98.2921 146.984 94.9796 146.984C90.8234 146.984 86.8234 147.672 82.9796 149.047C80.9484 149.797 78.6827 151.141 76.1827 153.078L74.9171 151.953C78.0109 147.984 81.1202 145.062 84.2452 143.188C87.4015 141.312 91.2609 140.047 95.8234 139.391V137.281C95.8234 134.25 95.4327 131.781 94.6515 129.875C93.8702 127.938 92.4484 125.922 90.3859 123.828C88.3234 121.703 86.1515 119.969 83.8702 118.625C82.4015 117.781 80.339 116.938 77.6827 116.094V114.172C80.214 113.234 83.3234 111.516 87.0109 109.016L95.8234 103.109C95.8234 99.0781 95.5421 96.2031 94.9796 94.4844C94.4171 92.7344 93.3234 91.2812 91.6984 90.125C90.0734 88.9688 88.2609 88.3906 86.2609 88.3906C85.0421 88.3906 83.9327 88.5781 82.9327 88.9531C81.9327 89.3281 80.6984 90.0312 79.2296 91.0625L77.6827 89.9375C80.1202 87.4375 82.3077 85.75 84.2452 84.875C86.214 83.9688 88.6359 83.5156 91.5109 83.5156C94.7296 83.5156 97.4015 84.1562 99.5265 85.4375C101.683 86.7188 103.292 88.4688 104.355 90.6875C104.98 92.0312 105.339 93.9688 105.433 96.5L124.417 83.4219ZM118.183 90.4062L113.214 93.7344V119.656L131.542 107.422L118.183 90.4062ZM111.058 95.2344L105.433 99.1719V139.766C107.308 140.047 109.183 140.469 111.058 141.031V95.2344ZM95.8234 105.734L85.4171 112.766C87.3859 113.703 89.0109 114.641 90.2921 115.578C91.6046 116.516 93.4484 118.078 95.8234 120.266V105.734Z" fill="white"/>
    <path d="M177.808 103.109L191.027 118.531L170.027 133.25V141.781L180.902 146.094L188.261 141.078L189.292 142.484L174.105 153.078C171.011 151.422 168.464 150.234 166.464 149.516C164.464 148.797 161.62 148.047 157.933 147.266V146.094C158.995 145.469 159.698 144.703 160.042 143.797C160.417 142.859 160.605 140.859 160.605 137.797V110.984C163.542 109.922 165.98 108.953 167.917 108.078C169.323 107.422 172.62 105.766 177.808 103.109ZM170.683 108.5L170.027 108.828V130.062L182.355 121.438L170.683 108.5Z" fill="white"/>
    <path d="M219.855 120.5L230.683 126.172V145.906C228.058 146.156 225.683 146.797 223.558 147.828C221.433 148.859 219.027 150.609 216.339 153.078C214.027 151.703 212.011 150.75 210.292 150.219C208.605 149.688 206.808 149.422 204.902 149.422C201.964 149.422 199.355 150.312 197.073 152.094C196.23 152.75 195.62 153.078 195.245 153.078C194.902 153.078 194.558 152.906 194.214 152.562C193.87 152.219 193.698 151.875 193.698 151.531C193.698 151.156 194.027 150.656 194.683 150.031C195.058 149.656 195.698 148.938 196.605 147.875L200.87 142.578L206.917 134.562L196.652 129.031V111.547C199.87 110.547 202.386 109.438 204.198 108.219C206.042 106.969 207.808 105.266 209.495 103.109C213.495 104.797 216.714 105.984 219.152 106.672C220.902 107.141 222.573 107.375 224.167 107.375C225.917 107.375 227.277 107 228.245 106.25C229.214 105.469 229.698 104.656 229.698 103.812C229.698 103.25 229.386 102.688 228.761 102.125C227.542 101.031 226.933 99.9688 226.933 98.9375C226.933 97.9688 227.198 97.2031 227.73 96.6406C228.261 96.0469 228.855 95.75 229.511 95.75C230.386 95.75 231.167 96.1562 231.855 96.9688C232.573 97.75 232.933 98.7969 232.933 100.109C232.933 101.453 232.652 102.766 232.089 104.047C231.527 105.328 230.448 106.984 228.855 109.016L219.855 120.5ZM206.12 123.734L212.542 127.062L222.761 113.469C220.667 114.062 218.855 114.359 217.323 114.359C213.48 114.359 209.745 113.078 206.12 110.516V123.734ZM214.183 128L202.886 143.141C204.261 142.672 205.542 142.328 206.73 142.109C207.917 141.891 208.995 141.781 209.964 141.781C213.558 141.781 217.292 142.969 221.167 145.344V131.75L214.183 128Z" fill="white"/>
    <path d="M237.667 108.266L250.745 92.0938H252.105L251.636 105.031H261.058V110.328H251.636V141.875L256.886 145.766L259.886 143.422L261.058 144.828L250.745 153.078C247.214 149.484 243.214 147.047 238.745 145.766V144.828C239.995 143.984 240.823 143.109 241.23 142.203C241.761 141.047 242.027 139.375 242.027 137.188V110.328H237.667V108.266Z" fill="white"/>
    <path d="M299.401 105.125L301.089 105.781C299.401 108.406 298.323 110.422 297.855 111.828C297.417 113.203 297.198 115.078 297.198 117.453V137.422C297.198 140.734 297.448 142.812 297.948 143.656C298.48 144.469 299.105 144.875 299.823 144.875C300.198 144.875 300.589 144.781 300.995 144.594C301.245 144.438 301.98 143.875 303.198 142.906L304.23 144.453L293.776 153.078C291.37 151.203 289.761 149.531 288.948 148.062C288.136 146.562 287.683 144.484 287.589 141.828L273.339 153.078C267.995 148.703 265.323 144.391 265.323 140.141C265.323 137.297 265.901 134.625 267.058 132.125C268.589 128.844 271.23 125.016 274.98 120.641L269.355 108.641L270.011 107.328C271.23 107.453 272.136 107.516 272.73 107.516C276.417 107.516 279.667 106.047 282.48 103.109C284.761 104.453 287.245 105.531 289.933 106.344C292.651 107.156 294.73 107.562 296.167 107.562C296.823 107.562 297.323 107.453 297.667 107.234C298.011 106.984 298.589 106.281 299.401 105.125ZM287.589 114.078L271.558 109.156L277.276 121.25L287.589 126.078V114.078ZM287.589 128L276.245 122.703C274.495 126.516 273.62 129.859 273.62 132.734C273.62 137.797 275.917 141.969 280.511 145.25L287.589 139.531V128Z" fill="white"/>
    <path d="M341.448 103.109L349.839 110.047L346.042 113.516V138.125C346.042 140.969 346.433 143 347.214 144.219C347.714 145.062 348.261 145.484 348.855 145.484C349.292 145.484 350.136 144.969 351.386 143.938L352.605 145.438L342.714 153.078C340.214 151.328 338.573 149.766 337.792 148.391C337.042 146.984 336.636 144.766 336.573 141.734C331.73 144.859 326.792 148.641 321.761 153.078C318.73 150.703 316.745 148.625 315.808 146.844C314.87 145.031 314.401 142.656 314.401 139.719V116.562C314.401 114.938 314.276 113.875 314.026 113.375C313.589 112.5 312.995 112.062 312.245 112.062C311.683 112.062 310.839 112.547 309.714 113.516L308.448 112.203L318.855 103.109L327.339 110.047L323.87 113.234V138.125C323.87 139.969 324.105 141.328 324.573 142.203C325.042 143.047 326.183 144.125 327.995 145.438L336.573 139.109V113.516L333.245 110.047L341.448 103.109Z" fill="white"/>
    <path d="M383.964 103.109L391.042 111.594L383.964 117.875L378.058 110.422L373.417 114.641V141.969L378.761 145.812L383.589 141.969L384.667 143.469L372.667 153.078C370.105 150.797 367.948 149.156 366.198 148.156C364.48 147.156 362.589 146.375 360.526 145.812V144.781C361.901 143.812 362.792 142.844 363.198 141.875C363.636 140.875 363.855 138.984 363.855 136.203V117.078C363.855 114.672 363.573 113.078 363.011 112.297C362.48 111.484 361.886 111.078 361.23 111.078C360.511 111.078 359.526 111.703 358.276 112.953L357.151 111.594L367.042 103.109C369.698 105.141 371.511 106.906 372.48 108.406C373.105 109.344 373.417 110.641 373.417 112.297L383.964 103.109Z" fill="white"/>
    <path d="M429.433 105.125L431.12 105.781C429.433 108.406 428.355 110.422 427.886 111.828C427.448 113.203 427.23 115.078 427.23 117.453V137.422C427.23 140.734 427.48 142.812 427.98 143.656C428.511 144.469 429.136 144.875 429.855 144.875C430.23 144.875 430.62 144.781 431.026 144.594C431.276 144.438 432.011 143.875 433.23 142.906L434.261 144.453L423.808 153.078C421.401 151.203 419.792 149.531 418.98 148.062C418.167 146.562 417.714 144.484 417.62 141.828L403.37 153.078C398.026 148.703 395.355 144.391 395.355 140.141C395.355 137.297 395.933 134.625 397.089 132.125C398.62 128.844 401.261 125.016 405.011 120.641L399.386 108.641L400.042 107.328C401.261 107.453 402.167 107.516 402.761 107.516C406.448 107.516 409.698 106.047 412.511 103.109C414.792 104.453 417.276 105.531 419.964 106.344C422.683 107.156 424.761 107.562 426.198 107.562C426.855 107.562 427.355 107.453 427.698 107.234C428.042 106.984 428.62 106.281 429.433 105.125ZM417.62 114.078L401.589 109.156L407.308 121.25L417.62 126.078V114.078ZM417.62 128L406.276 122.703C404.526 126.516 403.651 129.859 403.651 132.734C403.651 137.797 405.948 141.969 410.542 145.25L417.62 139.531V128Z" fill="white"/>
    <path d="M467.683 103.109L475.37 110.281L479.917 105.875L481.23 107.141C479.042 109.141 477.714 110.656 477.245 111.688C476.62 113.062 476.308 114.953 476.308 117.359V139.625C476.308 141.688 476.636 143.219 477.292 144.219C477.698 144.875 478.151 145.203 478.651 145.203C479.089 145.203 480.12 144.594 481.745 143.375L482.87 144.828L472.792 153.078C470.198 151.109 468.526 149.375 467.776 147.875C467.058 146.344 466.698 143.891 466.698 140.516V114.688L461.589 110.281L453.995 116.328V143L457.37 146.375L449.073 153.078L440.73 146.375L444.386 143V119.047C444.386 115.641 444.042 113.344 443.355 112.156C442.886 111.344 442.355 110.938 441.761 110.938C441.136 110.938 440.198 111.422 438.948 112.391L437.823 111.078L447.808 103.109C450.558 105.047 452.276 106.578 452.964 107.703C453.651 108.828 453.995 110.391 453.995 112.391V113.984L467.683 103.109Z" fill="white"/>
    <path d="M486.667 108.266L499.745 92.0938H501.105L500.636 105.031H510.058V110.328H500.636V141.875L505.886 145.766L508.886 143.422L510.058 144.828L499.745 153.078C496.214 149.484 492.214 147.047 487.745 145.766V144.828C488.995 143.984 489.823 143.109 490.23 142.203C490.761 141.047 491.026 139.375 491.026 137.188V110.328H486.667V108.266Z" fill="white"/>
    <path d="M12.384 272.521V239.881C11.904 239.881 10.912 239.977 9.408 240.169L0 241.369V238.921H28.032V241.369L18.624 240.169C17.12 239.977 16.128 239.881 15.648 239.881V272.521H12.384Z" fill="white"/>
    <path d="M31.9759 255.721C31.9759 253.257 32.4079 250.969 33.2719 248.857C34.1679 246.713 35.3999 244.857 36.9679 243.289C38.5679 241.689 40.4239 240.457 42.5359 239.593C44.6799 238.697 46.9839 238.249 49.4479 238.249C51.9119 238.249 54.1999 238.697 56.3119 239.593C58.4559 240.457 60.3119 241.689 61.8799 243.289C63.4799 244.857 64.7119 246.713 65.5759 248.857C66.4719 250.969 66.9199 253.257 66.9199 255.721C66.9199 258.185 66.4719 260.489 65.5759 262.633C64.7119 264.745 63.4799 266.601 61.8799 268.201C60.3119 269.769 58.4559 271.001 56.3119 271.897C54.1999 272.761 51.9119 273.193 49.4479 273.193C46.9839 273.193 44.6799 272.761 42.5359 271.897C40.4239 271.001 38.5679 269.769 36.9679 268.201C35.3999 266.601 34.1679 264.745 33.2719 262.633C32.4079 260.489 31.9759 258.185 31.9759 255.721ZM35.6239 255.721C35.6239 258.985 36.1999 261.849 37.3519 264.313C38.5039 266.745 40.1199 268.649 42.1999 270.025C44.2799 271.369 46.6959 272.041 49.4479 272.041C52.1999 272.041 54.6159 271.369 56.6959 270.025C58.7759 268.649 60.3919 266.729 61.5439 264.265C62.6959 261.801 63.2719 258.953 63.2719 255.721C63.2719 252.489 62.6959 249.657 61.5439 247.225C60.3919 244.761 58.7759 242.841 56.6959 241.465C54.6159 240.089 52.1999 239.401 49.4479 239.401C46.6959 239.401 44.2799 240.089 42.1999 241.465C40.1519 242.809 38.5359 244.713 37.3519 247.177C36.1999 249.609 35.6239 252.457 35.6239 255.721Z" fill="white"/>
    <path d="M76.5052 238.921H79.7692V259.177C79.7692 263.049 80.7132 266.073 82.6012 268.249C84.5212 270.393 87.2093 271.465 90.6653 271.465C92.8413 271.465 94.7293 271.049 96.3293 270.217C97.9613 269.353 99.2093 268.169 100.073 266.665C100.969 265.161 101.385 263.433 101.321 261.481L100.505 238.921H103.769L102.953 261.481C102.825 265.321 101.673 268.233 99.4973 270.217C97.3533 272.201 94.2812 273.193 90.2812 273.193C85.9613 273.193 82.5853 271.945 80.1533 269.449C77.7213 266.921 76.5052 263.465 76.5052 259.081V238.921Z" fill="white"/>
    <path d="M142.066 268.393L141.778 271.321C140.882 271.705 139.794 272.041 138.514 272.329C137.234 272.617 135.938 272.825 134.626 272.953C133.314 273.113 132.146 273.193 131.122 273.193C128.53 273.193 126.13 272.761 123.922 271.897C121.714 271.001 119.778 269.769 118.114 268.201C116.482 266.633 115.202 264.793 114.274 262.681C113.346 260.537 112.882 258.217 112.882 255.721C112.882 253.225 113.346 250.921 114.274 248.809C115.202 246.665 116.482 244.809 118.114 243.241C119.778 241.673 121.714 240.457 123.922 239.593C126.13 238.697 128.53 238.249 131.122 238.249C132.178 238.249 133.362 238.329 134.674 238.489C135.986 238.649 137.266 238.873 138.514 239.161C139.762 239.417 140.818 239.721 141.682 240.073L141.442 242.761H141.154C139.97 241.673 138.482 240.841 136.69 240.265C134.898 239.689 133.042 239.401 131.122 239.401C128.242 239.401 125.698 240.089 123.49 241.465C121.314 242.809 119.602 244.713 118.354 247.177C117.138 249.609 116.53 252.457 116.53 255.721C116.53 259.017 117.138 261.881 118.354 264.313C119.602 266.745 121.314 268.649 123.49 270.025C125.666 271.369 128.21 272.041 131.122 272.041C133.298 272.041 135.314 271.689 137.17 270.985C139.058 270.281 140.594 269.417 141.778 268.393H142.066Z" fill="white"/>
    <path d="M151.657 272.521V238.921H154.921V254.473H175.081V238.921H178.345V272.521H175.081V255.625H154.921V272.521H151.657Z" fill="white"/>
    <path d="M190.845 272.521V238.921H194.109V272.521H190.845Z" fill="white"/>
    <path d="M205.875 272.521L207.075 238.249H207.651L231.795 267.433H232.083L231.027 238.921H234.291L233.091 273.193H232.515L208.371 244.009H208.083L209.139 272.521H205.875Z" fill="white"/>
    <path d="M262.815 256.585V255.433H274.959V268.489C273.487 269.961 271.679 271.113 269.535 271.945C267.423 272.777 265.055 273.193 262.431 273.193C259.743 273.193 257.263 272.761 254.991 271.897C252.719 271.001 250.735 269.769 249.039 268.201C247.343 266.601 246.015 264.745 245.055 262.633C244.127 260.521 243.663 258.217 243.663 255.721C243.663 253.225 244.127 250.921 245.055 248.809C246.015 246.697 247.343 244.857 249.039 243.289C250.735 241.689 252.719 240.457 254.991 239.593C257.263 238.697 259.743 238.249 262.431 238.249C263.583 238.249 264.831 238.329 266.175 238.489C267.551 238.649 268.863 238.873 270.111 239.161C271.359 239.417 272.415 239.737 273.279 240.121L273.039 242.809H272.751C271.471 241.689 269.935 240.841 268.143 240.265C266.351 239.689 264.447 239.401 262.431 239.401C259.423 239.401 256.783 240.089 254.511 241.465C252.239 242.809 250.463 244.713 249.183 247.177C247.935 249.609 247.311 252.457 247.311 255.721C247.311 258.985 247.935 261.849 249.183 264.313C250.463 266.745 252.239 268.649 254.511 270.025C256.783 271.369 259.423 272.041 262.431 272.041C264.287 272.041 265.999 271.785 267.567 271.273C269.167 270.761 270.543 270.025 271.695 269.065V256.585H262.815Z" fill="white"/>
    <path d="M306.138 272.521V258.313L294.234 238.921H297.882L308.586 256.489H308.874L317.418 238.921H321.066L309.594 257.641V272.521H306.138Z" fill="white"/>
    <path d="M324.523 255.721C324.523 253.257 324.955 250.969 325.819 248.857C326.715 246.713 327.947 244.857 329.515 243.289C331.115 241.689 332.971 240.457 335.083 239.593C337.227 238.697 339.531 238.249 341.995 238.249C344.459 238.249 346.747 238.697 348.859 239.593C351.003 240.457 352.859 241.689 354.427 243.289C356.027 244.857 357.259 246.713 358.123 248.857C359.019 250.969 359.467 253.257 359.467 255.721C359.467 258.185 359.019 260.489 358.123 262.633C357.259 264.745 356.027 266.601 354.427 268.201C352.859 269.769 351.003 271.001 348.859 271.897C346.747 272.761 344.459 273.193 341.995 273.193C339.531 273.193 337.227 272.761 335.083 271.897C332.971 271.001 331.115 269.769 329.515 268.201C327.947 266.601 326.715 264.745 325.819 262.633C324.955 260.489 324.523 258.185 324.523 255.721ZM328.171 255.721C328.171 258.985 328.747 261.849 329.899 264.313C331.051 266.745 332.667 268.649 334.747 270.025C336.827 271.369 339.243 272.041 341.995 272.041C344.747 272.041 347.163 271.369 349.243 270.025C351.323 268.649 352.939 266.729 354.091 264.265C355.243 261.801 355.819 258.953 355.819 255.721C355.819 252.489 355.243 249.657 354.091 247.225C352.939 244.761 351.323 242.841 349.243 241.465C347.163 240.089 344.747 239.401 341.995 239.401C339.243 239.401 336.827 240.089 334.747 241.465C332.699 242.809 331.083 244.713 329.899 247.177C328.747 249.609 328.171 252.457 328.171 255.721Z" fill="white"/>
    <path d="M369.052 238.921H372.316V259.177C372.316 263.049 373.26 266.073 375.148 268.249C377.068 270.393 379.756 271.465 383.212 271.465C385.388 271.465 387.276 271.049 388.876 270.217C390.508 269.353 391.756 268.169 392.62 266.665C393.516 265.161 393.932 263.433 393.868 261.481L393.052 238.921H396.316L395.5 261.481C395.372 265.321 394.22 268.233 392.044 270.217C389.9 272.201 386.828 273.193 382.828 273.193C378.508 273.193 375.132 271.945 372.7 269.449C370.268 266.921 369.052 263.465 369.052 259.081V238.921Z" fill="white"/>
    <path d="M407.829 238.921H414.261C417.653 238.921 420.277 239.641 422.133 241.081C424.021 242.489 424.965 244.473 424.965 247.033C424.965 249.017 424.373 250.665 423.189 251.977C422.037 253.289 420.357 254.169 418.149 254.617V254.905C420.261 255.321 421.989 256.313 423.333 257.881C424.677 259.449 425.685 261.385 426.357 263.689C426.965 265.801 427.557 267.449 428.133 268.633C428.741 269.785 429.397 270.617 430.101 271.129C430.837 271.641 431.701 272.009 432.693 272.233V272.521H430.725C429.317 272.521 428.149 272.265 427.221 271.753C426.325 271.241 425.557 270.377 424.917 269.161C424.277 267.945 423.669 266.265 423.093 264.121C422.165 260.825 420.933 258.489 419.397 257.113C417.861 255.737 415.989 255.049 413.781 255.049H413.493V254.185H413.781C418.933 254.185 421.509 251.817 421.509 247.081C421.509 242.409 419.093 240.073 414.261 240.073H411.093V272.521H407.829V238.921Z" fill="white"/>
    <path d="M459.243 272.521V239.881C458.763 239.881 457.771 239.977 456.267 240.169L446.859 241.369V238.921H474.891V241.369L465.483 240.169C463.979 239.977 462.987 239.881 462.507 239.881V272.521H459.243Z" fill="white"/>
    <path d="M474.837 272.521L487.749 238.921H490.725L503.637 272.521H500.133L494.181 256.777H483.285L478.341 272.521H474.837ZM488.085 241.417L483.621 255.625H493.749L488.373 241.417H488.085Z" fill="white"/>
    <path d="M508.495 271.465L508.783 268.585H509.071C510.319 269.673 511.727 270.521 513.295 271.129C514.863 271.737 516.415 272.041 517.951 272.041C520.127 272.041 521.887 271.449 523.231 270.265C524.575 269.049 525.247 267.433 525.247 265.417C525.247 264.297 524.991 263.257 524.479 262.297C523.999 261.337 523.183 260.361 522.031 259.369C520.911 258.377 519.359 257.305 517.375 256.153C515.999 255.353 514.687 254.521 513.439 253.657C512.191 252.761 511.167 251.737 510.367 250.585C509.567 249.401 509.167 247.993 509.167 246.361C509.167 243.929 510.047 241.977 511.807 240.505C513.567 239.001 515.887 238.249 518.767 238.249C520.047 238.249 521.423 238.393 522.895 238.681C524.367 238.937 525.503 239.273 526.303 239.689L526.063 242.377H525.775C523.951 240.393 521.615 239.401 518.767 239.401C516.719 239.401 515.071 239.929 513.823 240.985C512.575 242.009 511.951 243.401 511.951 245.161C511.951 246.473 512.287 247.609 512.959 248.569C513.663 249.497 514.559 250.345 515.647 251.113C516.735 251.849 517.903 252.569 519.151 253.273C520.591 254.105 521.983 254.985 523.327 255.913C524.703 256.841 525.823 257.961 526.687 259.273C527.583 260.553 528.031 262.169 528.031 264.121C528.031 265.913 527.615 267.497 526.783 268.873C525.951 270.217 524.767 271.273 523.231 272.041C521.727 272.809 519.967 273.193 517.951 273.193C516.671 273.193 515.167 273.033 513.439 272.713C511.711 272.393 510.063 271.977 508.495 271.465Z" fill="white"/>
    <path d="M544.228 272.521V239.881C543.748 239.881 542.756 239.977 541.252 240.169L531.844 241.369V238.921H559.876V241.369L550.468 240.169C548.964 239.977 547.972 239.881 547.492 239.881V272.521H544.228Z" fill="white"/>
    <path d="M567.673 272.521V238.921H582.313V241.273L573.913 240.169C572.441 239.977 571.449 239.881 570.937 239.881V254.521C571.353 254.521 572.345 254.473 573.913 254.377L581.785 253.897V256.105L573.913 255.625C572.345 255.529 571.353 255.481 570.937 255.481V271.561C571.513 271.561 572.521 271.465 573.961 271.273L582.457 270.169V272.521H567.673Z" fill="white"/>
    </svg></div>
  )
}

export default svgtext