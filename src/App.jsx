import './App.css'

function App() {
  return (
    <div className='bg-beige h-screen flex items-center justify-center'>
      <div className='container w-64 m-auto'>
        <img src="/bread.png" alt="" />
        <div>
          <p className='my-8'>👋 Hi! my name is Natalie, I'm a&nbsp;
            <p className='underline decoration-wavy decoration-orange inline'>web developer</p>

            &nbsp;based in Sweden. I'm currently studying my last year in Web Developer, E-commerce at Changemaker Educations. I'm doing my internship as a&nbsp;
            <p className='underline decoration-wavy decoration-orange inline'>junior developer</p>

            &nbsp;during spring of 2023!
          </p>

          <div>
            <a href='mailto:natalieesseen@gmail.com' className='button rounded-full bg-brown text-beige py-1 px-3 my-2 hover:bg-orange ease-in-out duration-200 focus:ring focus:ring-[#fde3d2]'>Email</a>
            <a href='https://shadow-stitch-17b.notion.site/Natalie-Esseen-fdd2c6b9ea424b1bbb2e3dadd9f68f0f' className='button rounded-full bg-brown text-beige py-1 px-3 my-2 mx-2 hover:bg-orange ease-in-out duration-200 focus:ring focus:ring-[#fde3d2]'>Resume</a>
            <a href='https://github.com/natalieesseen/' className='button rounded-full bg-brown text-beige py-1 px-3 my-2 hover:bg-orange ease-in-out duration-200 focus:ring focus:ring-[#fde3d2]'>GitHub</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
