import {InstagramLogo } from '@phosphor-icons/react'
import { FirstAid, Heart, Scales } from '@phosphor-icons/react/dist/ssr'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-[#ffb794] text-[#41493b]">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>
                            Farmácia Boa-Vida | Copyright: {data}
                        </p>
                    <p className='text-lg'>Acesse nossas redes sociais  e sites confiáveis</p>
                    <div className='flex gap-8'>
                        <a href="https://www.instagram.com/conselhofederaldefarmacia/" target="_blank">
                        <InstagramLogo size={48} weight='bold' /></a>
                        <a href="https://www.gov.br/saude/pt-br/composicao/sectics/farmacia-popular" target="_blank">
                        <Scales size={48} weight='bold' /></a>
                        <a href="https://www.crfsp.org.br/" target="_blank">
                        <FirstAid size={48} weight='bold' /></a>
                        <a href="https://www.who.int/pt/about" target="_blank">
                        <Heart size={48} weight='bold' /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer