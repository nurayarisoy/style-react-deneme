import logo from './logo.svg';
import './App.css';
import ClassComponent from './Coponents/ClassComponent';
import FunctionComp from './Coponents/FunctionComp';

function App() {
  const age=50;
  
  return (
    <div className="App">
      <h1>{age}</h1>
      <ClassComponent old={age} car="Bwv"  home="benz" bag="sari"/>
     <FunctionComp old ={age+age } color="yellow"/>
    </div>
  );
}

export default App;
