import React from 'react';
import marked from "marked";

marked.setOptions({
    breaks: true
  });

const renderer = new marked.Renderer();

export default function Previewer(props) {
    return (
        <div 
            id="preview" 
            dangerouslySetInnerHTML={{
                _html: marked(props.markdown, {renderer: renderer})
            }}
        ></div>
    )
}
