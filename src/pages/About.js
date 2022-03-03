import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function About() {
    const [about, setAbout] = useState(null);
    const URL = useOutletContext();

    const getAboutData = async () => {
        const response = await fetch(URL + "about")
        const data = await response.json();
        setAbout(data);
    }

    useEffect(() => getAboutData(), []);

    const loaded = () => (
        <div>
            <h2>{about.name}</h2>
            <h4>{about.email}</h4>
            <h4>{about.bio}</h4>
            <img src={about.headshot} alt={about.name} className="headshot" />
        </div>
    )

    return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
