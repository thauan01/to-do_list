import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

function TextDecoration() {
    return(
        'line-trough'
    )
    
} 

export const Container = styled.div`
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label{
        color: #ccc;
        text-decoration: ${TextDecoration};
    }
`;
/*export const Container = styled.div(({ done }: ContainerProps)=>(
    `
    display: flex;
    background-color: #20212c;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
    }

    label{
        color: #ccc;
        text-decoration: ${done ? 'line-trough': 'initial'};
    }
`

));*/
    
    
  

