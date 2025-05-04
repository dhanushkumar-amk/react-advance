

const PasswordGenerator = () => {
  return (
    <div>
        <h1>Password Generator</h1>
        <p>Generate a random password with the specified length and character set.</p>
        <form>
            <label htmlFor="length">Length:</label>
            <input type="number" id="length" name="length" min="1" max="128" defaultValue="12" />
            <br />
            <label htmlFor="uppercase">Include Uppercase Letters:</label>
            <input type="checkbox" id="uppercase" name="uppercase" defaultChecked />
            <br />
            <label htmlFor="lowercase">Include Lowercase Letters:</label>
            <input type="checkbox" id="lowercase" name="lowercase" defaultChecked />
            <br />
            <label htmlFor="numbers">Include Numbers:</label>
            <input type="checkbox" id="numbers" name="numbers" defaultChecked />
            <br />
            <label htmlFor="symbols">Include Symbols:</label>
            <input type="checkbox" id="symbols" name="symbols" defaultChecked />
            <br />
            <button type="submit">Generate Password</button>
        </form>
        {/* Display generated password here */}
    </div>
  )
}

export default PasswordGenerator
