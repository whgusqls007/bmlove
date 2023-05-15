import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPlacesAction } from "../../../api/placeapi/placeAction";

const Table = () => {
    const dispatch = useDispatch();
    const { places } = useSelector((state) => state.place);

    useEffect(() => {
        dispatch(getPlacesAction());
    }, [dispatch]);

    return (
        <table>
            <thead>
                <tr align="center">
                    <th>id</th>
                    <th>title</th>
                    <th>content</th>
                </tr>
            </thead>
            <tbody>
                {places
                    ? places.map((place) => {
                          return (
                              <tr align="center" key={place.id}>
                                  <td>{place.id}</td>
                                  <td>{place.title}</td>
                                  <td>{place.content}</td>
                              </tr>
                          );
                      })
                    : null}
            </tbody>
        </table>
    );
};

export default Table;
