import React from 'react'

export default function Card() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "300px" }}>
                    <img src="https://www.shutterstock.com/image-photo/chilli-paneer-dry-made-using-600w-2093440615.jpg"className="card-img-top" alt="chilli paneer" />
                    <div className="card-body">
                        <h5 className="card-title">Chilli Paneer</h5>
                        <p className="card-text"> A level of spice </p>
                        <div className=' container  w -100 h-15'>
                            <select className=' m-2 bg-blue rounded'>

                                {Array.from(Array(10), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}> {i + 1} </option>
                                    )
                                })
                                }
                            </select>

                            <select className=' m-2 bg-blue rounded' >
                                <option value="half"> Half </option>
                                <option value="full"> Full </option>
                            </select>
                            <div className='d-inline h-100 fs-5'>
                                total price
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
