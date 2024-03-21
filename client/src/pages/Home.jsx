import Footer from "../components/Footer";

function Home() {
    return (<>
        <main className="home">
            <h1>A HOME AWAY FROM HOME</h1>
            <img id="home-pic" src="../content/images/homepage1.JPG" alt="" />
            <Footer className='home-footer'></Footer>
        </main>
    </>
    )
};

export default Home;