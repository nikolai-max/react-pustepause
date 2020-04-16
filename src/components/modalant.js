import React, { useState } from 'react';
import { Modal, Form, Input, Radio, notification } from 'antd';
import axios from 'axios';

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title="Registrer navn og epost"
      okText="Registrer"
      centered
      cancelText="Avbryt"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="name"
          label="Navn"
        >
          <Input />
        </Form.Item>
        <Form.Item 
        name="email" 
        label="Epost"
        rules={[
            {
              required: true,
              message: 'Du glemte å fylle ut epost!',
            },
          ]}
          >
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">Helsearbeider</Radio>
            <Radio value="private">Privatperson</Radio>
          </Radio.Group>
        </Form.Item>
        Ved å registrere ditt navn og epost samtykker du til at vi kan lagre dine opplysninger og kontakte deg i forbindelse med Pustepause.
      </Form>
    </Modal>
  );
};

const openNotificationWithIcon = type => {
  notification[type]({
    message: 'Gratulerer!',
    description:
      'Du er nå regisrert på ventelisten til Pustepause! Du vil bli oppdatert løpende når du har mulighet til å kjøpe appen.',
      placement: 'topLeft',
      duration: 16,
  });
};

const ModalAnt = () => {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    setVisible(false);

    axios
        .post("https://submit-form.com/J9lGUS2-jwdnEHGhwlRd1", {
          name: values.name,
          email: values.email,
          modifier: values.modifier
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(response) {
          console.error(response);
    });
    openNotificationWithIcon('success')
  };

  return (
    <div>
      <button className="app-main__cta" onClick={() => {
        setVisible(true);
      }}>
      Registrer deg
      </button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default ModalAnt;