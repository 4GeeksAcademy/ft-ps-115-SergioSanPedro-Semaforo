import { useState } from "react";


export const Circulo = () => {

    const [color, setColor] = useState('');


    const alternarColores = () => {

        switch (color) {
            case '':
                setColor('red');
                break;
                
            case 'red':
                setColor('orange');
                break;

            case 'orange':
                setColor('green')
                break;
        
            default:
                setColor('red')
                break;
        }
    };


    return (
        <>

            <div className="soporteSemaforo mx-auto"></div>
            <div className="semaforo container rounded-4 text-center">
                <div>
                    <div className="p-3 text-center d-flex flex-column gap-4">
                        <button onClick={() => setColor('red')} className={`btn rounded-circle mx-auto btn-secondary ${color === 'red' ? 'red' : ''}`}
                            style={{
                                width: '13rem',
                                height: '13rem'
                            }}>
                        </button>

                        <button onClick={() => setColor('orange')} className={`btn rounded-circle mx-auto btn-secondary ${color === 'orange' ? 'orange' : ''}`}
                            style={{
                                width: '13rem',
                                height: '13rem',
                            }}>
                        </button>

                        <button onClick={() => setColor('green')} className={`btn rounded-circle mx-auto btn-secondary ${color === 'green' ? 'green' : ''}`}
                            style={{
                                width: '13rem',
                                height: '13rem',
                            }}></button>
                    </div>

                </div>
                <button onClick={alternarColores} className="btn btn-danger text-white mx-auto btn-lg mt-4">Alternar colores</button>
            </div>

        </>

    )
};