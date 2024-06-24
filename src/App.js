import './App.css';
import ArrayOfRecords from './components/ArrayOfRecords';
import DataBinding from './components/DataBinding';
import DynamicComponent from './components/DynamicComponent';
import EnableDisableButton from './components/EnableDisableButton';
import ShowHideElement from './components/ShowHideElement';
import SimpleJsx from './components/SimpleJsx';
import SumOfTwoNumbers from './components/SumOfTwoNumbers';

function App() {
  return (
    <div className="App">
      <SimpleJsx/> 
      <ArrayOfRecords/>
      <ShowHideElement/>
      <EnableDisableButton/>
      <DataBinding/>
      <DynamicComponent/>
      <SumOfTwoNumbers/>
    </div>
  );
}

export default App;
