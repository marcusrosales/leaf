//import  {useNavigate} from 'react-router-dom'

function NavBar() {

  //const navigate = useNavigate();

  return (
    <nav className="border-4 p-4 navBadCustoms">
      
      <ul className="flex justify-center gap-50">
        
        <button className="text-5xl navTexts text-center w-58 italic font-serif font-semibold"
                //onClick={()=>console.log('test HOME button')}
                >HOME</button>

        <button className="text-5xl navTexts text-center w-58 italic font-serif font-semibold"
                //onClick={()=>useNavigate('/test')}
                >SHELF</button>

        <button className="text-5xl navTexts text-center w-58 italic font-serif font-semibold"
                //onClick={()=>console.log('test market button')}
                >MARKET</button>

      </ul>
    </nav>
  );
}


export default NavBar;