import { Card, Upload } from "antd";
import Meta from "antd/es/card/Meta";
import VideoCards from "./VideoCards.jsx";

const title = "نمونه کارها";

const Portfo = () => {
    return (
        <>
            <Card
                borderd
            >
                <Meta
                    title={title}
                />
                <Card>
                    <VideoCards />
                </Card>
            </Card>
        </>

    )
}

export default Portfo;