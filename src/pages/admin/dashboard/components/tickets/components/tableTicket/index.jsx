import { Table } from "antd";

const columns = [
    {
        title: 'شماره تیکت',
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
        title:'وضعیت',
        dataIndex: 'status',
        key: 'status',
        align: 'center',
    },
    {
        title:'عملیات',
        dataIndex: 'operation',
        key: 'operation',
        align: 'center',
    },
    {
        title: 'واحد پاسخگو',
        dataIndex: 'responsive',
        key: 'responsive',
        align: 'center',
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
        bordered 
        size="middle"
        pagination={{total:[160], position:["bottomCenter"], showSizeChanger:false}}
        />
       
    );
};

export default TableTicket;