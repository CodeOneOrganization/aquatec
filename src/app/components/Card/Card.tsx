import Button from '../Button/Button'
import styles from './Card.module.css'


interface Iprops {
    title: string,
    url: string,
    paragraph: string
}

export default function Card({ title, url, paragraph }: Iprops) {
    return (
        <article className={styles.card}>

            <div>

                <h3>{title}</h3>
                <p>{paragraph}</p>
                <picture><img src={url} alt="" /></picture>
            </div>


            <Button text='SOLICITAR SERVIÇO' />
        </article>
    )
}