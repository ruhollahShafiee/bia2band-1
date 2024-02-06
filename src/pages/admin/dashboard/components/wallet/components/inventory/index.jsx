import { WalletOutlined } from "@ant-design/icons"
import { Card } from "antd"

const Inventory = () => {
    return (
        <Card bordered>
            <div className="flex gap-2">
                <WalletOutlined style={{ fontSize: "large" }} />
                <h4>موجودی کیف پول:</h4>
                <h4 className="text-[#05f005f8]"> 50,500 </h4>
                <h5>تومان</h5>
            </div>
        </Card>
    );
};

export default Inventory;