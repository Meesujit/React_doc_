import React, { useRef } from 'react'

const UseRef = () => {
    const listRef = useRef(null);

    function scrollToIndex(index){
        const listNode = listRef.current;

        const imgNode = listNode.querySelectorAll('li > img')[index];
        imgNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }
  return (
    <div>
        <h1>UseRef: </h1>
        <nav 
        style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            margin: '20px 0'
        }}
        
        >
            <button onClick={() => scrollToIndex(0)}>
                Tom
            </button>
            <button onClick={() => scrollToIndex(1)}>
                Jerry
            </button>
            <button onClick={() => scrollToIndex(2)}>
                Spike
            </button>
        </nav>
        <ul ref={listRef} style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            listStyle: 'none',
            padding: 0,
            cursor: 'pointer'
        }}>
          <li>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/70/Aspark_Owl%2C_IAA_2017%2C_Frankfurt_%281Y7A3341%29.jpg"
              alt="Tom" width={300} height={200}
            />
          </li>
          <li>
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/front-3-4-aperto-1024x640-1573661407.jpg"
              alt="Maru" width={300} height={200}
            />
          </li>
          <li>
            <img
              src="https://www.topgear.com/sites/default/files/2023/06/Aspark%20Owl%20electric%20hyper%20car%20road%20drive.%20Monaco.%206%20June%202023%20%28Aspark%29%20_1005798-.jpg"
              alt="Jellylorum"  width={300} height={200}
            />
          </li>
        </ul>
    </div>
  )
}

export default UseRef