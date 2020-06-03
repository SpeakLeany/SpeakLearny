import React from 'react'
import Select from 'react-select'
import {multiStyles} from '../../../assets/css/selectStyles'

function MultiSelect() {
    const options = [
        { value: 'month', label: 'Month' },
        { value: '1', label: '1' },
        { value: '2', label: '2' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
        { value: '7', label: '7' },
        { value: '8', label: '8' },
        { value: '9', label: '9' },
        { value: '10', label: '10' },
        { value: '11', label: '11' },
        { value: '2020', label: '2020' },
    ]
    return (
        <Select
                        isMulti
                        name="colors"
                        options={options}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        placeholder={'Interests'}
                        styles={multiStyles}
                        components={{
                            IndicatorSeparator: () => null,
                            ClearIndicator: () => null
                          }}
                    />
    )
}

export default MultiSelect
