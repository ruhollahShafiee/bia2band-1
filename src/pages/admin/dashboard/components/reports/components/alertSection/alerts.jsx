import { BellOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { Alert, Space } from "antd";

const Alerts = () => {
  return (
    <div className="mb-2">
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        <Alert className="text-xs md:text-sm" style={{ background: "white", borderColor: "white", boxShadow: "2px 2px 8px #C0C0C0" }}
          message={
            <Space>
              <BellOutlined style={{ fontSize: 20 }} />
              شما 80 درصد از پروفایل خود را تکمیل کرده اید.
              <span style={{ color: "#1e90ff" }}><a href="#">بیشتر ...</a></span>
            </Space>
          }
          closeIcon={<CloseCircleOutlined style={{ fontSize: 20 }} />}
        />
      </Space>
    </div>
  );
};

export default Alerts;
