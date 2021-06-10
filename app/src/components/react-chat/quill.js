import React from 'react'

import { useQuill } from 'react-quilljs';
// or const { useQuill } = require('react-quilljs');

import 'quill/dist/quill.snow.css'; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme

export default function Quill() {
    const { quillRef } = useQuill({
      modules: {
        toolbar: '#toolbar'
      },
      formats: ["size", "bold", "script"], // Important
    });
  
    return (
      <div style={{ width: 500, height: 300 }}>
        <div ref={quillRef} />
        <div id="editor" />
        <div id="toolbar">
          <select className="ql-size">
            <option value="small" />
            <option selected />
            <option value="large" />
            <option value="huge" />
          </select>
          <button className="ql-bold" />
          <button className="ql-script" value="sub" />
          <button className="ql-script" value="super" />
        </div>
        
      </div>
    );
  };