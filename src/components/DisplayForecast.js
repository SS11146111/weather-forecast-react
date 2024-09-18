import React from 'react'
import tv from "../images/tv.png"
import r from "../images/reporter.png"

export const DisplayForecast = ({forecast}) => {

    if(forecast.forecast.forecastday.length === 2)
    {
        return(

                    <div className='details'>
                        <img src={tv} alt="tv" className='tv'/>
                        <img src={r} alt="reporter" className='reporter'/>
                        <table className='table1a'>
                            <tbody>
                            <tr>
                                <th>Date</th>
                                <td>{forecast.forecast.forecastday[0].date}</td>
                            </tr>
                            <tr>
                                <th>UV Index</th>
                                <td>{forecast.forecast.forecastday[0].day.uv}</td>
                            </tr>
                            <tr>
                                <th>Total Snow (cm)</th>
                                <td>{forecast.forecast.forecastday[0].day.totalsnow_cm}</td>
                            </tr>
                            <tr>
                                <th>Will it rain?</th>
                                <td>{forecast.forecast.forecastday[0].day.daily_will_it_rain}</td>
                            </tr>
                            <tr>
                                <th>Will it snow?</th>
                                <td>{forecast.forecast.forecastday[0].day.daily_will_it_snow}</td>
                            </tr>
                            <tr>
                                <th>Avg Humidity (%)</th>
                                <td>{forecast.forecast.forecastday[0].day.avghumidity}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='table2a'>
                            <tbody>
                            <tr>
                                <th>Date</th>
                                <td>{forecast.forecast.forecastday[1].date}</td>
                            </tr>
                            <tr>
                                <th>UV Index</th>
                                <td>{forecast.forecast.forecastday[1].day.uv}</td>
                            </tr>
                            <tr>
                                <th>Total Snow (cm)</th>
                                <td>{forecast.forecast.forecastday[1].day.totalsnow_cm}</td>
                            </tr>
                            <tr>
                                <th>Will it rain?</th>
                                <td>{forecast.forecast.forecastday[1].day.daily_will_it_rain}</td>
                            </tr>
                            <tr>
                                <th>Will it snow?</th>
                                <td>{forecast.forecast.forecastday[1].day.daily_will_it_snow}</td>
                            </tr>
                            <tr>
                                <th>Avg Humidity (%)</th>
                                <td>{forecast.forecast.forecastday[1].day.avghumidity}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
    
        )

    }
    else
    {
        return(

    
                    <div className='details'>
                        <img src={tv} alt="tv" className='tv'/>
                        <img src={r} alt="reporter" className='reporter'/>
                        <table className='table1a'>
                            <tbody>
                            <tr>
                                <th>Date</th>
                                <td>{forecast.forecast.forecastday[0].date}</td>
                            </tr>
                            <tr>
                                <th>UV Index</th>
                                <td>{forecast.forecast.forecastday[0].day.uv}</td>
                            </tr>
                            <tr>
                                <th>Total Snow (cm)</th>
                                <td>{forecast.forecast.forecastday[0].day.totalsnow_cm}</td>
                            </tr>
                            <tr>
                                <th>Will it rain?</th>
                                <td>{forecast.forecast.forecastday[0].day.daily_will_it_rain}</td>
                            </tr>
                            <tr>
                                <th>Will it snow?</th>
                                <td>{forecast.forecast.forecastday[0].day.daily_will_it_snow}</td>
                            </tr>
                            <tr>
                                <th>Avg Humidity (%)</th>
                                <td>{forecast.forecast.forecastday[0].day.avghumidity}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='table2a'>
                            <tbody>
                            <tr>
                                <th>Date</th>
                                <td>{forecast.forecast.forecastday[1].date}</td>
                            </tr>
                            <tr>
                                <th>UV Index</th>
                                <td>{forecast.forecast.forecastday[1].day.uv}</td>
                            </tr>
                            <tr>
                                <th>Total Snow (cm)</th>
                                <td>{forecast.forecast.forecastday[1].day.totalsnow_cm}</td>
                            </tr>
                            <tr>
                                <th>Will it rain?</th>
                                <td>{forecast.forecast.forecastday[1].day.daily_will_it_rain}</td>
                            </tr>
                            <tr>
                                <th>Will it snow?</th>
                                <td>{forecast.forecast.forecastday[1].day.daily_will_it_snow}</td>
                            </tr>
                            <tr>
                                <th>Avg Humidity (%)</th>
                                <td>{forecast.forecast.forecastday[1].day.avghumidity}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='table3a'>
                            <tbody>
                            <tr>
                                <th>Date</th>
                                <td>{forecast.forecast.forecastday[2].date}</td>
                            </tr>
                            <tr>
                                <th>UV Index</th>
                                <td>{forecast.forecast.forecastday[2].day.uv}</td>
                            </tr>
                            <tr>
                                <th>Total Snow (cm)</th>
                                <td>{forecast.forecast.forecastday[2].day.totalsnow_cm}</td>
                            </tr>
                            <tr>
                                <th>Will it rain?</th>
                                <td>{forecast.forecast.forecastday[2].day.daily_will_it_rain}</td>
                            </tr>
                            <tr>
                                <th>Will it snow?</th>
                                <td>{forecast.forecast.forecastday[2].day.daily_will_it_snow}</td>
                            </tr>
                            <tr>
                                <th>Avg Humidity (%)</th>
                                <td>{forecast.forecast.forecastday[2].day.avghumidity}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        )
    }
}
