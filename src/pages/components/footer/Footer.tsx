import { ReactNode, useContext } from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

import { AuthContext } from '../../../contexts/AuthContext'

function Footer() {

    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode
    
    if (usuario.token !== "") {

        component = (
                <div className="flex justify-center bg-[#8DA8E0] text-white">
                    <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                        Blog Pessoal Generation | Copyright: { data }
                    </p>

                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                                <a href="https://www.linkedin.com/" target='_blank'><LinkedinLogo size={48} className='stroke-2 text-[#8830E6] hover:scale-110 transition-all'/></a>
                                <a href="https://www.instagram.com/" target='_blank'><InstagramLogo size={48} className='stroke-2 text-[#8830E6] hover:scale-110 transition-all'/></a>
                                <a href="https://www.facebook.com/" target='_blank'><FacebookLogo size={48} className='stroke-2 text-[#8830E6] hover:scale-110 transition-all'/></a>
                     </div>
                </div>
            </div>)
    }

    return (
        <>
            { component }
        </>
    )
}

export default Footer