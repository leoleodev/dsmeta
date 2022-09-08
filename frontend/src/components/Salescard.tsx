
import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Style from '../styles/modules/Salescard.module.css';
import { Notificationbutton } from './Notificationbutton';

export function Salescard(){

  const min = new Date(new Date().setDate(new Date().getDate() - 365));
  const max = new Date();

  const [minDate,setMinDate] = useState( min );
  const [maxDate,setMaxDate] = useState( max );  

    return(
        <div className={Style.dsmetaCard}>
            <h2 className={Style.dsmetaSalesTitle}>Vendas</h2>
            <div>
              <div className={Style.dsmetaFormControlContainer}>
              <DatePicker
                selected={minDate}
                onChange={(date: Date) => { setMinDate(date) }}
                className={Style.dsmetaFormControl}
                dateFormat="dd/MM/yyyy"
              />
              </div>
              <div className={Style.dsmetaFormControlContainer}>
              <DatePicker
                selected={maxDate}
                onChange={(date: Date) => { setMaxDate(date) }}
                className={Style.dsmetaFormControl}
                dateFormat="dd/MM/yyyy"
              />
              </div>
            </div>

            <div>
              <table className={Style.dsmetaSalesTable}>
                <thead>
                  <tr>
                    <th className={Style.show992}>ID</th>
                    <th className={Style.show576}>Data</th>
                    <th>Vendedor</th>
                    <th className={Style.show992}>Visitas</th>
                    <th className={Style.show992}>Vendas</th>
                    <th>Total</th>
                    <th>Notificar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className={Style.show992}>#341</td>
                    <td className={Style.show576}>08/07/2022</td>
                    <td>Anakin</td>
                    <td className={Style.show992}>15</td>
                    <td className={Style.show992}>11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className={Style.dsmetaRedBtnContainer}>
                        <Notificationbutton />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className={Style.show992}>#341</td>
                    <td className={Style.show576}>08/07/2022</td>
                    <td>Anakin</td>
                    <td className={Style.show992}>15</td>
                    <td className={Style.show992}>11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className={Style.dsmetaRedBtnContainer}>
                        <Notificationbutton />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className={Style.show992}>#341</td>
                    <td className={Style.show576}>08/07/2022</td>
                    <td>Anakin</td>
                    <td className={Style.show992}>15</td>
                    <td className={Style.show992}>11</td>
                    <td>R$ 55300.00</td>
                    <td>
                      <div className={Style.dsmetaRedBtnContainer}>
                        <Notificationbutton />
                      </div>
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>

          </div>
    );
}