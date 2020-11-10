import React from "react";

function Component({count, makeChange}) {
    function handleComponentChange(event) {
        makeChange(event.target.value)
    }
    return <input value={count} onChange={handleComponentChange} />
}

export default Component;