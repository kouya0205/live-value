import { memo, useState, useEffect } from 'react';
import AceEditor, { IMarker, IEditorProps } from 'react-ace';

import 'brace/mode/ruby';
import 'brace/theme/xcode';

const markers: IMarker[] = [
  {
    startRow: 3,
    startCol: 1,
    endRow: 4,
    endCol: 1,
    className: 'ruby-editor',
    type: 'text',
    inFront: true,
  },
];

export const CodeEditor = ({ useDelay = false }) => {
  const [textValue, setTextValue] = useState(
    `IDENTIFICATION DIVISION.
  PROGRAM-ID. EMPLOYEE-INFO.
  ENVIRONMENT DIVISION.
    DATA DIVISION.
    WORKING-STORAGE SECTION.
    01 WS-EMPLOYEE.
      05 WS-EMP-ID   PIC 9(5).
      05 WS-EMP-NAME PIC X(20).
      05 WS-EMP-DEPT PIC X(15).
    PROCEDURE DIVISION.
    MAIN-PROCEDURE.
     * ここにプログラムロジックを記述してください
  STOP RUN.`,
  );
  const handleChange = (value: string) => {
    setTextValue(value);
  };

  return (
    <>
      <style>
        {`
          .ace_gutter {
            background: #0b6bcb2c !important;
            font-size: 15px;
          }
      `}
      </style>
      <AceEditor
        mode="ruby"
        theme="xcode"
        onChange={handleChange}
        width="100%"
        name="ace-editor"
        editorProps={{ $blockScrolling: false }}
        value={textValue}
        showGutter={true}
        highlightActiveLine={true}
        showPrintMargin={true}
        setOptions={{
          //   enableBasicAutocompletion: false,
          //   enableLiveAutocompletion: false,
          //   enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
        style={{
          width: '100%',
          height: '300px',
          border: '1px solid #ddd',
        }}
        markers={markers}
      />
    </>
  );
};
