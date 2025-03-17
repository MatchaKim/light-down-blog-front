import { useEffect, useRef } from 'react';

interface ToastEditorProps {    
    onChange: (markdown: string) => void;
}

function ToastEditor({onChange}:ToastEditorProps) {
  const editorRef = useRef<any>(null);

  useEffect(() => {
    if (!editorRef.current) {
      editorRef.current = new toastui.Editor({
        el: document.querySelector('#editor'),
        height: '500px', 
        initialEditType: 'markdown', 
        previewStyle: 'vertical', 
        initialValue: '', 
        usageStatistics: false,
      });
    }

    editorRef.current.on('change', () => {
      const markdown = editorRef.current.getMarkdown();
      onChange(markdown);
    });

    return () => {
      if (editorRef.current) {
        editorRef.current.destroy(); 
        editorRef.current = null;
      }
    
    };
  }, []);


  
  
  

  return (
    <div>
      <div id="editor" ></div>
    </div>
  );
}

export default ToastEditor;
