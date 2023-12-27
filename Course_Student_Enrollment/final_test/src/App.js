
import './App.css';
import AddStudentComponent from './Componant/AddStudentComponent';
// import Index from './Componant/Index';
import StudentComponent from './Componant/StudentComponant';
import UpdateStudentComponent from './Componant/UpdateStudentComponent';

function App() {
  return (
    <div className="App">
    <UpdateStudentComponent/>
    <AddStudentComponent/>
      <StudentComponent/>
      
    </div>
  );
}

export default App;
