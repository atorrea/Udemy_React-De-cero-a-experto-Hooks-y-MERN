/** FirstApp.jsx **/

import PropTypes from "prop-types";

export const FirstApp = ({ title, subtitle, name }) => {
  if ( !title ) {
    throw new Error('El title no existe');
  }

  return (
    <>
      <h1>{ title }</h1>
      <p>{ subtitle }</p>
      <p>{ name }</p>
    </>
  )
};

FirstApp.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string.isRequired,
  number: PropTypes.number,
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  name: 'otro',
}