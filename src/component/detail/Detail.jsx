import React from 'react';
import "./detail.css"
import { auth } from '../../library/firebase';
import { useChatStore } from '../../library/chatStore';
import { useUserStore } from '../../library/userStore';
const Detail = () => {
    const {chatId,user,isCurrentUserBlocked,isReceiverUserBlocked,changeBlock}=useChatStore();
    const {currentUser}=useUserStore()



    const handleBlock=()=>{

    }



    return (
        <div className='detail'>
            <div className="user">
                <img src={user?.avatar || "./avatar.png"} alt="" />
                <p>{user?.username}</p>
                <span>Lorem ipsum dolor sit amet consectetur.</span>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>
                            Chat Settings
                        </span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>
                            Chat Settings
                        </span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>
                            Privacy & help
                        </span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>
                            Shared photos
                        </span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn2.unrealengine.com/world-of-goo-2-1-2880x1620-7e18f4b1ae55.jpg" alt="" />
                            <span>
                                Photo_goo.png
                            </span> 
                            </div>
                            <img src="./download.png"  className="icon" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn2.unrealengine.com/world-of-goo-2-1-2880x1620-7e18f4b1ae55.jpg" alt="" />
                            <span>
                                Photo_goo.png
                            </span> 
                            </div>
                            <img src="./download.png"  className="icon" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn2.unrealengine.com/world-of-goo-2-1-2880x1620-7e18f4b1ae55.jpg" alt="" />
                            <span>
                                Photo_goo.png
                            </span> 
                            </div>
                            <img src="./download.png"  className="icon" alt="" />
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://cdn2.unrealengine.com/world-of-goo-2-1-2880x1620-7e18f4b1ae55.jpg" alt="" />
                            <span>
                                Photo_goo.png
                            </span> 
                            </div>
                            <img src="./download.png"  className="icon" alt="" />
                        </div>

                       
                    </div>
                </div>


                <div className="option">
                    <div className="title">
                        <span>
                            Sherad Files 
                        </span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                </div>
                <button onClick={handleBlock}>Block User</button>
                <button className='logout' onClick={()=>auth.signOut()}>Logout</button>
            </div>
        </div>
    );
};

export default Detail;