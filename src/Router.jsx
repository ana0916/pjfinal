
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Albums } from './pages/Albums'
import { Animation } from './pages/Animation'
import { Books } from './pages/Books'
import { Movies } from './pages/Movies'
import { Menu } from './components/Menu'
import { Header } from './components/Header'
import { Contato } from './components/Contato'
import { Profile } from './pages/Profile'

export function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Menu />
            <Routes>
                <Route path="/" element={<Movies />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/animation" element={<Animation />} />
                <Route path="/books" element={<Books />} />
                <Route path="/albums" element={<Albums />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
           
        </BrowserRouter>
        
    )
}
