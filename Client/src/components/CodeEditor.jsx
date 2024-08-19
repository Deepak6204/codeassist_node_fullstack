import { useRef, useState } from "react";
import { Box, HStack , center } from "@chakra-ui/react";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "../constants";
import Output from "./Output";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <Box>
      <meta name="description" content="API reference for the <meta> component in React DOM" />
      <HStack spacing={4}>
        <Box w="50%">
          <Box w="100%" border='1px' borderColor='gray.200' h= "75vh"  overflowY="scroll">
              <h1 style={{
                  fontSize: '24px' , textAlign : 'center'
              }}>Two Sum</h1>

              <p>There is only one character 'A' on the screen of a notepad. You can perform one of two operations on this notepad for each step:

Copy All: You can copy all the characters present on the screen (a partial copy is not allowed).
Paste: You can paste the characters which are copied last time.
Given an integer n, return the minimum number of operations to get the character 'A' exactly n times on the screen.</p>
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
              defaultValue={CODE_SNIPPETS[language]}
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
