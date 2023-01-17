import styled from "styled-components";

const H1 = styled.h1`
  font-size: 1.9rem;
  padding: 8px 0px;
  border-bottom: 1px solid rgb(150, 0, 0);
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #012d3b;
`;

const Div = styled.div`
  width: 428px;
  margin: 0 auto;
  background-color: rgba(255, 0, 0, 0.4);
  border-radius: 12px;
  padding: 16px 22px;
  display: flex;
  align-items: center;
  justify-content: space-around; 
`;

const Ul = styled.ul`
  display: flex;
  font-size: 1.7rem;
  color: white;
`

const Li = styled.li`
  padding: 6px 12px;
  margin-top: 6px;
  margin-right: 4px;
  background-color: #de71fe;
`;


export {H1,Div,Ul,Li}
