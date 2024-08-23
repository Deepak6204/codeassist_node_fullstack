import { useRef, useState } from "react";
import { Box, HStack , center } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = ({problem}) => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    console.log(problem.language)
    setValue(problem.language);
  };

  return (
    <Box>
      <meta name="description" content="API reference for the <meta> component in React DOM" />
      <HStack spacing={4}>
        <Box w="50%">
          <Box w="100%" border='1px' borderColor='gray.200' h= "75vh"  overflowY="scroll">
              <h1 style={{
                  fontSize: '24px' , textAlign : 'center'
              }}>{problem.name}</h1>

              <p>{problem.problem_statement}</p>
          </Box>
        </Box>
        <Box w="50%">
          <Box w="100%">
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="40vh"
              theme="vs-dark"
              language={language}
              defaultValue={problem.java_driver_code}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Box>
          <Output editorRef={editorRef} language={language} />
        </Box>
        
      </HStack>
    </Box>
  );
};
export default CodeEditor;
