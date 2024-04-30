
import { BiDollarCircle } from "react-icons/bi";

export const HeadTitle = ({title}: {title: string}) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <BiDollarCircle size={30}/>
        <h1 style={{ fontFamily: 'Work Sans', fontSize: '20px', fontWeight: '600' }}>
            {title} 
        </h1>
     </div>
  );
};
