import React, {useState} from 'react'



export default function TestForm(props) {

    const handleUpClick = () => {
        console.log('uppercase was clicked' + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert('Converted to upppercase', 'success')
    }
    const handleLoClick = () => {
        console.log('uppercase was clicked' + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert('Converted to lowercase', 'success')
    }

    const handleOnChange = (event) => {
        console.log('handled onchange')
        setText(event.target.value)
    }


    const [text, setText] = useState('Enter text here');

    return (
<>
            

        <div className='container' style={{ color: props.mode == 'light' ? 'black' : 'white' }}>
            <h1>
                {props.heading}
            </h1>
                <div className="mb-3" >
                    
                <textarea className="form-control" placeholder='Enter text here' style={{ backgroundColor: props.mode == 'light' ? 'white' : 'gray' , color: props.mode == 'light' ? 'black' : 'white' }} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
            </div>
            <button onClick={handleUpClick} className="btn btn-primary">convert to uppercase</button>
            
            <button onClick={handleLoClick} className="btn btn-primary mx-2">convert to Lowecase</button>
            
            
            </div>
            <div className='container my-2' style={{ color: props.mode == 'light' ? 'black' : 'white' }} >
                <h2>
                    Your text summary 
                </h2>
                <p>
                    {text.split(' ').length} words, {text.length} charachters
                </p>
            </div>
            </>
    )
}
