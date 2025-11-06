//components
import { PageTitle } from './components/PageTitle'
import { TopAppBar } from './components/TopAppBar'

// node modules

function App() {
  return (
    <>
      {/* meta */}
      <PageTitle title='MavDeep - chat to supercharge your ides' />

      <div className='sidebar'>
        <div className=''>
          <TopAppBar />

          <div className='main-content'>
            <div className=''>content</div>
          </div>

          <div className='promt-field'>
            <p className=''>
              MavDeep may dispaly inaccurate info, including about people, so
              double-check iss response.
              <a
                href='https://support.google.com/gemini?p=privacy_notice'
                className=''
                target='_blank'
              >
                Your privacy & Gemeni Apps
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
