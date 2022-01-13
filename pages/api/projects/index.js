// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import img1 from "../../../public/find-an-agent.jpg";
import img2 from "../../../public/bb-quotes.jpg";
import img3 from "../../../public/portfolio.jpg";

export default function handler(req, res) {
    res.status(200).json([
        { id: 1, name: "Find an Agent", img: img1, },
        { id: 2, name: "Breaking Bad Quotes", img: img2, },
        { id: 3, name: "Portfolio Website", img: img3, }
    ])
}
//maps to /api/projects