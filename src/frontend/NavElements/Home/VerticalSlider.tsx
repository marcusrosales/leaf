function BookPlate(){
    
    let b1 = 'src/frontend/assets/Test Pictures/dog1.jpg'
    //let b2 = 'src/frontend/assets/Test Pictures/dog2.jpg'
    //let b3 = 'src/frontend/assets/Test Pictures/dog3.png'
  
    return(
   
    <>

    <img src={b1} className="w-90 h-140 border-1 rounded-2xl shadow-lg/100"></img>
    
    </>)
}


function VerticalSlider(){
    return(
        <>
            <BookPlate />
        </>
    )
}

export default VerticalSlider;
