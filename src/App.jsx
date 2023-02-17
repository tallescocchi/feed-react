import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://www.github.com/tallescocchi.png',
      name: 'Talles Cocchi',
      role: 'Web Developer'
    },
    content: [
      {
        type: 'paragraph',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ratione velit sint, iusto eum, quasi numquam nesciunt veritatis, minus laborum fugit quaerat. Expedita pariatur possimus quisquam repellendus perspiciatis ullam non'
      },
      { type: 'link', content: 'talles.com/web' }
    ],
    publishedAt: new Date('2023-02-16 12:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://www.github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Web Frond-End'
    },
    content: [
      {
        type: 'paragraph',
        content:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error ratione velit sint, iusto eum, quasi numquam nesciunt veritatis, minus laborum fugit quaerat. Expedita pariatur possimus quisquam repellendus perspiciatis ullam non numquam nesciunt veritatis, minus laborum fugit quaerat. Expedita pariatur possimus quisquam repellendus perspiciatis ullam non'
      },
      { type: 'link', content: 'talles.com/web' }
    ],
    publishedAt: new Date('2023-02-10 12:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
