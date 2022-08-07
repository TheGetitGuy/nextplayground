import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div style={{maxWidth: '5in'}} className='window' >
      <div className='title-bar'>
        <div className='title-bar-text'>Title</div>
          <div className='title-bar-controls'>
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
      </div>
        <div className='window-body'>
          <Layout></Layout>
          <p>Hello to Next</p>
          <button>Heyoo</button>
        </div>
    </div>
  )
}
