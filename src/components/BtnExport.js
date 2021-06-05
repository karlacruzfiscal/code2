import React from 'react';

const BtnExport = (props) => {
    const handleClick = () => {
        const url = 'http://localhost:3333/export';
        const method = 'POST';
        const headers = {
            'Content-Type': 'application/json'
        };
        const options = { method, headers, body: JSON.stringify(props.data) }
        fetch(url, options).then();
    }
    return (
        <div>
            <button onClick={handleClick}>Export</button>
        </div>
    )
}
export default BtnExport;