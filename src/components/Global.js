import styled from "styled-components/native"

export const Container = styled.View`

    flex: 1;
    width: 100%;
    padding: 40px 45px;
    align-items: center;
    background-color: #ffffff;

`

export const Title = styled.Text`

    font-family: 'Arial';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    align-items: center;
    justify-content: center;
    line-height: 39px;
    text-align: center;
    margin: 0 auto;  
    color: #2196F3;

`

export const InputForm = styled.TextInput`
    background: #ffffff;
    border: 2px solid #a4a4a4;
    width: 100%;
    margin-bottom: 10px;
    padding-left: 5px;
    padding-top: 2px;
    padding-bottom: 2px;

`;

export const Button = styled.TouchableOpacity`

    background: #2196F3;
    padding: 4px 5px 4px 5px;
    width: 100%;        
    font-size: 12px;
    text-align: center;
    margin-top: 5px;
    margin-bottom: 15px;
    
`;

export const ContIcons = styled.View `
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 15px;
    background-color: #ffffff;

`