// Write your code here
import {GrFormClose} from 'react-icons/gr'

const Notification = props => {
  const {children} = props
  return (
    <div>
      <div>
        {children}
        <GrFormClose />
      </div>
    </div>
  )
}

export default Notification
