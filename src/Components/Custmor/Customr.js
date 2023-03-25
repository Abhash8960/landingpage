import React, { useEffect, useState } from 'react'
import "./Custmor.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import Oval from "../../images/Oval.png";
import Ovall from "../../images/Ovall.png";
import axios from 'axios';

export default function Customr() {
    const [mainData, setMainData] = useState([])
    const api = "https://admin.tomedes.com/api/v1/get-reviews";

    useEffect(() => {
        const fatchData = async () => {
            const { data } = await axios.get(`${api}`)
            setMainData(data.data)
        }
        fatchData()
    }, [])
    console.log(mainData)

    return (
        <>
            <div className='custmor'>
                <h1 className='custmor_head'>What Our Customers Say</h1>
                <div className="custmor_container">
                    {/* <div className='custmor_main'> */}
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            {
                                mainData.map((item) => (
                                    <SwiperSlide>
                                        <div className='custmor_left'>
                                            <p className='custmor_para'>{item.Reviews}</p>
                                            <div className='custmor_div'>
                                                <img src={Oval} alt="Patient" className='custmor_img' />
                                                <div className='custmor_name_div'>
                                                    <h5 className='custmor_name'>Name :- {item.Name}</h5>
                                                    <p className='custmor_patient'>Company:- {item.Company}</p>
                                                    <p className='custmor_patient'>Rating :- {item.rating}</p>
                                                </div>
                                               
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}
