import { FaStar } from 'react-icons/fa';

function Star({click=c => c, selcted}) {
    return (
       <div className='star'>
           <FaStar onClick={click} color={selcted ?'#ffff00': '#808080' }/>
       </div>
    )
}

export default Star;