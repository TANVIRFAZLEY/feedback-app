import PropTypes from 'prop-types'

function Header({ appTitle }) {
    return (
        <header>
            <h2>{appTitle}</h2>
        </header>
    )
}
//Value type check
Header.defaultProps = {
    appTitle: "Feedback UI"
}
Header.propTypes = {
    appTitle: PropTypes.string
}

export default Header
