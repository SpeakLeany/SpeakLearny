import React, { useState } from 'react'
import Switch from 'react-switch'

function SwitchBox() {
    const [checked,setChecked] = useState(false)

    const handleChange = (check) => {
        setChecked(check)
    }

    return (
        <div style={{marginRight: '15px', display: 'flex'}}>
        <Switch 
                    onChange={handleChange} 
                    checked={checked} 
                    checkedIcon={false}
                    uncheckedIcon={false}
                    handleDiameter={24}
                    offColor={'#c7c7c7'}
                    onColor={'#47ACFF'}
                    activeBoxShadow={'none'}
                    />
                    </div>
    )
}

export default SwitchBox
