import { Avatar, Card, Typography } from "antd";
import img from "../test.jpg"
import { YoutubeFilled, WhatsAppOutlined, InstagramFilled, TwitterOutlined, FacebookOutlined } from "@ant-design/icons";
import SectionProfile from "./sectionProfile";


const { Title } = Typography;
const { Meta } = Card;

const title = "سامان حشمتی";

const MyProfile = () => {
    return (
        <Card cover={<img src={img} className="h-36" />}
            bordered>
            <Meta avatar={[<Avatar src={img} className="-mt-16 size-24 mb-7" />,

            ]}
                title={
                    <Title level={3} pt-7>
                        {title}
                    </Title>
                }
            />
            <div className="-mt-20 flex justify-end gap-2">
                <YoutubeFilled />
                <WhatsAppOutlined />
                <InstagramFilled />
                <TwitterOutlined />
                <FacebookOutlined />
            </div>
            <SectionProfile />
        </Card>
    )
}

export default MyProfile;