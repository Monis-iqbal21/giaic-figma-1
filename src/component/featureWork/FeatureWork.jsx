import React from 'react'
import "./featureWork.css"
import Image from 'next/image'

const FeatureWork = () => {
    return (
        <div className='feature_work_container'>
            <div className="feature_work_heading">
                Featured Works
            </div>

            <div className='feature_main_div'>



                <div className="feature_work_grid">


                    <div className="img_div">
                        <Image src={require("../../../images/feature1.png")} alt className="feature_img" />
                    </div>


                    <div className="detail_section">
                        <p className='detail_heading_feature'>Designing Dashboards</p>
                        <p className='date_feature_detail'><span className='date_feature'>2020</span> &nbsp; &nbsp;Dashboard</p>

                        <p className='detail_feature'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                </div>




                <div className="feature_work_grid">


                    <div className="img_div">
                        <Image src={require("../../../images/feature2.png")} alt className="feature_img" />
                    </div>


                    <div className="detail_section">
                        <p className='detail_heading_feature'>Designing Dashboards</p>
                        <p className='date_feature_detail'><span className='date_feature'>2020</span> &nbsp; &nbsp;Dashboard</p>

                        <p className='detail_feature'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                </div>




                <div className="feature_work_grid">


                    <div className="img_div">
                        <Image src={require("../../../images/feature3.png")} alt className="feature_img" />
                    </div>


                    <div className="detail_section">
                        <p className='detail_heading_feature'>Designing Dashboards</p>
                        <p className='date_feature_detail'><span className='date_feature'>2020</span> &nbsp; &nbsp;Dashboard</p>

                        <p className='detail_feature'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                </div>




            </div>
        </div>
    )
}

export default FeatureWork