import { useDispatch, useSelector } from "react-redux";
import {
    savePlaceAction,
    getPlacesAction,
    savePlaceImageAction,
    getPlaceImagesAction,
} from "./api/placeapi/placeAction";
import { useEffect, useState } from "react";

const App = () => {
    const { title, content } = useSelector((state) => state.place.place);
    const { uri } = useSelector((state) => state.place.image);
    const { places, images } = useSelector((state) => state.place);
    const [inputTitle, setInputTitle] = useState("");
    const [inputContent, setInputContent] = useState("");
    const [file, setFile] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlacesAction());
        dispatch(getPlaceImagesAction());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getPlacesAction());
    }, [title]);

    useEffect(() => {
        dispatch(getPlaceImagesAction());
    }, [uri]);

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
                        {places.map((place) => (
                            <tr key={place.id}>
                                <td>{place.id}</td>
                                <td>{place.title}</td>
                                <td>{place.content}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <input
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
            ></input>
            <button
                onClick={() => {
                    const data = new FormData();
                    data.append("file", file);
                    dispatch(savePlaceImageAction(data));
                }}
            >
                업로드
            </button>
            {images.map((image) => (
                <div>
                    <img
                        // src={`http://127.0.0.1:8081/image/get/${image.uri}`}
                        src={`http://18.224.45.108/images/image/get/${image.uri}`}
                        alt={image.key}
                        key={image.key}
                        width={300}
                    />
                </div>
            ))}
        </div>
    );
};

export default App;
