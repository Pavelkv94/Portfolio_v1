import s from './Title.module.css'


export function Title(props) {
    return (
        <div className={s.title}>
            <h2>{props.title}</h2>
        </div>)
}