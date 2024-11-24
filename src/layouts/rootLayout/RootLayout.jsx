import { Link, Outlet } from 'react-router-dom'
import './RootLayout.css'

const RootLayout = () => {
  return (
    <div className='rootLayout'>
        <header>
            <Link to="/" className='logo'>
                <img src="/logo.png" alt="logoo" />
                <span>MERN-AI</span>
            </Link>
            <div className="user">User</div>
        </header>
        <main>
            <Outlet />
        </main>
    </div>
  )
}

export default RootLayout