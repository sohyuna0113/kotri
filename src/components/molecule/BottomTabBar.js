import React from "react";
import Button from "../atom/Button";

const BottomTabBar = (props) => {
    const buttonNames = ["home", "search", "add_circle", "bookmark", "person"];

    return (
        <>
            <section className="d-flex fixed-bottom min-h-100 justify-content-center align-items-center bottom-shadow">
                <div className="d-flex flex-row justify-content-between w-full pdt-10 pdb-10 pdl-16 pdr-16">
                    {buttonNames.map((name, index) => (
                        <Button key={index} name={name} />
                    ))}
                </div>
            </section>
        </>
    );
}
export default BottomTabBar;
