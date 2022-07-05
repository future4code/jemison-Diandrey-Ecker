import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />

          <Post
            nomeUsuario={'eduardo'}
            fotoUsuario={'https://picsum.photos/id/103/50/50'}
            fotoPost={'https://picsum.photos/id/1074/200/150'}
          />

          <Post
            nomeUsuario={'alvaro'}
            fotoUsuario={'https://picsum.photos/id/1005/50/50'}
            fotoPost={'https://picsum.photos/id/119/200/150'}
          />
        </MainContainer>
)

}


export default App;
