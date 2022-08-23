import Blue from "./components/classes/Classes";
import Red from './components/classes2/Classes2'

function App() {
  const user = {
    name:'Anna',
    age:19
  }
  return (
    <div className="App">
        <Blue name={user.name} age={user.age}/>
      <Red name={user.name} age={user.age}/>
    </div>
  );
}

export default App;
