import React from 'react'

function GraphicLine({icon}) {
    return (
        <>
            <div className="float-ico">
                {icon}
            </div>
            <div className='title'>
                Balance
            </div>
            <div className='date'>
                01 Dic - 30 Dic
            </div>
            <div className='amount'>
                $2'560.000,0
            </div>
            <div className='label-info'>
                3% más que el mes pasado
            </div>
        </>
    )
}

export default GraphicLine