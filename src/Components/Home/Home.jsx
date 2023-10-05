
import imge from '../images/profile.png'

const Home = () => {
  return (
    <div className='flex justify-between items-center  p-4 mx-4 border-b-2 '>
         <h1 className=" text-2xl " >Knowledge Cafe</h1>
         <img src={imge} alt="" />

    </div>
  );
};

export default Home;