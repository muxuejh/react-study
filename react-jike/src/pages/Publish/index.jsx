import { Card, Breadcrumb, Form, Button, Radio, Input, Upload, Space, Select, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.scss'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import React from 'react'
import { addArticleApi, getChannelApi } from '@/apis/article'

const { Option } = Select

export default function Publish() {
  const [channelList, setChannelList] = React.useState([])
  React.useEffect(() => {
    getChannelList()
  }, [])
  const getChannelList = async () => {
    const res = await getChannelApi()
    setChannelList(res.data.channels)
  }

  const [imageType, setImageType] = React.useState(0)
  const onTypeChange = (e) => {
    setImageType(e.target.value)
  }

  const [imageList, setImageList] = React.useState([])
  const onUploadChange = (values) => {
    setImageList(values.fileList)
  }

  const onFinish = async (values) => {
    if (imageType !== imageList.length) return message.warning('图片类型和图片数量不匹配')
    const { title, channel_id, content } = values
    const reqData = {
      title,
      content,
      channel_id,
      cover: {
        type: imageType,
        images: imageList.map((item) => item.response.data.url),
      },
    }
    const res = await addArticleApi(reqData)
    console.log('res', res)
  }

  return (
    <div className='publish'>
      <Card title={<Breadcrumb items={[{ title: <Link to={'/'}>首页</Link> }, { title: '发布文章' }]} />}>
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} initialValues={{ type: 0 }} onFinish={onFinish}>
          <Form.Item label='标题' name='title' rules={[{ required: true, message: '请输入文章标题' }]}>
            <Input placeholder='请输入文章标题' style={{ width: 400 }} />
          </Form.Item>
          <Form.Item label='频道' name='channel_id' rules={[{ required: true, message: '请选择文章频道' }]}>
            <Select placeholder='请选择文章频道' style={{ width: 400 }}>
              {channelList.map((item) => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label='封面'>
            <Form.Item name='type'>
              <Radio.Group onChange={onTypeChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            {imageType > 0 && (
              <Upload
                listType='picture-card'
                showUploadList
                action={'http://geek.itheima.net/v1_0/upload'}
                name='image'
                onChange={onUploadChange}
                maxCount={imageType}
                multiple={imageType > 1}
              >
                <div style={{ marginTop: 8 }}>
                  <PlusOutlined />
                </div>
              </Upload>
            )}
          </Form.Item>
          <Form.Item label='内容' name='content' rules={[{ required: true, message: '请输入文章内容' }]}>
            <ReactQuill className='publish-quill' theme='snow' placeholder='请输入文章内容' />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size='large' type='primary' htmlType='submit'>
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
