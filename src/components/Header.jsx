import Button from "./Button"
import PropTypes from 'prop-types'

const Header = ({title, onAdd, showAdd}) =>{
    return(
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'black'} text={showAdd ? 'close' : 'add'} onClick={onAdd} />
        </header>
    )
}

Header.defaultProps = {
    title:  'Task Tracer',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}



export default Header