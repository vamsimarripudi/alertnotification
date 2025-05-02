// Write your code here
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'
import './index.css'

const AlertNotification = () => {
  const successNotification = () => (
    <Notification>
      <AiFillCheckCircle className="success" />
      <div>
        <h1 className="success">Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
    </Notification>
  )
  const errorNotification = () => (
    <Notification>
      <RiErrorWarningFill className="error" />
      <div className="card-container">
        <h1 className="error">error</h1>
        <p>Sorry, you are not authorized to have access to delete the file </p>
      </div>
    </Notification>
  )
  const warningNotification = () => (
    <Notification>
      <MdWarning className="warning" />
      <div>
        <h1 className="warning">Warning</h1>
        <p>Viewers of this file can see comments and suggestions</p>
      </div>
    </Notification>
  )

  const infoNotification = () => (
    <Notification>
      <MdInfo className="info" />
      <div>
        <h1 className="info">Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  return (
    <div>
      <h1>Alert Notifications</h1>
      {successNotification()}
      {errorNotification()}
      {warningNotification()}
      {infoNotification()}
    </div>
  )
}

export default AlertNotification
