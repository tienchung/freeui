import { Modal, Form, Input, Divider, Radio, RadioChangeEvent, Switch, Button, Checkbox } from 'antd';
import React, { useCallback, useMemo } from 'react';
import { checked } from "../icon"

interface Props {
  isOpen: boolean;
  setClose: () => void;
}

const annotate = [
  {
    label: "New",
    value: "New",
  },
  {
    label: "Labeling",
    value: "Labeling",
  },
  {
    label: "Reviewing",
    value: "Reviewing",
  },
  {
    label: "Completed",
    value: "Completed",
  }
];

const ModalCreateNew:React.FC<Props> = ({isOpen, setClose}) => {
  const [form] = Form.useForm();

  const radio = Form.useWatch('format', form);
  const checkedAnotate = Form.useWatch('annotated', form);

  const onChangeRadio = useCallback(({ target: { value } }: RadioChangeEvent) => {
    form.setFieldValue('format', value)
  },[form]);

  const valueRadio = useMemo(()=>{
    return [
      { 
        label: 
          <div className="relative w-[82px] flex justify-center h-full">
            CSV {radio === "CSV" && <img className='absolute right-0 top-0' src={checked} alt="checked" />}
          </div>, 
        value: 'CSV' 
      },
      { 
        label: 
          <div className="relative w-[82px] flex justify-center h-full">
            YOLO {radio === "YOLO" && <img className='absolute right-0 top-0' src={checked} alt="checked" />}
          </div>, 
        value: 'YOLO' 
      },
      { 
        label: 
          <div className="relative w-[82px] flex justify-center h-full">
            JSON {radio === "JSON" && <img className='absolute right-0 top-0' src={checked} alt="checked" />}
          </div>, 
        value: 'JSON' 
      }
    ];
  },[radio]);

  const onChangeAnotate = useCallback((checked: boolean)=>{
    if (checked){
        form.setFieldValue("annotate_data", ["New", "Labeling", "Reviewing", "Completed"])
    }

  },[form]);

  const onChangeCheckbox = useCallback((checkedValue: Array<string | number | boolean>)=>{
    if (checkedValue.length === 4){
      form.setFieldValue("annotated", true)
    }

  },[form])

  const onFinish = (value: {
    version_name: string
    format: string;
    annotate_data: [],
    archived: boolean,
    deleted: boolean,
    discussion: boolean,
    annotated: boolean
  })=>{
    const result ={ 
      name: value.version_name,
      format: value.format,
      annotate: value.annotated,
      annotate_data: value.annotate_data,
      archived: value.archived,
      deleted: value.deleted,
      discussion: value.discussion,
    };
    console.log(result)
  }

  return (
    <Modal
      open={isOpen}
      onCancel={setClose}
      className="custom-modal-create min-h-[805px] min-w-[1182px]"
      closable={false}
      footer={<div className="">
      <Button onClick={setClose}>Back</Button>
      <Button form='form' htmlType="submit" type="primary">Create</Button>

    </div>}
    >
      <h1 className="text-[20px] font-medium mb-14">Create New Version</h1>
      <Form
        requiredMark={false}
        id='form'
        onFinish={onFinish}
        form={form}
        layout="vertical"
        className="!px-10"
        initialValues={{
          version_name: "",
          format: "CSV",
          annotated: false,
          annotate_data:[],
          archived: true,
          deleted: false,
          discussion: false
        }}
      >
        <Form.Item 
          rules={[
            {
              required: true,
              message: 'Please input',
              
            },
            {
              validator: (_, value: string)=>{
                if (value !== value.trim()){
                  return Promise.reject(new Error('The name cannot contain spaces!'));
                } else {
                  return Promise.resolve()
                }
              }
            }
          ]}
          
          name={"version_name"}   
          label={"Version Name"}
        >
          <Input className="box-shadow-input" placeholder="Enter name here..."></Input>
        </Form.Item>

        <Divider/>

        <Form.Item 
          rules={[
            {
              required: true,
              message: 'Please select',
            },
          ]} 
          name={"format"} label={"Format"}
        >
          <Radio.Group
            options={valueRadio}
            onChange={onChangeRadio}
            optionType="button"
            buttonStyle="solid"
            className='w-full'
          />
        </Form.Item>

        <Divider/>

        <h1 className="text-[16px] text-[#4d5e80] font-medium">Advance</h1>

        <div className="flex gap-32">
          <div className="flex flex-col gap-1 items-start ml-4">
            <Form.Item wrapperCol={{ span: 24 }} labelCol={{ span: 24 }} className="custom-switch !mb-0" name={"annotated"} label="Anotated data">
              <Switch checked={checkedAnotate} onChange={onChangeAnotate} className="mb-[8px]" />
            </Form.Item>
            <Form.Item name={"annotate_data"}>
              <Checkbox.Group onChange={onChangeCheckbox} className="flex flex-col" options={annotate}/>
            </Form.Item>
          </div>

          <div className="flex flex-col gap-[10px]">
            <Form.Item wrapperCol={{ span: 24 }} labelCol={{ span: 24 }} className="custom-switch !mb-0" name={"deleted"} label="Deleted data">
              <Switch className="mb-[8px]" />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }} labelCol={{ span: 24 }} className="custom-switch !mb-0" name={"archived"} label="Archived data">
              <Switch className="mb-[8px]" />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }} labelCol={{ span: 24 }} className="custom-switch !mb-0" name={"discussion"} label="Discussion history">
              <Switch className="mb-[8px]" />
            </Form.Item>
          </div>
        </div>
        
      </Form>
    </Modal>
  )
}

export default ModalCreateNew