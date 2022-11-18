import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';


function ReactRoutingExample() {

    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path={'/'} element={<HomePage />}>
                    <Route path={'contact'} element={<Contact2 />} />
                </Route> */}
                <Route path={'/'} element={<HomePage />}>
                    <Route path={'contact'} element={<Contact />}>
                        <Route path='info' element={<Info />} />
                    </Route>
                </Route>


                {/* <Route path={'/info'} element={<Info />} /> */}

            </Routes>
        </BrowserRouter>
    )
}

{/* <HomePage>
    <Contact/>
</HomePage> */}

export default ReactRoutingExample;


function HomePage() {

    return <div>
        <Outlet />
        Home Page
    </div>
}


function Contact() {

    return <div>Contact Page

        <Outlet />
    </div>
}

function Contact2() {

    return <div>Contact2 Page</div>
}

function Info() {

    return <div>Info Page</div>
}