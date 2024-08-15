import PropTypes from 'prop-types'
import { ScaleLoader } from 'react-spinners'

const LoadingSpinner = () => {
  return (
    <div
      className={` h-screen
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <ScaleLoader size={100} color='orange' />
    </div>
  )
}

LoadingSpinner.propTypes = {
  smallHeight: PropTypes.bool,
}

export default LoadingSpinner
