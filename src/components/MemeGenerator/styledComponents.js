// Style your components here

import styled from 'styled-components'

export const Heading = styled.h1`
  font-size: 26px;
  color: #35469c;
  font-family: 'Open Sans';

  @media screen and (min-width: 768px) {
    font-size: 38px;
  }
`

export const CustomSelect = styled.select`
  color: #1e293b;
  background-color: #ffffff;
  font-size: 18px;
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
  width: 300px;
`

export const CustomOption = styled.option`
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  font-size: 20px;
`

export const CustomLabel = styled.label`
  font-size: 14px;
  color: #7e858e;
  font-family: 'Open Sans';
  line-height: 1.6;
`

export const AppDivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin-left: 30px;
  margin-top: 30px;
  @media screen and (min-width: 768px) {
    padding-left: 30px;
    max-width: 1160px;
  }
`

export const TextContent = styled.p`
  color: #ffffff;
  font-size: ${props => props.activeFontSizeId}px;
  font-weight: 600;
  font-family: 'Open Sans';
`

export const BgMemeContainer = styled.div`
  background-image: url(${props => props.backgroundImage});
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-size: cover;
  height: 320px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 45%;
  }
`

export const FormAndImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    width: 80%;
  }
`

export const GenerateForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 45%;
  }
`

export const CustomInput = styled.input`
  color: #5a7184;
  background-color: #ffffff;
  font-family: 'Open Sans';
  height: 40px;
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  margin-top: 5px;
  margin-bottom: 20px;
  width: 300px;
  outline: none;
`

export const GenerateBtn = styled.button`
  font-size: 18px;
  background-color: #0b69ff;
  font-family: 'Open Sans';
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 600;
  padding-left: 18px;
  padding-right: 18px;
  border-radius: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 20px;
  margin-bottom: 30px;
`
