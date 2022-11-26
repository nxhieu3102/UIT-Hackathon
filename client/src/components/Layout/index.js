import Header from "./Header";
function Layout({ children, isLogin, HandleLogin, HandleClickFormLogin, isClickFormLogin}) {
    return (
        <div>
            <Header isLogin={isLogin} HandleLogin={HandleLogin} HandleClickFormLogin={HandleClickFormLogin} isClickFormLogin={isClickFormLogin}/>
            {children}
        </div>

    );
}

export default Layout;