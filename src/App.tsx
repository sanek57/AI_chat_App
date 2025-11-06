//components
import { PageTitle } from './components/PageTitle'
import { Sidebar } from './components/Sidebar'
import { TopAppBar } from './components/TopAppBar'

// node modules

// hooks
import { useToggle } from './hooks/useToggle'

function App() {
  const [isSidebarOpen, toggleSideBar] = useToggle()

  return (
    <>
      {/* meta */}
      <PageTitle title='MavDeep - chat to supercharge your ides' />

      <div className='lg:grid lg:grid-cols-[320px_1fr]'>
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSideBar={toggleSideBar} />
        <div className='h-dvh grid grid-rows-[max-content_minmax(0,1fr)_max-content]'>
          <TopAppBar toggleSidebar={toggleSideBar} />

          <div className='px-5 pb-5 flex flex-cols overflow-y-hidden'>
            <div className='max-w-[840px] w-full mx-auto grow'>main content</div>
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
