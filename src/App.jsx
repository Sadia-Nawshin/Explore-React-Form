import './App.css'
import SimpleForm from './components/simpleForm/simpleForm'
import FormAction from "./components/formAction/formAction"
import ControlledField from './components/controlledField/controlledField'
import UnControlledField from './components/uncontrolledField/uncontrolledField'
import HookForm from './components/hookForm/hookForm'
import ProductManagement from './components/productManagement/productManagement'

function App() {

  return (
    <>  
      <div>
        <h1>Explore React Form</h1>
        {/*<SimpleForm></SimpleForm>
          <ControlledField></ControlledField>
         <UnControlledField></UnControlledField>
          <HookForm></HookForm>
        */}
        
        <ProductManagement></ProductManagement>

        <></>
        

        
      </div>
    </>
  )
}

export default App
