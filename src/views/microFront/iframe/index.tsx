import React from 'react';
import {Card} from 'antd'

const MicroFont: React.FC = () => {

    return (
        <>
            <Card>
                <h2>这是父页面</h2>
            </Card>

            <Card>
                <h2>这是子页面</h2>
            </Card>
        </>
    )
}


export default MicroFont;
