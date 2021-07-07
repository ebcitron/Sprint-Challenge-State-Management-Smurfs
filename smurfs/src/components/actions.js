import Axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_FAILURE";

export const getSmurfs = () => dispatch => {
dispatch({
    type: FETCH_SMURFS_START
});
    Axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log('getRes', res);
            dispatch({
                type: FETCH_SMURFS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log('catchErr', err);
            dispatch({
                type: FETCH_SMURFS_FAILURE,
                payload: err
            });
        })

    }

// export const POST_SMURFS_START = "POST_SMURFS_START";
// export const POST_SMURFS_SUCCESS = "POST_SMURFS_SUCCESS";
// export const POST_SMURFS_FAILURE = "POST_SMURFS_FAILURE";

// export const addSmurf = (newSmurf) => dispatch => {
// console.log('addSmurf Called!');
// dispatch({
//     type: POST_SMURFS_START
// });

//     Axios
//         .post("http://localhost:3333/smurfs", newSmurf)
//         .then(res => {
//             console.log('postRes', res);
//             dispatch({
//                 type: POST_SMURFS_SUCCESS,
//                 payload: res.data
//             })
//         })
//         .catch(err => {
//             console.log('postCatchErr', err);
//             dispatch({
//                 type: POST_SMURFS_FAILURE,
//                 payload: err
//             });
//         });

//     }
