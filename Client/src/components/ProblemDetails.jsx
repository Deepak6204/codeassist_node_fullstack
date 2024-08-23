import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Editor from '../Editor';
import theme from '../theme';
import { ChakraProvider } from "@chakra-ui/react";


function ProblemDetails() {
  const { id } = useParams(); // Get the problem ID from the URL
  const [problemData, setProblemData] = useState(null);

  useEffect(() => {
    axios.get(`/problems/${id}`)
      .then(response => {
        setProblemData(response.data);
      })
      .catch(error => {
        console.error('Error fetching the problem data:', error);
      });
  }, [id]);

  return (
    <div>
      {problemData ? (
        <div>
          <ChakraProvider theme={theme}>
            <Editor problem = {problemData}/>
          </ChakraProvider>
          {/* <h1>{problemData.title}</h1>
          <p>{problemData.description}</p> */}
          {problemData.title}
        </div>
      ) : (
        <p>Loading problem details...</p>
      )}
    </div>
  );
}

export default ProblemDetails;
