import React, { useState, useMemo } from 'react';
import ModalComponent from '../Modal';
import { postStatus, getStatus } from '../../../api/FirestoreAPIs';
import PostsCard from '../PostsCard';
import { getUniqeID } from '../../../helpers/getUniqueid';
import { getCurrentTimeStamp } from '../../../helpers/useMoment';

import "./index.scss";

export default function PostStatus( {currentUser }) {
    console.log(getUniqeID());
    let userEmail = localStorage.getItem('userEmail');
    const [modal1Open, setModalOpen] = useState(false);
    const [status, setStatus] = useState("");
    const [allStatuses, setAllStatus] = useState([]);
    const sendStatus = async () => {
        let object = {
            status: status,
            timeStamp: getCurrentTimeStamp('LLL'),
            userEmail: currentUser.email,
            userName: currentUser.name,
            postID: getUniqeID(),
        };
        await postStatus(object);
        await setModalOpen(false);
        await setStatus("");
    };

    useMemo(() => {
        getStatus(setAllStatus);
    }, []);

    // console.log(allStatuses);
    return (
        <div className='post-status-main'>
            <div className='post-status'>
                <button className='open-post-modal' onClick={() => setModalOpen(true)}>Start a Post</button>
            </div>

            <ModalComponent
                setStatus={setStatus}
                modalOpen={modal1Open}
                setModalOpen={setModalOpen}
                status={status}
                sendStatus={sendStatus}
            />

            <div>
                {allStatuses.map((posts) => {
                    return (
                        <div key={posts.id}>
                    <PostsCard posts={posts}/>
                    </div>
                    );
                })};
            </div>
        </div>
    );
}
