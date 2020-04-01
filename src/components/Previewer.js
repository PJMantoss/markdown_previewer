import React from 'react'

const renderer = new marked.Renderer();

export default function Previewer(props) {
    return (
        <div 
            id="preview" 
            dangerouslySetInnerHTML={{
                _html: marked(props.markdown, {renderer: renderer})
            }}
        >
            
        </div>
    )
}
