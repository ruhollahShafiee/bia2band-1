import { Table } from "antd";

const columns = [
    {
        title: 'شماره فاکتور',
        dataIndex: 'id',
        key: 'id',
        align: 'center',
    },
    {
        title: 'عنوان',
        dataIndex: 'title',
        key: 'title',
        align: 'center',
    },
    {
        title: 'وضعیت',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
    },
    {
        title: 'عملیات',
        dataIndex: 'operation',
        key: 'operation',
        align: 'center',
    },
    {
        title: 'نوع',
        dataIndex: 'kind',
        key: 'kind',
        align: 'center',
    },
];

const data = [
    {
        key: '1',
        id: '#1231548',
        title: 'نت موسیقی گل گلخونه من',
        status: 'پرداخت شده',
        operation: 'دانلود',
        kind: 'محصولات فیزیکی',
    },
    {
        key: '2',
        id: '#9414555',
        title: 'کتاب آموزشی کاخن محمدرضا رئیسی',
        status: 'پرداخت ناموفق',
        operation: 'مشاهده',
        kind: 'کالای دانلودی',
    },
];

const PrevTransactions = () => {
    return (
        <>
            <p className="px-4">تراکنش های قبلی</p>
            <Table columns={columns} dataSource={data}
                scroll={{ x: "100%" }}
                bordered
                size="middle"
                pagination={{ total: [160], position: ["bottomCenter"], showSizeChanger: false }}
            />
        </>
    );
};

export default PrevTransactions;