import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [cateloryList, setCateloryList] = useState([]);
    const [choseNumber, setChoseNumber] = useState("");
    const [choseCatelory, setChoseCatelory] = useState("");
    const [choseLevel, setChoseLevel] = useState("");

    const level = [
        { id: 1, level: "easy" },
        { id: 2, level: "medium" },
    ];

    const loadCatelory = () => {
        axios
            .get("http://localhost:3000/api/v1/category")
            .then((res: any) => {
                // console.log(res.data.category);
                setCateloryList(res.data.category);
            })
            .catch((err: any) => console.log(err));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const info: any = {
            Number: choseNumber,
            Catelory: choseCatelory,
            Difficulty: choseLevel,
        };
        localStorage.setItem("infor", JSON.stringify(info));
    };

    useEffect(() => {
        loadCatelory();
    }, []);

    return (
        <div className="container w-50">
            <h3 className="text-3xl">Setup Quizz</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Number of question</label>
                    <input
                        className="form-control"
                        onChange={(e) => setChoseNumber(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Catelory</label>
                    <select
                        className="form-select"
                        onChange={(e) => setChoseCatelory(e.target.value)}
                    >
                        <option selected>Open this select menu</option>
                        {cateloryList.length > 0 &&
                            cateloryList.map((e: any, i: any) => (
                                <option key={i} value={e.category_id}>
                                    {e.name}
                                </option>
                            ))}
                    </select>
                </div>
                <div className="mb-3">
                    <label className="form-label">Difficulty</label>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setChoseLevel(e.target.value)}
                    >
                        <option selected>Open this select menu</option>
                        {level.map((e, i) => (
                            <option value={e.id} key={i}>
                                {e.level}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary w-100"
                    style={{ color: "white", backgroundColor: "blue" }}
                >
                    Start
                </button>
            </form>
        </div>
    );
};

export default Home;
