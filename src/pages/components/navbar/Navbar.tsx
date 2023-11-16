import { ReactNode, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AuthContext } from '../../../contexts/AuthContext'
import { toastAlerta } from '../../utils/toastAlerta'

function Navbar() {

    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta ('Usuário deslogado com sucesso' , "sucesso")
        navigate('/login')
    }

    let component: ReactNode

    if (usuario.token !== "") {

        component = (
            <div className='w-full bg-[#8DA8E0] text-white flex justify-center py-4'>
                <div className="container flex justify-between text-lg">
                    <Link to='/home' className='text-2xl font-bold '>Blog Pessoal</Link>

                    <div className='flex gap-4 '>
                        <Link to='/postagens'>Postagens</Link>
                        <Link to='/temas'>Temas</Link>
                        <Link to='/cadastroTema'>Cadastrar Tema</Link>
                        <Link to='/perfil'>Perfil</Link>
                        <Link to='' onClick={logout}>Sair</Link>
                    </div>
                </div>
            </div>
        )

    }

    return (
        <>
            { component }
        </>
    )
}

export default Navbar
