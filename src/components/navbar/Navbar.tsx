import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-[#ffb794] text-[#41493b]'>
            
                <div className="container flex justify-between text-lg px-4">
                <Link to='/home' className="text-2xl font-bold">Farmácia Boa-Vida</Link>

                    <div className='flex gap-4'>
                        <span>Produtos</span>
                        <span><Link to='/categorias' className='hover:underline'>Categorias</Link></span>
                        <span><Link to='/cadastrartema' className='hover:underline'>Cadastrar categoria</Link></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar