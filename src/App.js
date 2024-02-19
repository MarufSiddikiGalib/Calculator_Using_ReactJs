import './Components/calculator.css';
import react,{ useState } from 'react';
function App() {
  const [action, setAction] = useState("")
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div>
            <input type="text" value = {action} />
          </div>

          <div>
            <input type="button" value="AC" onClick={e => setAction("")} />
            <input type="button" value="DEL" onClick={e => setAction(action.slice(0, -1))}/>
            <input type="button" value="." onClick={e => setAction(action + e.target.value)}/>
            <input type="button" value="/" onClick={e => setAction(action + e.target.value)}/>
          </div>

          <div>
            <input type="button" value="7" onClick={e => setAction(action + e.target.value)}/>
            <input type="button" value="8" onClick={e => setAction(action + e.target.value)} />
            <input type="button" value="9" onClick={e => setAction(action + e.target.value)} />
            <input type="button" value="*" onClick={e => setAction(action + e.target.value)} />
          </div>

          <div>
            <input type="button" value="4" onClick={e => setAction(action + e.target.value)} />
            <input type="button" value="5" onClick={e => setAction(action + e.target.value)} />
            <input type="button" value="6" onClick={e => setAction(action + e.target.value)}/>
            <input type="button" value="+" onClick={e => setAction(action + e.target.value)}/>
          </div>

          <div>
            <input type="button" value="1" onClick={e => setAction(action + e.target.value)} />
            <input type="button" value="2" onClick={e => setAction(action + e.target.value)}/>
            <input type="button" value="3" onClick={e => setAction(action + e.target.value)}/>
            <input type="button" value="-" onClick={e => setAction(action + e.target.value)} />
          </div>

          <div>
            <input type="button" value="00" onClick={e => setAction(action + e.target.value)}/>
            <input type="button" value="0" onClick={e => setAction(action + e.target.value)}/>
            <input type="button" value="=" onClick={e => setAction(eval(action))}/>
            
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;
