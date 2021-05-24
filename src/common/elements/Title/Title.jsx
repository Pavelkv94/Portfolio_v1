import s from './Title.module.scss'


export function Title(props) {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>)
}