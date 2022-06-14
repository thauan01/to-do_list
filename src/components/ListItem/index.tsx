import * as C from './style';
import { Item } from '../../types/item';
//import { isTemplateExpression } from 'typescript';
import { useState } from 'react';
type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);
    
    return (
        <C.Container >
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.name}</label>
        </C.Container>
    )
}