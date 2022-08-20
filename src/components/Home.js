import Navbar from './Navbar';
import CategoryList from './CategoryList'
import ThreadList from './ThreadList'

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <div className="row">
          <div className='column side'>
            <CategoryList />
          </div>
          <div className='column middle'>
            <ThreadList />
          </div>
        </div>
      </main>
    </>
  )
}
 
export default Home;