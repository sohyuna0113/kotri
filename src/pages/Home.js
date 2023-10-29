import BottomTabBar from "../components/molecule/BottomTabBar";
import Header from "../components/molecule/Header";
import Card from "../components/molecule/Card";
const Home = () => {
    const places = ["Han River", "Mangwon", "Yeonnam"]
    return (
        <>
            <div className="h-full bg-primary">
                <span className="pda-default">
                <Header></Header>
                    <div className="t-headline7 l-spacing6 mgt-80 pdl-10">
                        Trending
                    </div>
                    <div className="pdt-10 pdb-10 pdl-10 pdr-10">
                        {places.map((name, index) => (
                            <Card key={index} name={name} />
                    ))}
                </div>
                </span>
            </div>
            <BottomTabBar></BottomTabBar>
        </>
    );
};

export default Home;
