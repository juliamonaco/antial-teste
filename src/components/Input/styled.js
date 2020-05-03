import styled from 'styled-components'

export const Container = styled.div`
  border: none;
  border-bottom: 2px solid rgba(0,0,0,0.1);
  width: 100%;
  padding: 3px 0;
  display: flex;
  flex-direction: row;

  &:hover{
    border-bottom: 2px solid rgba(0,0,0,0.4);
  }

  &:focus-within {
    border-bottom: 2px solid ${props => props.theme.palette.primary.main};
  }

  ${({ error }) => error && `
    border-bottom: 2px solid #E53935;
  `}
  
`

export const Input = styled.input`
  width: 100%;
  border: none;
  font-size: 16px;
  color: ${props => props.theme.palette.primary.main};

  ::-webkit-input-placeholder {
   color: #ab99c0;
}
 
:-moz-placeholder { /* Firefox 18- */
   color: #ab99c0;  
}
 
::-moz-placeholder {  /* Firefox 19+ */
   color: #ab99c0;  
}
 
:-ms-input-placeholder {  
   color: #ab99c0;  
}
  &:focus ${Container} {
    border-bottom: 2px solid ${props => props.theme.palette.primary.main}
  }
`

export const Error = styled.div`
  width: 100%;
  padding: 5px 15px;
  background: #FFCDD2;
  color: #E53935;
  font-size: 12px;
`