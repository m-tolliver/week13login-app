import logo from './logo.svg';
import './App.css';
import MySection from './Section'
import Navigation from './Nav'

let date = new Date()

let singleUser = {
  name: 'Jane',
  time: date.toDateString(),
}

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <MySection>
      <h3>Login {singleUser.name}</h3>
      <p>Username: {singleUser.time}</p>
      <p>Password:</p>
      </MySection>
    </div>
  );
}

export default App;
