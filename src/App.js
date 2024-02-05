import Email from './Components/Email.jsx';
import MyName from './Components/Name.jsx';
import Age from './Components/Age.jsx';
import MainGoal from './Components/Goals/Main-Goal.jsx';
import Add from './Components/Calculator/add.jsx';
import Mult from './Components/Calculator/mult.jsx';
import Div from './Components/Calculator/Divide.jsx';
import Sub from './Components/Calculator/Subtract.jsx';


function App (){
  return (
    <>
    <MyName/>
    <Age/>
    <MainGoal/>
    {/* <Email/> */}
    <Add/>
    <Div/>
    <Mult/>
    <Sub/>
    </>
  )
}

export default App;