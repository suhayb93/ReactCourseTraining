import React, { useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    useParams,
    Link,
    useSearchParams,
    useLocation,
    useNavigate
} from 'react-router-dom';


function ReactRoutingExample() {

    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path={'contact'} element={<Contact2 />} /> */}
                {/* <Route path={'/'} element={<HomePage />}>
                    <Route path={'contact'} element={<Contact />}>
                        <Route path='info' element={<Info />} />
                    </Route>
                </Route> */}
                {/* <Route path="/contact" element={<Contact2 />}>
                    <Route index element={<Info />} />
                </Route> */}



                {/* <Route path={'/info'} element={<Info />} /> */}
                <Route path={'/'} element={<HomePage />} />

                <Route element={<Layout />}>
                    <Route path={'/'} element={<HomePage />} />
                    <Route path={'/contact'} element={<Contact />} />
                    <Route path={'/contact/:id'} element={<DetailsContact />} />
                    {/* <Route path={'/contact/1'} element={<RankedRoute />} /> */}
                    <Route path="*" element={<NoteFound />} />
                    <Route path="info" element={<Info />}></Route>


                </Route>
                {/* <Route path={'/'} element={<HomePage />}>
                    <Route index element={<Info />}></Route>
                </Route> */}

            </Routes>
        </BrowserRouter>
    )
}


export default ReactRoutingExample;

function DetailsContact() {
    const params = useParams()
    console.log(params);
    return (
        <>
            <div>Details Contact page</div>
            <div>{`the id of this contact is ${params['id']}`}</div>
        </>
    )
}


function RankedRoute() {
    return <div>Ranked Route </div>
}

function NoteFound() {

    return (
        <div>Page Not Found</div>
    )
}

function HomePage() {
    const [queryStrings, setQueryStrings] = useSearchParams()

    useEffect(() => {
        // setTimeout(() => {
        //     queryStrings.append('age', 30);
        //     setQueryStrings(queryStrings)
        // }, 3000)
    }, [])

    return <div>
        <div> Home Page</div>
        <div><Link to={"/contact"} state={{ data: "Data from Home Page" }}>Contacts </Link></div>
        <div>{`the query String Data = ${queryStrings.get('data')}`}</div>
        <div>{`the query String Data = ${queryStrings.get('name')}`}</div>


        <Outlet />

    </div>
}


function Contact() {
    const SOME_DATA = "some thing else";
    const location = useLocation();
    console.log(location);
    return <div>

        Contact Page
        <div><Link to={`/?data=${SOME_DATA}&name=suhayb`}>Home Page</Link></div>
        <div>{`this data is passed from hom page with value = ${location.state.data}`}</div>
        <Outlet />
    </div>
}

function Contact2() {

    return <div>Contact2 Page
        <Outlet />

    </div>
}

function Info() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000)
    }, [])

    return <div>Info Page</div>
}

function Layout() {

    return (
        <div>
            <div>Nav Bar</div>
            <Outlet />
            <div>Footer</div>
        </div>
    )
}