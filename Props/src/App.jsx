import Student from './Student.jsx'

function App() {
  return(
    <>
      <Student name = "Tony" age={30} isStudent={true} /> 
      <Student name = "Reigns" age = {30} isStudent = {false} />
      <Student name =  "Joe" age = "40" isStudent = {false}/>
      <Student name = "Joy" age = {21} isStudent = {true} />
      <Student />
    </>
  );
    
}

export default App
