import React, { useCallback, useState } from 'react'
import {Table, Checkbox, Button} from "antd"
import { noti, email, push } from "../icon"

interface NotificationProps {
    data: ItemSetting[];
}

interface ItemSetting {
    key: string;
    name: string;
    noti: boolean;
    email: boolean;
    push: boolean;
}

const Notification:React.FC<NotificationProps> = (props) => {
    const [data, setData] = useState(props.data);

    const columns = [
        {
            title: <p className='font-semibold my-auto text-[17px]  '>Options & Channels</p>,
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: <div className='flex flex-col items-center text-[16px]'><img src={noti} alt="notify" /> Notifications</div>,
            dataIndex: 'noti',
            key: 'noti',
            render: (check:boolean, record: ItemSetting) => <div className='w-full flex justify-center'><Checkbox onChange={()=>onChange(check, record.key, "noti")} checked={(check)} /></div>
        },
        {
            title: <div className='flex flex-col items-center text-[16px]'><img src={email} alt="email" />Email</div>,
            dataIndex: 'email',
            key: 'email',
            render: (check:boolean, record: ItemSetting) => <div className='w-full flex justify-center'><Checkbox onChange={()=>onChange(check, record.key, "email")} checked={(check)} /></div>
    
        },
        {
            title: <div className='flex flex-col items-center text-[16px]'><img src={push} alt="push" />Push</div>,
            dataIndex: 'push',
            key: 'push',
            render: (check:boolean, record: ItemSetting) => <div className='w-full flex justify-center'><Checkbox onChange={()=>onChange(check, record.key, "push")} checked={check} /></div>
    
        }
    ];

    const onChange = useCallback((check:boolean, key: string, dataIndex:any)=>{
        const newData = [...data];
        const itemIndex = newData?.findIndex((e)=>e.key === key);


        if(itemIndex !== -1){
            switch(dataIndex){
                case "noti": 
                    if(check === true) // uncheck all when noti is unchecked
                        newData[itemIndex] = {
                            ...newData[itemIndex], 
                            noti: false,
                            email: false,
                            push: false,
                        }
                    break;
                case "email": 
                    if (check === false) // check noti when email is checked
                        newData[itemIndex] = {
                            ...newData[itemIndex], 
                            noti: true,
                            email: true,
                        }
                    else 
                        newData[itemIndex] = {
                            ...newData[itemIndex], 
                            email: false,
                        }
                    break;
                case "push":
                    if(check === false) // check noti when push is checked
                        newData[itemIndex] = {
                            ...newData[itemIndex], 
                            noti: true,
                            push: true,
                        }
                    else
                        newData[itemIndex] = {
                            ...newData[itemIndex], 
                            push: false,
                        }
                    break;
                default: break;
            }
            setData(newData);
        }
    },[data])

  return (
    <div className='lg:!w-[800px] mt-12 mx-auto'>
        <div className='text-left mb-6'>
            <h1 className='font-black text-[23px] mb-0'>Notification</h1>
            <p>Configure how you want to be noticed from Allby AI</p>
            </div>
        <Table className="border border-black/10 mt-4 rounded-md" pagination={{hideOnSinglePage: true}} columns={columns} dataSource={data} />
        <div className='flex gap-2 mt-6'>
            <Button className='!rounded-2xl !font-medium !px-10' type='primary'>Save</Button>
            <Button className='!rounded-2xl !font-medium !px-10'>Reset</Button>
        </div>
    </div>
  )
}

export default Notification