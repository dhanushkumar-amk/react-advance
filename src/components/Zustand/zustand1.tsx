import OtherComponent from "./OtherComponent"
import {useCounter} from "./store"

const Zustand1 = () => {
    // const {count, increment, decrement } = useCounter(state => state)
    // const {count, increment, decrement } = useCounter()
    const { count } = useCounter()

    return (
    <div>
        <h1>count : { count }</h1>
        <OtherComponent/>
    </div>
  )
}

export default Zustand1
