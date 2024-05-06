import { NotificationContainer, NotificationManager } from 'react-notifications';
import './App.css';
import Faqs from './Faqs';
import 'react-notifications/lib/notifications.css';

function App() {
  let show = () => {
    NotificationManager.info("Welcome");
    NotificationManager.success("SuccesFully","title");
    NotificationManager.warning("Warning");
    NotificationManager.error("Danger");
  }
  return (
    <div className="App">

      <button onClick={show}>Click Me</button>
      <NotificationContainer />
      <Faqs />
    </div>
  );
}

export default App;
