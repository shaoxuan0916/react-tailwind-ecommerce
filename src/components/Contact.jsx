import React from 'react'


const Contact = () => {
    return (
        <div id='contact' className='max-w-[1240px] mx-auto text-center md:text-left px-2'>

            <section className="py-32 text-gray-800">
                <div className="flex flex-wrap">
                    <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">Contact us</h3>
                        <p className="text-gray-500 mb-6">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Laudantium, modi accusantium ipsum corporis quia asperiores
                            dolorem nisi corrupti eveniet dolores ad maiores repellendus.
                        </p>
                        <p className="text-gray-500 mb-2">Kuala Lumpur, Malaysia</p>
                        <p className="text-gray-500 mb-2">+ 03 3333 2222</p>
                        <p className="text-gray-500 mb-2">earssCompany@gmail.com</p>
                    </div>
                    <div className="grow-0 shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
                        <form action='mailto:shaoxuanhinhua@gmail.com'>

                            <div className="form-group mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
                                    id="exampleInput7"
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            <div className="form-group mb-6">
                                <input
                                    type="email"
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
                                    id="exampleInput8"
                                    placeholder="Email address"
                                    required
                                />
                            </div>

                            <div className="form-group mb-6">
                                <textarea
                                    className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-teal-600 focus:outline-none"
                                    id="exampleFormControlTextarea13"
                                    rows="3"
                                    placeholder="Message">
                                    
                                </textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out">
                                Send
                            </button>

                        </form>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Contact