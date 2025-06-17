import ClassBasedComponents from "./components/classBasedComponenet"
import ConditionalStatements from "./components/ConditionalStatements";
import ConditionalStatements2 from "./components/ConditionalStatements2";
import FunctionalBasedComponents from "./components/FunctionalComponents";
import User from "./components/Helper/User";
import LifeCycleClassComponenet from "./components/LifeCycleClassBasecComponenet";
import ListandKeys from "./components/ListandKeys";
import Props from "./components/Props";
import StateAndSetState from "./components/StateAndSetState";
import StatemanagementInClassBasedComponents from "./components/StatemanagementInClassBasedComponents";
import StyledComponenet from "./components/StyledComponenet";
import UseEffectHook from "./hooks/UseEffectHook";
import UseStateHook from "./hooks/UseStateHook";


const data = [
    "product 1",
    "product 2",
    "product 3",
    "product 4",
];

const App = () => {
  return (
    <div style={{width : "100%", border : "1x solid red"}} >
        <h1 >React Tutorial List</h1>
        {/* <ClassBasedComponents/> */}
        {/* <FunctionalBasedComponents/> */}
        {/* <ListandKeys/> */}
        {/* <Props data = {data} name = "dhanushkumar" age = "21" gendre = "Male"  /> */}
        {/* <StyledComponenet/> */}
        {/* <ConditionalStatements/> */}
        {/* <ConditionalStatements2/> */}
        {/* <StateAndSetState/> */}
        {/* <StatemanagementInClassBasedComponents/> */}
        {/* <LifeCycleClassComponenet/> */}
        <User/>

        {/* Hooks */}
        {/* <UseStateHook/> */}
        {/* <UseEffectHook/> */}

    </div>
  )
}

export default App
