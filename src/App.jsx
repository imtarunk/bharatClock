import AppName from "./component/BharatClockHeading";
import IntroHeading from "./component/intro-heading";
import Datetime from "./component/dateTime";

function App() {

  return (<div className="card">
    <center className="main">
      <AppName />
      <IntroHeading></IntroHeading>
      <Datetime />
    </center>
  </div>
  )
}
export default App;