

const ConditionalStatements2 = () => {

    const flag = true

    function renderTextBlock(getFlag){
        return getFlag ? <p> True Block </p> : <p> false block </p>
    }

  return (
    <div>
        <h1>ConditionalStatements2</h1>
        { renderTextBlock(flag) }
    </div>
  )
}

export default ConditionalStatements2
