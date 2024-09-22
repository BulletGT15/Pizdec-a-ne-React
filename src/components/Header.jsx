import { useState } from 'react'
import Button from './Button/Button'

function Header() {
  const [now, setNow] = useState(new Date())
  // const now = new Date()

  setInterval(() => setNow(new Date()), 1000)
  const name = 'Result'
  return (
    <header>
      <div className='div1'>
        <img className='Logo' src='src/components/images/Logo.png'/>
      </div>
      <div className='div2'>
        <Button>about</Button>
        <Button>our service</Button>
        <Button>job openings</Button>
      </div>
      <div className='div3'>
        <Button>EN</Button>
        <Button>CONTACT US</Button>
      </div>
    </header>
  )
}

export default Header
