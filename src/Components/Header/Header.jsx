import NewsName from '../../../public/logo.png'
import moment from 'moment';



const Header = () => {
    return (
        <div className=''>
            <img className='w-80' src={NewsName} alt="" />
            <p className='text-center my-1 text-slate-400'>Journalism Without Fear or Favour</p>
            <p className='text-center my-1'>{
                moment().format('MMMM Do YYYY, h:mm:ss a')
            }
            </p>
        </div>
    );
};

export default Header;