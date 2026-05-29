import React from 'react'
import '../Navbar/Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className="logoBox">
        
<svg width="50" height="50" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">

  <rect width="220" height="220" rx="40" fill="#0F172A"/>

  <rect x="55" y="40" width="80" height="110" rx="12" fill="#F8FAFC"/>

  
  <rect x="70" y="65" width="50" height="8" rx="4" fill="#CBD5E1"/>
  <rect x="70" y="82" width="40" height="6" rx="3" fill="#CBD5E1"/>
  <rect x="70" y="98" width="48" height="6" rx="3" fill="#CBD5E1"/>
  <rect x="70" y="114" width="35" height="6" rx="3" fill="#CBD5E1"/>

  <path 
    d="M78 145 L98 125 L115 138 L140 105" 
    stroke="url(#grad1)" 
    stroke-width="8" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  />

 
  <path 
    d="M132 105 H145 V118" 
    stroke="url(#grad1)" 
    stroke-width="8" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  />

 
  <circle cx="145" cy="145" r="28" stroke="#38BDF8" stroke-width="10"/>
  <line x1="164" y1="164" x2="184" y2="184" stroke="#38BDF8" stroke-width="10" stroke-linecap="round"/>


  <defs>
    <linearGradient id="grad1" x1="78" y1="145" x2="145" y2="105" gradientUnits="userSpaceOnUse">
      <stop stop-color="#22C55E"/>
      <stop offset="1" stop-color="#38BDF8"/>
    </linearGradient>
  </defs>

</svg>
            <h2>Job_READY</h2>
            
        </div>
          
    </div>
    
  )
}

export default Navbar