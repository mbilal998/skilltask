import React, { useEffect, useRef, useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'Chocolate', label: 'Chocolate' },
    { value: 'Strawberry', label: 'Strawberry' },
    { value: 'Vanilla', label: 'Vanilla' },
    { value: 'Mango', label: 'Mango' },

];
function SelectReact() {

    const [selectedOption, setselectedOption] = useState();

    const selectref = useRef();

    useEffect(() => {
        //selectref.current.value = { value: 'Vanilla', label: 'Vanilla' };
    })

    function focus() {
        console.log(selectref.current.props.defaultValue);
        //selectref.current.props.defaultValue = { value: 'Vanilla', label: 'Vanilla' };
        selectref.current.props.defaultValue.label = 'Vanilla';
        selectref.current.props.defaultValue.value = 'Vanilla';

    }

    function handleChange() { }

    return (
        <>
            <Select ref={selectref}
                value={selectedOption}
                onChange={handleChange}
                options={options}
                defaultValue={options[1]}
            />

            <button onClick={focus}>Focus</button>
        </>
    );
}
export default SelectReact;
