import { useEffect, useState } from "react";
import ToDo from "./ToDo";

function App() {

  // for given the value 
  const [inputList, setInputList] = useState('');

  //for what i get , i store here 
  const [items, setItems] = useState(() => {
    const loaddata = localStorage.getItem('Items');
    return loaddata ? JSON.parse(loaddata) : [];
  });


  useEffect(() => {
    localStorage.setItem('Items', JSON.stringify(items))


  }, [items]);


  // this is our geting value of inputlist
  const itemEvent = (e) => {
    setInputList(e.target.value)
  }


  // here all data store 
  const listofItem = () => {
    setItems((olditems) => {
      return [...olditems, inputList]
    })
    setInputList("")
  }


  // deleted perticular button and even you can say delete inputdata
  const deleteItems = (id) => {
    console.log("deletd")

    setItems((olditems) => {
      return olditems.filter((arrElem, index) => {
        return index !== id;
      })
    })
  }



  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo  List</h1>
          <br />
          <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent} />
          <button onClick={listofItem} >+</button>



          {
            items.map((curElm, index) => {
              return <ToDo
                key={index}
                id={index}
                text={curElm}
                onSelect={deleteItems}
              />;

            })

          }


        </div>
      </div>

    </>
  );
}

export default App;
