import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function About() {
    const URL = useOutletContext();
    const [about, setAbout] = useState(null);

    const getAboutData = async () => {
        const response = await fetch(URL + "about")
        const data = await response.json();
        setAbout(data);
    }

    useEffect(() => getAboutData(), []);

    const loaded = () => (
        <div>
            <h1>{about.name}</h1>
            <h3>{about.email}</h3>
            <h3>{about.bio}</h3>
            <img src={about.headshot} alt={about.name} className="headshot" />
        </div>
    )

    return about ? loaded() : <h1>Loading...</h1>;
}

export default About;
