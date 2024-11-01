import React from 'react'
import "./repost.css"

const Repost = () => {
    return (
        <div className='post_container'>
            <div className='heading_section'>
                <p>Recent Post</p>
                <button style={{ color: "#f89191" }}>View all</button>
            </div>

            <div className='post_grid'>



                <div className="post">
                    <p className='heading_post'>Making a design system from scratch</p>
                    <p className='date_detail'>12 Feb 2020 &nbsp;&nbsp;  |  &nbsp;&nbsp; Design , Pattern</p>
                    <p className='detail'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat <br/>sunt nostrud amet.</p>
                </div>



                <div className="post">
                    <p className='heading_post'>Making a design system from scratch</p>
                    <p className='date_detail'>12 Feb 2020 &nbsp;&nbsp;  |  &nbsp;&nbsp; Design , Pattern</p>
                    <p className='detail'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam consequat <br/>sunt nostrud amet.</p>
                </div>


            </div>
        </div>
    )
}

export default Repost