import { Card, Typography } from "antd";
import { useState } from "react";
import Instrument1 from "./instrument1";

const { Title } = Typography;
const { Meta } = Card;

const title = "مهارت های من";

const tabList = [
    {
        key: 'instrument1',
        tab: 'ساز اصلی',
    },
    {
        key: 'instrument2',
        tab: 'ساز دوم',
    },
    {
        key: 'instrument3',
        tab: 'ساز سوم',
    },
];

const contentList = {
    instrument1: <Instrument1/>,
    instrument2: <p>app content</p>,
    instrument3: <p>project content</p>,
};

const MySkills = () => {
    const [activeTabKey1, setActiveTabKey1] = useState('instrument1');

    const onTab1Change = (key) => {
        setActiveTabKey1(key);
    }
    return (
        <>
            <Card
                style={{
                    width: '100%',
                }}
                title={title}
                tabList={tabList}
                activeTabKey={activeTabKey1}
                onTabChange={onTab1Change}
            >
                {contentList[activeTabKey1]}
            </Card>
        </>
    );
};

export default MySkills;