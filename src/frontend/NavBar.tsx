import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';



function NavBar() {

  const navigate = useNavigate();

  return (

    <nav className="border-4 p-4 navBadCustoms">
      <ul className="flex justify-center gap-50">


        <Link to={'/'}>
          <div className="flex justify-center">
        
        <img src="src/frontend/assets/Home.svg" className="size-13 -mr-3 "></img>
        <button className="text-5xl navTexts text-center w-58 italic font-serif font-semibold
                text-shadow-lg/100  text-shadow-green-900"
                //onClick={()=>console.log('test HOME button')}
                >HOME</button>
        </div>  </Link>


        <Link to={'/Shelf'}>
          <div className="flex justify-center">
        <img src="src/frontend/assets/Shelf.svg" className="size-13 -mr-3 "></img>
        <button className="text-5xl navTexts text-center w-58 italic font-serif font-semibold
                text-shadow-lg/100  text-shadow-green-900"
                //onClick={()=>useNavigate('/test')}
                >SHELF</button>
        </div></Link>


        <Link to={'/Shelf'}>
        <div className="flex justify-center">

        <img src="src/frontend/assets/Market.svg" className="size-13 mr-3 "></img>
        <button className="text-5xl navTexts text-center w-58 italic font-serif font-semibold
                text-shadow-lg/100  text-shadow-green-900"
                //onClick={()=>console.log('test market button')}
                >MARKET</button> 
        </div></Link>

      </ul>    
    </nav>

);
}


export default NavBar;