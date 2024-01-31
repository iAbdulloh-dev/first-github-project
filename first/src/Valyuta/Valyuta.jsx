import './Valyuta.css'
import React, { useEffect } from 'react';
import $ from 'jquery';

const Valyuta = () => {
    useEffect(() => {
        $('.count').click(function() {
            let valyuta = $('.money').val()
            let inputt = $('.hisob').val()
    
            if (valyuta == 'dollor') {
                $('.result').val(inputt*12371.7+' '+"so'm");
            }
           else if (valyuta == 'euro') {
                $('.result').val(inputt*13276+' '+"so'm");
            }
           else if (valyuta == 'Rubl') {
                $('.result').val(inputt*136.1111+' '+"so'm");
            }
            event.preventDefault()
        });
      }, []);
    return (
        <div className="header">
            <form className='f1'>
                <h1>Valyuta Hisobi$</h1>
                <select className='money'>
                    <option value="empty">---------</option>
                    <option value="dollor">Dollar$</option>
                    <option value="euro">Euro</option>
                    <option value="Rubl">Rubl</option>
                </select>
                <input className='hisob' type="text" placeholder='summani qanchaligini kiriting' />
                <input className='result' type="text" placeholder='natija' />
                <button className='count'>hisoblash</button>
            </form>
        </div>
    )
    }

export default Valyuta