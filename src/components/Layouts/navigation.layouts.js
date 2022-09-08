import { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useLocation, NavLink } from "react-router-dom";

const NavigationLayouts = () => {
    // const location = useLocation();
    // console.log(location);
    const location = useLocation();
    const myTitle = " · andyanggara";

    useEffect(() => {
        const titles = {
            "/": "Home" + myTitle,
            "/albums": "My Albums" + myTitle,
            "/posts": "My Posts" + myTitle,
        };
        document.title = titles[location.pathname] ?? "Page Not Found";
    }, [location]);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <NavLink to="/" className="navbar-brand me-auto">
                    <img
                        src="https://i.ibb.co/6PYG493/SAVE-20191225-131417-square.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top rounded-circle"
                        alt="Brand logo"
                    />
                </NavLink>
                {/* <Navbar.Brand href="/">Brand</Navbar.Brand> */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav activeKey={location.pathname} className="ms-auto">
                        <NavLink to="/" className="nav-link me-4">
                            Home
                            {/* <Nav.Link>ALBUMS</Nav.Link> */}
                        </NavLink>
                        <NavLink to="/albums" className="nav-link me-4">
                            Albums
                            {/* <Nav.Link>ALBUMS</Nav.Link> */}
                        </NavLink>
                        <NavLink to="/posts" className="nav-link me-4">
                            Posts
                            {/* <Nav.Link>POSTS</Nav.Link> */}
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationLayouts;
