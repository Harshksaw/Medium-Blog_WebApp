import Auth from '../Components/Auth'

import Quote from '../Components/Quote'

const Signin = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
           <div>
            <Auth type="signin" />
            
        </div>
        <div className='non lg:block'>

        <Quote/>
        </div>
    </div>
  )
}

export default Signin
