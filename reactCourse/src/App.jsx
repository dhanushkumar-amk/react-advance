import ClassBasedComponents from "./components/classBasedComponenet"
import FunctionalBasedComponents from "./components/FunctionalComponents";
import ListandKeys from "./components/ListandKeys";
import Props from "./components/Props";


const data = [
    "product 1",
    "product 2",
    "product 3",
    "product 4",
];

const App = () => {
  return (
    <div>
        <h1>React Tutorial List</h1>
        {/* <ClassBasedComponents/> */}
        {/* <FunctionalBasedComponents/> */}
        {/* <ListandKeys/> */}
        <Props data = {data} name = "dhanushkumar" age = "21" gendre = "Male"  />

    </div>
  )
}

export default App
