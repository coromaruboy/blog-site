import React from 'react';
import "../styles/post-link.css";

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360";

const PostLink = () => {
    return (
        <div className='post-link'>
            <div>
                <img src={RANDOM_IMG} className='post-link-image' alt='post-cover'></img>
            </div>
            <div className='post-link-text'>
                <h2>Gatsbyでブログサイトを作成してみた</h2>
                <p className='post-link-body'>先日、爆速なサイトを作れると噂のReact製フレームワークのGatsbyを学んでみました。</p>
                <p className='post-link-date'>2023/12/06</p>
            </div>
        </div>
    )
}

export default PostLink;