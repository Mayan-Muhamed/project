import React from "react"
import '../../main.css'
import Button from "./Button.jsx"
import Title from "./Title"
function App() {
  const defaultStyle = {
        width: `600px`,
        height: `400px`,
        margin: `50px auto`,
        border: `2px solid black`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: `5px`,
        fontWeight: 700,
        background: "blueviolet",
        color:`black`,
        fontSize:"1.1em"
  }
  return (
    <div className='container'>
     <div style={ defaultStyle }> 
    
    Этот блок  для  Бакира.! <br/> 
    Надо удалить всё что находиться  в  этом  блоке <br/>
     и загрузить свой стилизованный  компонент <br/>
    .Стили тоже нада удалить.<br/>
    <br/>
    <br/>
    Желаю удачи в проекте  ))
    </div>

       <div style={ defaultStyle }> 

        Этот блок  для  Мухамеда.! <br/> 
        Надо удалить всё что находиться  в  этом  блоке <br/>
        и загрузить свой стилизованный  компонент <br/>
        .Стили тоже нада удалить. 
        <br/>
        <br/>
        Желаю удачи в проекте  ))


    </div>

         <div style={ defaultStyle }> 

        Этот блок  для  Далиля.! <br/> 
        Надо удалить всё что находиться  в  этом  блоке <br/>
        и загрузить свой стилизованный  компонент <br/>
        .Стили тоже нада удалить. 
        <br/>
        <br/>
        Желаю удачи в проекте  ))

    </div>

       <div style={ defaultStyle }> 

        Этот блок  для  Игрья.! <br/> 
        Надо удалить всё что находиться  в  этом  блоке <br/>
        и загрузить свой стилизованный  компонент <br/>
        .Стили тоже нада удалить.
        <br/>
        <br/>
        Желаю удачи в проекте  )) 

    </div>

     <div style={ defaultStyle }> 

        Этот блок  для  Асема.! <br/> 
        Надо удалить всё что находиться  в  этом  блоке <br/>
        и загрузить свой стилизованный  компонент <br/>
        .Стили тоже нада удалить. 
        <br/>
        <br/>
        Желаю удачи в проекте  ))

    </div>

    </div>
  )
}

export default App
