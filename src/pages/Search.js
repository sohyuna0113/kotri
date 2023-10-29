import Map from 'react-map-gl';
import BottomTabBar from "../components/molecule/BottomTabBar";

const access_token = "pk.eyJ1IjoidHJhdmV4LWtyIiwiYSI6ImNsb2I1cnh0YTBtbzEyanJxdWJ6ZXVtc3MifQ.SCFWAIFsk2oWqcZ6cs6JxQ"

const Search = () => {
    return (
        <>
            <div className="h-full bg-primary">
                <Map
                    mapLib={import('mapbox-gl')}
                    mapboxAccessToken={access_token}
                    initialViewState={{
                        longitude: -100,
                        latitude: 40,
                        zoom: 3.5
                    }}
                    style={{width: "100%", height: "calc(100vh - 100px)"}}
                    mapStyle="mapbox://styles/mapbox/streets-v9"
                />;
            </div>
            <BottomTabBar></BottomTabBar>
        </>
    )
};

export default Search;
