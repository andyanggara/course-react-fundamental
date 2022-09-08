import React from "react";
import MainLayouts from "./components/Layouts/main.layouts";
import Albums from "./components/Albums/main.albums";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Posts from "./components/Posts/main.posts";
import NavigationLayouts from "./components/Layouts/navigation.layouts";
import Homes from "./components/Home/main.home";
// import Footer from "./components/Layouts/footer.layouts";
import { NotFound } from "./components/Layouts/404.layout";

const App = () => {
    return (
        <>
            <MainLayouts>
                <Router>
                    <NavigationLayouts />
                    {/* <div className="d-flex flex-column vh-100"> */}
                    <Routes>
                        <Route path="/" element={<Homes title="Home" />} />
                        <Route path="albums" element={<Albums title="My Albums" />} />
                        <Route path="posts" element={<Posts title="My Posts" />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    {/* <Footer /> */}
                    {/* </div> */}
                </Router>
                {/* <Albums title="Image API" description="We fetch random image API from third party."></Albums> */}
            </MainLayouts>
        </>
    );
};

export default App;

// const App = () => {
//     const [getLimit, setLimit] = useState(1);
//     const [getMyName, setMyName] = useState("Andy Anggara");
//     const inputNameRef = useRef(getMyName);

//     useEffect(() => {
//         // console.log("render ketika browser dibuka");
//         // setMyName("Khalida Hanum");
//         setMyName(inputNameRef.current.value);
//     }, [getLimit]);

//     return (
//         <>
//             <center>
//                 {getMyName} {getLimit}
//                 <br />
//                 <input type="text" placeholder="name" ref={inputNameRef} defaultValue={inputNameRef.current} />
//                 <button onClick={() => setLimit((prev) => prev + 1)}>naikin limit</button>
//                 <button onClick={() => setLimit(getLimit > 0 ? (prev) => prev - 1 : 0)}>turunkan limit</button>
//             </center>
//             <Testing title="ini title" description="ini deskripsi"></Testing>
//         </>
//     );
// };

// export default App;
