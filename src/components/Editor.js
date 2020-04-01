import React from 'react'

export default function Editor(props) {
    return (
        
            <textarea 
                id="editor" 
                type="text" 
                value={props.markdown} 
                onChange={props.onChange} 
            />
        
    )
}
