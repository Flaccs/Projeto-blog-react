import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
        <div className="flex flex-col justify-center items-center bg-[#8DA8E0] text-white ">
            <div className="flex justify-center bg-indigo-900 text-white">
                <div className="container flex flex-col items-center py-4 bg-[#8DA8E0]">
                    <p className='text-xl font-bold bg-[#8DA8E0]'>
                            Blog Pessoal Generation | Copyright: {data}
                        </p>        
                    <p className='text-lg'>Acesse nossas redes sociais</p>
                    <div className='flex gap-2'>
                    <a href="https://www.linkedin.com/" target='_blank'><LinkedinLogo size={48} className='stroke-2 text-[#8830E6] hover:scale-110 transition-all'/></a>
                                <a href="https://www.instagram.com/" target='_blank'><InstagramLogo size={48} className='stroke-2 text-[#8830E6] hover:scale-110 transition-all'/></a>
                                <a href="https://www.facebook.com/" target='_blank'><FacebookLogo size={48} className='stroke-2 text-[#8830E6] hover:scale-110 transition-all'/></a>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Footer