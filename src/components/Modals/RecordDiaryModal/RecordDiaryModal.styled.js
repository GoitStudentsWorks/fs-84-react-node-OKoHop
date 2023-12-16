import styled from 'styled-components';
import { ErrorMessage, Field, Form } from 'formik';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 558px; 
  padding: 16px 12px;
  display: flex;
  flex-direction: column;
  background-color: #0f0f0f;  
  border-radius: 12px;  
  transform: translate(-50%, -50%) scale(1);
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1), opacity 300ms;

  @media screen and (min-width: 834px) {
    width: 676px;
    height: 408px;
    padding: 24px;
  };
`;

export const ModalTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0em;  
  color: #ffffff;

  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 36px;
  };
`;

export const WrapperFormTitle = styled.div`
  display: flex; 
  gap: 12px;
  margin-bottom: 16px;
`;

export const Image = styled.img`
  width: 32px;
  height: 32px;
`;

export const Title = styled.h2`
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0em;  
  color: #ffffff;
  
  @media screen and (min-width: 834px) {
    font-size: 30px;
    line-height: 32px;
  };
`;

export const FormFormic = styled(Form)`  
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentWrapper = styled.div`
  max-height: 300px; 
  margin-bottom: 16px;

   @media screen and (min-width: 834px) {
   max-height: 200px;
  };  
`

export const ProductList = styled.ul`
  padding: 10px;
  overflow-y: auto;
  height: 210px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 834px) {
    height: calc(100% - 44px);
    gap: 24px;
  };
  
  &::-webkit-scrollbar {
    width: 7px;   
  };

  &::-webkit-scrollbar-thumb {
    background-color: rgba(41, 41, 40, 0.2);
    border-radius: 12[x];
    border: 1px solid  rgba(227, 255, 168, 0.2);    

    &:hover {
      background-color: rgba(227, 255, 168, 0.2);
    };
  };
`;

export const Product = styled.li`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 1fr);

  & > div:nth-child(-n + 3){
    grid-column-start: 1;
    grid-column-end: 4;
  };

  @media screen and (min-width: 834px) {
    grid-template-columns: 40.5% 15.3% 11.5% 7.5% 13% 2.5%;

    & > div:nth-child(1){
      grid-column-start: 1;
      grid-column-end: 2;
    };

    & > div:nth-child(2){
      grid-column-start: 2;
      grid-column-end: 3;
    };

    & > div:nth-child(3){
      grid-column-start: 3;
      grid-column-end: 4;
    };
  }; 
`;

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Input = styled(Field)`  
  padding: 8px 10px;
  width: 100%;  
  border: 12px #e3ffa8;
  border-radius: 12px;
  background-color: #0f0f0f;  
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0em;
  color: #ffffff;
  
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  };       

  &::placeholder {
    color: #b6b6b6;
  };  
`;

export const ErrorMsg = styled(ErrorMessage)`
  padding: 0 5px;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0em;
  color: #e74a3b;  
`;

export const BtnRemoveProduct = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;  
`;

export const BtnAddNewProduct = styled.button`
  border: none;
  background-color: transparent;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0em;  
  color: #e3ffa8;
  cursor: pointer; 
`;

export const ContainerForBtns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 834px) {
    flex-direction: row-reverse;
  };
`;

export const BtnConfirm = styled.button`
  padding: 8px 10px;  
  width: 100%;
  background-color: #e3ffa8;
  color: #0f0f0f;
  border: 1px solid transparent;
  border-radius: 12px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0em;
  cursor: pointer;

  @media screen and (min-width: 834px) {
    width: 212px;
  };
`;

export const BtnCancel = styled.button`  
  padding: 8px 10px;
  width: 100%;
  background-color: transparent;  
  border: 1px solid transparent;
  border-radius: 12px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0em;
  color: #b6b6b6;
  cursor: pointer;

  &:hover {
    border: 1px solid #e3ffa8;
  }

  @media screen and (min-width: 834px) {
    width: 212px;
  };
`;