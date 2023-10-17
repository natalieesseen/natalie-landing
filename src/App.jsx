import './App.css'

function App() {
  return (
    <div className='bg-beige h-screen flex items-center justify-center'>
      <div className='container w-72 m-auto'>
        <img src="/bread.png" alt="" />
        <div>
          <p className='my-8 text-center'>👋 Hej! my name is Natalie,
            I'm a&nbsp;
            <p className='underline decoration-wavy decoration-orange inline'>web developer</p>
            &nbsp;based in Göteborg, Sweden.
          </p>

          <p className='my-8 text-center'>
            Want to grab a coffee? Send me an email or connect through LinkedIn ☕️ 
          </p>

          <div className='flex justify-center'>
            <a href='mailto:natalieesseen@gmail.com' className='button rounded-full bg-brown text-beige py-1 px-3 my-2 hover:bg-orange ease-in-out duration-200 focus:ring focus:ring-[#fde3d2]'>Email</a>
            <a href='https://linkedin.com/in/natalieesseen/' className='button rounded-full bg-brown text-beige py-1 px-3 my-2 mx-2 hover:bg-orange ease-in-out duration-200 focus:ring focus:ring-[#fde3d2]'>LinkedIn</a>
            <a href='https://github.com/natalieesseen/' className='button rounded-full bg-brown text-beige py-1 px-3 my-2 hover:bg-orange ease-in-out duration-200 focus:ring focus:ring-[#fde3d2]'>GitHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
