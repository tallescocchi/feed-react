import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar url="https://www.github.com/maykbrito.png"/>
          <div className={styles.authorInfo}>
            <strong>Talles Cocchi</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="15 de Fevereiro ás 14:00h" dateTime="2023-02-15 14:00:00">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat quia
          eius corrupti, ipsum iusto enim cupiditate nobis saepe dolores
          similique quam consequuntur corporis? Id nesciunt earum dicta magnam
          molestias laboriosam?
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}
