import PropTypes from 'prop-types'
import css from './ContactItem.module.css'

export const ContactItem = ({ id, name, number, onDelete }) => {
    return (
        <li key={id} className={css.item}>
            <p className={css.text}>{name} : {number}</p>
            <button className={css.btn} type='button' onClick={() => onDelete(id)}>Delete</button>
        </li>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}