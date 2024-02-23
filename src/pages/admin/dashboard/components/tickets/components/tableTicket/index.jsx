import { Table } from "antd";

const columns = [
    {
        title: 'شماره تیکت',
        dataIndex: 'id',
        key: 'id',
        align: 'center',
        width: 300,
    },
    {
        title: 'عنوان',
        dataIndex: 'title',
        key: 'title',
        align: 'center',
        width: 300,

    },
    {
        title:'وضعیت',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
        width: 300,

    },
    {
        title:'عملیات',
        dataIndex: 'operation',
        key: 'operation',
        align: 'center',
        width: 300,

    },
    {
        title: 'واحد پاسخگو',
        dataIndex: 'responsive',
        key: 'responsive',
        align: 'center',
        width: 300,

    },
];

const data = [
    {
        key: '1',
        id:'#1231548',
        title: 'عدم مشاهده آمار',
        status: 'در دست بررسی',
        operation: 'مشاهده',
        responsive: 'پشتیبان فنی',
    },
    {
        key: '2',
        id: '#9414555',
        title: 'فاکتورهای خراب',
        status: 'بسته شده',
        operation: 'مشاهده',
        responsive: 'امور مالی',
    },
];

const TableTicket = () => {
    return (
        <Table columns={columns} dataSource={data} 
        scroll={{x:"100%"}} 
        bordered 
        size="middle"
        pagination={{total:[160], position:["bottomCenter"], showSizeChanger:false}}
        />
       
    );
};

export default TableTicket;