function NavBar() {

  return (
    <nav>
      <ul className="flex">
        
        <button className="text-5xl navTexts border-3 text-center w-58 italic font-serif font-semibold"
                onClick={()=>console.log('test HOME button')}>HOME</button>

        <button className="text-5xl navTexts border-3 text-center w-58 italic font-serif font-semibold"
                onClick={()=>console.log('test SHELF button')}
                >SHELF</button>

        <button className="text-5xl navTexts border-3 text-center w-58 italic font-serif font-semibold"
                onClick={()=>console.log('test market button')}
                >MARKET</button>

      </ul>
    </nav>
  );
}


export default NavBar;