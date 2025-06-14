import  {useNavigate} from 'react-router-dom'

function NavBar() {

  const navigate = useNavigate();

  return (
    <nav>
      <ul className="flex">
        
        <button className="text-5xl navTexts border-3 text-center w-58 italic font-serif font-semibold"
                onClick={()=>useNavigate('/test')}>HOME</button>

        <button className="text-5xl navTexts border-3 text-center w-58 italic font-serif font-semibold"
                onClick={()=>useNavigate('/test')}
                >SHELF</button>

        <button className="text-5xl navTexts border-3 text-center w-58 italic font-serif font-semibold"
                onClick={()=>useNavigate('/test')}
                >MARKET</button>

      </ul>
    </nav>
  );
}


export default NavBar;