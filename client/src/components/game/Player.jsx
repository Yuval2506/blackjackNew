
import react, {useState} from "react"

async function player (){{
        // GET request using fetch with async/await
        const response = await fetch('https://localhost:3000');
        const data = await response.json();
        this.setState({ totalReactPackages: data.total })
        console.log();
    }
}

export default Player;