import React, { useEffect, useRef } from 'react'

function InfoCards(info) {
    // Destructuración de props
    const { title, icon, buttonColor, numberColor, data } = info.info || {}
    
    // Asignacion de colores
    useEffect(() => {
        buttonLabel.current.style.background = buttonColor
        numberDisplay.current.style.color = numberColor
    }, [info])

    // Referencias
    const buttonLabel = useRef()
    const numberDisplay = useRef()

    return (
        <>
            <div
                className="float-ico"
                ref={buttonLabel}
            >
                {icon}
            </div>
            <ul>
                <li className='title'>
                    <h2>{title}</h2>
                </li>
                <li className='date'>
                    Diciembre 23
                </li>
                <li className='amount'>
                    <h3
                        ref={numberDisplay}
                    >
                        {data}
                    </h3>
                </li>
            </ul>
        </>
    )
}

export default InfoCards