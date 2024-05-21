import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    const value = e.target.name;
    setResult(result.concat(value));
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  const toggleSign = () => {
    setResult((prevResult) => {
      const num = parseFloat(prevResult);
      if (isNaN(num)) {
        return prevResult;
      }
      return String(num * -1);
    });
  };

  const buttonStyle = "bg-gray-500 text-white text-lg p-4 rounded-xl";
  const buttonClearStyle = "bg-gray-400 text-black font-bold text-2xl rounded-xl h-16";
  const buttonLeftStyle = "bg-yellow-600 font-extrabold rounded-xl text-white";

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <form className="flex w-full justify-center p-5">
        <input
          type="text"
          value={result}
          readOnly
          className="w-1/2 rounded-lg bg-black/60 p-2 text-right text-4xl font-bold text-white md:w-5/12 lg:w-3/12"
        />
      </form>

      <div className="grid grid-cols-4 gap-2 rounded-xl border bg-gray-600 p-6 shadow-md shadow-gray-100 lg:w-3/12">
      <button name="7" onClick={handleClick} className={`${buttonStyle}`}>
          7
        </button>
        <button name="8" onClick={handleClick} className={`${buttonStyle}`}>
          8
        </button>
        <button name="9" onClick={handleClick} className={`${buttonStyle}`}>
          9
        </button>
        <button name="+" onClick={handleClick} className={`${buttonLeftStyle}`}>
          +
        </button>
        <button name="4" onClick={handleClick} className={`${buttonStyle}`}>
          4
        </button>
        <button name="5" onClick={handleClick} className={`${buttonStyle}`}>
          5
        </button>
        <button name="6" onClick={handleClick} className={`${buttonStyle}`}>
          6
        </button>
        <button name="-" onClick={handleClick} className={`${buttonLeftStyle}`}>
          -
        </button>
        <button name="1" onClick={handleClick} className={`${buttonStyle}`}>
          1
        </button>
        <button name="2" onClick={handleClick} className={`${buttonStyle}`}>
          2
        </button>
        <button name="3" onClick={handleClick} className={`${buttonStyle}`}>
          3
        </button>
        <button name="*" onClick={handleClick} className={`${buttonLeftStyle}`}>
          ×
        </button>
        <button name="clear" onClick={clear} className={`${buttonClearStyle} col-span-1 bg-orange-500`}>
          C
        </button>
        <button name="0" onClick={handleClick} className={`${buttonStyle}`}>
          0
        </button>
        <button
          id="result"
          onClick={calculate}
          className={`${buttonStyle}`}
        >
          =
        </button>

        <button name="/" onClick={handleClick} className={`${buttonLeftStyle}`}>
          /
        </button>
        
        
        
        

        
        
        
        
        
        
        
        {/* <button name="." onClick={handleClick} className={`${buttonStyle}`}>
          .
        </button> */}
        
      </div>
    </div>
  );
}

export default App;
