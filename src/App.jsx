import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />
        <main>
          <Post  
            author="Valenthina Temudo" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi natus quia nihil error minima accusamus perspiciatis, dolore quasi reiciendis cum possimus quibusdam aliquam laudantium officiis exercitationem itaque beatae, impedit debitis." 
          />
          <Post
            author="Diego Fernandes"
            content="ola mundo"
          />
        </main>
      </div>
    </div>
  )
}