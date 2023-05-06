import { useDispatch, useSelector } from "react-redux";
import { savePlaceAction, getPlacesAction } from "./api/placeapi/placeAction";
import { useEffect, useState } from "react";

const App = () => {
    const { title, content } = useSelector((state) => state.place.place);
    const { places } = useSelector((state) => state.place);
    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlacesAction());
    }, [dispatch, title]);

    return (
        <div style={{ marginLeft: "50px" }}>
            <p>title</p>
            <input
                value={inputTitle}
                onChange={(e) => setInputTitle(e.target.value)}
            ></input>
            <p>content</p>
            <input
                value={inputContent}
                onChange={(e) => setInputContent(e.target.value)}
            ></input>
            <div></div>
            <button
                style={{ marginTop: "30px" }}
                onClick={() =>
                    dispatch(
                        savePlaceAction({
                            content: inputContent,
                            title: inputTitle,
                        })
                    )
                }
            >
                클릭
            </button>
            <div>제목: {title}</div>
            <div>내용: {content}</div>

            <div style={{ marginTop: "50px" }}>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>title</th>
                            <th>content</th>
                        </tr>
                    </thead>
                    <tbody>
                        {places.map((place, index) => (
                            <tr key={place.id}>
                                <td>{place.id}</td>
                                <td>{place.title}</td>
                                <td>{place.content}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default App;
