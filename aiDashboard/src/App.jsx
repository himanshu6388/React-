import React from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import ChatWindow from './components/ChatWindow'

function App() {
  return (
    <>
      <div className='flex h-screen overflow-hidden'>
        <Sidebar/>
        <div className='flex-1 flex flex-col'>
        <Header/>
        <ChatWindow/>
        </div>
      </div>
    </>
  )
}

export default App